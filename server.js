const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 3000;

// User data storage
const USER_DATA_FILE = path.join(__dirname, 'user_data.json');

// Initialize user data file if it doesn't exist
if (!fs.existsSync(USER_DATA_FILE)) {
    fs.writeFileSync(USER_DATA_FILE, JSON.stringify([], null, 2));
}

// Function to save user data
function saveUserData(userData) {
    try {
        let existingData = [];
        if (fs.existsSync(USER_DATA_FILE)) {
            const fileContent = fs.readFileSync(USER_DATA_FILE, 'utf8');
            existingData = JSON.parse(fileContent);
        }

        existingData.push(userData);
        fs.writeFileSync(USER_DATA_FILE, JSON.stringify(existingData, null, 2));
        console.log(`✅ User data saved: ${userData.name} - ${userData.entryTimeFormatted}`);
        return true;
    } catch (error) {
        console.error('❌ Error saving user data:', error);
        return false;
    }
}

// Function to get all user data
function getAllUserData() {
    try {
        if (fs.existsSync(USER_DATA_FILE)) {
            const fileContent = fs.readFileSync(USER_DATA_FILE, 'utf8');
            return JSON.parse(fileContent);
        }
        return [];
    } catch (error) {
        console.error('❌ Error reading user data:', error);
        return [];
    }
}

// Function to export user data as CSV
function exportUserDataAsCSV() {
    try {
        const userData = getAllUserData();
        if (userData.length === 0) {
            return 'No user data available';
        }

        const headers = ['Name', 'Exam Date', 'Entry Time', 'Session ID', 'Platform', 'Language', 'User Agent'];
        const csvContent = [
            headers.join(','),
            ...userData.map(entry => [
                `"${entry.name || ''}"`,
                `"${entry.examDate || ''}"`,
                `"${entry.entryTimeFormatted || ''}"`,
                `"${entry.sessionId || ''}"`,
                `"${entry.platform || ''}"`,
                `"${entry.language || ''}"`,
                `"${(entry.userAgent || '').replace(/"/g, '""')}"`
            ].join(','))
        ].join('\n');

        return csvContent;
    } catch (error) {
        console.error('❌ Error exporting CSV:', error);
        return 'Error exporting data';
    }
}

// MIME types for different file extensions
const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.pdf': 'application/pdf'
};

// Handle API requests
function handleAPIRequest(req, res, pathname) {
    // Set JSON response headers
    res.setHeader('Content-Type', 'application/json');

    if (pathname === '/api/log-user' && req.method === 'POST') {
        // Handle user data logging
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            try {
                const userData = JSON.parse(body);
                const success = saveUserData(userData);

                if (success) {
                    res.writeHead(200);
                    res.end(JSON.stringify({
                        success: true,
                        message: 'User data logged successfully',
                        timestamp: new Date().toISOString()
                    }));
                } else {
                    res.writeHead(500);
                    res.end(JSON.stringify({
                        success: false,
                        message: 'Failed to save user data'
                    }));
                }
            } catch (error) {
                res.writeHead(400);
                res.end(JSON.stringify({
                    success: false,
                    message: 'Invalid JSON data'
                }));
            }
        });

    } else if (pathname === '/api/users' && req.method === 'GET') {
        // Get all user data
        const userData = getAllUserData();
        res.writeHead(200);
        res.end(JSON.stringify({
            success: true,
            data: userData,
            count: userData.length
        }));

    } else if (pathname === '/api/users/export' && req.method === 'GET') {
        // Export user data as CSV
        const csvContent = exportUserDataAsCSV();
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', `attachment; filename="bitsat_user_data_${new Date().toISOString().split('T')[0]}.csv"`);
        res.writeHead(200);
        res.end(csvContent);

    } else if (pathname === '/api/stats' && req.method === 'GET') {
        // Get user statistics
        const userData = getAllUserData();
        const stats = {
            totalEntries: userData.length,
            uniqueUsers: new Set(userData.map(u => u.name?.toLowerCase())).size,
            examDates: {},
            platforms: {},
            languages: {},
            recentEntries: userData.slice(-10),
            entriesLast24h: userData.filter(u => {
                const entryTime = new Date(u.entryTime);
                const now = new Date();
                return (now - entryTime) < 24 * 60 * 60 * 1000;
            }).length
        };

        // Count distributions
        userData.forEach(entry => {
            if (entry.examDate) {
                stats.examDates[entry.examDate] = (stats.examDates[entry.examDate] || 0) + 1;
            }
            if (entry.platform) {
                stats.platforms[entry.platform] = (stats.platforms[entry.platform] || 0) + 1;
            }
            if (entry.language) {
                stats.languages[entry.language] = (stats.languages[entry.language] || 0) + 1;
            }
        });

        res.writeHead(200);
        res.end(JSON.stringify({
            success: true,
            stats: stats
        }));

    } else {
        // API endpoint not found
        res.writeHead(404);
        res.end(JSON.stringify({
            success: false,
            message: 'API endpoint not found'
        }));
    }
}

const server = http.createServer((req, res) => {
    // Add CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    const parsedUrl = url.parse(req.url);
    let pathname = parsedUrl.pathname;

    // Log the request
    console.log(`📄 Request: ${req.method} ${pathname}`);

    // Handle API endpoints
    if (pathname.startsWith('/api/')) {
        handleAPIRequest(req, res, pathname);
        return;
    }

    // Default to index.html for root path
    if (pathname === '/') {
        pathname = '/index.html';
    }

    const filePath = path.join(__dirname, pathname);
    const ext = path.extname(filePath);
    const contentType = mimeTypes[ext] || 'text/plain';

    console.log(`📁 Serving: ${filePath} (${contentType})`);

    // Check if file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            // File not found, serve index.html for SPA routing
            const indexPath = path.join(__dirname, 'index.html');
            fs.readFile(indexPath, (err, content) => {
                if (err) {
                    res.writeHead(500);
                    res.end('Server Error');
                    return;
                }
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            });
            return;
        }

        // Serve the requested file
        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end('Server Error');
                return;
            }

            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        });
    });
});

server.listen(PORT, () => {
    console.log(`🚀 BITSAT Prep Hub server is running!`);
    console.log(`📱 Local: http://localhost:${PORT}`);
    console.log(`🌐 Network: http://192.168.1.x:${PORT} (replace x with your IP)`);
    console.log(`\n✨ Your website should now load with all CSS and animations!`);
    console.log(`🎯 Open http://localhost:${PORT} in your browser`);
    console.log(`\n🛑 Press Ctrl+C to stop the server`);
});
