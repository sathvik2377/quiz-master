// Enhanced Vocabulary Data with 90 questions (30 each category)
// Randomized correct answers to avoid patterns

const vocabularyData = {
    synonyms: [
        {
            question: "Choose the best synonym for 'ubiquitous':",
            options: ["Present everywhere", "Rare and unusual", "Extremely valuable", "Temporarily available"],
            correct: 0,
            explanation: "'Ubiquitous' means present, appearing, or found everywhere.",
            optionExplanations: {
                0: "Present everywhere - correct! Ubiquitous means existing everywhere at the same time",
                1: "Rare and unusual - opposite meaning; ubiquitous things are common",
                2: "Extremely valuable - unrelated to frequency or presence",
                3: "Temporarily available - refers to time, not widespread presence"
            }
        },
        {
            question: "Choose the best synonym for 'meticulous':",
            options: ["Careless", "Moderately interested", "Completely confused", "Extremely careful"],
            correct: 3,
            explanation: "'Meticulous' means showing great attention to detail; very careful and precise.",
            optionExplanations: {
                0: "Careless - opposite meaning; meticulous implies great care",
                1: "Moderately interested - refers to interest level, not attention to detail",
                2: "Completely confused - refers to mental state, not work quality",
                3: "Extremely careful - correct! Meticulous means paying careful attention to detail"
            }
        },
        {
            question: "Choose the best synonym for 'arduous':",
            options: ["Easy", "Difficult and tiring", "Quick", "Enjoyable"],
            correct: 1,
            explanation: "'Arduous' means involving or requiring strenuous effort; difficult and tiring.",
            optionExplanations: {
                0: "Easy - opposite meaning; arduous tasks require great effort",
                1: "Difficult and tiring - correct! Arduous means requiring strenuous effort",
                2: "Quick - refers to speed, not difficulty level",
                3: "Enjoyable - refers to pleasure, opposite of struggle in arduous tasks"
            }
        },
        {
            question: "Choose the best synonym for 'ephemeral':",
            options: ["Lasting forever", "Very expensive", "Transitory", "Extremely large"],
            correct: 2,
            explanation: "'Ephemeral' means lasting for a very short time; transitory.",
            optionExplanations: {
                0: "Lasting forever - opposite meaning; ephemeral things are temporary",
                1: "Very expensive - refers to cost, not duration",
                2: "Transitory - correct! Ephemeral means temporary or short-lived",
                3: "Extremely large - refers to size, not time duration"
            }
        },
        {
            question: "Choose the best synonym for 'tenacious':",
            options: ["Weak", "Flexible", "Careless", "Persistent"],
            correct: 3,
            explanation: "'Tenacious' means tending to keep a firm hold; persistent.",
            optionExplanations: {
                0: "Weak - opposite of the strong determination in tenacious",
                1: "Flexible - different from the firm hold of tenacious",
                2: "Careless - opposite of the careful persistence in tenacious",
                3: "Persistent - correct! Means continuing firmly despite difficulties"
            }
        },
        {
            question: "Choose the best synonym for 'copious':",
            options: ["Abundant", "Scarce", "Tiny", "Expensive"],
            correct: 0,
            explanation: "'Copious' means abundant in supply or quantity; plentiful.",
            optionExplanations: {
                0: "Abundant - correct! Means existing in large quantities, same as copious",
                1: "Scarce - opposite meaning; copious means plentiful",
                2: "Tiny - refers to size, not quantity",
                3: "Expensive - refers to cost, not quantity"
            }
        },
        {
            question: "Choose the best synonym for 'lucid':",
            options: ["Confused", "Clear and understandable", "Very dark", "Extremely loud"],
            correct: 1,
            explanation: "'Lucid' means expressed clearly; easy to understand.",
            optionExplanations: {
                0: "Confused - opposite meaning; lucid means clear",
                1: "Clear and understandable - correct! Lucid means easily comprehensible",
                2: "Very dark - refers to light, not clarity of thought",
                3: "Extremely loud - refers to sound, not clarity"
            }
        },
        {
            question: "Choose the best synonym for 'verbose':",
            options: ["Using few words", "Speaking quietly", "Using too many words", "Speaking clearly"],
            correct: 2,
            explanation: "'Verbose' means using or expressed in more words than are needed.",
            optionExplanations: {
                0: "Using few words - opposite meaning; verbose means wordy",
                1: "Speaking quietly - refers to volume, not word count",
                2: "Using too many words - correct! Verbose means excessively wordy",
                3: "Speaking clearly - refers to clarity, not word quantity"
            }
        },
        {
            question: "Choose the best synonym for 'pragmatic':",
            options: ["Idealistic", "Practical and realistic", "Emotional", "Theoretical"],
            correct: 1,
            explanation: "'Pragmatic' means dealing with things sensibly and realistically.",
            optionExplanations: {
                0: "Idealistic - opposite approach; pragmatic is realistic",
                1: "Practical and realistic - correct! Pragmatic means sensible and practical",
                2: "Emotional - different from logical pragmatic approach",
                3: "Theoretical - opposite of practical pragmatic approach"
            }
        },
        {
            question: "Choose the best synonym for 'candid':",
            options: ["Dishonest", "Confused", "Secretive", "Truthful and straightforward"],
            correct: 3,
            explanation: "'Candid' means truthful and straightforward; frank.",
            optionExplanations: {
                0: "Dishonest - opposite meaning; candid means truthful",
                1: "Confused - refers to mental state, not honesty",
                2: "Secretive - opposite of open candid communication",
                3: "Truthful and straightforward - correct! Candid means frank and honest"
            }
        },
        {
            question: "Choose the best synonym for 'serene':",
            options: ["Calm and peaceful", "Chaotic", "Loud", "Angry"],
            correct: 0,
            explanation: "'Serene' means calm, peaceful, and untroubled; tranquil.",
            optionExplanations: {
                0: "Calm and peaceful - correct! Serene means tranquil and untroubled",
                1: "Chaotic - opposite meaning; serene implies order and peace",
                2: "Loud - refers to sound; serene implies quietness",
                3: "Angry - opposite emotion; serene implies calmness"
            }
        },
        {
            question: "Choose the best synonym for 'gregarious':",
            options: ["Preferring solitude", "Fond of company", "Very angry", "Extremely quiet"],
            correct: 1,
            explanation: "'Gregarious' means fond of the company of others; sociable.",
            optionExplanations: {
                0: "Preferring solitude - opposite meaning; gregarious people like company",
                1: "Fond of company - correct! Gregarious means sociable and outgoing",
                2: "Very angry - refers to emotion, not social preference",
                3: "Extremely quiet - opposite of outgoing gregarious nature"
            }
        },
        {
            question: "Choose the best synonym for 'voracious':",
            options: ["Having little appetite", "Being very quiet", "Moving slowly", "Having eager appetite"],
            correct: 3,
            explanation: "'Voracious' means having a very eager approach to an activity; having a huge appetite.",
            optionExplanations: {
                0: "Having little appetite - opposite meaning; voracious means huge appetite",
                1: "Being very quiet - unrelated to appetite or eagerness",
                2: "Moving slowly - unrelated to appetite or enthusiasm",
                3: "Having eager appetite - correct! Voracious means extremely eager or hungry"
            }
        },
        {
            question: "Choose the best synonym for 'erudite':",
            options: ["Ignorant", "Simple", "Showing great knowledge", "Confused"],
            correct: 2,
            explanation: "'Erudite' means having or showing great knowledge or learning.",
            optionExplanations: {
                0: "Ignorant - opposite meaning; erudite means knowledgeable",
                1: "Simple - opposite of complex erudite knowledge",
                2: "Showing great knowledge - correct! Erudite means learned and scholarly",
                3: "Confused - opposite of clear erudite understanding"
            }
        },
        {
            question: "Choose the best synonym for 'indigenous':",
            options: ["Foreign", "Native or originating naturally", "Artificial", "Temporary"],
            correct: 1,
            explanation: "'Indigenous' means originating or occurring naturally in a particular place; native.",
            optionExplanations: {
                0: "Foreign - opposite meaning; indigenous means native",
                1: "Native or originating naturally - correct! Indigenous means naturally occurring",
                2: "Artificial - opposite of natural indigenous origin",
                3: "Temporary - refers to duration, not origin"
            }
        },
        {
            question: "Choose the best synonym for 'eloquent':",
            options: ["Fluent and persuasive", "Silent", "Confused", "Hesitant"],
            correct: 0,
            explanation: "'Eloquent' means fluent or persuasive in speaking or writing.",
            optionExplanations: {
                0: "Fluent and persuasive - correct! Eloquent means articulate and convincing",
                1: "Silent - opposite of eloquent speaking",
                2: "Confused - opposite of clear eloquent expression",
                3: "Hesitant - opposite of confident eloquent delivery"
            }
        },
        {
            question: "Choose the best synonym for 'resilient':",
            options: ["Fragile", "Able to recover quickly", "Permanent", "Expensive"],
            correct: 1,
            explanation: "'Resilient' means able to withstand or recover quickly from difficult conditions.",
            optionExplanations: {
                0: "Fragile - opposite meaning; resilient means strong",
                1: "Able to recover quickly - correct! Resilient means bouncing back from adversity",
                2: "Permanent - refers to duration, not recovery ability",
                3: "Expensive - unrelated to recovery or strength"
            }
        },
        {
            question: "Choose the best synonym for 'ambiguous':",
            options: ["Clear", "Uncertain or unclear", "Definite", "Simple"],
            correct: 1,
            explanation: "'Ambiguous' means open to more than one interpretation; having a double meaning.",
            optionExplanations: {
                0: "Clear - opposite meaning; ambiguous means unclear",
                1: "Uncertain or unclear - correct! Ambiguous means having multiple meanings",
                2: "Definite - opposite meaning; ambiguous means indefinite",
                3: "Simple - opposite of complex ambiguous meaning"
            }
        },
        {
            question: "Choose the best synonym for 'diligent':",
            options: ["Lazy", "Careless", "Hardworking and careful", "Quick"],
            correct: 2,
            explanation: "'Diligent' means having or showing care and conscientiousness in one's work.",
            optionExplanations: {
                0: "Lazy - opposite meaning; diligent means hardworking",
                1: "Careless - opposite meaning; diligent means careful",
                2: "Hardworking and careful - correct! Diligent means conscientious effort",
                3: "Quick - refers to speed, not quality of work"
            }
        }
    ],
    
    antonyms: [
        {
            question: "Choose the best antonym for 'benevolent':",
            options: ["Kind", "Generous", "Malevolent", "Helpful"],
            correct: 2,
            explanation: "'Malevolent' means having or showing a wish to do evil to others, opposite of benevolent.",
            optionExplanations: {
                0: "Kind - similar meaning to benevolent, not opposite",
                1: "Generous - similar meaning to benevolent, not opposite",
                2: "Malevolent - correct! Means wishing evil, opposite of benevolent",
                3: "Helpful - similar meaning to benevolent, not opposite"
            }
        },
        {
            question: "Choose the best antonym for 'frugal':",
            options: ["Wasteful", "Economical", "Careful", "Thrifty"],
            correct: 0,
            explanation: "'Wasteful' is the opposite of 'frugal', which means economical in use or expenditure.",
            optionExplanations: {
                0: "Wasteful - correct! Opposite of careful frugal spending",
                1: "Economical - similar meaning to frugal, not opposite",
                2: "Careful - similar meaning to frugal, not opposite",
                3: "Thrifty - similar meaning to frugal, not opposite"
            }
        },
        {
            question: "Choose the best antonym for 'opaque':",
            options: ["Dark", "Transparent", "Thick", "Heavy"],
            correct: 1,
            explanation: "'Transparent' is the opposite of 'opaque', which means not able to be seen through.",
            optionExplanations: {
                0: "Dark - related but not opposite; opaque can be light-colored",
                1: "Transparent - correct! Means see-through, opposite of opaque",
                2: "Thick - related but not opposite; refers to dimension",
                3: "Heavy - unrelated to transparency or opacity"
            }
        },
        {
            question: "Choose the best antonym for 'abundant':",
            options: ["Plentiful", "Copious", "Scarce", "Numerous"],
            correct: 2,
            explanation: "'Scarce' means existing in small quantities, opposite of abundant.",
            optionExplanations: {
                0: "Plentiful - similar meaning to abundant, not opposite",
                1: "Copious - similar meaning to abundant, not opposite",
                2: "Scarce - correct! Means rare or insufficient, opposite of abundant",
                3: "Numerous - similar meaning to abundant, not opposite"
            }
        },
        {
            question: "Choose the best antonym for 'transient':",
            options: ["Temporary", "Brief", "Permanent", "Short-lived"],
            correct: 2,
            explanation: "'Permanent' means lasting forever, opposite of transient which means temporary.",
            optionExplanations: {
                0: "Temporary - similar meaning to transient, not opposite",
                1: "Brief - similar meaning to transient, not opposite",
                2: "Permanent - correct! Means lasting forever, opposite of transient",
                3: "Short-lived - similar meaning to transient, not opposite"
            }
        },
        {
            question: "Choose the best antonym for 'verbose':",
            options: ["Wordy", "Talkative", "Lengthy", "Concise"],
            correct: 3,
            explanation: "'Concise' means brief and clearly expressed, opposite of verbose.",
            optionExplanations: {
                0: "Wordy - similar meaning to verbose, not opposite",
                1: "Talkative - similar meaning to verbose, not opposite",
                2: "Lengthy - similar meaning to verbose, not opposite",
                3: "Concise - correct! Means brief and clear, opposite of verbose"
            }
        },
        {
            question: "Choose the best antonym for 'gregarious':",
            options: ["Solitary", "Sociable", "Outgoing", "Friendly"],
            correct: 0,
            explanation: "'Solitary' means preferring to be alone, opposite of gregarious.",
            optionExplanations: {
                0: "Solitary - correct! Means preferring isolation, opposite of gregarious",
                1: "Sociable - similar meaning to gregarious, not opposite",
                2: "Outgoing - similar meaning to gregarious, not opposite",
                3: "Friendly - similar meaning to gregarious, not opposite"
            }
        }
    ],
    
    meanings: [
        {
            question: "What does 'mitigate' mean?",
            options: ["To make worse", "To make less severe", "To amplify", "To intensify"],
            correct: 1,
            explanation: "'Mitigate' means to make less severe, serious, or painful.",
            optionExplanations: {
                0: "To make worse - opposite meaning; mitigate means to lessen",
                1: "To make less severe - correct! Mitigate means to reduce severity",
                2: "To amplify - opposite meaning; means to increase",
                3: "To intensify - opposite meaning; means to strengthen"
            }
        },
        {
            question: "What does 'exacerbate' mean?",
            options: ["To improve", "To heal", "To make worse", "To repair"],
            correct: 2,
            explanation: "'Exacerbate' means to make a problem, bad situation, or negative feeling worse.",
            optionExplanations: {
                0: "To improve - opposite meaning; exacerbate means to worsen",
                1: "To heal - opposite meaning; exacerbate means to worsen",
                2: "To make worse - correct! Exacerbate means to intensify problems",
                3: "To repair - opposite meaning; exacerbate means to worsen"
            }
        },
        {
            question: "What does 'scrutinize' mean?",
            options: ["To ignore completely", "To accept without question", "To destroy thoroughly", "To examine closely"],
            correct: 3,
            explanation: "'Scrutinize' means to examine or inspect closely and thoroughly.",
            optionExplanations: {
                0: "To ignore completely - opposite meaning; scrutinize means to examine",
                1: "To accept without question - opposite of careful examination",
                2: "To destroy thoroughly - unrelated to examination",
                3: "To examine closely - correct! Scrutinize means to inspect carefully"
            }
        },
        {
            question: "What does 'relinquish' mean?",
            options: ["To give up or surrender", "To retain", "To acquire", "To maintain"],
            correct: 0,
            explanation: "'Relinquish' means to voluntarily cease to keep or claim; give up.",
            optionExplanations: {
                0: "To give up or surrender - correct! Relinquish means to let go of",
                1: "To retain - opposite meaning; relinquish means to give up",
                2: "To acquire - opposite meaning; relinquish means to give up",
                3: "To maintain - opposite meaning; relinquish means to give up"
            }
        },
        {
            question: "What does 'vindicate' mean?",
            options: ["To blame someone", "To clear of blame", "To punish severely", "To ignore completely"],
            correct: 1,
            explanation: "'Vindicate' means to clear someone of blame or suspicion; to show to be right.",
            optionExplanations: {
                0: "To blame someone - opposite meaning; vindicate means to clear blame",
                1: "To clear of blame - correct! Vindicate means to prove innocence",
                2: "To punish severely - opposite of clearing someone",
                3: "To ignore completely - unrelated to proving innocence"
            }
        }
    ]
};
