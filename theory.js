// Theory data for all subjects
const theoryData = {
    mathematics: {
        title: "Mathematics Theory",
        icon: "fas fa-calculator",
        pdfUrl: "https://drive.google.com/file/d/1PTKuLe7kRw5NodwtnFYTghSaOoR8s1KO/preview",
        topics: [
            {
                title: "Algebra",
                content: `
                    <h3>Basic Algebraic Concepts</h3>
                    <p><strong>Variables and Constants:</strong> Variables are symbols (usually letters) that represent unknown values, while constants are fixed values.</p>
                    
                    <h4>Linear Equations</h4>
                    <p>A linear equation in one variable has the form: ax + b = 0, where a ≠ 0</p>
                    <ul>
                        <li>Solution: x = -b/a</li>
                        <li>Example: 3x + 6 = 0 → x = -2</li>
                    </ul>
                    
                    <h4>Quadratic Equations</h4>
                    <p>Standard form: ax² + bx + c = 0, where a ≠ 0</p>
                    <p><strong>Quadratic Formula:</strong> x = (-b ± √(b² - 4ac)) / 2a</p>
                    <ul>
                        <li>Discriminant: Δ = b² - 4ac</li>
                        <li>If Δ > 0: Two real roots</li>
                        <li>If Δ = 0: One real root</li>
                        <li>If Δ < 0: No real roots</li>
                    </ul>
                    
                    <h4>Factorization</h4>
                    <p>Common formulas:</p>
                    <ul>
                        <li>a² - b² = (a + b)(a - b)</li>
                        <li>(a + b)² = a² + 2ab + b²</li>
                        <li>(a - b)² = a² - 2ab + b²</li>
                        <li>a³ + b³ = (a + b)(a² - ab + b²)</li>
                        <li>a³ - b³ = (a - b)(a² + ab + b²)</li>
                    </ul>
                `
            },
            {
                title: "Calculus",
                content: `
                    <h3>Differential Calculus</h3>
                    <p><strong>Limits:</strong> The limit of a function f(x) as x approaches a value 'a' is the value that f(x) gets arbitrarily close to.</p>
                    
                    <h4>Derivatives</h4>
                    <p>The derivative of a function f(x) is: f'(x) = lim(h→0) [f(x+h) - f(x)]/h</p>
                    
                    <p><strong>Basic Derivative Rules:</strong></p>
                    <ul>
                        <li>d/dx(c) = 0 (constant rule)</li>
                        <li>d/dx(x^n) = nx^(n-1) (power rule)</li>
                        <li>d/dx(sin x) = cos x</li>
                        <li>d/dx(cos x) = -sin x</li>
                        <li>d/dx(e^x) = e^x</li>
                        <li>d/dx(ln x) = 1/x</li>
                    </ul>
                    
                    <h4>Chain Rule</h4>
                    <p>If y = f(g(x)), then dy/dx = f'(g(x)) × g'(x)</p>
                    
                    <h3>Integral Calculus</h3>
                    <p><strong>Indefinite Integral:</strong> ∫f(x)dx = F(x) + C, where F'(x) = f(x)</p>
                    
                    <p><strong>Basic Integration Rules:</strong></p>
                    <ul>
                        <li>∫x^n dx = x^(n+1)/(n+1) + C (n ≠ -1)</li>
                        <li>∫sin x dx = -cos x + C</li>
                        <li>∫cos x dx = sin x + C</li>
                        <li>∫e^x dx = e^x + C</li>
                        <li>∫1/x dx = ln|x| + C</li>
                    </ul>
                    
                    <h4>Definite Integral</h4>
                    <p>∫[a to b] f(x)dx = F(b) - F(a), where F'(x) = f(x)</p>
                `
            },
            {
                title: "Geometry",
                content: `
                    <h3>Basic Geometric Concepts</h3>
                    
                    <h4>Triangles</h4>
                    <p><strong>Types of Triangles:</strong></p>
                    <ul>
                        <li>Equilateral: All sides equal</li>
                        <li>Isosceles: Two sides equal</li>
                        <li>Scalene: All sides different</li>
                        <li>Right-angled: One angle = 90°</li>
                    </ul>
                    
                    <p><strong>Triangle Properties:</strong></p>
                    <ul>
                        <li>Sum of angles = 180°</li>
                        <li>Area = (1/2) × base × height</li>
                        <li>Heron's formula: Area = √[s(s-a)(s-b)(s-c)], where s = (a+b+c)/2</li>
                    </ul>
                    
                    <h4>Circles</h4>
                    <ul>
                        <li>Circumference = 2πr</li>
                        <li>Area = πr²</li>
                        <li>Arc length = (θ/360°) × 2πr</li>
                        <li>Sector area = (θ/360°) × πr²</li>
                    </ul>
                    
                    <h4>Coordinate Geometry</h4>
                    <p><strong>Distance Formula:</strong> d = √[(x₂-x₁)² + (y₂-y₁)²]</p>
                    <p><strong>Midpoint Formula:</strong> M = ((x₁+x₂)/2, (y₁+y₂)/2)</p>
                    <p><strong>Slope of Line:</strong> m = (y₂-y₁)/(x₂-x₁)</p>
                    <p><strong>Equation of Line:</strong> y - y₁ = m(x - x₁)</p>
                `
            },
            {
                title: "Trigonometry",
                content: `
                    <h3>Trigonometric Ratios</h3>
                    <p>For a right triangle with angle θ:</p>
                    <ul>
                        <li>sin θ = opposite/hypotenuse</li>
                        <li>cos θ = adjacent/hypotenuse</li>
                        <li>tan θ = opposite/adjacent</li>
                        <li>csc θ = 1/sin θ</li>
                        <li>sec θ = 1/cos θ</li>
                        <li>cot θ = 1/tan θ</li>
                    </ul>

                    <h4>Trigonometric Identities</h4>
                    <p><strong>Pythagorean Identities:</strong></p>
                    <ul>
                        <li>sin²θ + cos²θ = 1</li>
                        <li>1 + tan²θ = sec²θ</li>
                        <li>1 + cot²θ = csc²θ</li>
                    </ul>

                    <p><strong>Sum and Difference Formulas:</strong></p>
                    <ul>
                        <li>sin(A ± B) = sin A cos B ± cos A sin B</li>
                        <li>cos(A ± B) = cos A cos B ∓ sin A sin B</li>
                        <li>tan(A ± B) = (tan A ± tan B)/(1 ∓ tan A tan B)</li>
                    </ul>

                    <p><strong>Double Angle Formulas:</strong></p>
                    <ul>
                        <li>sin 2θ = 2 sin θ cos θ</li>
                        <li>cos 2θ = cos²θ - sin²θ = 2cos²θ - 1 = 1 - 2sin²θ</li>
                        <li>tan 2θ = 2tan θ/(1 - tan²θ)</li>
                    </ul>
                `
            },
            {
                title: "Statistics & Probability",
                content: `
                    <h3>Measures of Central Tendency</h3>
                    <ul>
                        <li><strong>Mean:</strong> x̄ = Σx/n</li>
                        <li><strong>Median:</strong> Middle value when data is arranged in order</li>
                        <li><strong>Mode:</strong> Most frequently occurring value</li>
                    </ul>

                    <h4>Measures of Dispersion</h4>
                    <ul>
                        <li><strong>Range:</strong> Maximum - Minimum</li>
                        <li><strong>Variance:</strong> σ² = Σ(x - x̄)²/n</li>
                        <li><strong>Standard Deviation:</strong> σ = √variance</li>
                    </ul>

                    <h4>Probability</h4>
                    <p><strong>Basic Probability:</strong> P(E) = Number of favorable outcomes / Total number of outcomes</p>

                    <p><strong>Probability Rules:</strong></p>
                    <ul>
                        <li>P(A ∪ B) = P(A) + P(B) - P(A ∩ B)</li>
                        <li>P(A ∩ B) = P(A) × P(B) [for independent events]</li>
                        <li>P(A') = 1 - P(A)</li>
                    </ul>

                    <h4>Permutations and Combinations</h4>
                    <ul>
                        <li><strong>Permutations:</strong> ⁿPᵣ = n!/(n-r)!</li>
                        <li><strong>Combinations:</strong> ⁿCᵣ = n!/[r!(n-r)!]</li>
                    </ul>
                `
            }
        ]
    },
    physics: {
        title: "Physics Theory",
        icon: "fas fa-atom",
        pdfUrl: "https://drive.google.com/file/d/1pnLzV6BR-IO3y5g3nKmjVl0AuUPsvBZZ/preview",
        topics: [
            {
                title: "Mechanics",
                content: `
                    <h3>Motion in One Dimension</h3>
                    
                    <h4>Kinematic Equations</h4>
                    <p>For uniformly accelerated motion:</p>
                    <ul>
                        <li>v = u + at</li>
                        <li>s = ut + (1/2)at²</li>
                        <li>v² = u² + 2as</li>
                        <li>s = (u + v)t/2</li>
                    </ul>
                    <p>Where: u = initial velocity, v = final velocity, a = acceleration, t = time, s = displacement</p>
                    
                    <h4>Newton's Laws of Motion</h4>
                    <p><strong>First Law (Law of Inertia):</strong> An object at rest stays at rest, and an object in motion stays in motion unless acted upon by an external force.</p>
                    
                    <p><strong>Second Law:</strong> F = ma (Force equals mass times acceleration)</p>
                    
                    <p><strong>Third Law:</strong> For every action, there is an equal and opposite reaction.</p>
                    
                    <h4>Work, Energy, and Power</h4>
                    <ul>
                        <li>Work: W = F × s × cos θ</li>
                        <li>Kinetic Energy: KE = (1/2)mv²</li>
                        <li>Potential Energy: PE = mgh</li>
                        <li>Power: P = W/t = F × v</li>
                    </ul>
                    
                    <h4>Conservation Laws</h4>
                    <p><strong>Conservation of Energy:</strong> Total energy in an isolated system remains constant.</p>
                    <p><strong>Conservation of Momentum:</strong> Total momentum before collision = Total momentum after collision</p>
                `
            },
            {
                title: "Thermodynamics",
                content: `
                    <h3>Laws of Thermodynamics</h3>

                    <h4>Zeroth Law</h4>
                    <p>If two systems are in thermal equilibrium with a third system, they are in thermal equilibrium with each other.</p>

                    <h4>First Law</h4>
                    <p>Energy cannot be created or destroyed, only transformed from one form to another.</p>
                    <p><strong>Mathematical form:</strong> ΔU = Q - W</p>
                    <p>Where: ΔU = change in internal energy, Q = heat added, W = work done by system</p>

                    <h4>Second Law</h4>
                    <p>Heat flows naturally from hot to cold objects. Entropy of an isolated system always increases.</p>

                    <h4>Third Law</h4>
                    <p>The entropy of a perfect crystal at absolute zero temperature is zero.</p>

                    <h4>Heat Transfer</h4>
                    <ul>
                        <li><strong>Conduction:</strong> Heat transfer through direct contact</li>
                        <li><strong>Convection:</strong> Heat transfer through fluid motion</li>
                        <li><strong>Radiation:</strong> Heat transfer through electromagnetic waves</li>
                    </ul>
                `
            },
            {
                title: "Optics",
                content: `
                    <h3>Geometric Optics</h3>

                    <h4>Laws of Reflection</h4>
                    <ul>
                        <li>Angle of incidence = Angle of reflection</li>
                        <li>Incident ray, reflected ray, and normal lie in the same plane</li>
                    </ul>

                    <h4>Laws of Refraction (Snell's Law)</h4>
                    <p>n₁ sin θ₁ = n₂ sin θ₂</p>
                    <p>Where: n = refractive index, θ = angle with normal</p>

                    <h4>Lenses</h4>
                    <p><strong>Lens Formula:</strong> 1/f = 1/v - 1/u</p>
                    <p><strong>Magnification:</strong> m = v/u = h'/h</p>
                    <p>Where: f = focal length, v = image distance, u = object distance</p>

                    <h4>Mirrors</h4>
                    <p><strong>Mirror Formula:</strong> 1/f = 1/v + 1/u</p>
                    <p><strong>For spherical mirrors:</strong> f = R/2 (R = radius of curvature)</p>
                `
            },
            {
                title: "Electricity & Magnetism",
                content: `
                    <h3>Electric Current and Circuits</h3>

                    <h4>Ohm's Law</h4>
                    <p>V = IR</p>
                    <p>Where: V = voltage, I = current, R = resistance</p>

                    <h4>Power in Electric Circuits</h4>
                    <ul>
                        <li>P = VI = I²R = V²/R</li>
                        <li>Energy = P × t</li>
                    </ul>

                    <h4>Series and Parallel Circuits</h4>
                    <p><strong>Series Circuit:</strong></p>
                    <ul>
                        <li>Current: I₁ = I₂ = I₃ = I</li>
                        <li>Voltage: V = V₁ + V₂ + V₃</li>
                        <li>Resistance: R = R₁ + R₂ + R₃</li>
                    </ul>

                    <p><strong>Parallel Circuit:</strong></p>
                    <ul>
                        <li>Voltage: V₁ = V₂ = V₃ = V</li>
                        <li>Current: I = I₁ + I₂ + I₃</li>
                        <li>Resistance: 1/R = 1/R₁ + 1/R₂ + 1/R₃</li>
                    </ul>

                    <h4>Magnetic Effects</h4>
                    <ul>
                        <li><strong>Force on current-carrying conductor:</strong> F = BIL sin θ</li>
                        <li><strong>Electromagnetic induction:</strong> ε = -dΦ/dt (Faraday's Law)</li>
                        <li><strong>Lenz's Law:</strong> Induced current opposes the change causing it</li>
                    </ul>
                `
            },
            {
                title: "Modern Physics",
                content: `
                    <h3>Atomic Structure</h3>

                    <h4>Photoelectric Effect</h4>
                    <p>Einstein's equation: E = hf = hc/λ</p>
                    <p>Kinetic energy of photoelectron: KE = hf - φ</p>
                    <p>Where: h = Planck's constant, f = frequency, φ = work function</p>

                    <h4>Bohr's Model of Atom</h4>
                    <ul>
                        <li>Energy levels: E = -13.6/n² eV (for hydrogen)</li>
                        <li>Radius of orbit: r = 0.529n² Å</li>
                        <li>Angular momentum: L = nh/2π</li>
                    </ul>

                    <h4>Wave-Particle Duality</h4>
                    <ul>
                        <li><strong>de Broglie wavelength:</strong> λ = h/p = h/mv</li>
                        <li><strong>Uncertainty Principle:</strong> Δx × Δp ≥ h/4π</li>
                    </ul>

                    <h4>Nuclear Physics</h4>
                    <ul>
                        <li><strong>Mass-Energy relation:</strong> E = mc²</li>
                        <li><strong>Radioactive decay:</strong> N = N₀e^(-λt)</li>
                        <li><strong>Half-life:</strong> t₁/₂ = ln(2)/λ</li>
                    </ul>
                `
            }
        ]
    },
    chemistry: {
        title: "Chemistry Theory",
        icon: "fas fa-flask",
        pdfUrl: "https://drive.google.com/file/d/1gfabRlnnZoUEuEuGYgZ5ZOqyUaXUGDWT/preview",
        topics: [
            {
                title: "Atomic Structure",
                content: `
                    <h3>Atomic Models</h3>

                    <h4>Bohr's Model</h4>
                    <ul>
                        <li>Electrons revolve in fixed orbits around the nucleus</li>
                        <li>Energy of electron: E = -13.6/n² eV (for hydrogen)</li>
                        <li>Angular momentum: mvr = nh/2π</li>
                    </ul>

                    <h4>Quantum Numbers</h4>
                    <ul>
                        <li><strong>Principal (n):</strong> Energy level (1, 2, 3, ...)</li>
                        <li><strong>Azimuthal (l):</strong> Subshell (0 to n-1)</li>
                        <li><strong>Magnetic (m):</strong> Orbital orientation (-l to +l)</li>
                        <li><strong>Spin (s):</strong> Electron spin (±1/2)</li>
                    </ul>

                    <h4>Electronic Configuration</h4>
                    <p><strong>Aufbau Principle:</strong> Electrons fill orbitals in order of increasing energy</p>
                    <p><strong>Pauli Exclusion Principle:</strong> No two electrons can have the same set of quantum numbers</p>
                    <p><strong>Hund's Rule:</strong> Electrons occupy orbitals singly before pairing</p>

                    <h4>Periodic Trends</h4>
                    <ul>
                        <li><strong>Atomic Radius:</strong> Decreases across period, increases down group</li>
                        <li><strong>Ionization Energy:</strong> Increases across period, decreases down group</li>
                        <li><strong>Electronegativity:</strong> Increases across period, decreases down group</li>
                    </ul>
                `
            },
            {
                title: "Chemical Bonding",
                content: `
                    <h3>Types of Chemical Bonds</h3>

                    <h4>Ionic Bonding</h4>
                    <ul>
                        <li>Transfer of electrons from metal to non-metal</li>
                        <li>Electrostatic attraction between ions</li>
                        <li>High melting/boiling points</li>
                        <li>Conduct electricity when molten or dissolved</li>
                    </ul>

                    <h4>Covalent Bonding</h4>
                    <ul>
                        <li>Sharing of electron pairs between atoms</li>
                        <li>Can be single, double, or triple bonds</li>
                        <li>Polar or non-polar based on electronegativity difference</li>
                    </ul>

                    <h4>Metallic Bonding</h4>
                    <ul>
                        <li>Sea of delocalized electrons</li>
                        <li>Good electrical and thermal conductivity</li>
                        <li>Malleable and ductile</li>
                    </ul>

                    <h4>VSEPR Theory</h4>
                    <p>Valence Shell Electron Pair Repulsion theory predicts molecular geometry:</p>
                    <ul>
                        <li>2 electron pairs: Linear</li>
                        <li>3 electron pairs: Trigonal planar</li>
                        <li>4 electron pairs: Tetrahedral</li>
                        <li>5 electron pairs: Trigonal bipyramidal</li>
                        <li>6 electron pairs: Octahedral</li>
                    </ul>
                `
            },
            {
                title: "Chemical Kinetics",
                content: `
                    <h3>Rate of Reaction</h3>
                    <p>Rate = -d[Reactant]/dt = +d[Product]/dt</p>

                    <h4>Rate Law</h4>
                    <p>Rate = k[A]^m[B]^n</p>
                    <p>Where: k = rate constant, m,n = order of reaction</p>

                    <h4>Integrated Rate Laws</h4>
                    <p><strong>Zero Order:</strong> [A] = [A]₀ - kt</p>
                    <p><strong>First Order:</strong> ln[A] = ln[A]₀ - kt</p>
                    <p><strong>Second Order:</strong> 1/[A] = 1/[A]₀ + kt</p>

                    <h4>Arrhenius Equation</h4>
                    <p>k = Ae^(-Ea/RT)</p>
                    <p>Where: A = pre-exponential factor, Ea = activation energy</p>

                    <h4>Factors Affecting Rate</h4>
                    <ul>
                        <li>Concentration of reactants</li>
                        <li>Temperature</li>
                        <li>Presence of catalyst</li>
                        <li>Surface area</li>
                        <li>Nature of reactants</li>
                    </ul>
                `
            },
            {
                title: "Organic Chemistry",
                content: `
                    <h3>Hydrocarbons</h3>

                    <h4>Alkanes (CnH2n+2)</h4>
                    <ul>
                        <li>Saturated hydrocarbons</li>
                        <li>Single bonds only</li>
                        <li>General reactions: Substitution, Combustion</li>
                    </ul>

                    <h4>Alkenes (CnH2n)</h4>
                    <ul>
                        <li>Unsaturated hydrocarbons</li>
                        <li>Contains C=C double bond</li>
                        <li>General reactions: Addition reactions</li>
                    </ul>

                    <h4>Functional Groups</h4>
                    <ul>
                        <li><strong>Alcohols:</strong> -OH (hydroxyl group)</li>
                        <li><strong>Aldehydes:</strong> -CHO (carbonyl group)</li>
                        <li><strong>Ketones:</strong> >C=O (carbonyl group)</li>
                        <li><strong>Carboxylic acids:</strong> -COOH (carboxyl group)</li>
                        <li><strong>Esters:</strong> -COO- (ester linkage)</li>
                    </ul>

                    <h4>Isomerism</h4>
                    <ul>
                        <li><strong>Structural:</strong> Different connectivity</li>
                        <li><strong>Stereoisomerism:</strong> Same connectivity, different spatial arrangement</li>
                        <li><strong>Optical:</strong> Non-superimposable mirror images</li>
                        <li><strong>Geometrical:</strong> Cis-trans isomerism</li>
                    </ul>
                `
            }
        ]
    },
    english: {
        title: "English Theory",
        icon: "fas fa-language",
        pdfUrl: "https://drive.google.com/file/d/1URug3xW-hBVqi7zUoXMyGwUt18HsQ8CW/preview",
        topics: [
            {
                title: "Grammar Fundamentals",
                content: `
                    <h3>Parts of Speech</h3>

                    <h4>Nouns</h4>
                    <ul>
                        <li><strong>Common:</strong> General names (book, city)</li>
                        <li><strong>Proper:</strong> Specific names (London, Shakespeare)</li>
                        <li><strong>Abstract:</strong> Ideas, qualities (love, courage)</li>
                        <li><strong>Concrete:</strong> Physical objects (table, dog)</li>
                        <li><strong>Collective:</strong> Groups (team, family)</li>
                    </ul>

                    <h4>Verbs</h4>
                    <ul>
                        <li><strong>Action verbs:</strong> Express action (run, write)</li>
                        <li><strong>Linking verbs:</strong> Connect subject to complement (is, seem)</li>
                        <li><strong>Helping verbs:</strong> Assist main verb (have, will, must)</li>
                    </ul>

                    <h4>Tenses</h4>
                    <p><strong>Present Tense:</strong></p>
                    <ul>
                        <li>Simple: I write</li>
                        <li>Continuous: I am writing</li>
                        <li>Perfect: I have written</li>
                        <li>Perfect Continuous: I have been writing</li>
                    </ul>

                    <p><strong>Past Tense:</strong></p>
                    <ul>
                        <li>Simple: I wrote</li>
                        <li>Continuous: I was writing</li>
                        <li>Perfect: I had written</li>
                        <li>Perfect Continuous: I had been writing</li>
                    </ul>

                    <p><strong>Future Tense:</strong></p>
                    <ul>
                        <li>Simple: I will write</li>
                        <li>Continuous: I will be writing</li>
                        <li>Perfect: I will have written</li>
                        <li>Perfect Continuous: I will have been writing</li>
                    </ul>
                `
            },
            {
                title: "Reading Comprehension",
                content: `
                    <h3>Reading Strategies</h3>

                    <h4>Types of Questions</h4>
                    <ul>
                        <li><strong>Main Idea:</strong> Central theme of the passage</li>
                        <li><strong>Supporting Details:</strong> Facts that support the main idea</li>
                        <li><strong>Inference:</strong> Conclusions drawn from given information</li>
                        <li><strong>Vocabulary in Context:</strong> Meaning of words in specific context</li>
                        <li><strong>Author's Purpose:</strong> Why the author wrote the passage</li>
                        <li><strong>Tone and Mood:</strong> Author's attitude and emotional atmosphere</li>
                    </ul>

                    <h4>Reading Techniques</h4>
                    <ul>
                        <li><strong>Skimming:</strong> Quick reading for general idea</li>
                        <li><strong>Scanning:</strong> Looking for specific information</li>
                        <li><strong>Active Reading:</strong> Engaging with the text mentally</li>
                        <li><strong>Note-taking:</strong> Jotting down key points</li>
                    </ul>

                    <h4>Common Question Types</h4>
                    <ul>
                        <li>What is the main idea of the passage?</li>
                        <li>According to the passage...</li>
                        <li>The author implies that...</li>
                        <li>The word "X" in line Y most nearly means...</li>
                        <li>The author's attitude toward... is...</li>
                    </ul>
                `
            },
            {
                title: "Vocabulary Building",
                content: `
                    <h3>Word Formation</h3>

                    <h4>Prefixes</h4>
                    <ul>
                        <li><strong>un-, in-, dis-:</strong> not (unhappy, inactive, disagree)</li>
                        <li><strong>re-:</strong> again (rewrite, return)</li>
                        <li><strong>pre-:</strong> before (preview, prehistoric)</li>
                        <li><strong>over-:</strong> too much (overeat, overwork)</li>
                        <li><strong>under-:</strong> too little (underestimate, underpaid)</li>
                    </ul>

                    <h4>Suffixes</h4>
                    <ul>
                        <li><strong>-tion, -sion:</strong> action/state (creation, decision)</li>
                        <li><strong>-ment:</strong> result/state (development, agreement)</li>
                        <li><strong>-ness:</strong> quality (happiness, darkness)</li>
                        <li><strong>-ly:</strong> manner (quickly, carefully)</li>
                        <li><strong>-able, -ible:</strong> capable of (readable, visible)</li>
                    </ul>

                    <h4>Synonyms and Antonyms</h4>
                    <p><strong>Common Synonym Pairs:</strong></p>
                    <ul>
                        <li>Big - Large, Huge, Enormous</li>
                        <li>Happy - Joyful, Cheerful, Delighted</li>
                        <li>Smart - Intelligent, Clever, Brilliant</li>
                        <li>Fast - Quick, Rapid, Swift</li>
                    </ul>

                    <p><strong>Common Antonym Pairs:</strong></p>
                    <ul>
                        <li>Hot - Cold</li>
                        <li>Light - Dark</li>
                        <li>Easy - Difficult</li>
                        <li>Accept - Reject</li>
                    </ul>
                `
            }
        ]
    },
    'logical-reasoning': {
        title: "Logical Reasoning Theory",
        icon: "fas fa-puzzle-piece",
        pdfUrl: "https://drive.google.com/file/d/1URug3xW-hBVqi7zUoXMyGwUt18HsQ8CW/preview",
        topics: [
            {
                title: "Pattern Recognition",
                content: `
                    <h3>Types of Patterns</h3>

                    <h4>Number Patterns</h4>
                    <ul>
                        <li><strong>Arithmetic Sequence:</strong> Constant difference (2, 4, 6, 8...)</li>
                        <li><strong>Geometric Sequence:</strong> Constant ratio (2, 4, 8, 16...)</li>
                        <li><strong>Fibonacci Sequence:</strong> Sum of previous two (1, 1, 2, 3, 5, 8...)</li>
                        <li><strong>Square Numbers:</strong> Perfect squares (1, 4, 9, 16, 25...)</li>
                        <li><strong>Prime Numbers:</strong> Numbers with only two factors (2, 3, 5, 7, 11...)</li>
                    </ul>

                    <h4>Letter Patterns</h4>
                    <ul>
                        <li><strong>Alphabetical Order:</strong> A, B, C, D...</li>
                        <li><strong>Skip Patterns:</strong> A, C, E, G... (every alternate letter)</li>
                        <li><strong>Position Values:</strong> A=1, B=2, C=3...</li>
                    </ul>

                    <h4>Shape Patterns</h4>
                    <ul>
                        <li>Rotation patterns</li>
                        <li>Size progression</li>
                        <li>Color changes</li>
                        <li>Addition/subtraction of elements</li>
                    </ul>
                `
            },
            {
                title: "Analogies",
                content: `
                    <h3>Types of Analogies</h3>

                    <h4>Relationship Types</h4>
                    <ul>
                        <li><strong>Synonyms:</strong> Happy : Joyful :: Sad : Sorrowful</li>
                        <li><strong>Antonyms:</strong> Hot : Cold :: Light : Dark</li>
                        <li><strong>Part to Whole:</strong> Wheel : Car :: Page : Book</li>
                        <li><strong>Cause and Effect:</strong> Rain : Flood :: Fire : Smoke</li>
                        <li><strong>Function:</strong> Pen : Write :: Knife : Cut</li>
                        <li><strong>Category:</strong> Rose : Flower :: Oak : Tree</li>
                    </ul>

                    <h4>Solving Strategy</h4>
                    <ol>
                        <li>Identify the relationship between the first pair</li>
                        <li>Apply the same relationship to the second pair</li>
                        <li>Check if the relationship is consistent</li>
                        <li>Eliminate incorrect options</li>
                    </ol>

                    <h4>Common Patterns</h4>
                    <ul>
                        <li>Worker : Workplace (Doctor : Hospital)</li>
                        <li>Tool : Function (Hammer : Nail)</li>
                        <li>Animal : Home (Bird : Nest)</li>
                        <li>Degree : Intensity (Warm : Hot)</li>
                    </ul>
                `
            },
            {
                title: "Logical Deduction",
                content: `
                    <h3>Types of Logical Reasoning</h3>

                    <h4>Syllogisms</h4>
                    <p>Drawing conclusions from given premises</p>
                    <p><strong>Example:</strong></p>
                    <ul>
                        <li>All birds can fly (Major premise)</li>
                        <li>Sparrow is a bird (Minor premise)</li>
                        <li>Therefore, sparrow can fly (Conclusion)</li>
                    </ul>

                    <h4>Conditional Statements</h4>
                    <ul>
                        <li><strong>If-Then:</strong> If P, then Q</li>
                        <li><strong>Contrapositive:</strong> If not Q, then not P</li>
                        <li><strong>Converse:</strong> If Q, then P (not always true)</li>
                        <li><strong>Inverse:</strong> If not P, then not Q (not always true)</li>
                    </ul>

                    <h4>Problem-Solving Steps</h4>
                    <ol>
                        <li>Read the problem carefully</li>
                        <li>Identify given information</li>
                        <li>Determine what needs to be found</li>
                        <li>Apply logical rules</li>
                        <li>Check the conclusion</li>
                    </ol>
                `
            }
        ]
    }
};

