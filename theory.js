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

        // Show/hide chemistry-specific tabs
        updateChemistryTabs(subject);

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

// Update chemistry-specific tabs visibility
function updateChemistryTabs(subject) {
    const reactionsTab = document.getElementById('reactionsTab');
    const organicQuizTab = document.getElementById('organicQuizTab');
    const inorganicQuizTab = document.getElementById('inorganicQuizTab');

    if (subject === 'chemistry') {
        // Show chemistry-specific tabs
        if (reactionsTab) reactionsTab.style.display = 'flex';
        if (organicQuizTab) organicQuizTab.style.display = 'flex';
        if (inorganicQuizTab) inorganicQuizTab.style.display = 'flex';
    } else {
        // Hide chemistry-specific tabs for other subjects
        if (reactionsTab) reactionsTab.style.display = 'none';
        if (organicQuizTab) organicQuizTab.style.display = 'none';
        if (inorganicQuizTab) inorganicQuizTab.style.display = 'none';

        // If currently on a chemistry-specific tab, switch to content tab
        if (reactionsTab && reactionsTab.classList.contains('active')) {
            showTheoryTab('content');
        }
        if (organicQuizTab && organicQuizTab.classList.contains('active')) {
            showTheoryTab('content');
        }
        if (inorganicQuizTab && inorganicQuizTab.classList.contains('active')) {
            showTheoryTab('content');
        }
    }
}

// Show theory tab (content, reactions, organicQuiz, inorganicQuiz, or PDF)
function showTheoryTab(tab) {
    const contentTab = document.getElementById('contentTab');
    const reactionsTab = document.getElementById('reactionsTab');
    const organicQuizTab = document.getElementById('organicQuizTab');
    const inorganicQuizTab = document.getElementById('inorganicQuizTab');
    const pdfTab = document.getElementById('pdfTab');
    const theoryContent = document.getElementById('theoryContent');
    const theoryReactions = document.getElementById('theoryReactions');
    const theoryOrganicQuiz = document.getElementById('theoryOrganicQuiz');
    const theoryInorganicQuiz = document.getElementById('theoryInorganicQuiz');
    const theoryPdfViewer = document.getElementById('theoryPdfViewer');

    // Remove active class from all tabs
    if (contentTab) contentTab.classList.remove('active');
    if (reactionsTab) reactionsTab.classList.remove('active');
    if (organicQuizTab) organicQuizTab.classList.remove('active');
    if (inorganicQuizTab) inorganicQuizTab.classList.remove('active');
    if (pdfTab) pdfTab.classList.remove('active');

    if (tab === 'content') {
        // Show content tab
        if (contentTab) contentTab.classList.add('active');
        if (theoryContent) theoryContent.style.display = 'block';
        if (theoryReactions) theoryReactions.style.display = 'none';
        if (theoryOrganicQuiz) theoryOrganicQuiz.style.display = 'none';
        if (theoryInorganicQuiz) theoryInorganicQuiz.style.display = 'none';
        if (theoryPdfViewer) theoryPdfViewer.style.display = 'none';
    } else if (tab === 'reactions') {
        // Show reactions tab
        if (reactionsTab) reactionsTab.classList.add('active');
        if (theoryContent) theoryContent.style.display = 'none';
        if (theoryReactions) theoryReactions.style.display = 'block';
        if (theoryOrganicQuiz) theoryOrganicQuiz.style.display = 'none';
        if (theoryInorganicQuiz) theoryInorganicQuiz.style.display = 'none';
        if (theoryPdfViewer) theoryPdfViewer.style.display = 'none';

        // Load reactions content if chemistry is selected
        if (currentSubject === 'chemistry') {
            loadOrganicReactions();
        }
    } else if (tab === 'organicQuiz') {
        // Show organic quiz tab
        if (organicQuizTab) organicQuizTab.classList.add('active');
        if (theoryContent) theoryContent.style.display = 'none';
        if (theoryReactions) theoryReactions.style.display = 'none';
        if (theoryOrganicQuiz) theoryOrganicQuiz.style.display = 'block';
        if (theoryInorganicQuiz) theoryInorganicQuiz.style.display = 'none';
        if (theoryPdfViewer) theoryPdfViewer.style.display = 'none';

        // Load organic quiz content if chemistry is selected
        if (currentSubject === 'chemistry') {
            loadOrganicQuiz();
        }
    } else if (tab === 'inorganicQuiz') {
        // Show inorganic quiz tab
        if (inorganicQuizTab) inorganicQuizTab.classList.add('active');
        if (theoryContent) theoryContent.style.display = 'none';
        if (theoryReactions) theoryReactions.style.display = 'none';
        if (theoryOrganicQuiz) theoryOrganicQuiz.style.display = 'none';
        if (theoryInorganicQuiz) theoryInorganicQuiz.style.display = 'block';
        if (theoryPdfViewer) theoryPdfViewer.style.display = 'none';

        // Load inorganic quiz content if chemistry is selected
        if (currentSubject === 'chemistry') {
            loadInorganicQuiz();
        }
    } else if (tab === 'pdf') {
        // Show PDF tab
        if (pdfTab) pdfTab.classList.add('active');
        if (theoryContent) theoryContent.style.display = 'none';
        if (theoryReactions) theoryReactions.style.display = 'none';
        if (theoryOrganicQuiz) theoryOrganicQuiz.style.display = 'none';
        if (theoryInorganicQuiz) theoryInorganicQuiz.style.display = 'none';
        if (theoryPdfViewer) theoryPdfViewer.style.display = 'block';
    }
}

