// Chemistry-specific JavaScript for reactions and quiz

// Current reaction section being displayed
let currentReactionSection = 'main';

// Current organic quiz state
let currentOrganicQuestion = 0;
let organicQuizScore = 0;
let organicQuizAnswered = false;
let organicQuestionTimer = null;
let organicTotalTimer = null;
let organicQuestionTimeLeft = 30; // 30 seconds per question
let organicTotalTimeLeft = 900; // 15 minutes total (30 seconds × 30 questions)

// Show chemistry-specific theory tab
function showTheoryTab(tab) {
    const contentTab = document.getElementById('contentTab');
    const reactionsTab = document.getElementById('reactionsTab');
    const ncertTablesTab = document.getElementById('ncertTablesTab');
    const biomoleculesTab = document.getElementById('biomoleculesTab');
    const pdfTab = document.getElementById('pdfTab');
    const theoryContent = document.getElementById('theoryContent');
    const theoryReactions = document.getElementById('theoryReactions');
    const theoryNcertTables = document.getElementById('theoryNcertTables');
    const theoryBiomolecules = document.getElementById('theoryBiomolecules');
    const theoryOrganicQuiz = document.getElementById('theoryOrganicQuiz');
    const theoryPdfViewer = document.getElementById('theoryPdfViewer');

    // Check if all required elements exist
    if (!contentTab || !reactionsTab || !ncertTablesTab || !pdfTab ||
        !theoryContent || !theoryReactions || !theoryNcertTables || !theoryOrganicQuiz || !theoryPdfViewer) {
        console.error('Some required elements not found!');
        return;
    }

    // Get quiz tabs
    const organicQuizTab = document.getElementById('organicQuizTab');
    const inorganicQuizTab = document.getElementById('inorganicQuizTab');

    // Remove active class from all tabs
    contentTab.classList.remove('active');
    reactionsTab.classList.remove('active');
    ncertTablesTab.classList.remove('active');
    if (biomoleculesTab) biomoleculesTab.classList.remove('active');
    if (organicQuizTab) organicQuizTab.classList.remove('active');
    if (inorganicQuizTab) inorganicQuizTab.classList.remove('active');
    pdfTab.classList.remove('active');

    if (tab === 'content') {
        // Show content tab
        contentTab.classList.add('active');
        theoryContent.style.display = 'block';
        theoryReactions.style.display = 'none';
        theoryNcertTables.style.display = 'none';
        if (theoryBiomolecules) theoryBiomolecules.style.display = 'none';
        theoryOrganicQuiz.style.display = 'none';
        const theoryInorganicQuiz = document.getElementById('theoryInorganicQuiz');
        if (theoryInorganicQuiz) theoryInorganicQuiz.style.display = 'none';
        theoryPdfViewer.style.display = 'none';
    } else if (tab === 'reactions') {
        // Show reactions tab
        reactionsTab.classList.add('active');
        theoryContent.style.display = 'none';
        theoryReactions.style.display = 'block';
        theoryNcertTables.style.display = 'none';
        if (theoryBiomolecules) theoryBiomolecules.style.display = 'none';
        theoryOrganicQuiz.style.display = 'none';
        const theoryInorganicQuiz = document.getElementById('theoryInorganicQuiz');
        if (theoryInorganicQuiz) theoryInorganicQuiz.style.display = 'none';
        theoryPdfViewer.style.display = 'none';

        // Load reactions content
        loadOrganicReactions();
    } else if (tab === 'ncertTables') {
        // Show NCERT tables tab
        ncertTablesTab.classList.add('active');
        theoryContent.style.display = 'none';
        theoryReactions.style.display = 'none';
        theoryNcertTables.style.display = 'block';
        if (theoryBiomolecules) theoryBiomolecules.style.display = 'none';
        theoryOrganicQuiz.style.display = 'none';
        const theoryInorganicQuiz = document.getElementById('theoryInorganicQuiz');
        if (theoryInorganicQuiz) theoryInorganicQuiz.style.display = 'none';
        theoryPdfViewer.style.display = 'none';

        // Load NCERT tables content if available
        if (window.loadNCERTTablesContent) {
            window.loadNCERTTablesContent();
        }
    } else if (tab === 'biomolecules') {
        // Show biomolecules tab
        if (biomoleculesTab) biomoleculesTab.classList.add('active');
        theoryContent.style.display = 'none';
        theoryReactions.style.display = 'none';
        theoryNcertTables.style.display = 'none';
        if (theoryBiomolecules) theoryBiomolecules.style.display = 'block';
        theoryOrganicQuiz.style.display = 'none';
        const theoryInorganicQuiz = document.getElementById('theoryInorganicQuiz');
        if (theoryInorganicQuiz) theoryInorganicQuiz.style.display = 'none';
        theoryPdfViewer.style.display = 'none';

        // Load biomolecules content
        loadBiomoleculesContent();
    } else if (tab === 'organicQuiz') {
        // Show organic quiz tab
        if (organicQuizTab) organicQuizTab.classList.add('active');
        theoryContent.style.display = 'none';
        theoryReactions.style.display = 'none';
        theoryNcertTables.style.display = 'none';
        if (theoryBiomolecules) theoryBiomolecules.style.display = 'none';
        theoryOrganicQuiz.style.display = 'block';
        const theoryInorganicQuiz = document.getElementById('theoryInorganicQuiz');
        if (theoryInorganicQuiz) theoryInorganicQuiz.style.display = 'none';
        theoryPdfViewer.style.display = 'none';

        // Load organic quiz content
        loadOrganicQuiz();
    } else if (tab === 'inorganicQuiz') {
        // Show inorganic quiz tab
        const inorganicQuizTab = document.getElementById('inorganicQuizTab');
        const theoryInorganicQuiz = document.getElementById('theoryInorganicQuiz');

        if (inorganicQuizTab) inorganicQuizTab.classList.add('active');
        theoryContent.style.display = 'none';
        theoryReactions.style.display = 'none';
        theoryNcertTables.style.display = 'none';
        if (theoryBiomolecules) theoryBiomolecules.style.display = 'none';
        theoryOrganicQuiz.style.display = 'none';
        if (theoryInorganicQuiz) theoryInorganicQuiz.style.display = 'block';
        theoryPdfViewer.style.display = 'none';

        // Load inorganic quiz content
        loadInorganicQuiz();
    } else if (tab === 'pdf') {
        // Show PDF tab
        pdfTab.classList.add('active');
        theoryContent.style.display = 'none';
        theoryReactions.style.display = 'none';
        theoryNcertTables.style.display = 'none';
        if (theoryBiomolecules) theoryBiomolecules.style.display = 'none';
        theoryOrganicQuiz.style.display = 'none';
        theoryOrganicQuiz.style.display = 'none';
        const theoryInorganicQuiz = document.getElementById('theoryInorganicQuiz');
        if (theoryInorganicQuiz) theoryInorganicQuiz.style.display = 'none';
        theoryPdfViewer.style.display = 'block';
    }
}

// Load organic reactions content
function loadOrganicReactions() {
    const theoryReactions = document.getElementById('theoryReactions');
    
    theoryReactions.innerHTML = `
        <div class="reactions-container">
            <h2 class="reactions-title">
                <i class="fas fa-flask"></i> Organic Chemistry Reactions & Conversions
            </h2>
            
            <!-- Navigation Buttons -->
            <div class="reactions-nav">
                <button class="reaction-nav-btn active" onclick="showReactionSection('main')" id="mainNavBtn">
                    <i class="fas fa-home"></i> Overview
                </button>
                <button class="reaction-nav-btn" onclick="showReactionSection('reagents')" id="reagentsNavBtn">
                    <i class="fas fa-vial"></i> Organic Reagents
                </button>
                <button class="reaction-nav-btn" onclick="showReactionSection('named')" id="namedNavBtn">
                    <i class="fas fa-atom"></i> Named Reactions
                </button>
                <button class="reaction-nav-btn" onclick="showReactionSection('conversions')" id="conversionsNavBtn">
                    <i class="fas fa-exchange-alt"></i> Important Conversions
                </button>
                <button class="reaction-nav-btn" onclick="showReactionSection('allenCheatSheet')" id="allenCheatSheetNavBtn">
                    <i class="fas fa-file-image"></i> Allen Cheat Sheet
                </button>
            </div>
            
            <!-- Content Area -->
            <div class="reactions-content" id="reactionsContent">
                <!-- Content will be loaded here based on navigation -->
            </div>
        </div>
    `;
    
    // Load main overview by default
    showReactionSection('main');
}

