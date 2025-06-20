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
    const organicQuizTab = document.getElementById('organicQuizTab');
    const pdfTab = document.getElementById('pdfTab');
    const theoryContent = document.getElementById('theoryContent');
    const theoryReactions = document.getElementById('theoryReactions');
    const theoryOrganicQuiz = document.getElementById('theoryOrganicQuiz');
    const theoryPdfViewer = document.getElementById('theoryPdfViewer');

    // Check if all required elements exist
    if (!contentTab || !reactionsTab || !organicQuizTab || !pdfTab ||
        !theoryContent || !theoryReactions || !theoryOrganicQuiz || !theoryPdfViewer) {
        console.error('Some required elements not found!');
        return;
    }

    // Remove active class from all tabs
    contentTab.classList.remove('active');
    reactionsTab.classList.remove('active');
    organicQuizTab.classList.remove('active');
    pdfTab.classList.remove('active');

    if (tab === 'content') {
        // Show content tab
        contentTab.classList.add('active');
        theoryContent.style.display = 'block';
        theoryReactions.style.display = 'none';
        theoryOrganicQuiz.style.display = 'none';
        theoryPdfViewer.style.display = 'none';
    } else if (tab === 'reactions') {
        // Show reactions tab
        reactionsTab.classList.add('active');
        theoryContent.style.display = 'none';
        theoryReactions.style.display = 'block';
        theoryOrganicQuiz.style.display = 'none';
        theoryPdfViewer.style.display = 'none';
        
        // Load reactions content
        loadOrganicReactions();
    } else if (tab === 'organicQuiz') {
        // Show organic quiz tab
        organicQuizTab.classList.add('active');
        theoryContent.style.display = 'none';
        theoryReactions.style.display = 'none';
        theoryOrganicQuiz.style.display = 'block';
        theoryPdfViewer.style.display = 'none';
        
        // Load organic quiz content
        loadOrganicQuiz();
    } else if (tab === 'pdf') {
        // Show PDF tab
        pdfTab.classList.add('active');
        theoryContent.style.display = 'none';
        theoryReactions.style.display = 'none';
        theoryOrganicQuiz.style.display = 'none';
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
                    <p>Key organic transformations, synthetic pathways, and modern coupling reactions</p>
                    <div class="overview-count">15+ Conversions</div>
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
                <i class="fas fa-exchange-alt"></i> Important Organic Conversions (15+ Key Transformations)
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

// Export functions for global access
window.chemistryReactions = {
    showTheoryTab,
    loadOrganicReactions,
    showReactionSection,
    getMainOverview,
    getOrganicReagents,
    getNamedReactions,
    getImportantConversions,
    loadOrganicQuiz,
    selectOrganicAnswer,
    nextOrganicQuestion,
    previousOrganicQuestion,
    restartOrganicQuiz
};

// Make functions globally available for HTML onclick handlers
window.showTheoryTab = showTheoryTab;
window.showReactionSection = showReactionSection;
window.selectOrganicAnswer = selectOrganicAnswer;
window.nextOrganicQuestion = nextOrganicQuestion;
window.previousOrganicQuestion = previousOrganicQuestion;
window.restartOrganicQuiz = restartOrganicQuiz;