// Go back to subject selection
function backToSubjects() {
    const theorySection = document.getElementById('theorySection');
    const theoryContentSection = document.getElementById('theoryContentSection');

    theorySection.style.display = 'block';
    theoryContentSection.style.display = 'none';

    // Hide chemistry-specific tabs when going back
    const reactionsTab = document.getElementById('reactionsTab');
    const organicQuizTab = document.getElementById('organicQuizTab');
    const inorganicQuizTab = document.getElementById('inorganicQuizTab');
    if (reactionsTab) reactionsTab.style.display = 'none';
    if (organicQuizTab) organicQuizTab.style.display = 'none';
    if (inorganicQuizTab) inorganicQuizTab.style.display = 'none';

    // Reset to content tab
    showTheoryTab('content');
}

// Go back to main page
function goBack() {
    window.location.href = 'index.html';
}

// Return to home page
function returnToHome() {
    window.location.href = 'index.html';
}

// Navigate to specific theory page
function navigateToTheory(subject) {
    const pageMap = {
        'maths': 'theory-maths.html',
        'mathematics': 'theory-maths.html',
        'physics': 'theory-physics.html',
        'chemistry': 'theory-chemistry.html',
        'english': 'theory-english.html',
        'logical-reasoning': 'theory-logical-reasoning.html'
    };

    const targetPage = pageMap[subject];
    if (targetPage) {
        window.location.href = targetPage;
    } else {
        console.error('Unknown subject:', subject);
    }
}

// Current reaction section being displayed
let currentReactionSection = 'main';

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
                    <i class="fas fa-file-image"></i> Allen Organic Cheat Sheet
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
                    <div class="overview-count">20+ Reactions</div>
                </div>

                <div class="overview-card" onclick="showReactionSection('conversions')">
                    <div class="overview-icon">
                        <i class="fas fa-exchange-alt"></i>
                    </div>
                    <h3>Important Conversions</h3>
                    <p>Key organic transformations and synthetic pathways</p>
                    <div class="overview-count">5 Conversions</div>
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
                    <p><strong>Use:</strong> R-X → Alkene (Elimination)</p>
                    <p><strong>Mechanism:</strong> E2 elimination mechanism</p>
                    <p><strong>Example:</strong> CH₃CH₂Br + KOH(alc) → CH₂=CH₂ + KBr + H₂O</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> C₂H₅Br + KOH(alcoholic) → C₂H₄ + KBr + H₂O</p>
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
                    <p><strong>Use:</strong> Nucleophilic addition to carbonyls</p>
                    <p><strong>Note:</strong> Forms alcohols from aldehydes/ketones</p>
                    <p><strong>Mechanism:</strong> Nucleophilic addition followed by hydrolysis</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> RCHO + R'MgX → R-CH(OH)-R' (after H₂O)</p>
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
                <i class="fas fa-atom"></i> Named Reactions (20+ Important Reactions)
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
                <i class="fas fa-exchange-alt"></i> Important Organic Conversions
            </h3>

            <div class="conversions-grid">
                <div class="conversion-card">
                    <h4>Baeyer-Villiger Oxidation</h4>
                    <p><strong>Conversion:</strong> Ketone → Ester</p>
                    <p><strong>Reagent:</strong> Peracid (RCO₃H) or H₂O₂</p>
                    <p><strong>Mechanism:</strong> Insertion of oxygen between C=O and adjacent carbon</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> R-CO-R' + RCO₃H → R-COO-R' + RCOOH</p>
                    </div>
                </div>

                <div class="conversion-card">
                    <h4>Cumene Process</h4>
                    <p><strong>Conversion:</strong> Cumene → Phenol + Acetone</p>
                    <p><strong>Conditions:</strong> O₂, 130°C, Cumene hydroperoxide intermediate</p>
                    <p><strong>Industrial:</strong> Major industrial route to phenol</p>
                    <div class="reaction-diagram">
                        <p><strong>Reaction:</strong> C₆H₅CH(CH₃)₂ + O₂ → C₆H₅OH + (CH₃)₂CO</p>
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