// Show specific reaction section
function showReactionSection(section) {
    currentReactionSection = section;
    const reactionsContent = document.getElementById('reactionsContent');

    // Update navigation buttons
    document.querySelectorAll('.reaction-nav-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(section + 'NavBtn').classList.add('active');

    if (section === 'main') {
        reactionsContent.innerHTML = getMainOverview();
    } else if (section === 'reagents') {
        reactionsContent.innerHTML = getOrganicReagents();
    } else if (section === 'named') {
        reactionsContent.innerHTML = getNamedReactions();
    } else if (section === 'conversions') {
        reactionsContent.innerHTML = getImportantConversions();
    } else if (section === 'allenCheatSheet') {
        reactionsContent.innerHTML = getAllenOrganicCheatSheet();
    }
}

// Get main overview content
function getMainOverview() {
    return `
        <div class="overview-section">
            <div class="overview-cards">
                <div class="overview-card" onclick="showReactionSection('reagents')">
                    <div class="overview-icon">
                        <i class="fas fa-vial"></i>
                    </div>
                    <h3>Organic Reagents</h3>
                    <p>16 Essential reagents with their uses and mechanisms</p>
                    <div class="overview-count">16 Reagents</div>
                </div>

                <div class="overview-card" onclick="showReactionSection('named')">
                    <div class="overview-icon">
                        <i class="fas fa-atom"></i>
                    </div>
                    <h3>Named Reactions</h3>
                    <p>Important named reactions with detailed mechanisms</p>
                    <div class="overview-count">26+ Reactions</div>
                </div>

                <div class="overview-card" onclick="showReactionSection('conversions')">
                    <div class="overview-icon">
                        <i class="fas fa-exchange-alt"></i>
                    </div>
                    <h3>Important Conversions</h3>
                    <p>Key organic transformations, synthetic pathways, rearrangements, and modern coupling reactions</p>
                    <div class="overview-count">23+ Conversions</div>
                </div>

                <div class="overview-card" onclick="showReactionSection('allenCheatSheet')">
                    <div class="overview-icon">
                        <i class="fas fa-file-image"></i>
                    </div>
                    <h3>Allen Organic Cheat Sheet</h3>
                    <p>Comprehensive visual reference charts for organic chemistry</p>
                    <div class="overview-count">2 Charts</div>
                </div>
            </div>
            
            <div class="quick-reference">
                <h3><i class="fas fa-star"></i> Quick Reference</h3>
                <div class="quick-ref-grid">
                    <div class="quick-ref-item">
                        <strong>Reduction Reactions:</strong> Clemmensen, Wolff-Kishner, Rosenmund
                    </div>
                    <div class="quick-ref-item">
                        <strong>Oxidation Reactions:</strong> Baeyer-Villiger, Jones, Swern
                    </div>
                    <div class="quick-ref-item">
                        <strong>Substitution:</strong> Friedel-Crafts, Sandmeyer, Gattermann
                    </div>
                    <div class="quick-ref-item">
                        <strong>Coupling Reactions:</strong> Wurtz, Fittig, Ullmann
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Initialize chemistry page
document.addEventListener('DOMContentLoaded', function() {
    // Override the global showTheoryTab function with our chemistry-specific version
    window.showTheoryTab = showTheoryTab;

    // Show content tab by default with a small delay to ensure DOM is ready
    setTimeout(() => {
        showTheoryTab('content');
    }, 100);


});

// Get organic reagents content
function getOrganicReagents() {
    return `
        <div class="reaction-section">
            <h3 class="section-title">
                <i class="fas fa-vial"></i> Organic Reagents (16 Essential Reagents)
            </h3>

            <div class="reagents-grid">
                <div class="reagent-card">
                    <h4>1. Alcoholic KOH</h4>
                    <p><strong>Use:</strong> R-X → Alkene (β-Elimination)</p>
                    <p><strong>Mechanism:</strong> E2 elimination - concerted removal of H and X</p>
                    <p><strong>Selectivity:</strong> Follows Zaitsev's rule (more substituted alkene)</p>
                    <p><strong>Conditions:</strong> Heat (80-100°C), ethanol solvent</p>
                    <p><strong>Example:</strong> 2-Bromobutane → 2-Butene (major) + 1-Butene (minor)</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> C₂H₅Br + KOH(alc) → C₂H₄ + KBr + H₂O</p>
                        <p><strong>Stereochemistry:</strong> Anti-periplanar arrangement required</p>
                    </div>
                </div>

                <div class="reagent-card">
                    <h4>2. Aluminium Ethoxide</h4>
                    <p><strong>Use:</strong> RCH₂O → R-CHO-CH₂R (Tischenko Reaction)</p>
                    <p><strong>Note:</strong> (Aldehyde) → (Ester)</p>
                    <p><strong>Mechanism:</strong> Disproportionation of aldehydes</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> 2RCHO → RCOOR + RCH₂OH</p>
                    </div>
                </div>

                <div class="reagent-card">
                    <h4>3. Aqueous KOH/NaOH</h4>
                    <p><strong>Use:</strong> R-X → ROH</p>
                    <p><strong>Note:</strong> For nucleophilic substitution reaction also used for Cannizzaro Reaction with aldehyde</p>
                    <p><strong>Mechanism:</strong> SN2 mechanism for primary halides</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> RX + OH⁻ → ROH + X⁻</p>
                    </div>
                </div>

                <div class="reagent-card">
                    <h4>4. Baeyer's Reagent</h4>
                    <p><strong>Use:</strong> Alkaline cold dilute (KMnO₄)</p>
                    <p><strong>Note:</strong> RCH=CHR → RCH(OH)-CH(OH)R (Syn)</p>
                    <p><strong>Test:</strong> Used to detect unsaturation - purple color disappears</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> R-CH=CH-R + [O] + H₂O → R-CH(OH)-CH(OH)-R</p>
                    </div>
                </div>

                <div class="reagent-card">
                    <h4>5. Benedict's solution</h4>
                    <p><strong>Use:</strong> Used to detect aldehyde group RCHO → RCO₂⁻</p>
                    <p><strong>Note:</strong> Ketone gives -ve test</p>
                    <p><strong>Observation:</strong> Blue solution turns brick red precipitate</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> RCHO + 2Cu²⁺ + 5OH⁻ → RCOO⁻ + Cu₂O↓ + 3H₂O</p>
                    </div>
                </div>

                <div class="reagent-card">
                    <h4>6. CuCl₂ + NH₄OH</h4>
                    <p><strong>Use:</strong> Used to Detect Terminal Alkyne</p>
                    <p><strong>Note:</strong> Red Precipitate observed</p>
                    <p><strong>Mechanism:</strong> Formation of copper acetylide</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> RC≡CH + CuCl → RC≡CCu↓ + HCl</p>
                    </div>
                </div>

                <div class="reagent-card">
                    <h4>7. CrO₃Cl₂ (Etard Reagent)</h4>
                    <p><strong>Use:</strong> Etard reaction - Oxidation of methyl group to aldehyde</p>
                    <p><strong>Specificity:</strong> Selective oxidation without affecting benzene ring</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> C₆H₅CH₃ + CrO₂Cl₂ → C₆H₅CHO + CrOCl₂ + HCl</p>
                    </div>
                </div>

                <div class="reagent-card">
                    <h4>8. CrO₃ (Jones Reagent)</h4>
                    <p><strong>Use:</strong> (i) R₂CHOH → R₂CO (ii) R₃COH → no reaction</p>
                    <p><strong>Note:</strong> Primary alcohols → Carboxylic acids, Secondary → Ketones</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> RCH₂OH + [O] → RCOOH</p>
                    </div>
                </div>

                <div class="reagent-card">
                    <h4>9. Grignard Reagent (RMgX)</h4>
                    <p><strong>Use:</strong> Nucleophilic addition to carbonyls, active hydrogen detection</p>
                    <p><strong>Formation:</strong> RX + Mg → RMgX (dry ether, anhydrous conditions)</p>
                    <p><strong>Reactivity:</strong> Formaldehyde → 1° alcohol, Aldehydes → 2° alcohol, Ketones → 3° alcohol</p>
                    <p><strong>Limitations:</strong> Cannot coexist with protic solvents or acidic H</p>
                    <p><strong>Applications:</strong> C-C bond formation, alcohol synthesis, active H test</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> RCHO + R'MgX → R-CH(OH)-R' (after H₃O⁺)</p>
                        <p><strong>Test:</strong> ROH + RMgX → ROMgX + RH↑ (gas evolution)</p>
                    </div>
                </div>

                <div class="reagent-card">
                    <h4>10. NaOR (Sodium Alkoxide)</h4>
                    <p><strong>Use:</strong> Strong base for elimination reactions</p>
                    <p><strong>Note:</strong> E2 elimination, Williamson ether synthesis</p>
                    <p><strong>Mechanism:</strong> Base-catalyzed elimination</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> RCH₂CH₂X + NaOR → RCH=CH₂ + NaX + ROH</p>
                    </div>
                </div>

                <div class="reagent-card">
                    <h4>11. NBS (N-Bromosuccinimide)</h4>
                    <p><strong>Use:</strong> Allylic/benzylic bromination</p>
                    <p><strong>Note:</strong> Selective radical bromination</p>
                    <p><strong>Mechanism:</strong> Free radical substitution</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> PhCH₃ + NBS → PhCH₂Br + Succinimide</p>
                    </div>
                </div>

                <div class="reagent-card">
                    <h4>12. NaNO₂ + HCl</h4>
                    <p><strong>Use:</strong> Diazotization of primary amines</p>
                    <p><strong>Note:</strong> Forms diazonium salts at 0-5°C</p>
                    <p><strong>Mechanism:</strong> Electrophilic substitution on nitrogen</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> ArNH₂ + NaNO₂ + HCl → ArN₂⁺Cl⁻ + NaCl + H₂O</p>
                    </div>
                </div>

                <div class="reagent-card">
                    <h4>13. NaNH₂ (Sodamide)</h4>
                    <p><strong>Use:</strong> Very strong base, alkyne formation</p>
                    <p><strong>Note:</strong> Converts terminal alkynes to acetylides</p>
                    <p><strong>Mechanism:</strong> Acid-base reaction</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> RC≡CH + NaNH₂ → RC≡CNa + NH₃</p>
                    </div>
                </div>

                <div class="reagent-card">
                    <h4>14. Na/EtOH (Birch Reduction)</h4>
                    <p><strong>Use:</strong> Partial reduction of aromatic rings</p>
                    <p><strong>Note:</strong> Reduces benzene to 1,4-cyclohexadiene</p>
                    <p><strong>Mechanism:</strong> Electron transfer reduction</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> C₆H₆ + 2Na + 2EtOH → C₆H₈ + 2NaOEt</p>
                    </div>
                </div>

                <div class="reagent-card">
                    <h4>15. Zn(Hg) + HCl</h4>
                    <p><strong>Use:</strong> Clemmensen reduction</p>
                    <p><strong>Note:</strong> Reduces carbonyls to alkanes in acidic medium</p>
                    <p><strong>Mechanism:</strong> Metal-acid reduction</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> R-CO-R' + Zn(Hg)/HCl → R-CH₂-R'</p>
                    </div>
                </div>

                <div class="reagent-card">
                    <h4>16. NH₂NH₂/KOH</h4>
                    <p><strong>Use:</strong> Wolff-Kishner reduction</p>
                    <p><strong>Note:</strong> Reduces carbonyls to alkanes in basic medium</p>
                    <p><strong>Mechanism:</strong> Hydrazone formation followed by elimination</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> R-CO-R' + NH₂NH₂/KOH → R-CH₂-R' + N₂</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Get named reactions content
function getNamedReactions() {
    return `
        <div class="reaction-section">
            <h3 class="section-title">
                <i class="fas fa-atom"></i> Named Reactions (26+ Important Reactions)
            </h3>

            <div class="named-reactions-grid">
                <div class="reaction-card">
                    <h4>Clemmensen Reduction</h4>
                    <p><strong>Reactant:</strong> Aldehyde or Ketone</p>
                    <p><strong>Reagent:</strong> Zn-Hg/conc. HCl</p>
                    <p><strong>Product:</strong> Alkane</p>
                    <p><strong>Mechanism:</strong> Reduction in acidic medium</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> R-CO-R' + Zn-Hg/HCl → R-CH₂-R' + ZnCl₂ + H₂O</p>
                    </div>
                </div>

                <div class="reaction-card">
                    <h4>Wolff-Kishner Reduction</h4>
                    <p><strong>Reactant:</strong> Aldehyde or Ketone</p>
                    <p><strong>Reagent:</strong> NH₂NH₂/KOH, Heat</p>
                    <p><strong>Product:</strong> Alkane</p>
                    <p><strong>Mechanism:</strong> Reduction in basic medium</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> R-CO-R' + NH₂NH₂ → R-CH₂-R' + N₂ + H₂O</p>
                    </div>
                </div>

                <div class="reaction-card">
                    <h4>Friedel-Crafts Alkylation</h4>
                    <p><strong>Reactant:</strong> Benzene + Alkyl halide</p>
                    <p><strong>Reagent:</strong> Anhydrous AlCl₃</p>
                    <p><strong>Product:</strong> Alkyl Benzene</p>
                    <p><strong>Mechanism:</strong> Electrophilic aromatic substitution</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> C₆H₆ + RCl + AlCl₃ → C₆H₅R + HCl + AlCl₃</p>
                    </div>
                </div>

                <div class="reaction-card">
                    <h4>Friedel-Crafts Acylation</h4>
                    <p><strong>Reactant:</strong> Benzene + Acyl halide</p>
                    <p><strong>Reagent:</strong> Anhydrous AlCl₃</p>
                    <p><strong>Product:</strong> Acyl Benzene (Ketone)</p>
                    <p><strong>Advantage:</strong> No rearrangement unlike alkylation</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> C₆H₆ + RCOCl + AlCl₃ → C₆H₅COR + HCl + AlCl₃</p>
                    </div>
                </div>

                <div class="reaction-card">
                    <h4>Sandmeyer Reaction</h4>
                    <p><strong>Reactant:</strong> Diazonium salt</p>
                    <p><strong>Reagent:</strong> CuCl/HCl or CuBr/HBr or CuCN/KCN, heat</p>
                    <p><strong>Product:</strong> Halo or cyanobenzene</p>
                    <p><strong>Mechanism:</strong> Radical mechanism with Cu catalyst</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> C₆H₅N₂⁺Cl⁻ + CuCl → C₆H₅Cl + N₂ + CuCl₂</p>
                    </div>
                </div>

                <div class="reaction-card">
                    <h4>Gattermann Reaction</h4>
                    <p><strong>Reactant:</strong> Diazonium salt</p>
                    <p><strong>Reagent:</strong> Cu₂Cl₂/HCl (copper powder)</p>
                    <p><strong>Product:</strong> Halobenzene</p>
                    <p><strong>Difference:</strong> Uses copper powder instead of cuprous salts</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> C₆H₅N₂⁺Cl⁻ + Cu/HCl → C₆H₅Cl + N₂ + CuCl</p>
                    </div>
                </div>

                <div class="reaction-card">
                    <h4>Rosenmund Reduction</h4>
                    <p><strong>Reactant:</strong> Acid chloride</p>
                    <p><strong>Reagent:</strong> H₂/Pd-BaSO₄, boiling xylene</p>
                    <p><strong>Product:</strong> Aldehyde</p>
                    <p><strong>Mechanism:</strong> Selective reduction of acid chloride</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> RCOCl + H₂ → RCHO + HCl</p>
                    </div>
                </div>

                <div class="reaction-card">
                    <h4>Stephen Reaction</h4>
                    <p><strong>Reactant:</strong> Nitrile</p>
                    <p><strong>Reagent:</strong> SnCl₂/HCl, then H₂O</p>
                    <p><strong>Product:</strong> Aldehyde</p>
                    <p><strong>Mechanism:</strong> Reduction of nitrile to imine salt, then hydrolysis</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> RCN + SnCl₂/HCl → RCHO</p>
                    </div>
                </div>

                <div class="reaction-card">
                    <h4>Williamson Synthesis</h4>
                    <p><strong>Reactant:</strong> Alkyl halide + Alkoxide</p>
                    <p><strong>Reagent:</strong> NaOR or KOR</p>
                    <p><strong>Product:</strong> Ether</p>
                    <p><strong>Mechanism:</strong> SN2 nucleophilic substitution</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> RX + R'ONa → R-O-R' + NaX</p>
                    </div>
                </div>

                <div class="reaction-card">
                    <h4>Wurtz Reaction</h4>
                    <p><strong>Reactant:</strong> Alkyl halides</p>
                    <p><strong>Reagent:</strong> Na/dry ether</p>
                    <p><strong>Product:</strong> Alkane</p>
                    <p><strong>Mechanism:</strong> Radical coupling reaction</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> 2RX + 2Na → R-R + 2NaX</p>
                    </div>
                </div>

                <div class="reaction-card">
                    <h4>Fittig Reaction</h4>
                    <p><strong>Reactant:</strong> Aryl halides</p>
                    <p><strong>Reagent:</strong> Na/dry ether</p>
                    <p><strong>Product:</strong> Biphenyl</p>
                    <p><strong>Mechanism:</strong> Radical coupling of aryl radicals</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> 2ArX + 2Na → Ar-Ar + 2NaX</p>
                    </div>
                </div>

                <div class="reaction-card">
                    <h4>Wurtz-Fittig Reaction</h4>
                    <p><strong>Reactant:</strong> Alkyl halide + Aryl halide</p>
                    <p><strong>Reagent:</strong> Na/dry ether</p>
                    <p><strong>Product:</strong> Alkyl benzene</p>
                    <p><strong>Mechanism:</strong> Cross-coupling reaction</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> RX + ArX + 2Na → R-Ar + 2NaX</p>
                    </div>
                </div>

                <div class="reaction-card">
                    <h4>Ullmann Reaction</h4>
                    <p><strong>Reactant:</strong> Aryl halides</p>
                    <p><strong>Reagent:</strong> Cu powder, heat</p>
                    <p><strong>Product:</strong> Biphenyl</p>
                    <p><strong>Mechanism:</strong> Copper-catalyzed coupling</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> 2ArX + Cu → Ar-Ar + CuX₂</p>
                    </div>
                </div>

                <div class="reaction-card">
                    <h4>Cannizzaro Reaction</h4>
                    <p><strong>Reactant:</strong> Aldehyde (no α-H)</p>
                    <p><strong>Reagent:</strong> Conc. NaOH</p>
                    <p><strong>Product:</strong> Alcohol + Carboxylate</p>
                    <p><strong>Mechanism:</strong> Disproportionation reaction</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> 2RCHO + NaOH → RCH₂OH + RCOONa</p>
                    </div>
                </div>

                <div class="reaction-card">
                    <h4>Aldol Condensation</h4>
                    <p><strong>Reactant:</strong> Aldehydes/Ketones with α-H</p>
                    <p><strong>Reagent:</strong> Dilute NaOH or acid</p>
                    <p><strong>Product:</strong> β-Hydroxy carbonyl compound</p>
                    <p><strong>Mechanism:</strong> Enolate formation and nucleophilic addition</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> 2CH₃CHO → CH₃CH(OH)CH₂CHO</p>
                    </div>
                </div>

                <div class="reaction-card">
                    <h4>Claisen Condensation</h4>
                    <p><strong>Reactant:</strong> Esters with α-H</p>
                    <p><strong>Reagent:</strong> NaOEt/EtOH</p>
                    <p><strong>Product:</strong> β-Keto ester</p>
                    <p><strong>Mechanism:</strong> Enolate attack on ester carbonyl</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> 2CH₃COOEt → CH₃COCH₂COOEt + EtOH</p>
                    </div>
                </div>

                <div class="reaction-card">
                    <h4>Perkin Reaction</h4>
                    <p><strong>Reactant:</strong> Aromatic aldehyde + Acid anhydride</p>
                    <p><strong>Reagent:</strong> Sodium salt of acid</p>
                    <p><strong>Product:</strong> α,β-Unsaturated acid</p>
                    <p><strong>Mechanism:</strong> Aldol-type condensation</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> PhCHO + (CH₃CO)₂O → PhCH=CHCOOH</p>
                    </div>
                </div>

                <div class="reaction-card">
                    <h4>Reformatsky Reaction</h4>
                    <p><strong>Reactant:</strong> Carbonyl + α-Halo ester</p>
                    <p><strong>Reagent:</strong> Zn/ether</p>
                    <p><strong>Product:</strong> β-Hydroxy ester</p>
                    <p><strong>Mechanism:</strong> Organozinc reagent formation and addition</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> RCHO + BrCH₂COOEt + Zn → RCH(OH)CH₂COOEt</p>
                    </div>
                </div>

                <div class="reaction-card">
                    <h4>Kolbe Electrolysis</h4>
                    <p><strong>Reactant:</strong> Carboxylate salts</p>
                    <p><strong>Reagent:</strong> Electrolysis</p>
                    <p><strong>Product:</strong> Alkanes</p>
                    <p><strong>Mechanism:</strong> Decarboxylative coupling at anode</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> 2RCOONa → R-R + 2CO₂ + 2Na⁺ + 2e⁻</p>
                    </div>
                </div>

                <div class="reaction-card">
                    <h4>Hunsdiecker Reaction</h4>
                    <p><strong>Reactant:</strong> Silver carboxylate</p>
                    <p><strong>Reagent:</strong> Br₂/CCl₄, heat</p>
                    <p><strong>Product:</strong> Alkyl/Aryl halide</p>
                    <p><strong>Mechanism:</strong> Decarboxylative halogenation</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> RCOOAg + Br₂ → RBr + CO₂ + AgBr</p>
                    </div>
                </div>

                <div class="reaction-card">
                    <h4>Hell-Volhard-Zelinsky Reaction</h4>
                    <p><strong>Reactant:</strong> Carboxylic acid with α-H</p>
                    <p><strong>Reagent:</strong> Br₂/red P</p>
                    <p><strong>Product:</strong> α-Bromo carboxylic acid</p>
                    <p><strong>Mechanism:</strong> Enol bromination via acid bromide</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> RCH₂COOH + Br₂/P → RCHBrCOOH</p>
                    </div>
                </div>

                <div class="reaction-card">
                    <h4>Hoffmann Bromamide Reaction</h4>
                    <p><strong>Reactant:</strong> Primary amide</p>
                    <p><strong>Reagent:</strong> Br₂ + NaOH</p>
                    <p><strong>Product:</strong> Primary amine (one carbon less)</p>
                    <p><strong>Mechanism:</strong> Rearrangement via nitrene intermediate</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> RCONH₂ + Br₂ + NaOH → RNH₂ + CO₂</p>
                    </div>
                </div>

                <div class="reaction-card">
                    <h4>Schmidt Reaction</h4>
                    <p><strong>Reactant:</strong> Carbonyl compound + HN₃</p>
                    <p><strong>Reagent:</strong> H₂SO₄</p>
                    <p><strong>Product:</strong> Amine or amide</p>
                    <p><strong>Mechanism:</strong> Rearrangement via azide intermediate</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> RCOR' + HN₃ → RNHCOR' (amide)</p>
                    </div>
                </div>

                <div class="reaction-card">
                    <h4>Beckmann Rearrangement</h4>
                    <p><strong>Reactant:</strong> Ketoxime</p>
                    <p><strong>Reagent:</strong> H₂SO₄ or PCl₅</p>
                    <p><strong>Product:</strong> Amide</p>
                    <p><strong>Mechanism:</strong> Migration of alkyl group</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> R₂C=NOH → RCONHR'</p>
                    </div>
                </div>

                <div class="reaction-card">
                    <h4>Fries Rearrangement</h4>
                    <p><strong>Reactant:</strong> Phenyl ester</p>
                    <p><strong>Reagent:</strong> AlCl₃, heat</p>
                    <p><strong>Product:</strong> Acyl phenol</p>
                    <p><strong>Mechanism:</strong> Intramolecular acylation</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> PhOCOR → HO-Ph-COR</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Get important conversions content
function getImportantConversions() {
    return `
        <div class="reaction-section">
            <h3 class="section-title">
                <i class="fas fa-exchange-alt"></i> Important Organic Conversions (23+ Key Transformations)
            </h3>

            <div class="conversions-grid">
                <div class="conversion-card">
                    <h4>Baeyer-Villiger Oxidation</h4>
                    <p><strong>Conversion:</strong> Ketone → Ester</p>
                    <p><strong>Reagent:</strong> Peracid (RCO₃H) or H₂O₂/acid</p>
                    <p><strong>Mechanism:</strong> Nucleophilic attack on peroxide, followed by migration</p>
                    <p><strong>Selectivity:</strong> More substituted carbon migrates preferentially</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> R-CO-R' + RCO₃H → R-COO-R' + RCOOH</p>
                        <p><strong>Example:</strong> Cyclohexanone + PhCO₃H → ε-Caprolactone</p>
                    </div>
                </div>

                <div class="conversion-card">
                    <h4>Cumene Process</h4>
                    <p><strong>Conversion:</strong> Cumene → Phenol + Acetone</p>
                    <p><strong>Conditions:</strong> O₂, 130°C, then H₂SO₄/heat</p>
                    <p><strong>Industrial:</strong> Major industrial route to phenol (95% of world production)</p>
                    <p><strong>Mechanism:</strong> Autoxidation → Hydroperoxide → Acid-catalyzed rearrangement</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> C₆H₅CH(CH₃)₂ + O₂ → C₆H₅OH + (CH₃)₂CO</p>
                        <p><strong>Intermediate:</strong> C₆H₅CH(CH₃)₂OOH (Cumene hydroperoxide)</p>
                    </div>
                </div>

                <div class="conversion-card">
                    <h4>Kolbe-Schmitt Reaction</h4>
                    <p><strong>Conversion:</strong> Phenol → Salicylic acid</p>
                    <p><strong>Reagent:</strong> CO₂, NaOH, 125°C, 4-7 atm pressure</p>
                    <p><strong>Mechanism:</strong> Electrophilic substitution via phenoxide carboxylation</p>
                    <p><strong>Application:</strong> Industrial synthesis of aspirin precursor</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> C₆H₅OH + CO₂ + NaOH → HOC₆H₄COOH + H₂O</p>
                        <p><strong>Product:</strong> 2-Hydroxybenzoic acid (Salicylic acid)</p>
                    </div>
                </div>

                <div class="conversion-card">
                    <h4>Reimer-Tiemann Reaction</h4>
                    <p><strong>Conversion:</strong> Phenol → Salicylaldehyde</p>
                    <p><strong>Reagent:</strong> CHCl₃ + NaOH, heat</p>
                    <p><strong>Mechanism:</strong> Dichlorocarbene insertion followed by hydrolysis</p>
                    <p><strong>Selectivity:</strong> Ortho-position preferred due to intramolecular H-bonding</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> C₆H₅OH + CHCl₃ + 3NaOH → HOC₆H₄CHO + 3NaCl + 2H₂O</p>
                        <p><strong>Intermediate:</strong> :CCl₂ (Dichlorocarbene)</p>
                    </div>
                </div>

                <div class="conversion-card">
                    <h4>Pinacol-Pinacolone Rearrangement</h4>
                    <p><strong>Conversion:</strong> 1,2-Diol → Ketone</p>
                    <p><strong>Reagent:</strong> H₂SO₄ or H₃PO₄, heat</p>
                    <p><strong>Mechanism:</strong> Carbocation rearrangement with 1,2-alkyl shift</p>
                    <p><strong>Driving Force:</strong> Relief of steric strain and carbocation stability</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> (CH₃)₂C(OH)C(OH)(CH₃)₂ + H⁺ → (CH₃)₃CCOCH₃ + H₂O</p>
                        <p><strong>Example:</strong> Pinacol → Pinacolone</p>
                    </div>
                </div>

                <div class="conversion-card">
                    <h4>Benzoin Condensation</h4>
                    <p><strong>Conversion:</strong> 2 Benzaldehyde → Benzoin</p>
                    <p><strong>Reagent:</strong> NaCN or Thiamine (Vitamin B₁)</p>
                    <p><strong>Mechanism:</strong> Nucleophilic acyl substitution via cyanohydrin</p>
                    <p><strong>Selectivity:</strong> Works best with aromatic aldehydes</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> 2C₆H₅CHO + CN⁻ → C₆H₅CH(OH)COC₆H₅</p>
                        <p><strong>Product:</strong> 2-Hydroxy-1,2-diphenylethanone (Benzoin)</p>
                    </div>
                </div>

                <div class="conversion-card">
                    <h4>Swern Oxidation</h4>
                    <p><strong>Conversion:</strong> Primary/Secondary alcohol → Aldehyde/Ketone</p>
                    <p><strong>Reagent:</strong> (COCl)₂, DMSO, Et₃N, -78°C</p>
                    <p><strong>Advantage:</strong> Mild conditions, no over-oxidation to carboxylic acid</p>
                    <p><strong>Mechanism:</strong> Activated DMSO intermediate formation</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> RCH₂OH + (COCl)₂ + DMSO → RCHO + products</p>
                        <p><strong>Key:</strong> No chromium reagents, mild conditions</p>
                    </div>
                </div>

                <div class="conversion-card">
                    <h4>Dess-Martin Oxidation</h4>
                    <p><strong>Conversion:</strong> Alcohol → Carbonyl compound</p>
                    <p><strong>Reagent:</strong> Dess-Martin periodinane (DMP)</p>
                    <p><strong>Advantage:</strong> Mild, neutral conditions, functional group tolerance</p>
                    <p><strong>Mechanism:</strong> Hypervalent iodine-mediated oxidation</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> R₂CHOH + DMP → R₂CO + reduced iodine species</p>
                        <p><strong>Conditions:</strong> CH₂Cl₂, room temperature, 1-3 hours</p>
                    </div>
                </div>

                <div class="conversion-card">
                    <h4>Birch Reduction</h4>
                    <p><strong>Conversion:</strong> Aromatic ring → 1,4-Cyclohexadiene</p>
                    <p><strong>Reagent:</strong> Na/NH₃(l), EtOH, -33°C</p>
                    <p><strong>Selectivity:</strong> Electron-donating groups direct reduction away from substituted carbon</p>
                    <p><strong>Mechanism:</strong> Radical anion intermediate formation</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> C₆H₆ + 2Na + 2EtOH → C₆H₈ + 2NaOEt</p>
                        <p><strong>Product:</strong> 1,4-Cyclohexadiene (not 1,3-cyclohexadiene)</p>
                    </div>
                </div>

                <div class="conversion-card">
                    <h4>Ozonolysis</h4>
                    <p><strong>Conversion:</strong> Alkene → Carbonyl compounds</p>
                    <p><strong>Reagent:</strong> O₃, then Zn/AcOH or Me₂S</p>
                    <p><strong>Mechanism:</strong> 1,3-Dipolar cycloaddition → Ozonide → Cleavage</p>
                    <p><strong>Application:</strong> Structure determination and synthesis</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> R₂C=CR₂ + O₃ → R₂CO + R₂CO + O₂</p>
                        <p><strong>Workup:</strong> Reductive (Zn/AcOH) or oxidative (H₂O₂)</p>
                    </div>
                </div>

                <div class="conversion-card">
                    <h4>Diels-Alder Reaction</h4>
                    <p><strong>Conversion:</strong> Diene + Dienophile → Cyclohexene</p>
                    <p><strong>Conditions:</strong> Heat or Lewis acid catalyst</p>
                    <p><strong>Stereochemistry:</strong> Syn addition, endo selectivity</p>
                    <p><strong>Requirements:</strong> s-cis diene conformation, electron-poor dienophile</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> Butadiene + Maleic anhydride → Cyclohexene derivative</p>
                        <p><strong>Mechanism:</strong> Concerted [4+2] cycloaddition</p>
                    </div>
                </div>

                <div class="conversion-card">
                    <h4>Wittig Reaction</h4>
                    <p><strong>Conversion:</strong> Carbonyl + Phosphonium ylide → Alkene</p>
                    <p><strong>Reagent:</strong> Ph₃P=CHR (Wittig reagent)</p>
                    <p><strong>Advantage:</strong> Precise control of alkene position</p>
                    <p><strong>Mechanism:</strong> [2+2] cycloaddition → Oxaphosphetane → Elimination</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> R₂CO + Ph₃P=CHR' → R₂C=CHR' + Ph₃PO</p>
                        <p><strong>Selectivity:</strong> Z-alkene with stabilized ylides</p>
                    </div>
                </div>

                <div class="conversion-card">
                    <h4>Heck Reaction</h4>
                    <p><strong>Conversion:</strong> Aryl halide + Alkene → Substituted alkene</p>
                    <p><strong>Catalyst:</strong> Pd(0) complex, base, heat</p>
                    <p><strong>Mechanism:</strong> Oxidative addition → Migratory insertion → β-Elimination</p>
                    <p><strong>Application:</strong> C-C bond formation in pharmaceutical synthesis</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> ArX + CH₂=CHR → ArCH=CHR + HX</p>
                        <p><strong>Catalyst:</strong> Pd(PPh₃)₄, Et₃N, DMF, 100°C</p>
                    </div>
                </div>

                <div class="conversion-card">
                    <h4>Suzuki Coupling</h4>
                    <p><strong>Conversion:</strong> Aryl halide + Aryl boronic acid → Biaryl</p>
                    <p><strong>Catalyst:</strong> Pd(0), base (K₂CO₃), solvent</p>
                    <p><strong>Advantage:</strong> Mild conditions, functional group tolerance</p>
                    <p><strong>Mechanism:</strong> Transmetalation followed by reductive elimination</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> ArX + Ar'B(OH)₂ → Ar-Ar' + B(OH)₃ + HX</p>
                        <p><strong>Conditions:</strong> Pd(PPh₃)₄, K₂CO₃, DME/H₂O, reflux</p>
                    </div>
                </div>

                <div class="conversion-card">
                    <h4>Gabriel Phthalimide Synthesis</h4>
                    <p><strong>Conversion:</strong> Primary alkyl halide → Primary amine</p>
                    <p><strong>Reagent:</strong> Phthalimide, KOH, then NH₂NH₂ (hydrazine)</p>
                    <p><strong>Advantage:</strong> Selective formation of primary amines only</p>
                    <p><strong>Mechanism:</strong> Nucleophilic substitution followed by hydrazinolysis</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> RCH₂X + Phthalimide → RCH₂NH₂ + Phthalic acid</p>
                        <p><strong>Limitation:</strong> Only works with primary alkyl halides</p>
                    </div>
                </div>

                <div class="conversion-card">
                    <h4>Hofmann Bromamide Reaction</h4>
                    <p><strong>Conversion:</strong> Primary amide → Primary amine (one carbon less)</p>
                    <p><strong>Reagent:</strong> Br₂ + NaOH, heat</p>
                    <p><strong>Mechanism:</strong> N-bromamide intermediate → isocyanate → amine</p>
                    <p><strong>Key Feature:</strong> Degradation reaction (loses one carbon)</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> RCONH₂ + Br₂ + 4NaOH → RNH₂ + Na₂CO₃ + 2NaBr + 2H₂O</p>
                        <p><strong>Example:</strong> Acetamide → Methylamine</p>
                    </div>
                </div>

                <div class="conversion-card">
                    <h4>Curtius Rearrangement</h4>
                    <p><strong>Conversion:</strong> Acyl azide → Primary amine (one carbon less)</p>
                    <p><strong>Reagent:</strong> Heat or UV light</p>
                    <p><strong>Mechanism:</strong> Loss of N₂ → nitrene → isocyanate → amine</p>
                    <p><strong>Application:</strong> Alternative to Hofmann rearrangement</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> RCON₃ → RNH₂ + N₂ + CO₂</p>
                        <p><strong>Intermediate:</strong> R-N=C=O (isocyanate)</p>
                    </div>
                </div>

                <div class="conversion-card">
                    <h4>Schmidt Reaction</h4>
                    <p><strong>Conversion:</strong> Carboxylic acid + HN₃ → Primary amine</p>
                    <p><strong>Reagent:</strong> HN₃, H₂SO₄, heat</p>
                    <p><strong>Mechanism:</strong> Similar to Curtius, via acyl azide intermediate</p>
                    <p><strong>Advantage:</strong> Direct conversion from carboxylic acid</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> RCOOH + HN₃ → RNH₂ + N₂ + CO₂ + H₂O</p>
                        <p><strong>Conditions:</strong> Concentrated H₂SO₄, 50-60°C</p>
                    </div>
                </div>

                <div class="conversion-card">
                    <h4>Cannizzaro Reaction</h4>
                    <p><strong>Conversion:</strong> Aldehyde (no α-H) → Alcohol + Carboxylic acid</p>
                    <p><strong>Reagent:</strong> Concentrated NaOH, heat</p>
                    <p><strong>Mechanism:</strong> Disproportionation via hydride transfer</p>
                    <p><strong>Requirement:</strong> Aldehyde must lack α-hydrogen</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> 2HCHO + NaOH → CH₃OH + HCOONa</p>
                        <p><strong>Example:</strong> Benzaldehyde → Benzyl alcohol + Benzoic acid</p>
                    </div>
                </div>

                <div class="conversion-card">
                    <h4>Aldol Condensation</h4>
                    <p><strong>Conversion:</strong> 2 Aldehydes/Ketones → α,β-Unsaturated carbonyl</p>
                    <p><strong>Reagent:</strong> Dilute NaOH or acid catalyst</p>
                    <p><strong>Mechanism:</strong> Enolate formation → nucleophilic addition → dehydration</p>
                    <p><strong>Requirement:</strong> At least one compound must have α-hydrogen</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> 2CH₃CHO → CH₃CH=CHCHO + H₂O</p>
                        <p><strong>Product:</strong> Crotonaldehyde (from acetaldehyde)</p>
                    </div>
                </div>

                <div class="conversion-card">
                    <h4>Claisen Condensation</h4>
                    <p><strong>Conversion:</strong> 2 Esters → β-Keto ester</p>
                    <p><strong>Reagent:</strong> Sodium ethoxide (NaOEt), ethanol</p>
                    <p><strong>Mechanism:</strong> Enolate formation → nucleophilic acyl substitution</p>
                    <p><strong>Driving Force:</strong> Formation of stable enolate of product</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> 2CH₃COOC₂H₅ → CH₃COCH₂COOC₂H₅ + C₂H₅OH</p>
                        <p><strong>Product:</strong> Ethyl acetoacetate</p>
                    </div>
                </div>

                <div class="conversion-card">
                    <h4>Malonic Ester Synthesis</h4>
                    <p><strong>Conversion:</strong> Diethyl malonate → Substituted acetic acid</p>
                    <p><strong>Reagent:</strong> NaOEt, RX, then H₃O⁺/heat (decarboxylation)</p>
                    <p><strong>Mechanism:</strong> Alkylation of malonate enolate → hydrolysis → decarboxylation</p>
                    <p><strong>Application:</strong> Synthesis of carboxylic acids with specific substitution</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> CH₂(COOC₂H₅)₂ + RX → RCH₂COOH + CO₂ + 2C₂H₅OH</p>
                        <p><strong>Key Step:</strong> β-Keto acid decarboxylation</p>
                    </div>
                </div>

                <div class="conversion-card">
                    <h4>Acetoacetic Ester Synthesis</h4>
                    <p><strong>Conversion:</strong> Ethyl acetoacetate → Substituted acetone</p>
                    <p><strong>Reagent:</strong> NaOEt, RX, then H₃O⁺/heat</p>
                    <p><strong>Mechanism:</strong> Alkylation → hydrolysis → decarboxylation</p>
                    <p><strong>Product:</strong> Methyl ketones with specific substitution</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> CH₃COCH₂COOC₂H₅ + RX → CH₃COCH₂R + CO₂ + C₂H₅OH</p>
                        <p><strong>Application:</strong> Ketone synthesis</p>
                    </div>
                </div>

                <div class="conversion-card">
                    <h4>Hell-Volhard-Zelinsky Reaction</h4>
                    <p><strong>Conversion:</strong> Carboxylic acid → α-Halo carboxylic acid</p>
                    <p><strong>Reagent:</strong> Br₂/Cl₂ + red phosphorus</p>
                    <p><strong>Mechanism:</strong> Acid chloride formation → α-halogenation → hydrolysis</p>
                    <p><strong>Selectivity:</strong> Halogenation occurs specifically at α-position</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> RCH₂COOH + Br₂/P → RCHBrCOOH + HBr</p>
                        <p><strong>Example:</strong> Propanoic acid → 2-Bromopropanoic acid</p>
                    </div>
                </div>

                <div class="conversion-card">
                    <h4>Hunsdiecker Reaction</h4>
                    <p><strong>Conversion:</strong> Silver carboxylate → Alkyl halide (one carbon less)</p>
                    <p><strong>Reagent:</strong> Br₂ or I₂, CCl₄, heat</p>
                    <p><strong>Mechanism:</strong> Radical decarboxylation</p>
                    <p><strong>Application:</strong> Degradation of carboxylic acids</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> RCOOAg + Br₂ → RBr + CO₂ + AgBr</p>
                        <p><strong>Example:</strong> Silver acetate → Methyl bromide</p>
                    </div>
                </div>

                <div class="conversion-card">
                    <h4>Perkin Reaction</h4>
                    <p><strong>Conversion:</strong> Aromatic aldehyde + Acid anhydride → α,β-Unsaturated acid</p>
                    <p><strong>Reagent:</strong> Acetic anhydride, sodium acetate, heat</p>
                    <p><strong>Mechanism:</strong> Aldol-type condensation with anhydride</p>
                    <p><strong>Application:</strong> Synthesis of cinnamic acid derivatives</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> C₆H₅CHO + (CH₃CO)₂O → C₆H₅CH=CHCOOH + CH₃COOH</p>
                        <p><strong>Product:</strong> Cinnamic acid (from benzaldehyde)</p>
                    </div>
                </div>

                <div class="conversion-card">
                    <h4>Knoevenagel Condensation</h4>
                    <p><strong>Conversion:</strong> Aldehyde/Ketone + Active methylene compound → Alkene</p>
                    <p><strong>Reagent:</strong> Piperidine or pyridine catalyst</p>
                    <p><strong>Mechanism:</strong> Enamine formation → condensation → elimination</p>
                    <p><strong>Advantage:</strong> Works with weak bases, mild conditions</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> RCHO + CH₂(COOC₂H₅)₂ → RCH=C(COOC₂H₅)₂ + H₂O</p>
                        <p><strong>Catalyst:</strong> Piperidine, ethanol, reflux</p>
                    </div>
                </div>

                <div class="conversion-card">
                    <h4>Michael Addition</h4>
                    <p><strong>Conversion:</strong> Enolate + α,β-Unsaturated carbonyl → 1,5-Dicarbonyl</p>
                    <p><strong>Reagent:</strong> Base catalyst (NaOEt, NaNH₂)</p>
                    <p><strong>Mechanism:</strong> Conjugate addition (1,4-addition)</p>
                    <p><strong>Selectivity:</strong> Thermodynamically controlled</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> CH₃COCH₃ + CH₂=CHCOCH₃ → CH₃COCH₂CH₂CH₂COCH₃</p>
                        <p><strong>Type:</strong> 1,4-Addition to α,β-unsaturated system</p>
                    </div>
                </div>

                <div class="conversion-card">
                    <h4>Mannich Reaction</h4>
                    <p><strong>Conversion:</strong> Carbonyl + Amine + Formaldehyde → β-Amino carbonyl</p>
                    <p><strong>Reagent:</strong> HCHO, secondary amine (dimethylamine), HCl</p>
                    <p><strong>Mechanism:</strong> Iminium ion formation → enolate attack</p>
                    <p><strong>Application:</strong> Introduction of aminomethyl groups</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> RCOCH₃ + HCHO + (CH₃)₂NH → RCOCH₂CH₂N(CH₃)₂</p>
                        <p><strong>Product:</strong> Mannich base</p>
                    </div>
                </div>

                <div class="conversion-card">
                    <h4>Reformatsky Reaction</h4>
                    <p><strong>Conversion:</strong> Carbonyl + α-Halo ester → β-Hydroxy ester</p>
                    <p><strong>Reagent:</strong> Zn, THF or ether, α-bromo ester</p>
                    <p><strong>Mechanism:</strong> Organozinc reagent formation → nucleophilic addition</p>
                    <p><strong>Advantage:</strong> Milder than Grignard, tolerates esters</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> RCHO + BrCH₂COOC₂H₅ + Zn → RCH(OH)CH₂COOC₂H₅</p>
                        <p><strong>Product:</strong> β-Hydroxy ester</p>
                    </div>
                </div>

                <div class="conversion-card">
                    <h4>Stobbe Condensation</h4>
                    <p><strong>Conversion:</strong> Ketone + Diethyl succinate → Half ester of alkylidene succinic acid</p>
                    <p><strong>Reagent:</strong> Sodium ethoxide, ethanol</p>
                    <p><strong>Mechanism:</strong> Aldol-type condensation with selective hydrolysis</p>
                    <p><strong>Selectivity:</strong> Only one ester group hydrolyzes</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> R₂CO + HOOC-CH₂-CH₂-COOC₂H₅ → R₂C=CH-CH₂-COOH</p>
                        <p><strong>Application:</strong> Synthesis of unsaturated acids</p>
                    </div>
                </div>

                <div class="conversion-card">
                    <h4>Wolff Rearrangement</h4>
                    <p><strong>Conversion:</strong> α-Diazo ketone → Carboxylic acid (one carbon less)</p>
                    <p><strong>Reagent:</strong> Heat, UV light, or Ag₂O catalyst</p>
                    <p><strong>Mechanism:</strong> Loss of N₂ → carbene → ketene → acid</p>
                    <p><strong>Application:</strong> Ring contraction, homologation</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> RCOCHN₂ → RCH₂COOH + N₂</p>
                        <p><strong>Intermediate:</strong> Ketene (R-CH=C=O)</p>
                    </div>
                </div>

                <div class="conversion-card">
                    <h4>Arndt-Eistert Synthesis</h4>
                    <p><strong>Conversion:</strong> Carboxylic acid → Homologous acid (one carbon more)</p>
                    <p><strong>Reagent:</strong> SOCl₂, CH₂N₂, then Wolff rearrangement</p>
                    <p><strong>Mechanism:</strong> Acid chloride → diazo ketone → Wolff rearrangement</p>
                    <p><strong>Application:</strong> Chain extension by one carbon</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> RCOOH → RCOCl → RCOCHN₂ → RCH₂COOH</p>
                        <p><strong>Net Result:</strong> RCOOH → RCH₂COOH</p>
                    </div>
                </div>

                <div class="conversion-card">
                    <h4>Favorskii Rearrangement</h4>
                    <p><strong>Conversion:</strong> α-Halo ketone → Carboxylic acid (rearranged)</p>
                    <p><strong>Reagent:</strong> Strong base (NaOH, KOH), heat</p>
                    <p><strong>Mechanism:</strong> Cyclopropanone intermediate formation</p>
                    <p><strong>Result:</strong> Carbon skeleton rearrangement</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> RCOCHClR' + OH⁻ → Rearranged carboxylic acid</p>
                        <p><strong>Key:</strong> Ring contraction via cyclopropanone</p>
                    </div>
                </div>

                <div class="conversion-card">
                    <h4>Beckmann Rearrangement</h4>
                    <p><strong>Conversion:</strong> Ketoxime → N-Substituted amide</p>
                    <p><strong>Reagent:</strong> Concentrated H₂SO₄, PCl₅, or SOCl₂</p>
                    <p><strong>Mechanism:</strong> Oxime protonation → migration → amide formation</p>
                    <p><strong>Stereochemistry:</strong> Anti-migration (group trans to OH migrates)</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> R₂C=NOH → RCONHR' (R migrates)</p>
                        <p><strong>Application:</strong> Industrial synthesis of caprolactam (nylon precursor)</p>
                    </div>
                </div>

                <div class="conversion-card">
                    <h4>Pinacol-Pinacolone Rearrangement</h4>
                    <p><strong>Conversion:</strong> Pinacol → Pinacolone</p>
                    <p><strong>Reagent:</strong> H₂SO₄, Heat</p>
                    <p><strong>Mechanism:</strong> 1,2-methyl shift with carbocation intermediate</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> (CH₃)₂C(OH)-C(OH)(CH₃)₂ → (CH₃)₃C-CO-CH₃</p>
                    </div>
                </div>

                <div class="conversion-card">
                    <h4>Birch Reduction</h4>
                    <p><strong>Conversion:</strong> Benzene → 1,4-Cyclohexadiene</p>
                    <p><strong>Reagent:</strong> Na/liquid NH₃, EtOH</p>
                    <p><strong>Selectivity:</strong> Reduces benzene ring but not isolated double bonds</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> C₆H₆ + 2Na + 2NH₃ + 2EtOH → C₆H₈ + 2NaNH₂ + H₂</p>
                    </div>
                </div>

                <div class="conversion-card">
                    <h4>Gabriel Synthesis</h4>
                    <p><strong>Conversion:</strong> Phthalimide → Primary amine</p>
                    <p><strong>Reagent:</strong> (1) KOH (2) RX (3) H₂NNH₂/H₂O</p>
                    <p><strong>Advantage:</strong> Gives only primary amines, no secondary/tertiary</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> Phthalimide + RX → R-NH₂ + Phthalic acid</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Organic quiz data
const organicQuizData = [
    {
        question: "Which reagent is used in Clemmensen reduction?",
        options: ["Zn-Hg/HCl", "NH₂NH₂/KOH", "LiAlH₄", "NaBH₄"],
        correct: 0,
        explanation: "Clemmensen reduction uses Zn-Hg/HCl to reduce aldehydes and ketones to alkanes in acidic medium."
    },
    {
        question: "What is the product when benzene reacts with CH₃COCl in presence of AlCl₃?",
        options: ["Toluene", "Acetophenone", "Benzoic acid", "Benzyl chloride"],
        correct: 1,
        explanation: "This is Friedel-Crafts acylation reaction producing acetophenone (C₆H₅COCH₃)."
    },
    {
        question: "Baeyer's reagent is used to test for:",
        options: ["Aldehydes", "Ketones", "Unsaturation", "Alcohols"],
        correct: 2,
        explanation: "Baeyer's reagent (cold dilute KMnO₄) is used to test for unsaturation (C=C double bonds)."
    },
    {
        question: "In Sandmeyer reaction, diazonium salt reacts with:",
        options: ["CuCl/HCl", "AgCl/HCl", "FeCl₃", "ZnCl₂"],
        correct: 0,
        explanation: "Sandmeyer reaction uses CuCl/HCl to convert diazonium salts to chlorobenzene."
    },
    {
        question: "Gabriel synthesis is used to prepare:",
        options: ["Secondary amines", "Primary amines", "Tertiary amines", "Quaternary ammonium salts"],
        correct: 1,
        explanation: "Gabriel synthesis specifically produces primary amines from phthalimide."
    },
    {
        question: "Which reaction converts ketones to esters?",
        options: ["Cannizzaro reaction", "Aldol condensation", "Baeyer-Villiger oxidation", "Claisen condensation"],
        correct: 2,
        explanation: "Baeyer-Villiger oxidation uses peracids to convert ketones to esters."
    },
    {
        question: "Etard reagent (CrO₂Cl₂) is used for:",
        options: ["Oxidation of alcohols", "Oxidation of methyl group to aldehyde", "Reduction of aldehydes", "Halogenation"],
        correct: 1,
        explanation: "Etard reagent selectively oxidizes methyl groups attached to benzene ring to aldehydes."
    },
    {
        question: "Wolff-Kishner reduction is carried out in:",
        options: ["Acidic medium", "Basic medium", "Neutral medium", "Anhydrous conditions"],
        correct: 1,
        explanation: "Wolff-Kishner reduction uses NH₂NH₂/KOH in basic medium to reduce carbonyls to alkanes."
    },
    {
        question: "Cumene process produces:",
        options: ["Benzene and propene", "Phenol and acetone", "Toluene and methane", "Aniline and propanol"],
        correct: 1,
        explanation: "Cumene process is an industrial method to produce phenol and acetone from cumene."
    },
    {
        question: "Benedict's solution gives positive test with:",
        options: ["Aldehydes only", "Ketones only", "Both aldehydes and ketones", "Alcohols"],
        correct: 0,
        explanation: "Benedict's solution gives positive test only with aldehydes, not with ketones."
    },
    {
        question: "In Birch reduction, the reducing agent is:",
        options: ["H₂/Pd", "Na/liquid NH₃", "LiAlH₄", "Zn/HCl"],
        correct: 1,
        explanation: "Birch reduction uses sodium in liquid ammonia to partially reduce benzene rings."
    },
    {
        question: "Pinacol-pinacolone rearrangement involves:",
        options: ["1,2-hydride shift", "1,2-methyl shift", "Ring expansion", "Ring contraction"],
        correct: 1,
        explanation: "Pinacol-pinacolone rearrangement involves 1,2-methyl shift in the presence of acid."
    },
    {
        question: "Gattermann reaction differs from Sandmeyer reaction in using:",
        options: ["Copper powder instead of cuprous salts", "Silver salts", "Iron salts", "Zinc salts"],
        correct: 0,
        explanation: "Gattermann reaction uses copper powder while Sandmeyer uses cuprous salts."
    },
    {
        question: "Alcoholic KOH promotes:",
        options: ["Substitution reaction", "Elimination reaction", "Addition reaction", "Rearrangement"],
        correct: 1,
        explanation: "Alcoholic KOH promotes elimination reactions (E2 mechanism) to form alkenes."
    },
    {
        question: "Rosenmund reduction converts:",
        options: ["Aldehydes to alcohols", "Ketones to alcohols", "Acid chlorides to aldehydes", "Acids to alcohols"],
        correct: 2,
        explanation: "Rosenmund reduction uses H₂/Pd-BaSO₄ to convert acid chlorides to aldehydes."
    },
    {
        question: "Diazotization reaction requires temperature:",
        options: ["0-5°C", "25-30°C", "50-60°C", "100°C"],
        correct: 0,
        explanation: "Diazotization must be carried out at 0-5°C to prevent decomposition of diazonium salt."
    },
    {
        question: "Fittig reaction produces:",
        options: ["Alkyl benzenes", "Biphenyls", "Phenols", "Anilines"],
        correct: 1,
        explanation: "Fittig reaction couples two aryl halides using sodium to produce biphenyls."
    },
    {
        question: "Jones reagent (CrO₃) oxidizes primary alcohols to:",
        options: ["Aldehydes", "Ketones", "Carboxylic acids", "Esters"],
        correct: 2,
        explanation: "Jones reagent is a strong oxidizing agent that oxidizes primary alcohols to carboxylic acids."
    },
    {
        question: "Williamson synthesis is used to prepare:",
        options: ["Alcohols", "Ethers", "Esters", "Amines"],
        correct: 1,
        explanation: "Williamson synthesis uses alkoxide and alkyl halide to prepare ethers."
    },
    {
        question: "Hell-Volhard-Zelinsky reaction introduces halogen at:",
        options: ["α-position of carboxylic acid", "β-position of carboxylic acid", "Aromatic ring", "Terminal carbon"],
        correct: 0,
        explanation: "HVZ reaction introduces halogen at α-position of carboxylic acids using Br₂/red P."
    },
    {
        question: "Tischenko reaction involves:",
        options: ["Oxidation of aldehydes", "Reduction of aldehydes", "Disproportionation of aldehydes", "Polymerization of aldehydes"],
        correct: 2,
        explanation: "Tischenko reaction is disproportionation where two aldehyde molecules form an ester."
    },
    {
        question: "Cannizzaro reaction occurs with aldehydes having:",
        options: ["α-hydrogen", "No α-hydrogen", "β-hydrogen", "Aromatic ring"],
        correct: 1,
        explanation: "Cannizzaro reaction occurs with aldehydes having no α-hydrogen atoms."
    },
    {
        question: "Wurtz-Fittig reaction involves:",
        options: ["Two alkyl halides", "Two aryl halides", "One alkyl and one aryl halide", "Alcohol and halide"],
        correct: 2,
        explanation: "Wurtz-Fittig reaction couples an alkyl halide with an aryl halide using sodium."
    },
    {
        question: "Mendius reaction produces:",
        options: ["Primary alcohols", "Primary amines", "Secondary amines", "Carboxylic acids"],
        correct: 1,
        explanation: "Mendius reaction reduces nitriles to primary amines using Na/C₂H₅OH."
    },
    {
        question: "Stephen reaction converts nitriles to:",
        options: ["Amines", "Aldehydes", "Ketones", "Alcohols"],
        correct: 1,
        explanation: "Stephen reaction converts nitriles to aldehydes using SnCl₂/HCl followed by hydrolysis."
    },
    {
        question: "Sabatier-Senderns reaction is a type of:",
        options: ["Oxidation", "Reduction", "Substitution", "Elimination"],
        correct: 1,
        explanation: "Sabatier-Senderns reaction is catalytic hydrogenation (reduction) using Raney Ni."
    },
    {
        question: "Hunsdiecker reaction produces:",
        options: ["Alkyl halides", "Aryl halides", "Both alkyl and aryl halides", "Alcohols"],
        correct: 2,
        explanation: "Hunsdiecker reaction converts silver salts of carboxylic acids to alkyl/aryl halides."
    },
    {
        question: "Kolbe electrolytic reaction involves:",
        options: ["Oxidation at cathode", "Reduction at anode", "Oxidation at anode", "No electron transfer"],
        correct: 2,
        explanation: "Kolbe electrolytic reaction involves oxidation of carboxylate ions at the anode."
    },
    {
        question: "Schotten-Baumann reaction is used for:",
        options: ["Esterification", "Acylation", "Alkylation", "Halogenation"],
        correct: 1,
        explanation: "Schotten-Baumann reaction is acylation of amines or phenols with acid chlorides."
    },
    {
        question: "NBS (N-bromosuccinimide) is used for:",
        options: ["Aromatic bromination", "Allylic/benzylic bromination", "Alkyl bromination", "Vinyl bromination"],
        correct: 1,
        explanation: "NBS selectively brominates at allylic and benzylic positions via radical mechanism."
    }
];

// Load organic quiz content
function loadOrganicQuiz() {
    const theoryOrganicQuiz = document.getElementById('theoryOrganicQuiz');

    theoryOrganicQuiz.innerHTML = `
        <div class="quiz-container organic-quiz">
            <div class="quiz-header">
                <h2 class="quiz-title">
                    <i class="fas fa-vial"></i> Organic Chemistry Reactions Quiz
                </h2>
                <div class="quiz-progress">
                    <div class="progress-info">
                        <span>Question <span id="currentQuestionNum">1</span> of ${organicQuizData.length}</span>
                        <span>Score: <span id="quizScore">0</span>/${organicQuizData.length}</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" id="progressFill"></div>
                    </div>
                </div>

                <div class="quiz-timers">
                    <div class="timer-container">
                        <div class="timer-label">Question Time</div>
                        <div class="timer-display" id="questionTimer">00:30</div>
                    </div>
                    <div class="timer-container">
                        <div class="timer-label">Total Time</div>
                        <div class="timer-display" id="totalTimer">15:00</div>
                    </div>
                </div>
            </div>

            <div class="quiz-content" id="quizContent">
                <!-- Quiz questions will be loaded here -->
            </div>

            <div class="quiz-navigation">
                <button class="quiz-nav-btn" onclick="previousOrganicQuestion()" id="prevBtn" disabled>
                    <i class="fas fa-arrow-left"></i> Previous
                </button>
                <button class="quiz-nav-btn primary" onclick="nextOrganicQuestion()" id="nextBtn">
                    Next <i class="fas fa-arrow-right"></i>
                </button>
            </div>

            <div class="quiz-results" id="quizResults" style="display: none;">
                <!-- Results will be shown here -->
            </div>
        </div>
    `;

    // Load first question
    loadOrganicQuestion();

    // Start total timer
    startTotalTimer();
}

// Start total timer
function startTotalTimer() {
    organicTotalTimer = setInterval(() => {
        organicTotalTimeLeft--;
        updateTotalTimerDisplay();

        if (organicTotalTimeLeft <= 0) {
            clearInterval(organicTotalTimer);
            organicTotalTimeLeft = 0;
            updateTotalTimerDisplay();
            // Auto-submit quiz when time runs out
            showOrganicQuizResults();
        }
    }, 1000);
}

// Start question timer
function startQuestionTimer() {
    organicQuestionTimeLeft = 30;
    updateQuestionTimerDisplay();

    organicQuestionTimer = setInterval(() => {
        organicQuestionTimeLeft--;
        updateQuestionTimerDisplay();

        if (organicQuestionTimeLeft <= 0) {
            clearInterval(organicQuestionTimer);
            organicQuestionTimeLeft = 0;
            updateQuestionTimerDisplay();
            // Auto-move to next question when time runs out
            if (!organicQuizAnswered) {
                selectOrganicAnswer(-1); // Mark as unanswered
            }
        }
    }, 1000);
}

// Stop question timer
function stopQuestionTimer() {
    if (organicQuestionTimer) {
        clearInterval(organicQuestionTimer);
        organicQuestionTimer = null;
    }
}

// Update question timer display
function updateQuestionTimerDisplay() {
    const minutes = Math.floor(organicQuestionTimeLeft / 60);
    const seconds = organicQuestionTimeLeft % 60;
    const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    const timerElement = document.getElementById('questionTimer');
    if (timerElement) {
        timerElement.textContent = display;

        // Change color based on time left
        if (organicQuestionTimeLeft <= 5) {
            timerElement.style.color = '#f44336';
            timerElement.style.animation = 'pulse 1s infinite';
        } else if (organicQuestionTimeLeft <= 10) {
            timerElement.style.color = '#ff9800';
            timerElement.style.animation = 'none';
        } else {
            timerElement.style.color = '#4caf50';
            timerElement.style.animation = 'none';
        }
    }
}

// Update total timer display
function updateTotalTimerDisplay() {
    const minutes = Math.floor(organicTotalTimeLeft / 60);
    const seconds = organicTotalTimeLeft % 60;
    const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    const timerElement = document.getElementById('totalTimer');
    if (timerElement) {
        timerElement.textContent = display;

        // Change color based on time left
        if (organicTotalTimeLeft <= 60) {
            timerElement.style.color = '#f44336';
            timerElement.style.animation = 'pulse 1s infinite';
        } else if (organicTotalTimeLeft <= 300) {
            timerElement.style.color = '#ff9800';
            timerElement.style.animation = 'none';
        } else {
            timerElement.style.color = '#4fc3f7';
            timerElement.style.animation = 'none';
        }
    }
}

// Load organic quiz question
function loadOrganicQuestion() {
    const quizContent = document.getElementById('quizContent');
    const question = organicQuizData[currentOrganicQuestion];

    quizContent.innerHTML = `
        <div class="question-card">
            <div class="question-number">Question ${currentOrganicQuestion + 1}</div>
            <div class="question-text">${question.question}</div>

            <div class="options-container">
                ${question.options.map((option, index) => `
                    <button class="option-btn" onclick="selectOrganicAnswer(${index})" id="option${index}">
                        <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                        <span class="option-text">${option}</span>
                    </button>
                `).join('')}
            </div>

            <div class="explanation" id="explanation" style="display: none;">
                <div class="explanation-header">
                    <i class="fas fa-lightbulb"></i> Explanation
                </div>
                <div class="explanation-text">${question.explanation}</div>
            </div>
        </div>
    `;

    // Update progress
    updateOrganicQuizProgress();
    organicQuizAnswered = false;

    // Start question timer
    startQuestionTimer();
}

// Select organic quiz answer
function selectOrganicAnswer(selectedIndex) {
    if (organicQuizAnswered) return;

    const question = organicQuizData[currentOrganicQuestion];
    const options = document.querySelectorAll('.option-btn');
    const explanation = document.getElementById('explanation');

    organicQuizAnswered = true;

    // Stop question timer
    stopQuestionTimer();

    // Show correct/incorrect styling
    options.forEach((option, index) => {
        if (index === question.correct) {
            option.classList.add('correct');
        } else if (index === selectedIndex && index !== question.correct && selectedIndex !== -1) {
            option.classList.add('incorrect');
        }
        option.disabled = true;
    });

    // Update score (only if answered correctly and not timed out)
    if (selectedIndex === question.correct && selectedIndex !== -1) {
        organicQuizScore++;
        document.getElementById('quizScore').textContent = organicQuizScore;
    }

    // Show explanation
    explanation.style.display = 'block';

    // Enable next button
    document.getElementById('nextBtn').disabled = false;

    // Auto-advance after 3 seconds if time ran out
    if (selectedIndex === -1) {
        setTimeout(() => {
            nextOrganicQuestion();
        }, 3000);
    }
}

// Navigate to next organic question
function nextOrganicQuestion() {
    if (!organicQuizAnswered) return;

    // Stop current question timer
    stopQuestionTimer();

    currentOrganicQuestion++;

    if (currentOrganicQuestion >= organicQuizData.length) {
        showOrganicQuizResults();
    } else {
        loadOrganicQuestion();
        document.getElementById('nextBtn').disabled = true;
    }

    // Update navigation buttons
    const prevBtn = document.getElementById('prevBtn');
    if (prevBtn) {
        prevBtn.disabled = currentOrganicQuestion === 0;
    }
}

// Navigate to previous organic question
function previousOrganicQuestion() {
    if (currentOrganicQuestion > 0) {
        // Stop current question timer
        stopQuestionTimer();

        currentOrganicQuestion--;
        loadOrganicQuestion();
        const nextBtn = document.getElementById('nextBtn');
        if (nextBtn) {
            nextBtn.disabled = false;
        }
    }

    // Update navigation buttons
    const prevBtn = document.getElementById('prevBtn');
    if (prevBtn) {
        prevBtn.disabled = currentOrganicQuestion === 0;
    }
}

// Update organic quiz progress
function updateOrganicQuizProgress() {
    const progress = ((currentOrganicQuestion + 1) / organicQuizData.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('currentQuestionNum').textContent = currentOrganicQuestion + 1;
}

// Show organic quiz results
function showOrganicQuizResults() {
    // Stop all timers
    stopQuestionTimer();
    if (organicTotalTimer) {
        clearInterval(organicTotalTimer);
        organicTotalTimer = null;
    }

    const quizContent = document.getElementById('quizContent');
    const quizNavigation = document.querySelector('.quiz-navigation');
    const percentage = Math.round((organicQuizScore / organicQuizData.length) * 100);

    let resultMessage = '';
    let resultClass = '';

    if (percentage >= 90) {
        resultMessage = 'Excellent! You have mastered organic reactions!';
        resultClass = 'excellent';
    } else if (percentage >= 75) {
        resultMessage = 'Great job! You have a good understanding of organic reactions.';
        resultClass = 'good';
    } else if (percentage >= 60) {
        resultMessage = 'Good effort! Review the reactions and try again.';
        resultClass = 'average';
    } else {
        resultMessage = 'Keep studying! Practice more organic reactions.';
        resultClass = 'needs-improvement';
    }

    quizContent.innerHTML = `
        <div class="quiz-results ${resultClass}">
            <div class="result-icon">
                <i class="fas fa-trophy"></i>
            </div>
            <div class="result-score">
                <div class="score-number">${organicQuizScore}/${organicQuizData.length}</div>
                <div class="score-percentage">${percentage}%</div>
            </div>
            <div class="result-message">${resultMessage}</div>

            <div class="result-actions">
                <button class="quiz-action-btn primary" onclick="restartOrganicQuiz()">
                    <i class="fas fa-redo"></i> Retake Quiz
                </button>
                <button class="quiz-action-btn" onclick="showReactionSection('main')">
                    <i class="fas fa-book"></i> Review Reactions
                </button>
            </div>
        </div>
    `;

    // Hide navigation
    if (quizNavigation) {
        quizNavigation.style.display = 'none';
    }
}

// Restart organic quiz
function restartOrganicQuiz() {
    // Stop all timers
    stopQuestionTimer();
    if (organicTotalTimer) {
        clearInterval(organicTotalTimer);
        organicTotalTimer = null;
    }

    // Reset quiz state
    currentOrganicQuestion = 0;
    organicQuizScore = 0;
    organicQuizAnswered = false;
    organicQuestionTimeLeft = 30;
    organicTotalTimeLeft = 900;

    // Reset score display
    const scoreElement = document.getElementById('quizScore');
    if (scoreElement) {
        scoreElement.textContent = '0';
    }

    // Show navigation
    const quizNavigation = document.querySelector('.quiz-navigation');
    if (quizNavigation) {
        quizNavigation.style.display = 'flex';
    }

    // Load first question and start timers
    loadOrganicQuestion();
    startTotalTimer();
}

// ==================== INORGANIC CHEMISTRY QUIZ ====================

// Current inorganic quiz state
let currentInorganicQuestion = 0;
let inorganicQuizScore = 0;
let inorganicQuizAnswered = false;
let inorganicQuestionTimer = null;
let inorganicTotalTimer = null;
let inorganicQuestionTimeLeft = 30; // 30 seconds per question
let inorganicTotalTimeLeft = 900; // 15 minutes total (30 seconds × 30 questions)

// Inorganic quiz data - Orders and Tables
const inorganicQuizData = [
    {
        question: "Which of the following shows the correct order of atomic radii?",
        options: ["Li > Na > K > Rb", "Rb > K > Na > Li", "Na > Li > K > Rb", "K > Rb > Na > Li"],
        correct: 1,
        explanation: "Atomic radius increases down the group due to addition of new electron shells. Order: Rb > K > Na > Li"
    },
    {
        question: "The correct order of ionization energy in Group 1 elements is:",
        options: ["Li < Na < K < Rb", "Rb < K < Na < Li", "Na < Li < Rb < K", "K < Rb < Li < Na"],
        correct: 1,
        explanation: "Ionization energy decreases down the group as atomic size increases. Order: Li > Na > K > Rb"
    },
    {
        question: "Which order is correct for the melting points of Group 2 elements?",
        options: ["Be > Mg > Ca > Sr > Ba", "Ba > Sr > Ca > Mg > Be", "Mg > Be > Ca > Sr > Ba", "Be > Ca > Mg > Sr > Ba"],
        correct: 0,
        explanation: "Melting point generally decreases down Group 2 due to weaker metallic bonding as atomic size increases."
    },
    {
        question: "The correct order of hydration energy of Group 1 cations is:",
        options: ["Li⁺ > Na⁺ > K⁺ > Rb⁺", "Rb⁺ > K⁺ > Na⁺ > Li⁺", "Na⁺ > Li⁺ > K⁺ > Rb⁺", "K⁺ > Rb⁺ > Li⁺ > Na⁺"],
        correct: 0,
        explanation: "Hydration energy decreases with increasing ionic size. Smaller Li⁺ has highest hydration energy."
    },
    {
        question: "Which shows the correct order of electronegativity in Period 3?",
        options: ["Na < Mg < Al < Si < P < S < Cl", "Cl < S < P < Si < Al < Mg < Na", "Na > Mg > Al > Si > P > S > Cl", "Al < Na < Mg < Si < P < S < Cl"],
        correct: 0,
        explanation: "Electronegativity increases across a period from left to right due to increasing nuclear charge."
    },
    {
        question: "The correct order of lattice energy for alkali metal chlorides is:",
        options: ["LiCl > NaCl > KCl > RbCl", "RbCl > KCl > NaCl > LiCl", "NaCl > LiCl > KCl > RbCl", "KCl > RbCl > LiCl > NaCl"],
        correct: 0,
        explanation: "Lattice energy is inversely proportional to ionic size. LiCl has highest lattice energy due to smallest Li⁺ ion."
    },
    {
        question: "Which order represents the correct trend for atomic radii across Period 2?",
        options: ["Li > Be > B > C > N > O > F", "F > O > N > C > B > Be > Li", "Be > Li > B > C > N > O > F", "Li > B > Be > C > N > O > F"],
        correct: 0,
        explanation: "Atomic radius decreases across a period due to increasing nuclear charge pulling electrons closer."
    },
    {
        question: "The correct order of basic strength of Group 1 hydroxides is:",
        options: ["LiOH < NaOH < KOH < RbOH", "RbOH < KOH < NaOH < LiOH", "NaOH < LiOH < RbOH < KOH", "KOH < RbOH < LiOH < NaOH"],
        correct: 0,
        explanation: "Basic strength increases down the group as the M-OH bond becomes more ionic and weaker."
    },
    {
        question: "Which shows the correct order of first ionization energy for Period 3 elements?",
        options: ["Na < Mg < Al < Si < P < S < Cl < Ar", "Ar < Cl < S < P < Si < Al < Mg < Na", "Al < Na < Mg < Si < S < P < Cl < Ar", "Na < Al < Mg < Si < P < S < Cl < Ar"],
        correct: 3,
        explanation: "Generally increases across period, but Al < Mg due to electron removal from p-orbital, and S < P due to electron pairing."
    },
    {
        question: "The correct order of thermal stability of Group 2 carbonates is:",
        options: ["BeCO₃ > MgCO₃ > CaCO₃ > SrCO₃ > BaCO₃", "BaCO₃ > SrCO₃ > CaCO₃ > MgCO₃ > BeCO₃", "MgCO₃ > BeCO₃ > CaCO₃ > SrCO₃ > BaCO₃", "CaCO₃ > MgCO₃ > BeCO₃ > SrCO₃ > BaCO₃"],
        correct: 1,
        explanation: "Thermal stability increases down the group as larger cations have less polarizing power on carbonate ion."
    },
    {
        question: "Which order is correct for the solubility of Group 2 sulfates in water?",
        options: ["BeSO₄ > MgSO₄ > CaSO₄ > SrSO₄ > BaSO₄", "BaSO₄ > SrSO₄ > CaSO₄ > MgSO₄ > BeSO₄", "MgSO₄ > BeSO₄ > CaSO₄ > SrSO₄ > BaSO₄", "CaSO₄ > SrSO₄ > BaSO₄ > MgSO₄ > BeSO₄"],
        correct: 0,
        explanation: "Solubility of Group 2 sulfates decreases down the group. BeSO₄ and MgSO₄ are highly soluble, BaSO₄ is insoluble."
    },
    {
        question: "The correct order of bond length in hydrogen halides is:",
        options: ["HF < HCl < HBr < HI", "HI < HBr < HCl < HF", "HCl < HF < HBr < HI", "HBr < HI < HF < HCl"],
        correct: 0,
        explanation: "Bond length increases down the group as halogen atomic size increases. HF has shortest bond."
    },
    {
        question: "Which shows the correct order of electron affinity for halogens?",
        options: ["F > Cl > Br > I", "Cl > F > Br > I", "I > Br > Cl > F", "Br > I > F > Cl"],
        correct: 1,
        explanation: "Cl has highest electron affinity. F is lower due to small size causing electron-electron repulsion."
    },
    {
        question: "The correct order of oxidizing power of halogens is:",
        options: ["F₂ > Cl₂ > Br₂ > I₂", "I₂ > Br₂ > Cl₂ > F₂", "Cl₂ > F₂ > Br₂ > I₂", "Br₂ > I₂ > F₂ > Cl₂"],
        correct: 0,
        explanation: "Oxidizing power decreases down the group. F₂ is the strongest oxidizing agent."
    },
    {
        question: "Which order represents the correct trend for metallic character in Period 3?",
        options: ["Na > Mg > Al > Si > P > S > Cl", "Cl > S > P > Si > Al > Mg > Na", "Al > Na > Mg > Si > P > S > Cl", "Na > Al > Mg > Si > P > S > Cl"],
        correct: 0,
        explanation: "Metallic character decreases across a period from left to right as electronegativity increases."
    },
    {
        question: "The correct order of boiling points for noble gases is:",
        options: ["He < Ne < Ar < Kr < Xe < Rn", "Rn < Xe < Kr < Ar < Ne < He", "Ne < He < Ar < Kr < Xe < Rn", "He < Ar < Ne < Kr < Xe < Rn"],
        correct: 0,
        explanation: "Boiling point increases down the group due to increasing van der Waals forces with larger atomic size."
    },
    {
        question: "Which shows the correct order of acid strength for hydrogen halides?",
        options: ["HF > HCl > HBr > HI", "HI > HBr > HCl > HF", "HCl > HF > HI > HBr", "HBr > HI > HCl > HF"],
        correct: 1,
        explanation: "Acid strength increases down the group as H-X bond becomes weaker and easier to break."
    },
    {
        question: "The correct order of covalent character in Group 1 chlorides is:",
        options: ["LiCl > NaCl > KCl > RbCl", "RbCl > KCl > NaCl > LiCl", "NaCl > LiCl > RbCl > KCl", "KCl > RbCl > LiCl > NaCl"],
        correct: 0,
        explanation: "Covalent character decreases down the group. Li⁺ has highest charge density, causing maximum polarization."
    },
    {
        question: "Which order is correct for the density of Group 1 elements?",
        options: ["Li < Na < K < Rb < Cs", "Cs < Rb < K < Na < Li", "Na < Li < K < Rb < Cs", "Li < K < Na < Rb < Cs"],
        correct: 3,
        explanation: "Density generally increases down the group, but K < Na due to large increase in volume compared to mass."
    },
    {
        question: "The correct order of reducing power of Group 1 elements is:",
        options: ["Li > Na > K > Rb > Cs", "Cs > Rb > K > Na > Li", "Na > Li > Cs > Rb > K", "K > Rb > Cs > Na > Li"],
        correct: 1,
        explanation: "Reducing power increases down the group as ionization energy decreases, making electron loss easier."
    },
    {
        question: "Which shows the correct order of ionic radii for isoelectronic species?",
        options: ["O²⁻ > F⁻ > Na⁺ > Mg²⁺ > Al³⁺", "Al³⁺ > Mg²⁺ > Na⁺ > F⁻ > O²⁻", "F⁻ > O²⁻ > Na⁺ > Mg²⁺ > Al³⁺", "Na⁺ > Mg²⁺ > Al³⁺ > F⁻ > O²⁻"],
        correct: 0,
        explanation: "For isoelectronic species, ionic radius decreases with increasing nuclear charge. More protons = smaller size."
    },
    {
        question: "The correct order of lattice energy for Group 2 oxides is:",
        options: ["BeO > MgO > CaO > SrO > BaO", "BaO > SrO > CaO > MgO > BeO", "MgO > BeO > CaO > SrO > BaO", "CaO > SrO > BaO > BeO > MgO"],
        correct: 0,
        explanation: "Lattice energy is inversely proportional to ionic size. BeO has highest lattice energy due to smallest Be²⁺ ion."
    },
    {
        question: "Which order represents the correct trend for first electron affinity across Period 2?",
        options: ["Li < Be < B < C < N < O < F", "F < O < N < C < B < Be < Li", "Be < Li < B < N < C < O < F", "Li < B < Be < C < N < O < F"],
        correct: 2,
        explanation: "Generally increases across period, but Be < Li (stable s² config) and N < C (half-filled p³ stability)."
    },
    {
        question: "The correct order of thermal stability of Group 1 nitrates is:",
        options: ["LiNO₃ < NaNO₃ < KNO₃ < RbNO₃ < CsNO₃", "CsNO₃ < RbNO₃ < KNO₃ < NaNO₃ < LiNO₃", "NaNO₃ < LiNO₃ < KNO₃ < RbNO₃ < CsNO₃", "LiNO₃ < KNO₃ < NaNO₃ < RbNO₃ < CsNO₃"],
        correct: 0,
        explanation: "Thermal stability increases down the group as larger cations have less polarizing effect on nitrate ion."
    },
    {
        question: "Which shows the correct order of bond dissociation energy for diatomic halogens?",
        options: ["F₂ > Cl₂ > Br₂ > I₂", "I₂ > Br₂ > Cl₂ > F₂", "Cl₂ > Br₂ > F₂ > I₂", "Br₂ > I₂ > Cl₂ > F₂"],
        correct: 2,
        explanation: "F₂ has lower bond energy than Cl₂ due to lone pair repulsion. Order: Cl₂ > Br₂ > F₂ > I₂"
    },
    {
        question: "The correct order of magnetic moment for 3d⁵ configuration is:",
        options: ["High spin > Low spin", "Low spin > High spin", "High spin = Low spin", "Cannot be determined"],
        correct: 0,
        explanation: "High spin d⁵ has 5 unpaired electrons (μ = 5.92 BM), low spin d⁵ has 1 unpaired electron (μ = 1.73 BM)."
    },
    {
        question: "Which order is correct for the stability of oxidation states in Group 15?",
        options: ["+3 > +5 for heavier elements", "+5 > +3 for heavier elements", "+3 = +5 for all elements", "No clear trend"],
        correct: 0,
        explanation: "Due to inert pair effect, +3 oxidation state becomes more stable than +5 for heavier Group 15 elements."
    },
    {
        question: "The correct order of crystal field splitting energy (Δ) for ligands is:",
        options: ["I⁻ < Br⁻ < Cl⁻ < F⁻ < H₂O < NH₃ < CN⁻", "CN⁻ < NH₃ < H₂O < F⁻ < Cl⁻ < Br⁻ < I⁻", "F⁻ < Cl⁻ < Br⁻ < I⁻ < H₂O < NH₃ < CN⁻", "H₂O < F⁻ < Cl⁻ < Br⁻ < I⁻ < NH₃ < CN⁻"],
        correct: 0,
        explanation: "This is the spectrochemical series. Strong field ligands like CN⁻ cause large splitting, weak field like I⁻ cause small splitting."
    },
    {
        question: "Which shows the correct order of stability for coordination compounds?",
        options: ["Chelate > Polydentate > Monodentate", "Monodentate > Polydentate > Chelate", "Chelate > Monodentate > Polydentate", "All have equal stability"],
        correct: 0,
        explanation: "Chelate effect makes chelating ligands form more stable complexes than monodentate ligands due to entropy factors."
    }
];

// Load inorganic quiz content
function loadInorganicQuiz() {
    const theoryInorganicQuiz = document.getElementById('theoryInorganicQuiz');

    theoryInorganicQuiz.innerHTML = `
        <div class="quiz-container inorganic-quiz">
            <div class="quiz-header">
                <h2 class="quiz-title">
                    <i class="fas fa-table"></i> Inorganic Chemistry Orders & Tables Quiz
                </h2>
                <div class="quiz-progress">
                    <div class="progress-info">
                        <span>Question <span id="currentInorganicQuestionNum">1</span> of ${inorganicQuizData.length}</span>
                        <span>Score: <span id="inorganicQuizScore">0</span>/${inorganicQuizData.length}</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" id="inorganicProgressFill"></div>
                    </div>
                </div>

                <div class="quiz-timers">
                    <div class="timer-container">
                        <div class="timer-label">Question Time</div>
                        <div class="timer-display" id="inorganicQuestionTimer">00:30</div>
                    </div>
                    <div class="timer-container">
                        <div class="timer-label">Total Time</div>
                        <div class="timer-display" id="inorganicTotalTimer">15:00</div>
                    </div>
                </div>
            </div>

            <div class="quiz-content" id="inorganicQuizContent">
                <!-- Quiz questions will be loaded here -->
            </div>

            <div class="quiz-navigation">
                <button class="quiz-nav-btn" onclick="previousInorganicQuestion()" id="inorganicPrevBtn" disabled>
                    <i class="fas fa-arrow-left"></i> Previous
                </button>
                <button class="quiz-nav-btn primary" onclick="nextInorganicQuestion()" id="inorganicNextBtn">
                    Next <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    `;

    // Load first question and start timers
    loadInorganicQuestion();
    startInorganicTotalTimer();
}

// Load current inorganic question
function loadInorganicQuestion() {
    const question = inorganicQuizData[currentInorganicQuestion];
    const quizContent = document.getElementById('inorganicQuizContent');

    // Reset answered state and start question timer
    inorganicQuizAnswered = false;
    startInorganicQuestionTimer();

    // Update progress
    document.getElementById('currentInorganicQuestionNum').textContent = currentInorganicQuestion + 1;
    const progressFill = document.getElementById('inorganicProgressFill');
    if (progressFill) {
        const progressPercent = ((currentInorganicQuestion + 1) / inorganicQuizData.length) * 100;
        progressFill.style.width = progressPercent + '%';
    }

    quizContent.innerHTML = `
        <div class="question-card">
            <div class="question-number">Question ${currentInorganicQuestion + 1}</div>
            <div class="question-text">${question.question}</div>

            <div class="options-container">
                ${question.options.map((option, index) => `
                    <button class="option-btn" onclick="selectInorganicAnswer(${index})" id="inorganicOption${index}">
                        <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                        <span class="option-text">${option}</span>
                    </button>
                `).join('')}
            </div>

            <div class="explanation" id="inorganicExplanation" style="display: none;">
                <div class="explanation-header">
                    <i class="fas fa-lightbulb"></i> Explanation
                </div>
                <div class="explanation-text">${question.explanation}</div>
            </div>
        </div>
    `;

    // Update navigation buttons
    const prevBtn = document.getElementById('inorganicPrevBtn');
    const nextBtn = document.getElementById('inorganicNextBtn');
    if (prevBtn) prevBtn.disabled = currentInorganicQuestion === 0;
    if (nextBtn) nextBtn.disabled = true;
}

// Select inorganic quiz answer
function selectInorganicAnswer(selectedIndex) {
    if (inorganicQuizAnswered) return;

    const question = inorganicQuizData[currentInorganicQuestion];
    const options = document.querySelectorAll('#inorganicQuizContent .option-btn');
    const explanation = document.getElementById('inorganicExplanation');

    inorganicQuizAnswered = true;

    // Stop question timer
    stopInorganicQuestionTimer();

    // Show correct/incorrect styling
    options.forEach((option, index) => {
        if (index === question.correct) {
            option.classList.add('correct');
        } else if (index === selectedIndex && index !== question.correct && selectedIndex !== -1) {
            option.classList.add('incorrect');
        }
        option.disabled = true;
    });

    // Update score (only if answered correctly and not timed out)
    if (selectedIndex === question.correct && selectedIndex !== -1) {
        inorganicQuizScore++;
        document.getElementById('inorganicQuizScore').textContent = inorganicQuizScore;
    }

    // Show explanation
    explanation.style.display = 'block';

    // Enable next button
    document.getElementById('inorganicNextBtn').disabled = false;

    // Auto-advance after 3 seconds if time ran out
    if (selectedIndex === -1) {
        setTimeout(() => {
            nextInorganicQuestion();
        }, 3000);
    }
}

// Navigate to next inorganic question
function nextInorganicQuestion() {
    if (!inorganicQuizAnswered) return;

    // Stop current question timer
    stopInorganicQuestionTimer();

    currentInorganicQuestion++;

    if (currentInorganicQuestion >= inorganicQuizData.length) {
        showInorganicQuizResults();
    } else {
        loadInorganicQuestion();
        document.getElementById('inorganicNextBtn').disabled = true;
    }

    // Update navigation buttons
    const prevBtn = document.getElementById('inorganicPrevBtn');
    if (prevBtn) {
        prevBtn.disabled = currentInorganicQuestion === 0;
    }
}

// Navigate to previous inorganic question
function previousInorganicQuestion() {
    if (currentInorganicQuestion === 0) return;

    // Stop current question timer
    stopInorganicQuestionTimer();

    currentInorganicQuestion--;
    loadInorganicQuestion();

    // Update navigation buttons
    const prevBtn = document.getElementById('inorganicPrevBtn');
    const nextBtn = document.getElementById('inorganicNextBtn');
    if (prevBtn) prevBtn.disabled = currentInorganicQuestion === 0;
    if (nextBtn) nextBtn.disabled = false;
}

// Start inorganic question timer
function startInorganicQuestionTimer() {
    inorganicQuestionTimeLeft = 30;
    updateInorganicQuestionTimer();

    inorganicQuestionTimer = setInterval(() => {
        inorganicQuestionTimeLeft--;
        updateInorganicQuestionTimer();

        if (inorganicQuestionTimeLeft <= 0) {
            stopInorganicQuestionTimer();
            // Auto-select no answer (timeout)
            selectInorganicAnswer(-1);
        }
    }, 1000);
}

// Stop inorganic question timer
function stopInorganicQuestionTimer() {
    if (inorganicQuestionTimer) {
        clearInterval(inorganicQuestionTimer);
        inorganicQuestionTimer = null;
    }
}

// Update inorganic question timer display
function updateInorganicQuestionTimer() {
    const timerElement = document.getElementById('inorganicQuestionTimer');
    if (timerElement) {
        const minutes = Math.floor(inorganicQuestionTimeLeft / 60);
        const seconds = inorganicQuestionTimeLeft % 60;
        timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        // Add warning class when time is running low
        if (inorganicQuestionTimeLeft <= 10) {
            timerElement.classList.add('timer-warning');
        } else {
            timerElement.classList.remove('timer-warning');
        }
    }
}

// Start inorganic total timer
function startInorganicTotalTimer() {
    inorganicTotalTimeLeft = 900; // 15 minutes
    updateInorganicTotalTimer();

    inorganicTotalTimer = setInterval(() => {
        inorganicTotalTimeLeft--;
        updateInorganicTotalTimer();

        if (inorganicTotalTimeLeft <= 0) {
            // Time's up - end quiz
            clearInterval(inorganicTotalTimer);
            inorganicTotalTimer = null;
            showInorganicQuizResults();
        }
    }, 1000);
}

// Update inorganic total timer display
function updateInorganicTotalTimer() {
    const timerElement = document.getElementById('inorganicTotalTimer');
    if (timerElement) {
        const minutes = Math.floor(inorganicTotalTimeLeft / 60);
        const seconds = inorganicTotalTimeLeft % 60;
        timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        // Add warning class when time is running low
        if (inorganicTotalTimeLeft <= 60) {
            timerElement.classList.add('timer-warning');
        } else {
            timerElement.classList.remove('timer-warning');
        }
    }
}

// Show inorganic quiz results
function showInorganicQuizResults() {
    // Stop all timers
    stopInorganicQuestionTimer();
    if (inorganicTotalTimer) {
        clearInterval(inorganicTotalTimer);
        inorganicTotalTimer = null;
    }

    const quizContent = document.getElementById('inorganicQuizContent');
    const percentage = Math.round((inorganicQuizScore / inorganicQuizData.length) * 100);

    let resultMessage = '';
    let resultClass = '';

    if (percentage >= 80) {
        resultMessage = 'Excellent! You have mastered inorganic chemistry orders and tables!';
        resultClass = 'excellent';
    } else if (percentage >= 60) {
        resultMessage = 'Good job! Keep practicing to improve your understanding.';
        resultClass = 'good';
    } else if (percentage >= 40) {
        resultMessage = 'Fair attempt. Review the concepts and try again.';
        resultClass = 'fair';
    } else {
        resultMessage = 'Keep studying! Focus on periodic trends and orders.';
        resultClass = 'needs-improvement';
    }

    quizContent.innerHTML = `
        <div class="quiz-results ${resultClass}">
            <div class="results-header">
                <i class="fas fa-chart-bar"></i>
                <h3>Quiz Complete!</h3>
            </div>

            <div class="results-score">
                <div class="score-circle">
                    <span class="score-number">${percentage}%</span>
                    <span class="score-label">Score</span>
                </div>
            </div>

            <div class="results-details">
                <div class="result-item">
                    <i class="fas fa-check-circle"></i>
                    <span>Correct Answers: ${inorganicQuizScore}/${inorganicQuizData.length}</span>
                </div>
                <div class="result-item">
                    <i class="fas fa-percentage"></i>
                    <span>Accuracy: ${percentage}%</span>
                </div>
            </div>

            <div class="results-message">
                <p>${resultMessage}</p>
            </div>

            <div class="results-actions">
                <button class="quiz-action-btn primary" onclick="restartInorganicQuiz()">
                    <i class="fas fa-redo"></i> Try Again
                </button>
                <button class="quiz-action-btn secondary" onclick="showTheoryTab('ncertTables')">
                    <i class="fas fa-table"></i> Study Tables
                </button>
            </div>
        </div>
    `;

    // Hide navigation
    const quizNavigation = document.querySelector('.quiz-navigation');
    if (quizNavigation) {
        quizNavigation.style.display = 'none';
    }
}

// Restart inorganic quiz
function restartInorganicQuiz() {
    // Stop all timers
    stopInorganicQuestionTimer();
    if (inorganicTotalTimer) {
        clearInterval(inorganicTotalTimer);
        inorganicTotalTimer = null;
    }

    // Reset quiz state
    currentInorganicQuestion = 0;
    inorganicQuizScore = 0;
    inorganicQuizAnswered = false;
    inorganicQuestionTimeLeft = 30;
    inorganicTotalTimeLeft = 900;

    // Reset score display
    const scoreElement = document.getElementById('inorganicQuizScore');
    if (scoreElement) {
        scoreElement.textContent = '0';
    }

    // Show navigation
    const quizNavigation = document.querySelector('.quiz-navigation');
    if (quizNavigation) {
        quizNavigation.style.display = 'flex';
    }

    // Load first question and start timers
    loadInorganicQuestion();
    startInorganicTotalTimer();
}

// Get Allen Organic Cheat Sheet content
function getAllenOrganicCheatSheet() {
    return `
        <div class="allen-cheat-sheet-section">
            <h3 class="section-title">
                <i class="fas fa-file-image"></i> Allen Organic Cheat Sheet
            </h3>
            <p class="section-description">Comprehensive visual reference charts for organic chemistry reactions and mechanisms</p>

            <div class="cheat-sheet-container">
                <div class="cheat-sheet-item">
                    <h4><i class="fas fa-chart-line"></i> Organic Reactions Chart 1</h4>
                    <div class="cheat-sheet-image">
                        <img src="https://i.postimg.cc/mrzcS6Lk/Screenshot-2025-06-20-185001.png"
                             alt="Allen Organic Reactions Chart 1"
                             style="width: 100%; max-width: 800px; height: auto; border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
                    </div>
                </div>

                <div class="cheat-sheet-item">
                    <h4><i class="fas fa-chart-bar"></i> Organic Reactions Chart 2</h4>
                    <div class="cheat-sheet-image">
                        <img src="https://i.postimg.cc/q7PNDXqL/Screenshot-2025-06-20-185030.png"
                             alt="Allen Organic Reactions Chart 2"
                             style="width: 100%; max-width: 800px; height: auto; border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
                    </div>
                </div>
            </div>

            <div class="cheat-sheet-note">
                <i class="fas fa-info-circle"></i>
                <strong>Note:</strong> <span style="color: #e74c3c;">These charts provide quick reference for important organic reactions, mechanisms, and synthetic pathways commonly asked in competitive exams.</span>
            </div>
        </div>
    `;
}

// Load biomolecules content
function loadBiomoleculesContent() {
    const theoryBiomolecules = document.getElementById('theoryBiomolecules');

    theoryBiomolecules.innerHTML = `
        <div class="biomolecules-container">
            <h2 class="biomolecules-title">
                <i class="fas fa-dna"></i> Biomolecules & Polymers
            </h2>

            <!-- Navigation Buttons -->
            <div class="biomolecules-nav">
                <button class="biomol-nav-btn active" onclick="showBiomolSection('overview')" id="overviewNavBtn">
                    <i class="fas fa-home"></i> Overview
                </button>
                <button class="biomol-nav-btn" onclick="showBiomolSection('carbohydrates')" id="carbohydratesNavBtn">
                    <i class="fas fa-sugar"></i> Carbohydrates
                </button>
                <button class="biomol-nav-btn" onclick="showBiomolSection('proteins')" id="proteinsNavBtn">
                    <i class="fas fa-dna"></i> Proteins & Amino Acids
                </button>
                <button class="biomol-nav-btn" onclick="showBiomolSection('nucleic')" id="nucleicNavBtn">
                    <i class="fas fa-code"></i> Nucleic Acids
                </button>
                <button class="biomol-nav-btn" onclick="showBiomolSection('vitamins')" id="vitaminsNavBtn">
                    <i class="fas fa-pills"></i> Vitamins & Enzymes
                </button>
                <button class="biomol-nav-btn" onclick="showBiomolSection('polymers')" id="polymersNavBtn">
                    <i class="fas fa-link"></i> Polymers
                </button>
            </div>

            <!-- Content Sections -->
            <div id="biomolContent">
                <!-- Content will be loaded here -->
            </div>
        </div>
    `;

    // Show overview by default
    showBiomolSection('overview');
}

// Show biomolecules section
function showBiomolSection(section) {
    // Update navigation buttons
    document.querySelectorAll('.biomol-nav-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(section + 'NavBtn').classList.add('active');

    const contentDiv = document.getElementById('biomolContent');

    switch(section) {
        case 'overview':
            contentDiv.innerHTML = getBiomoleculesOverview();
            break;
        case 'carbohydrates':
            contentDiv.innerHTML = getCarbohydratesContent();
            break;
        case 'proteins':
            contentDiv.innerHTML = getProteinsContent();
            break;
        case 'nucleic':
            contentDiv.innerHTML = getNucleicAcidsContent();
            break;
        case 'vitamins':
            contentDiv.innerHTML = getVitaminsEnzymesContent();
            break;
        case 'polymers':
            contentDiv.innerHTML = getPolymersContent();
            break;
    }
}

// Get biomolecules overview content
function getBiomoleculesOverview() {
    return `
        <div class="biomol-overview">
            <h3 class="section-title">
                <i class="fas fa-microscope"></i> Biomolecules & Polymers Overview
            </h3>

            <div class="overview-grid">
                <div class="overview-card" onclick="showBiomolSection('carbohydrates')">
                    <div class="overview-icon">
                        <i class="fas fa-sugar"></i>
                    </div>
                    <h3>Carbohydrates</h3>
                    <p>Sugars, starches, and cellulose - energy storage and structural molecules</p>
                    <div class="overview-count">Monosaccharides, Disaccharides, Polysaccharides</div>
                </div>

                <div class="overview-card" onclick="showBiomolSection('proteins')">
                    <div class="overview-icon">
                        <i class="fas fa-dna"></i>
                    </div>
                    <h3>Proteins & Amino Acids</h3>
                    <p>Building blocks of life - enzymes, hormones, and structural proteins</p>
                    <div class="overview-count">20 Essential Amino Acids</div>
                </div>

                <div class="overview-card" onclick="showBiomolSection('nucleic')">
                    <div class="overview-icon">
                        <i class="fas fa-code"></i>
                    </div>
                    <h3>Nucleic Acids</h3>
                    <p>DNA and RNA - genetic information storage and transfer</p>
                    <div class="overview-count">Purines & Pyrimidines</div>
                </div>

                <div class="overview-card" onclick="showBiomolSection('vitamins')">
                    <div class="overview-icon">
                        <i class="fas fa-pills"></i>
                    </div>
                    <h3>Vitamins & Enzymes</h3>
                    <p>Essential nutrients and biological catalysts</p>
                    <div class="overview-count">Fat & Water Soluble</div>
                </div>

                <div class="overview-card" onclick="showBiomolSection('polymers')">
                    <div class="overview-icon">
                        <i class="fas fa-link"></i>
                    </div>
                    <h3>Synthetic Polymers</h3>
                    <p>Man-made macromolecules with diverse applications</p>
                    <div class="overview-count">Addition & Condensation</div>
                </div>
            </div>

            <div class="quick-reference">
                <h3><i class="fas fa-star"></i> Key Concepts</h3>
                <div class="quick-ref-grid">
                    <div class="quick-ref-item">
                        <strong>Biomolecules:</strong> Large organic molecules essential for life
                    </div>
                    <div class="quick-ref-item">
                        <strong>Polymers:</strong> Large molecules made of repeating units (monomers)
                    </div>
                    <div class="quick-ref-item">
                        <strong>Chirality:</strong> Many biomolecules exist in stereoisomeric forms
                    </div>
                    <div class="quick-ref-item">
                        <strong>Hydrogen Bonding:</strong> Critical for biomolecular structure and function
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Get carbohydrates content
function getCarbohydratesContent() {
    return `
        <div class="carbohydrates-section">
            <h3 class="section-title">
                <i class="fas fa-sugar"></i> Carbohydrates - The Energy Molecules
            </h3>

            <div class="content-grid">
                <div class="content-card">
                    <h4><i class="fas fa-atom"></i> Classification</h4>
                    <div class="classification-table">
                        <table class="biomol-table">
                            <thead>
                                <tr>
                                    <th>Type</th>
                                    <th>Formula</th>
                                    <th>Examples</th>
                                    <th>Function</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Monosaccharides</strong></td>
                                    <td>C<sub>n</sub>H<sub>2n</sub>O<sub>n</sub></td>
                                    <td>Glucose, Fructose, Galactose</td>
                                    <td>Immediate energy</td>
                                </tr>
                                <tr>
                                    <td><strong>Disaccharides</strong></td>
                                    <td>C<sub>12</sub>H<sub>22</sub>O<sub>11</sub></td>
                                    <td>Sucrose, Lactose, Maltose</td>
                                    <td>Transport form</td>
                                </tr>
                                <tr>
                                    <td><strong>Polysaccharides</strong></td>
                                    <td>(C<sub>6</sub>H<sub>10</sub>O<sub>5</sub>)<sub>n</sub></td>
                                    <td>Starch, Cellulose, Glycogen</td>
                                    <td>Storage & Structure</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="content-card">
                    <h4><i class="fas fa-shapes"></i> Important Structures</h4>
                    <div class="structures-grid">
                        <div class="structure-item">
                            <h5>α-D-Glucose (Pyranose)</h5>
                            <div class="structure-diagram">
                                <pre class="structure-ascii">
        CH₂OH
         |
    H----C----O----H
         |         |
    HO---C----H    |
         |         |
    H----C----OH   |
         |         |
    HO---C----H    |
         |         |
         C---------
         |
         H
                                </pre>
                            </div>
                            <p><strong>Chair conformation:</strong> Most stable form</p>
                        </div>

                        <div class="structure-item">
                            <h5>β-D-Glucose</h5>
                            <div class="structure-diagram">
                                <pre class="structure-ascii">
        CH₂OH
         |
    H----C----O----OH
         |         |
    HO---C----H    |
         |         |
    H----C----OH   |
         |         |
    HO---C----H    |
         |         |
         C---------
         |
         H
                                </pre>
                            </div>
                            <p><strong>Difference:</strong> OH group orientation at C1</p>
                        </div>
                    </div>
                </div>

                <div class="content-card">
                    <h4><i class="fas fa-flask"></i> Important Reactions</h4>
                    <div class="reactions-list">
                        <div class="reaction-item">
                            <h5>1. Glycosidic Bond Formation</h5>
                            <p><strong>Reaction:</strong> Glucose + Glucose → Maltose + H₂O</p>
                            <p><strong>Type:</strong> α(1→4) glycosidic linkage</p>
                            <p><strong>Enzyme:</strong> Glycosyltransferase</p>
                        </div>

                        <div class="reaction-item">
                            <h5>2. Hydrolysis</h5>
                            <p><strong>Reaction:</strong> Sucrose + H₂O → Glucose + Fructose</p>
                            <p><strong>Enzyme:</strong> Invertase (Sucrase)</p>
                            <p><strong>Mechanism:</strong> Acid or enzyme catalyzed</p>
                        </div>

                        <div class="reaction-item">
                            <h5>3. Oxidation</h5>
                            <p><strong>Benedict's Test:</strong> Reducing sugars → Cu₂O (red precipitate)</p>
                            <p><strong>Fehling's Test:</strong> Similar to Benedict's</p>
                            <p><strong>Tollens' Test:</strong> Aldoses → Silver mirror</p>
                        </div>
                    </div>
                </div>

                <div class="content-card">
                    <h4><i class="fas fa-table"></i> Disaccharides Table</h4>
                    <table class="biomol-table">
                        <thead>
                            <tr>
                                <th>Disaccharide</th>
                                <th>Components</th>
                                <th>Linkage</th>
                                <th>Source</th>
                                <th>Properties</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Sucrose</strong></td>
                                <td>Glucose + Fructose</td>
                                <td>α(1→2)</td>
                                <td>Sugar cane, beets</td>
                                <td>Non-reducing</td>
                            </tr>
                            <tr>
                                <td><strong>Lactose</strong></td>
                                <td>Glucose + Galactose</td>
                                <td>β(1→4)</td>
                                <td>Milk</td>
                                <td>Reducing</td>
                            </tr>
                            <tr>
                                <td><strong>Maltose</strong></td>
                                <td>Glucose + Glucose</td>
                                <td>α(1→4)</td>
                                <td>Starch hydrolysis</td>
                                <td>Reducing</td>
                            </tr>
                            <tr>
                                <td><strong>Cellobiose</strong></td>
                                <td>Glucose + Glucose</td>
                                <td>β(1→4)</td>
                                <td>Cellulose hydrolysis</td>
                                <td>Reducing</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

// Get proteins content
function getProteinsContent() {
    return `
        <div class="proteins-section">
            <h3 class="section-title">
                <i class="fas fa-dna"></i> Proteins & Amino Acids - Building Blocks of Life
            </h3>

            <div class="content-grid">
                <div class="content-card">
                    <h4><i class="fas fa-building"></i> Amino Acid Structure</h4>
                    <div class="structure-diagram">
                        <pre class="structure-ascii">
        General Structure:

            H₂N—CH—COOH
                |
                R

        Where R = Side chain (variable group)

        Zwitterion form (physiological pH):

            H₃N⁺—CH—COO⁻
                 |
                 R
                        </pre>
                    </div>
                    <p><strong>Chirality:</strong> All amino acids except glycine are chiral (L-configuration in proteins)</p>
                </div>

                <div class="content-card">
                    <h4><i class="fas fa-table"></i> Essential Amino Acids Table</h4>
                    <table class="biomol-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>3-Letter</th>
                                <th>1-Letter</th>
                                <th>Side Chain</th>
                                <th>Properties</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Histidine</strong></td>
                                <td>His</td>
                                <td>H</td>
                                <td>Imidazole</td>
                                <td>Basic, aromatic</td>
                            </tr>
                            <tr>
                                <td><strong>Isoleucine</strong></td>
                                <td>Ile</td>
                                <td>I</td>
                                <td>Branched alkyl</td>
                                <td>Hydrophobic</td>
                            </tr>
                            <tr>
                                <td><strong>Leucine</strong></td>
                                <td>Leu</td>
                                <td>L</td>
                                <td>Branched alkyl</td>
                                <td>Hydrophobic</td>
                            </tr>
                            <tr>
                                <td><strong>Lysine</strong></td>
                                <td>Lys</td>
                                <td>K</td>
                                <td>Amino group</td>
                                <td>Basic, polar</td>
                            </tr>
                            <tr>
                                <td><strong>Methionine</strong></td>
                                <td>Met</td>
                                <td>M</td>
                                <td>Thioether</td>
                                <td>Hydrophobic</td>
                            </tr>
                            <tr>
                                <td><strong>Phenylalanine</strong></td>
                                <td>Phe</td>
                                <td>F</td>
                                <td>Benzyl</td>
                                <td>Aromatic, hydrophobic</td>
                            </tr>
                            <tr>
                                <td><strong>Threonine</strong></td>
                                <td>Thr</td>
                                <td>T</td>
                                <td>Hydroxyl</td>
                                <td>Polar, uncharged</td>
                            </tr>
                            <tr>
                                <td><strong>Tryptophan</strong></td>
                                <td>Trp</td>
                                <td>W</td>
                                <td>Indole</td>
                                <td>Aromatic, hydrophobic</td>
                            </tr>
                            <tr>
                                <td><strong>Valine</strong></td>
                                <td>Val</td>
                                <td>V</td>
                                <td>Branched alkyl</td>
                                <td>Hydrophobic</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="content-card">
                    <h4><i class="fas fa-layer-group"></i> Protein Structure Levels</h4>
                    <div class="structure-levels">
                        <div class="level-item">
                            <h5>1° Structure (Primary)</h5>
                            <p><strong>Definition:</strong> Linear sequence of amino acids</p>
                            <p><strong>Bonds:</strong> Peptide bonds (covalent)</p>
                            <p><strong>Example:</strong> Insulin A-chain: Gly-Ile-Val-Glu-Gln...</p>
                        </div>

                        <div class="level-item">
                            <h5>2° Structure (Secondary)</h5>
                            <p><strong>Definition:</strong> Local folding patterns</p>
                            <p><strong>Types:</strong> α-helix, β-sheet, β-turn</p>
                            <p><strong>Bonds:</strong> Hydrogen bonds between backbone atoms</p>
                        </div>

                        <div class="level-item">
                            <h5>3° Structure (Tertiary)</h5>
                            <p><strong>Definition:</strong> Overall 3D shape of single polypeptide</p>
                            <p><strong>Forces:</strong> H-bonds, ionic, hydrophobic, disulfide</p>
                            <p><strong>Example:</strong> Myoglobin, lysozyme</p>
                        </div>

                        <div class="level-item">
                            <h5>4° Structure (Quaternary)</h5>
                            <p><strong>Definition:</strong> Assembly of multiple polypeptides</p>
                            <p><strong>Example:</strong> Hemoglobin (4 subunits)</p>
                            <p><strong>Interactions:</strong> Same as tertiary structure</p>
                        </div>
                    </div>
                </div>

                <div class="content-card">
                    <h4><i class="fas fa-flask"></i> Peptide Bond Formation</h4>
                    <div class="reaction-mechanism">
                        <h5>Condensation Reaction:</h5>
                        <pre class="structure-ascii">
    H₂N-CHR₁-COOH + H₂N-CHR₂-COOH
                ↓ (-H₂O)
    H₂N-CHR₁-CO-NH-CHR₂-COOH

    Peptide Bond: -CO-NH- (amide linkage)

    Properties:
    • Planar structure (partial double bond character)
    • Trans configuration preferred
    • Restricted rotation around C-N bond
                        </pre>
                    </div>
                </div>

                <div class="content-card">
                    <h4><i class="fas fa-chart-bar"></i> Amino Acid Classification</h4>
                    <div class="classification-grid">
                        <div class="class-item">
                            <h5>Nonpolar (Hydrophobic)</h5>
                            <p><strong>Examples:</strong> Ala, Val, Leu, Ile, Met, Phe, Trp, Pro</p>
                            <p><strong>Location:</strong> Interior of proteins</p>
                        </div>

                        <div class="class-item">
                            <h5>Polar Uncharged</h5>
                            <p><strong>Examples:</strong> Ser, Thr, Cys, Tyr, Asn, Gln</p>
                            <p><strong>Feature:</strong> Can form hydrogen bonds</p>
                        </div>

                        <div class="class-item">
                            <h5>Positively Charged (Basic)</h5>
                            <p><strong>Examples:</strong> Lys, Arg, His</p>
                            <p><strong>pH:</strong> Protonated at physiological pH</p>
                        </div>

                        <div class="class-item">
                            <h5>Negatively Charged (Acidic)</h5>
                            <p><strong>Examples:</strong> Asp, Glu</p>
                            <p><strong>pH:</strong> Deprotonated at physiological pH</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Get nucleic acids content
function getNucleicAcidsContent() {
    return `
        <div class="nucleic-acids-section">
            <h3 class="section-title">
                <i class="fas fa-code"></i> Nucleic Acids - Genetic Information Storage
            </h3>

            <div class="content-grid">
                <div class="content-card">
                    <h4><i class="fas fa-building"></i> Nucleotide Structure</h4>
                    <div class="structure-diagram">
                        <pre class="structure-ascii">
        Nucleotide = Phosphate + Sugar + Base

                O⁻
                |
        O=P—O—CH₂   Base
                |     |
                O'    N
                |   /   \
                C—C     C
               /   \   /
              H     C=C
                   /   \
                  H     H

        Components:
        • Phosphate group (PO₄³⁻)
        • Pentose sugar (ribose/deoxyribose)
        • Nitrogenous base (purine/pyrimidine)
                        </pre>
                    </div>
                </div>

                <div class="content-card">
                    <h4><i class="fas fa-table"></i> Nitrogenous Bases</h4>
                    <table class="biomol-table">
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>DNA Bases</th>
                                <th>RNA Bases</th>
                                <th>Structure</th>
                                <th>Pairing</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td rowspan="2"><strong>Purines</strong><br>(Double ring)</td>
                                <td>Adenine (A)</td>
                                <td>Adenine (A)</td>
                                <td>6-aminopurine</td>
                                <td>A ≡ T (DNA)<br>A ≡ U (RNA)</td>
                            </tr>
                            <tr>
                                <td>Guanine (G)</td>
                                <td>Guanine (G)</td>
                                <td>2-amino-6-oxopurine</td>
                                <td>G ≡ C</td>
                            </tr>
                            <tr>
                                <td rowspan="2"><strong>Pyrimidines</strong><br>(Single ring)</td>
                                <td>Cytosine (C)</td>
                                <td>Cytosine (C)</td>
                                <td>2-oxy-4-aminopyrimidine</td>
                                <td>C ≡ G</td>
                            </tr>
                            <tr>
                                <td>Thymine (T)</td>
                                <td>Uracil (U)</td>
                                <td>T: 2,4-dioxo-5-methylpyrimidine<br>U: 2,4-dioxopyrimidine</td>
                                <td>T ≡ A (DNA)<br>U ≡ A (RNA)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="content-card">
                    <h4><i class="fas fa-dna"></i> DNA vs RNA Comparison</h4>
                    <table class="biomol-table">
                        <thead>
                            <tr>
                                <th>Property</th>
                                <th>DNA</th>
                                <th>RNA</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Sugar</strong></td>
                                <td>2'-Deoxyribose</td>
                                <td>Ribose</td>
                            </tr>
                            <tr>
                                <td><strong>Bases</strong></td>
                                <td>A, T, G, C</td>
                                <td>A, U, G, C</td>
                            </tr>
                            <tr>
                                <td><strong>Structure</strong></td>
                                <td>Double helix</td>
                                <td>Single strand</td>
                            </tr>
                            <tr>
                                <td><strong>Function</strong></td>
                                <td>Genetic storage</td>
                                <td>Protein synthesis</td>
                            </tr>
                            <tr>
                                <td><strong>Location</strong></td>
                                <td>Nucleus, mitochondria</td>
                                <td>Nucleus, cytoplasm, ribosomes</td>
                            </tr>
                            <tr>
                                <td><strong>Stability</strong></td>
                                <td>More stable</td>
                                <td>Less stable</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="content-card">
                    <h4><i class="fas fa-link"></i> DNA Double Helix</h4>
                    <div class="dna-structure">
                        <h5>Watson-Crick Model:</h5>
                        <ul>
                            <li><strong>Antiparallel strands:</strong> 5' → 3' and 3' → 5'</li>
                            <li><strong>Base pairing:</strong> A-T (2 H-bonds), G-C (3 H-bonds)</li>
                            <li><strong>Major groove:</strong> 22 Å wide</li>
                            <li><strong>Minor groove:</strong> 12 Å wide</li>
                            <li><strong>Helix diameter:</strong> 20 Å</li>
                            <li><strong>Base pair distance:</strong> 3.4 Å</li>
                            <li><strong>Complete turn:</strong> 10 base pairs (34 Å)</li>
                        </ul>

                        <h5>Chargaff's Rules:</h5>
                        <ul>
                            <li>[A] = [T] and [G] = [C]</li>
                            <li>[Purines] = [Pyrimidines]</li>
                            <li>%GC content varies between species</li>
                        </ul>
                    </div>
                </div>

                <div class="content-card">
                    <h4><i class="fas fa-cogs"></i> RNA Types and Functions</h4>
                    <table class="biomol-table">
                        <thead>
                            <tr>
                                <th>RNA Type</th>
                                <th>Function</th>
                                <th>Location</th>
                                <th>% of total RNA</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>mRNA</strong><br>(Messenger)</td>
                                <td>Carries genetic code from DNA to ribosomes</td>
                                <td>Nucleus → Cytoplasm</td>
                                <td>3-5%</td>
                            </tr>
                            <tr>
                                <td><strong>tRNA</strong><br>(Transfer)</td>
                                <td>Brings amino acids to ribosomes</td>
                                <td>Cytoplasm</td>
                                <td>10-15%</td>
                            </tr>
                            <tr>
                                <td><strong>rRNA</strong><br>(Ribosomal)</td>
                                <td>Structural component of ribosomes</td>
                                <td>Ribosomes</td>
                                <td>80-85%</td>
                            </tr>
                            <tr>
                                <td><strong>miRNA</strong><br>(Micro)</td>
                                <td>Gene regulation</td>
                                <td>Cytoplasm</td>
                                <td><1%</td>
                            </tr>
                            <tr>
                                <td><strong>siRNA</strong><br>(Small interfering)</td>
                                <td>Gene silencing</td>
                                <td>Cytoplasm</td>
                                <td><1%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="content-card">
                    <h4><i class="fas fa-exchange-alt"></i> Central Dogma</h4>
                    <div class="central-dogma">
                        <div class="dogma-flow">
                            <div class="dogma-step">
                                <h5>1. Replication</h5>
                                <p>DNA → DNA</p>
                                <p><strong>Enzyme:</strong> DNA Polymerase</p>
                                <p><strong>Direction:</strong> 5' → 3'</p>
                            </div>

                            <div class="dogma-arrow">→</div>

                            <div class="dogma-step">
                                <h5>2. Transcription</h5>
                                <p>DNA → RNA</p>
                                <p><strong>Enzyme:</strong> RNA Polymerase</p>
                                <p><strong>Product:</strong> mRNA, tRNA, rRNA</p>
                            </div>

                            <div class="dogma-arrow">→</div>

                            <div class="dogma-step">
                                <h5>3. Translation</h5>
                                <p>RNA → Protein</p>
                                <p><strong>Location:</strong> Ribosomes</p>
                                <p><strong>Code:</strong> Triplet codons</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Get vitamins and enzymes content
function getVitaminsEnzymesContent() {
    return `
        <div class="vitamins-enzymes-section">
            <h3 class="section-title">
                <i class="fas fa-pills"></i> Vitamins & Enzymes - Essential Nutrients & Catalysts
            </h3>

            <div class="content-grid">
                <div class="content-card">
                    <h4><i class="fas fa-water"></i> Water-Soluble Vitamins</h4>
                    <table class="biomol-table">
                        <thead>
                            <tr>
                                <th>Vitamin</th>
                                <th>Chemical Name</th>
                                <th>Function</th>
                                <th>Deficiency Disease</th>
                                <th>Sources</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>B₁</strong></td>
                                <td>Thiamine</td>
                                <td>Carbohydrate metabolism</td>
                                <td>Beriberi</td>
                                <td>Whole grains, pork</td>
                            </tr>
                            <tr>
                                <td><strong>B₂</strong></td>
                                <td>Riboflavin</td>
                                <td>Energy metabolism</td>
                                <td>Ariboflavinosis</td>
                                <td>Milk, eggs, leafy greens</td>
                            </tr>
                            <tr>
                                <td><strong>B₃</strong></td>
                                <td>Niacin (Nicotinic acid)</td>
                                <td>NAD/NADP synthesis</td>
                                <td>Pellagra</td>
                                <td>Meat, fish, nuts</td>
                            </tr>
                            <tr>
                                <td><strong>B₅</strong></td>
                                <td>Pantothenic acid</td>
                                <td>CoA synthesis</td>
                                <td>Rare</td>
                                <td>Widespread in foods</td>
                            </tr>
                            <tr>
                                <td><strong>B₆</strong></td>
                                <td>Pyridoxine</td>
                                <td>Amino acid metabolism</td>
                                <td>Anemia, dermatitis</td>
                                <td>Meat, fish, potatoes</td>
                            </tr>
                            <tr>
                                <td><strong>B₇</strong></td>
                                <td>Biotin</td>
                                <td>Fatty acid synthesis</td>
                                <td>Rare</td>
                                <td>Eggs, nuts, seeds</td>
                            </tr>
                            <tr>
                                <td><strong>B₉</strong></td>
                                <td>Folic acid</td>
                                <td>DNA synthesis</td>
                                <td>Megaloblastic anemia</td>
                                <td>Leafy greens, legumes</td>
                            </tr>
                            <tr>
                                <td><strong>B₁₂</strong></td>
                                <td>Cobalamin</td>
                                <td>DNA synthesis, nerve function</td>
                                <td>Pernicious anemia</td>
                                <td>Animal products</td>
                            </tr>
                            <tr>
                                <td><strong>C</strong></td>
                                <td>Ascorbic acid</td>
                                <td>Collagen synthesis, antioxidant</td>
                                <td>Scurvy</td>
                                <td>Citrus fruits, vegetables</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="content-card">
                    <h4><i class="fas fa-oil-can"></i> Fat-Soluble Vitamins</h4>
                    <table class="biomol-table">
                        <thead>
                            <tr>
                                <th>Vitamin</th>
                                <th>Chemical Name</th>
                                <th>Function</th>
                                <th>Deficiency Disease</th>
                                <th>Sources</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>A</strong></td>
                                <td>Retinol</td>
                                <td>Vision, immune function</td>
                                <td>Night blindness, xerophthalmia</td>
                                <td>Liver, dairy, carrots</td>
                            </tr>
                            <tr>
                                <td><strong>D</strong></td>
                                <td>Calciferol</td>
                                <td>Calcium absorption</td>
                                <td>Rickets, osteomalacia</td>
                                <td>Sunlight, fish, fortified milk</td>
                            </tr>
                            <tr>
                                <td><strong>E</strong></td>
                                <td>Tocopherol</td>
                                <td>Antioxidant, membrane protection</td>
                                <td>Hemolytic anemia</td>
                                <td>Vegetable oils, nuts</td>
                            </tr>
                            <tr>
                                <td><strong>K</strong></td>
                                <td>Phylloquinone</td>
                                <td>Blood clotting</td>
                                <td>Bleeding disorders</td>
                                <td>Leafy greens, gut bacteria</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="content-card">
                    <h4><i class="fas fa-cogs"></i> Enzyme Classification</h4>
                    <table class="biomol-table">
                        <thead>
                            <tr>
                                <th>Class</th>
                                <th>Function</th>
                                <th>Example</th>
                                <th>Reaction Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>1. Oxidoreductases</strong></td>
                                <td>Oxidation-reduction</td>
                                <td>Alcohol dehydrogenase</td>
                                <td>A + B → A⁻ + B⁺</td>
                            </tr>
                            <tr>
                                <td><strong>2. Transferases</strong></td>
                                <td>Group transfer</td>
                                <td>Aminotransferases</td>
                                <td>A-X + B → A + B-X</td>
                            </tr>
                            <tr>
                                <td><strong>3. Hydrolases</strong></td>
                                <td>Hydrolysis</td>
                                <td>Pepsin, trypsin</td>
                                <td>A-B + H₂O → A-H + B-OH</td>
                            </tr>
                            <tr>
                                <td><strong>4. Lyases</strong></td>
                                <td>Addition/removal of groups</td>
                                <td>Aldolase</td>
                                <td>A-B → A + B</td>
                            </tr>
                            <tr>
                                <td><strong>5. Isomerases</strong></td>
                                <td>Isomerization</td>
                                <td>Glucose isomerase</td>
                                <td>A → B (isomer)</td>
                            </tr>
                            <tr>
                                <td><strong>6. Ligases</strong></td>
                                <td>Bond formation (ATP required)</td>
                                <td>DNA ligase</td>
                                <td>A + B + ATP → A-B + ADP + Pi</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="content-card">
                    <h4><i class="fas fa-chart-line"></i> Enzyme Kinetics</h4>
                    <div class="kinetics-content">
                        <h5>Michaelis-Menten Equation:</h5>
                        <div class="equation">
                            <p><strong>v = (V<sub>max</sub> × [S]) / (K<sub>m</sub> + [S])</strong></p>
                        </div>

                        <div class="kinetics-parameters">
                            <div class="parameter">
                                <h6>V<sub>max</sub> (Maximum velocity)</h6>
                                <p>Maximum rate when enzyme is saturated</p>
                            </div>

                            <div class="parameter">
                                <h6>K<sub>m</sub> (Michaelis constant)</h6>
                                <p>Substrate concentration at ½ V<sub>max</sub></p>
                                <p>Lower K<sub>m</sub> = Higher affinity</p>
                            </div>

                            <div class="parameter">
                                <h6>k<sub>cat</sub> (Turnover number)</h6>
                                <p>Maximum number of substrate molecules converted per second</p>
                            </div>
                        </div>

                        <h5>Enzyme Inhibition:</h5>
                        <ul>
                            <li><strong>Competitive:</strong> Inhibitor competes with substrate for active site</li>
                            <li><strong>Non-competitive:</strong> Inhibitor binds to allosteric site</li>
                            <li><strong>Uncompetitive:</strong> Inhibitor binds only to enzyme-substrate complex</li>
                        </ul>
                    </div>
                </div>

                <div class="content-card">
                    <h4><i class="fas fa-thermometer-half"></i> Factors Affecting Enzyme Activity</h4>
                    <div class="factors-grid">
                        <div class="factor-item">
                            <h5>Temperature</h5>
                            <p><strong>Effect:</strong> Increases rate until denaturation</p>
                            <p><strong>Optimum:</strong> 37°C for human enzymes</p>
                            <p><strong>Q₁₀ rule:</strong> Rate doubles every 10°C rise</p>
                        </div>

                        <div class="factor-item">
                            <h5>pH</h5>
                            <p><strong>Effect:</strong> Affects ionization of active site</p>
                            <p><strong>Pepsin:</strong> pH 1.5-2.0</p>
                            <p><strong>Trypsin:</strong> pH 8.0-8.5</p>
                        </div>

                        <div class="factor-item">
                            <h5>Substrate Concentration</h5>
                            <p><strong>Low [S]:</strong> First-order kinetics</p>
                            <p><strong>High [S]:</strong> Zero-order kinetics</p>
                            <p><strong>Saturation:</strong> All active sites occupied</p>
                        </div>

                        <div class="factor-item">
                            <h5>Enzyme Concentration</h5>
                            <p><strong>Effect:</strong> Directly proportional to rate</p>
                            <p><strong>Limitation:</strong> Only at low [S]</p>
                            <p><strong>Regulation:</strong> Enzyme induction/repression</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Get polymers content
function getPolymersContent() {
    return `
        <div class="polymers-section">
            <h3 class="section-title">
                <i class="fas fa-link"></i> Polymers - Macromolecular Materials
            </h3>

            <div class="content-grid">
                <div class="content-card">
                    <h4><i class="fas fa-sitemap"></i> Polymer Classification</h4>
                    <div class="classification-tree">
                        <div class="class-level-1">
                            <h5>Based on Source:</h5>
                            <ul>
                                <li><strong>Natural:</strong> Starch, cellulose, proteins, DNA</li>
                                <li><strong>Semi-synthetic:</strong> Cellulose acetate, vulcanized rubber</li>
                                <li><strong>Synthetic:</strong> Polyethylene, PVC, nylon</li>
                            </ul>
                        </div>

                        <div class="class-level-1">
                            <h5>Based on Structure:</h5>
                            <ul>
                                <li><strong>Linear:</strong> Chain-like structure (HDPE, PVC)</li>
                                <li><strong>Branched:</strong> Side chains attached (LDPE, starch)</li>
                                <li><strong>Cross-linked:</strong> 3D network (bakelite, vulcanized rubber)</li>
                            </ul>
                        </div>

                        <div class="class-level-1">
                            <h5>Based on Polymerization:</h5>
                            <ul>
                                <li><strong>Addition:</strong> No by-products (polyethylene, polystyrene)</li>
                                <li><strong>Condensation:</strong> Small molecules eliminated (nylon, polyester)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="content-card">
                    <h4><i class="fas fa-plus"></i> Addition Polymers</h4>
                    <table class="biomol-table">
                        <thead>
                            <tr>
                                <th>Polymer</th>
                                <th>Monomer</th>
                                <th>Structure</th>
                                <th>Uses</th>
                                <th>Properties</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Polyethylene (PE)</strong></td>
                                <td>Ethylene (CH₂=CH₂)</td>
                                <td>-(CH₂-CH₂)ₙ-</td>
                                <td>Bags, bottles, pipes</td>
                                <td>Flexible, chemical resistant</td>
                            </tr>
                            <tr>
                                <td><strong>Polypropylene (PP)</strong></td>
                                <td>Propylene (CH₂=CH-CH₃)</td>
                                <td>-(CH₂-CH(CH₃))ₙ-</td>
                                <td>Carpets, ropes, containers</td>
                                <td>High melting point, tough</td>
                            </tr>
                            <tr>
                                <td><strong>Polystyrene (PS)</strong></td>
                                <td>Styrene (CH₂=CH-C₆H₅)</td>
                                <td>-(CH₂-CH(C₆H₅))ₙ-</td>
                                <td>Packaging, insulation</td>
                                <td>Rigid, transparent</td>
                            </tr>
                            <tr>
                                <td><strong>PVC</strong></td>
                                <td>Vinyl chloride (CH₂=CHCl)</td>
                                <td>-(CH₂-CHCl)ₙ-</td>
                                <td>Pipes, flooring, cables</td>
                                <td>Durable, flame resistant</td>
                            </tr>
                            <tr>
                                <td><strong>Teflon (PTFE)</strong></td>
                                <td>Tetrafluoroethylene (CF₂=CF₂)</td>
                                <td>-(CF₂-CF₂)ₙ-</td>
                                <td>Non-stick coatings</td>
                                <td>Chemically inert, low friction</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="content-card">
                    <h4><i class="fas fa-compress"></i> Condensation Polymers</h4>
                    <table class="biomol-table">
                        <thead>
                            <tr>
                                <th>Polymer</th>
                                <th>Monomers</th>
                                <th>Linkage</th>
                                <th>Uses</th>
                                <th>By-product</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Nylon-6,6</strong></td>
                                <td>Hexamethylenediamine + Adipic acid</td>
                                <td>Amide (-CONH-)</td>
                                <td>Textiles, ropes, carpets</td>
                                <td>H₂O</td>
                            </tr>
                            <tr>
                                <td><strong>Polyester (PET)</strong></td>
                                <td>Ethylene glycol + Terephthalic acid</td>
                                <td>Ester (-COO-)</td>
                                <td>Bottles, fibers, films</td>
                                <td>H₂O</td>
                            </tr>
                            <tr>
                                <td><strong>Bakelite</strong></td>
                                <td>Phenol + Formaldehyde</td>
                                <td>C-C cross-links</td>
                                <td>Electrical insulators</td>
                                <td>H₂O</td>
                            </tr>
                            <tr>
                                <td><strong>Melamine</strong></td>
                                <td>Melamine + Formaldehyde</td>
                                <td>C-N cross-links</td>
                                <td>Laminates, adhesives</td>
                                <td>H₂O</td>
                            </tr>
                            <tr>
                                <td><strong>Silicones</strong></td>
                                <td>Organosilicon compounds</td>
                                <td>Si-O-Si</td>
                                <td>Sealants, lubricants</td>
                                <td>H₂O, HCl</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="content-card">
                    <h4><i class="fas fa-industry"></i> Polymerization Methods</h4>
                    <div class="methods-grid">
                        <div class="method-item">
                            <h5>Free Radical Polymerization</h5>
                            <p><strong>Initiator:</strong> Benzoyl peroxide, AIBN</p>
                            <p><strong>Steps:</strong> Initiation → Propagation → Termination</p>
                            <p><strong>Examples:</strong> PE, PS, PVC</p>
                            <div class="mechanism">
                                <p><strong>Initiation:</strong> R-R → 2R•</p>
                                <p><strong>Propagation:</strong> R• + CH₂=CHX → R-CH₂-CHX•</p>
                                <p><strong>Termination:</strong> R• + R• → R-R</p>
                            </div>
                        </div>

                        <div class="method-item">
                            <h5>Ionic Polymerization</h5>
                            <p><strong>Cationic:</strong> Lewis acids (AlCl₃, BF₃)</p>
                            <p><strong>Anionic:</strong> Strong bases (BuLi, NaNH₂)</p>
                            <p><strong>Advantage:</strong> Better control over molecular weight</p>
                            <p><strong>Examples:</strong> Polyisobutylene (cationic), polystyrene (anionic)</p>
                        </div>

                        <div class="method-item">
                            <h5>Coordination Polymerization</h5>
                            <p><strong>Catalyst:</strong> Ziegler-Natta (TiCl₄ + Al(C₂H₅)₃)</p>
                            <p><strong>Advantage:</strong> Stereoregular polymers</p>
                            <p><strong>Products:</strong> Isotactic, syndiotactic polymers</p>
                            <p><strong>Examples:</strong> HDPE, isotactic PP</p>
                        </div>
                    </div>
                </div>

                <div class="content-card">
                    <h4><i class="fas fa-thermometer-half"></i> Polymer Properties</h4>
                    <div class="properties-comparison">
                        <h5>Thermoplastics vs Thermosets:</h5>
                        <table class="biomol-table">
                            <thead>
                                <tr>
                                    <th>Property</th>
                                    <th>Thermoplastics</th>
                                    <th>Thermosets</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Structure</strong></td>
                                    <td>Linear/branched chains</td>
                                    <td>Cross-linked network</td>
                                </tr>
                                <tr>
                                    <td><strong>Heating effect</strong></td>
                                    <td>Softens and melts</td>
                                    <td>Decomposes</td>
                                </tr>
                                <tr>
                                    <td><strong>Recyclability</strong></td>
                                    <td>Recyclable</td>
                                    <td>Non-recyclable</td>
                                </tr>
                                <tr>
                                    <td><strong>Mechanical strength</strong></td>
                                    <td>Lower</td>
                                    <td>Higher</td>
                                </tr>
                                <tr>
                                    <td><strong>Examples</strong></td>
                                    <td>PE, PP, PS, PVC</td>
                                    <td>Bakelite, melamine, epoxy</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="content-card">
                    <h4><i class="fas fa-recycle"></i> Biodegradable Polymers</h4>
                    <table class="biomol-table">
                        <thead>
                            <tr>
                                <th>Polymer</th>
                                <th>Source</th>
                                <th>Degradation</th>
                                <th>Applications</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>PLA</strong><br>(Polylactic acid)</td>
                                <td>Corn starch, sugarcane</td>
                                <td>Hydrolysis</td>
                                <td>Food packaging, medical implants</td>
                            </tr>
                            <tr>
                                <td><strong>PHA</strong><br>(Polyhydroxyalkanoates)</td>
                                <td>Bacterial fermentation</td>
                                <td>Enzymatic</td>
                                <td>Packaging, agriculture</td>
                            </tr>
                            <tr>
                                <td><strong>Starch-based</strong></td>
                                <td>Plant starch</td>
                                <td>Enzymatic/microbial</td>
                                <td>Disposable items</td>
                            </tr>
                            <tr>
                                <td><strong>Chitosan</strong></td>
                                <td>Chitin (shellfish)</td>
                                <td>Enzymatic</td>
                                <td>Medical, cosmetics</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="content-card">
                    <h4><i class="fas fa-cogs"></i> Polymer Processing</h4>
                    <div class="processing-methods">
                        <div class="process-item">
                            <h5>Injection Molding</h5>
                            <p><strong>Process:</strong> Molten polymer injected into mold</p>
                            <p><strong>Products:</strong> Bottles, containers, toys</p>
                            <p><strong>Materials:</strong> PE, PP, PS, ABS</p>
                        </div>

                        <div class="process-item">
                            <h5>Extrusion</h5>
                            <p><strong>Process:</strong> Polymer forced through die</p>
                            <p><strong>Products:</strong> Pipes, films, sheets</p>
                            <p><strong>Materials:</strong> PE, PVC, PP</p>
                        </div>

                        <div class="process-item">
                            <h5>Blow Molding</h5>
                            <p><strong>Process:</strong> Air blown into heated polymer</p>
                            <p><strong>Products:</strong> Bottles, containers</p>
                            <p><strong>Materials:</strong> PET, HDPE, PP</p>
                        </div>

                        <div class="process-item">
                            <h5>Compression Molding</h5>
                            <p><strong>Process:</strong> Polymer compressed in heated mold</p>
                            <p><strong>Products:</strong> Thermoset parts</p>
                            <p><strong>Materials:</strong> Phenolic, melamine, epoxy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Export functions for global access
window.chemistryReactions = {
    showTheoryTab,
    loadOrganicReactions,
    showReactionSection,
    getMainOverview,
    getOrganicReagents,
    getNamedReactions,
    getImportantConversions,
    getAllenOrganicCheatSheet,
    loadOrganicQuiz,
    selectOrganicAnswer,
    nextOrganicQuestion,
    previousOrganicQuestion,
    restartOrganicQuiz,
    loadBiomoleculesContent,
    showBiomolSection,
    getBiomoleculesOverview,
    getCarbohydratesContent,
    getProteinsContent,
    getNucleicAcidsContent,
    getVitaminsEnzymesContent,
    getPolymersContent
};

// Make functions globally available for HTML onclick handlers
window.showTheoryTab = showTheoryTab;
window.showReactionSection = showReactionSection;
window.getAllenOrganicCheatSheet = getAllenOrganicCheatSheet;
window.loadOrganicQuiz = loadOrganicQuiz;
window.selectOrganicAnswer = selectOrganicAnswer;
window.nextOrganicQuestion = nextOrganicQuestion;
window.previousOrganicQuestion = previousOrganicQuestion;
window.restartOrganicQuiz = restartOrganicQuiz;
window.loadInorganicQuiz = loadInorganicQuiz;
window.selectInorganicAnswer = selectInorganicAnswer;
window.nextInorganicQuestion = nextInorganicQuestion;
window.previousInorganicQuestion = previousInorganicQuestion;
window.restartInorganicQuiz = restartInorganicQuiz;