// Initialize theory page
document.addEventListener('DOMContentLoaded', function() {
    // Initialize hyperspeed background
    if (typeof createHyperspeedBackground === 'function') {
        createHyperspeedBackground();
    }
    
    // Initialize countdown timer
    if (typeof initializeCountdown === 'function') {
        initializeCountdown();
    }
    
    // Initialize typing effect for title
    if (typeof typeWriter === 'function') {
        typeWriter();
    }
});

// Current subject for tab switching
let currentSubject = null;

// Show theory content for a subject
function showTheory(subject) {
    const theorySection = document.getElementById('theorySection');
    const theoryContentSection = document.getElementById('theoryContentSection');
    const theorySubjectTitle = document.getElementById('theorySubjectTitle');
    const theoryContent = document.getElementById('theoryContent');
    const pdfFrame = document.getElementById('pdfFrame');

    if (theoryData[subject]) {
        currentSubject = subject;

        // Hide subject selection and show theory content
        theorySection.style.display = 'none';
        theoryContentSection.style.display = 'block';

        // Set title
        theorySubjectTitle.innerHTML = `<i class="${theoryData[subject].icon}"></i> ${theoryData[subject].title}`;

        // Generate theory content
        let contentHTML = '';
        theoryData[subject].topics.forEach(topic => {
            contentHTML += `
                <div class="theory-topic">
                    <h3 class="topic-title">${topic.title}</h3>
                    <div class="topic-content">${topic.content}</div>
                </div>
            `;
        });

        theoryContent.innerHTML = contentHTML;

        // Set PDF URL
        pdfFrame.src = theoryData[subject].pdfUrl;

        // Reset to content tab
        showTheoryTab('content');
    }
}

// Show theory tab (content or PDF)
function showTheoryTab(tab) {
    const contentTab = document.getElementById('contentTab');
    const pdfTab = document.getElementById('pdfTab');
    const theoryContent = document.getElementById('theoryContent');
    const theoryPdfViewer = document.getElementById('theoryPdfViewer');

    // Remove active class from all tabs
    contentTab.classList.remove('active');
    pdfTab.classList.remove('active');

    if (tab === 'content') {
        // Show content tab
        contentTab.classList.add('active');
        theoryContent.style.display = 'block';
        theoryPdfViewer.style.display = 'none';
    } else if (tab === 'pdf') {
        // Show PDF tab
        pdfTab.classList.add('active');
        theoryContent.style.display = 'none';
        theoryPdfViewer.style.display = 'block';
    }
}

// Go back to subject selection
function backToSubjects() {
    const theorySection = document.getElementById('theorySection');
    const theoryContentSection = document.getElementById('theoryContentSection');
    
    theorySection.style.display = 'block';
    theoryContentSection.style.display = 'none';
}

// Go back to main page
function goBack() {
    window.location.href = 'index.html';
}

// Return to home page
function returnToHome() {
    window.location.href = 'index.html';
}