// Current organic quiz state
let currentOrganicQuestion = 0;
let organicQuizScore = 0;
let organicQuizAnswered = false;
let questionTimer = null;
let totalTimer = null;
let questionTimeLeft = 30; // 30 seconds per question
let totalTimeLeft = 900; // 15 minutes total (30 seconds × 30 questions)

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
    totalTimer = setInterval(() => {
        totalTimeLeft--;
        updateTotalTimerDisplay();

        if (totalTimeLeft <= 0) {
            clearInterval(totalTimer);
            totalTimeLeft = 0;
            updateTotalTimerDisplay();
            // Auto-submit quiz when time runs out
            showOrganicQuizResults();
        }
    }, 1000);
}

// Start question timer
function startQuestionTimer() {
    questionTimeLeft = 30;
    updateQuestionTimerDisplay();

    questionTimer = setInterval(() => {
        questionTimeLeft--;
        updateQuestionTimerDisplay();

        if (questionTimeLeft <= 0) {
            clearInterval(questionTimer);
            questionTimeLeft = 0;
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
    if (questionTimer) {
        clearInterval(questionTimer);
        questionTimer = null;
    }
}

// Update question timer display
function updateQuestionTimerDisplay() {
    const minutes = Math.floor(questionTimeLeft / 60);
    const seconds = questionTimeLeft % 60;
    const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    const timerElement = document.getElementById('questionTimer');
    if (timerElement) {
        timerElement.textContent = display;

        // Change color based on time left
        if (questionTimeLeft <= 5) {
            timerElement.style.color = '#f44336';
            timerElement.style.animation = 'pulse 1s infinite';
        } else if (questionTimeLeft <= 10) {
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
    const minutes = Math.floor(totalTimeLeft / 60);
    const seconds = totalTimeLeft % 60;
    const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    const timerElement = document.getElementById('totalTimer');
    if (timerElement) {
        timerElement.textContent = display;

        // Change color based on time left
        if (totalTimeLeft <= 60) {
            timerElement.style.color = '#f44336';
            timerElement.style.animation = 'pulse 1s infinite';
        } else if (totalTimeLeft <= 300) {
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
    if (totalTimer) {
        clearInterval(totalTimer);
        totalTimer = null;
    }

    const quizContent = document.getElementById('quizContent');
    const quizNavigation = document.getElementById('quiz-navigation');
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
    if (totalTimer) {
        clearInterval(totalTimer);
        totalTimer = null;
    }

    // Reset quiz state
    currentOrganicQuestion = 0;
    organicQuizScore = 0;
    organicQuizAnswered = false;
    questionTimeLeft = 30;
    totalTimeLeft = 900;

    // Reset score display
    const scoreElement = document.getElementById('quizScore');
    if (scoreElement) {
        scoreElement.textContent = '0';
    }

    // Show navigation
    const quizNavigation = document.getElementById('quiz-navigation');
    if (quizNavigation) {
        quizNavigation.style.display = 'flex';
    }

    // Load first question and start timers
    loadOrganicQuestion();
    startTotalTimer();
}

// ==================== CHEAT SHEET POPUP FUNCTIONS ====================

// Open cheat sheet image in popup
function openCheatSheetPopup(imageUrl, title) {
    const modal = document.getElementById('cheatSheetPopupModal');
    const modalImage = document.getElementById('cheatSheetPopupImage');
    const modalTitle = document.getElementById('cheatSheetPopupTitle');

    if (modal && modalImage && modalTitle) {
        modalTitle.textContent = title;
        modalImage.src = imageUrl;
        modalImage.alt = title;
        modal.style.display = 'flex';

        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
    }
}

// Close cheat sheet popup
function closeCheatSheetPopup() {
    const modal = document.getElementById('cheatSheetPopupModal');
    if (modal) {
        modal.style.display = 'none';
        // Restore body scroll
        document.body.style.overflow = 'auto';
    }
}

// Close popup when clicking outside the image
document.addEventListener('click', function(event) {
    const modal = document.getElementById('cheatSheetPopupModal');
    if (modal && event.target === modal) {
        closeCheatSheetPopup();
    }
});

// Close popup with ESC key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeCheatSheetPopup();
    }
});

// Make cheat sheet functions globally available
window.openCheatSheetPopup = openCheatSheetPopup;
window.closeCheatSheetPopup = closeCheatSheetPopup;
