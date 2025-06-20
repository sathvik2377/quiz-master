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
        },
        // BITSAT Vocabulary Questions - Meanings
        {
            question: "Choose the word which expresses the correct meaning of 'SAGACIOUS':",
            options: ["Shameless", "Wise", "Powerless", "Foolish"],
            correct: 1,
            explanation: "'Sagacious' means having or showing keen mental discernment and good judgment; wise.",
            optionExplanations: {
                0: "Shameless - unrelated to wisdom or judgment",
                1: "Wise - correct! Sagacious means showing wisdom and good judgment",
                2: "Powerless - unrelated to mental abilities",
                3: "Foolish - opposite meaning; sagacious means wise"
            }
        },
        {
            question: "Choose the word which expresses the correct meaning of 'REMEDIAL':",
            options: ["Corrective", "Proficient", "Damaging", "Optional"],
            correct: 0,
            explanation: "'Remedial' means giving or serving as a remedy; intended to correct or improve.",
            optionExplanations: {
                0: "Corrective - correct! Remedial means intended to fix or improve",
                1: "Proficient - refers to skill level, not correction",
                2: "Damaging - opposite meaning; remedial means helpful",
                3: "Optional - refers to choice, not correction"
            }
        },
        {
            question: "Choose the word which expresses the correct meaning of 'RETICENT':",
            options: ["Confident", "Sad", "Truthful", "Secretive"],
            correct: 3,
            explanation: "'Reticent' means not revealing one's thoughts or feelings readily; reserved.",
            optionExplanations: {
                0: "Confident - unrelated to communication style",
                1: "Sad - refers to emotion, not communication",
                2: "Truthful - refers to honesty, not openness",
                3: "Secretive - correct! Reticent means reserved and not forthcoming"
            }
        },
        {
            question: "Choose the word which expresses the correct meaning of 'AUGMENT':",
            options: ["Increase", "Decrease", "Save", "Mention"],
            correct: 0,
            explanation: "'Augment' means to make something greater by adding to it; increase.",
            optionExplanations: {
                0: "Increase - correct! Augment means to make larger or greater",
                1: "Decrease - opposite meaning; augment means to increase",
                2: "Save - unrelated to size or quantity changes",
                3: "Mention - unrelated to quantity or size"
            }
        },
        {
            question: "Choose the word which expresses the correct meaning of 'CONSOLATION':",
            options: ["Comfort", "Problem", "Sadness", "Solution"],
            correct: 0,
            explanation: "'Consolation' means comfort received by a person after a loss or disappointment.",
            optionExplanations: {
                0: "Comfort - correct! Consolation means providing comfort in difficult times",
                1: "Problem - opposite of providing relief",
                2: "Sadness - the emotion consolation helps with, not the meaning",
                3: "Solution - different from emotional comfort"
            }
        },
        {
            question: "Choose the word which expresses the correct meaning of 'AUXILIARY':",
            options: ["Chief", "Supplemental", "Negligible", "Separate"],
            correct: 1,
            explanation: "'Auxiliary' means providing supplementary or additional help and support.",
            optionExplanations: {
                0: "Chief - opposite meaning; auxiliary means supporting, not leading",
                1: "Supplemental - correct! Auxiliary means providing additional support",
                2: "Negligible - refers to importance, not support role",
                3: "Separate - unrelated to support or assistance"
            }
        },
        {
            question: "Choose the word which best expresses the meaning of 'IMMUTABLE':",
            options: ["Important", "Unique", "Unchangeable", "Awful"],
            correct: 2,
            explanation: "'Immutable' means unchanging over time or unable to be changed.",
            optionExplanations: {
                0: "Important - refers to significance, not changeability",
                1: "Unique - refers to rarity, not changeability",
                2: "Unchangeable - correct! Immutable means cannot be altered",
                3: "Awful - refers to quality, not changeability"
            }
        },
        {
            question: "Choose the word which best expresses the meaning of 'IGNOMINIOUS':",
            options: ["Shameful", "Admirable", "Unaccountable", "Worthy"],
            correct: 0,
            explanation: "'Ignominious' means deserving or causing public disgrace or shame.",
            optionExplanations: {
                0: "Shameful - correct! Ignominious means causing disgrace or shame",
                1: "Admirable - opposite meaning; ignominious means disgraceful",
                2: "Unaccountable - unrelated to shame or disgrace",
                3: "Worthy - opposite meaning; ignominious means unworthy"
            }
        },
        {
            question: "Choose the word which best expresses the meaning of 'CALLOUS':",
            options: ["Cursed", "Unkind", "Unfeeling", "Passive"],
            correct: 2,
            explanation: "'Callous' means showing or having an insensitive and cruel disregard for others.",
            optionExplanations: {
                0: "Cursed - refers to supernatural affliction, not emotional state",
                1: "Unkind - related but less specific than unfeeling",
                2: "Unfeeling - correct! Callous means lacking empathy or sensitivity",
                3: "Passive - refers to activity level, not emotional sensitivity"
            }
        },
        {
            question: "Choose the word which best expresses the meaning of 'CORPULENT':",
            options: ["Lean", "Gaunt", "Emaciated", "Obese"],
            correct: 3,
            explanation: "'Corpulent' means fat; obese.",
            optionExplanations: {
                0: "Lean - opposite meaning; corpulent means fat",
                1: "Gaunt - opposite meaning; corpulent means fat",
                2: "Emaciated - opposite meaning; corpulent means fat",
                3: "Obese - correct! Corpulent means excessively fat"
            }
        },
        {
            question: "Choose the word which best expresses the meaning of 'EMBEZZLE':",
            options: ["Misappropriate", "Balance", "Remunerate", "Clear"],
            correct: 0,
            explanation: "'Embezzle' means to steal or misappropriate funds placed in one's trust.",
            optionExplanations: {
                0: "Misappropriate - correct! Embezzle means to steal entrusted funds",
                1: "Balance - opposite action; refers to making accounts equal",
                2: "Remunerate - opposite action; means to pay or compensate",
                3: "Clear - opposite action; means to settle or resolve"
            }
        },
        {
            question: "Choose the word which best expresses the meaning of 'LOQUACIOUS':",
            options: ["Talkative", "Slow", "Content", "Unclear"],
            correct: 0,
            explanation: "'Loquacious' means tending to talk a great deal; talkative.",
            optionExplanations: {
                0: "Talkative - correct! Loquacious means very talkative",
                1: "Slow - refers to speed, not talking habits",
                2: "Content - refers to satisfaction, not speech patterns",
                3: "Unclear - refers to clarity, not quantity of speech"
            }
        },
        {
            question: "Choose the word which best expresses the meaning of 'INDICT':",
            options: ["Condemn", "Reprimand", "Accuse", "Allege"],
            correct: 2,
            explanation: "'Indict' means to formally charge or accuse of a serious crime.",
            optionExplanations: {
                0: "Condemn - stronger than indict; means to declare guilty",
                1: "Reprimand - milder than indict; means to scold",
                2: "Accuse - correct! Indict means to formally charge with a crime",
                3: "Allege - similar but less formal than indict"
            }
        },
        {
            question: "Choose the word which is most similar in meaning to 'OPTIMISTIC':",
            options: ["Favourable", "Gloomy", "Hopeful", "Rude"],
            correct: 2,
            explanation: "'Optimistic' means hopeful and confident about the future.",
            optionExplanations: {
                0: "Favourable - related but refers to conditions, not attitude",
                1: "Gloomy - opposite meaning; optimistic means positive",
                2: "Hopeful - correct! Optimistic means having hope for the future",
                3: "Rude - unrelated to attitude about the future"
            }
        },
        {
            question: "Choose the word which best expresses the meaning of 'GARRULOUS':",
            options: ["Talkative", "Sedative", "Vocative", "Positive"],
            correct: 0,
            explanation: "'Garrulous' means excessively talkative, especially on trivial matters.",
            optionExplanations: {
                0: "Talkative - correct! Garrulous means excessively chatty",
                1: "Sedative - refers to calming medicine, unrelated to speech",
                2: "Vocative - grammatical term, unrelated to talkativeness",
                3: "Positive - refers to attitude, not speech patterns"
            }
        },
        {
            question: "Choose the word which best expresses the meaning of 'TINSEL':",
            options: ["Tinkle", "Decoration", "Tin", "Colourful"],
            correct: 1,
            explanation: "'Tinsel' means thin strips of shiny metal foil used as decoration.",
            optionExplanations: {
                0: "Tinkle - refers to light ringing sound, not decoration",
                1: "Decoration - correct! Tinsel is decorative material",
                2: "Tin - the metal, but tinsel is decorative strips",
                3: "Colourful - describes appearance but not the object itself"
            }
        },
        {
            question: "Choose the word which best expresses the meaning of 'LABYRINTH':",
            options: ["Meandering", "Rotating", "Pacing", "Wriggling"],
            correct: 0,
            explanation: "'Labyrinth' means a complicated network of paths; a maze.",
            optionExplanations: {
                0: "Meandering - correct! Refers to winding, complex paths like a labyrinth",
                1: "Rotating - refers to circular motion, not complex paths",
                2: "Pacing - refers to walking back and forth, not maze structure",
                3: "Wriggling - refers to twisting movement, not path structure"
            }
        },
        {
            question: "Choose the word which best expresses the meaning of 'SPUME':",
            options: ["Foam", "Lava", "Poison", "Spit"],
            correct: 0,
            explanation: "'Spume' means froth or foam, especially that found on waves.",
            optionExplanations: {
                0: "Foam - correct! Spume means frothy foam on water",
                1: "Lava - molten rock, unrelated to foam",
                2: "Poison - toxic substance, unrelated to foam",
                3: "Spit - saliva, different from water foam"
            }
        },
        {
            question: "Choose the word which best expresses the meaning of 'CONSCRIPT':",
            options: ["Draftee", "Draw", "Encircle", "Subscribe"],
            correct: 0,
            explanation: "'Conscript' means a person who is compulsorily enlisted for military service.",
            optionExplanations: {
                0: "Draftee - correct! A conscript is someone drafted into military service",
                1: "Draw - refers to pulling or sketching, unrelated to military service",
                2: "Encircle - refers to surrounding, unrelated to military drafting",
                3: "Subscribe - refers to signing up voluntarily, opposite of conscription"
            }
        },
        {
            question: "Choose the word which best expresses the meaning of 'ONSLAUGHT':",
            options: ["Counterattack", "Resistance", "Defense", "Invasion"],
            correct: 3,
            explanation: "'Onslaught' means a fierce or destructive attack.",
            optionExplanations: {
                0: "Counterattack - a response attack, not the initial fierce attack",
                1: "Resistance - opposite action; defending against attack",
                2: "Defense - opposite action; protecting against attack",
                3: "Invasion - correct! An onslaught is a fierce attacking invasion"
            }
        },
        {
            question: "Choose the word which best expresses the meaning of 'IGNOMINY':",
            options: ["Exposure", "Stupidity", "Disgrace", "Trial"],
            correct: 2,
            explanation: "'Ignominy' means public shame or disgrace.",
            optionExplanations: {
                0: "Exposure - revealing something, but not necessarily shameful",
                1: "Stupidity - lack of intelligence, different from public shame",
                2: "Disgrace - correct! Ignominy means public shame and dishonor",
                3: "Trial - legal proceeding, not the shame itself"
            }
        },
        {
            question: "Choose the word which best expresses the meaning of 'TRYST':",
            options: ["Severance", "Rendezvous", "Annul", "Disparate"],
            correct: 1,
            explanation: "'Tryst' means a private romantic meeting between lovers.",
            optionExplanations: {
                0: "Severance - ending or cutting off, opposite of meeting",
                1: "Rendezvous - correct! A tryst is a secret romantic meeting",
                2: "Annul - to cancel or invalidate, unrelated to meetings",
                3: "Disparate - different or unrelated, not about meetings"
            }
        },
        {
            question: "Choose the correct synonym of 'AMENITIES':",
            options: ["Pageantries", "Privileges", "Facilities", "Courtesies"],
            correct: 2,
            explanation: "'Amenities' means features that provide comfort, convenience, or pleasure.",
            optionExplanations: {
                0: "Pageantries - elaborate displays or ceremonies, not comfort features",
                1: "Privileges - special rights, different from comfort features",
                2: "Facilities - correct! Amenities are convenient facilities or features",
                3: "Courtesies - polite behaviors, different from physical features"
            }
        },
        {
            question: "Choose the correct synonym of 'DEFLECT':",
            options: ["Cheat", "Frustrate", "Pervert", "Depress"],
            correct: 1,
            explanation: "'Deflect' means to cause something to change direction; to turn aside.",
            optionExplanations: {
                0: "Cheat - to act dishonestly, unrelated to direction change",
                1: "Frustrate - correct! To deflect can mean to thwart or frustrate plans",
                2: "Pervert - to corrupt or distort, different from deflecting",
                3: "Depress - to make sad or push down, different from deflecting"
            }
        },
        {
            question: "Choose the correct synonym of 'EXORBITANT':",
            options: ["Odd", "Ridiculous", "Excessive", "Threatening"],
            correct: 2,
            explanation: "'Exorbitant' means unreasonably high in price or amount.",
            optionExplanations: {
                0: "Odd - strange or unusual, not about excessive amounts",
                1: "Ridiculous - absurd, related but not specific to amounts",
                2: "Excessive - correct! Exorbitant means unreasonably excessive",
                3: "Threatening - menacing, unrelated to amounts or prices"
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
        },
        // BITSAT Antonym Questions
        {
            question: "Choose the word opposite in meaning to 'FIDELITY':",
            options: ["Faith", "Devotedness", "Allegiance", "Treachery"],
            correct: 3,
            explanation: "'Treachery' means betrayal of trust, opposite of fidelity which means faithfulness.",
            optionExplanations: {
                0: "Faith - similar meaning to fidelity, not opposite",
                1: "Devotedness - similar meaning to fidelity, not opposite",
                2: "Allegiance - similar meaning to fidelity, not opposite",
                3: "Treachery - correct! Means betrayal, opposite of faithful fidelity"
            }
        },
        {
            question: "Choose the word opposite in meaning to 'INFRANGIBLE':",
            options: ["Complicated", "Breakable", "Weird", "Software"],
            correct: 1,
            explanation: "'Breakable' is opposite of infrangible, which means unbreakable or inviolable.",
            optionExplanations: {
                0: "Complicated - refers to complexity, not breakability",
                1: "Breakable - correct! Opposite of infrangible (unbreakable)",
                2: "Weird - refers to strangeness, not breakability",
                3: "Software - unrelated to physical breakability"
            }
        },
        {
            question: "Choose the word opposite in meaning to 'PROGENY':",
            options: ["Kid", "Parent", "Friend", "Enemy"],
            correct: 1,
            explanation: "'Parent' is opposite of progeny, which means offspring or descendants.",
            optionExplanations: {
                0: "Kid - similar meaning to progeny (offspring)",
                1: "Parent - correct! Opposite relationship to progeny (offspring)",
                2: "Friend - unrelated to family relationships",
                3: "Enemy - unrelated to family relationships"
            }
        },
        {
            question: "Choose the word opposite in meaning to 'AUSPICIOUS':",
            options: ["Prosperous", "Unfavorable", "Improper", "New"],
            correct: 1,
            explanation: "'Unfavorable' is opposite of auspicious, which means favorable or promising.",
            optionExplanations: {
                0: "Prosperous - similar meaning to auspicious",
                1: "Unfavorable - correct! Opposite of auspicious (favorable)",
                2: "Improper - refers to correctness, not favorability",
                3: "New - refers to age, not favorability"
            }
        },
        {
            question: "Choose the word opposite in meaning to 'RECOMPENSE':",
            options: ["Emolument", "Reward", "Payment", "Penalty"],
            correct: 3,
            explanation: "'Penalty' is opposite of recompense, which means reward or compensation.",
            optionExplanations: {
                0: "Emolument - similar meaning to recompense (payment)",
                1: "Reward - similar meaning to recompense",
                2: "Payment - similar meaning to recompense",
                3: "Penalty - correct! Opposite of recompense (punishment vs reward)"
            }
        },
        {
            question: "Choose the word opposite in meaning to 'IMPEDE':",
            options: ["Block", "Delay", "Push", "Freeze"],
            correct: 2,
            explanation: "'Push' (facilitate) is opposite of impede, which means to hinder or obstruct.",
            optionExplanations: {
                0: "Block - similar meaning to impede (obstruct)",
                1: "Delay - similar meaning to impede (slow down)",
                2: "Push - correct! To push forward is opposite of impeding",
                3: "Freeze - similar to impede (stop movement)"
            }
        },
        {
            question: "Choose the word opposite in meaning to 'IMMORTAL':",
            options: ["Undying", "Perishable", "Ancient", "Eternal"],
            correct: 1,
            explanation: "'Perishable' means able to die or decay, opposite of immortal.",
            optionExplanations: {
                0: "Undying - similar meaning to immortal",
                1: "Perishable - correct! Means able to die, opposite of immortal",
                2: "Ancient - refers to age, not mortality",
                3: "Eternal - similar meaning to immortal"
            }
        },
        {
            question: "Choose the word opposite in meaning to 'PATRONIZED':",
            options: ["Criticized", "Rejected", "Opposed", "Spurned"],
            correct: 2,
            explanation: "'Opposed' is opposite of patronized, which means supported or sponsored.",
            optionExplanations: {
                0: "Criticized - negative but not opposite of support",
                1: "Rejected - refusing, but not actively opposing",
                2: "Opposed - correct! Actively working against, opposite of patronizing",
                3: "Spurned - rejecting, but not actively opposing"
            }
        },
        {
            question: "Choose the word opposite in meaning to 'TACTFUL':",
            options: ["Incautious", "Discreet", "Strict", "Disciplined"],
            correct: 0,
            explanation: "'Incautious' means lacking care or caution, opposite of tactful.",
            optionExplanations: {
                0: "Incautious - correct! Means careless, opposite of careful tactful behavior",
                1: "Discreet - similar meaning to tactful",
                2: "Strict - refers to rules, not social sensitivity",
                3: "Disciplined - refers to self-control, not social sensitivity"
            }
        },
        {
            question: "Choose the word opposite in meaning to 'ARROGANT':",
            options: ["Humble", "Cowardly", "Egotistic", "Gentlemanly"],
            correct: 0,
            explanation: "'Humble' means modest and unassuming, opposite of arrogant.",
            optionExplanations: {
                0: "Humble - correct! Means modest, opposite of arrogant pride",
                1: "Cowardly - refers to courage, not pride level",
                2: "Egotistic - similar meaning to arrogant",
                3: "Gentlemanly - refers to manners, not pride level"
            }
        },
        {
            question: "Choose the word opposite in meaning to 'EXODUS':",
            options: ["Influx", "Home-coming", "Return", "Restoration"],
            correct: 0,
            explanation: "'Influx' means arrival or entry, opposite of exodus which means departure.",
            optionExplanations: {
                0: "Influx - correct! Means mass arrival, opposite of exodus (mass departure)",
                1: "Home-coming - return but not necessarily mass movement",
                2: "Return - individual return, not mass movement",
                3: "Restoration - refers to repair, not movement"
            }
        },
        {
            question: "Choose the word opposite in meaning to 'METICULOUS':",
            options: ["Forgetful", "Destructive", "Careless", "Flagrant"],
            correct: 2,
            explanation: "'Careless' means not giving attention to detail, opposite of meticulous.",
            optionExplanations: {
                0: "Forgetful - refers to memory, not attention to detail",
                1: "Destructive - refers to causing damage, not attention level",
                2: "Careless - correct! Means lacking attention to detail, opposite of meticulous",
                3: "Flagrant - means obviously offensive, not about attention to detail"
            }
        },
        {
            question: "Choose the word opposite in meaning to 'FLAGITIOUS':",
            options: ["Innocent", "Vapid", "Ignorant", "Frivolous"],
            correct: 0,
            explanation: "'Innocent' means free from guilt, opposite of flagitious which means extremely wicked.",
            optionExplanations: {
                0: "Innocent - correct! Means free from wrongdoing, opposite of flagitious (wicked)",
                1: "Vapid - means lacking substance, unrelated to morality",
                2: "Ignorant - means lacking knowledge, unrelated to morality",
                3: "Frivolous - means not serious, unrelated to wickedness"
            }
        },
        {
            question: "Choose the word opposite in meaning to 'KNACK':",
            options: ["Talent", "Dullness", "Dexterity", "Balance"],
            correct: 1,
            explanation: "'Dullness' means lack of skill or ability, opposite of knack which means special talent.",
            optionExplanations: {
                0: "Talent - similar meaning to knack",
                1: "Dullness - correct! Means lack of skill, opposite of knack (special ability)",
                2: "Dexterity - similar meaning to knack (skill)",
                3: "Balance - refers to equilibrium, not skill level"
            }
        },
        {
            question: "Choose the word opposite in meaning to 'PERNICIOUS':",
            options: ["Prolonged", "Ruinous", "Ruthless", "Beneficial"],
            correct: 3,
            explanation: "'Beneficial' means helpful or advantageous, opposite of pernicious which means harmful.",
            optionExplanations: {
                0: "Prolonged - refers to duration, not harmfulness",
                1: "Ruinous - similar meaning to pernicious (destructive)",
                2: "Ruthless - refers to lack of mercy, not harmfulness",
                3: "Beneficial - correct! Means helpful, opposite of pernicious (harmful)"
            }
        },
        {
            question: "Choose the word opposite in meaning to 'OPULENCE':",
            options: ["Luxury", "Transparency", "Wealth", "Poverty"],
            correct: 3,
            explanation: "'Poverty' means lack of wealth, opposite of opulence which means great wealth.",
            optionExplanations: {
                0: "Luxury - similar meaning to opulence",
                1: "Transparency - refers to clarity, not wealth",
                2: "Wealth - similar meaning to opulence",
                3: "Poverty - correct! Means lack of wealth, opposite of opulence"
            }
        },
        {
            question: "Choose the word opposite in meaning to 'CONTEMPLATIVE':",
            options: ["Wistful", "Unreflective", "Numbed", "Aroused"],
            correct: 1,
            explanation: "'Unreflective' means not thoughtful, opposite of contemplative which means thoughtful.",
            optionExplanations: {
                0: "Wistful - refers to longing, not thinking style",
                1: "Unreflective - correct! Means not thoughtful, opposite of contemplative",
                2: "Numbed - refers to lack of feeling, not thinking",
                3: "Aroused - refers to excitement, not thinking style"
            }
        },
        {
            question: "Choose the word opposite in meaning to 'INCLEMENT':",
            options: ["Radical", "Mild", "Harsh", "Tyrannical"],
            correct: 1,
            explanation: "'Mild' means gentle and not severe, opposite of inclement which means harsh weather.",
            optionExplanations: {
                0: "Radical - refers to extreme change, not weather severity",
                1: "Mild - correct! Means gentle, opposite of inclement (harsh)",
                2: "Harsh - similar meaning to inclement",
                3: "Tyrannical - refers to oppressive rule, not weather"
            }
        },
        {
            question: "Choose the word opposite in meaning to 'SUBDUED':",
            options: ["Dim", "Boisterous", "Solemn", "Crestfallen"],
            correct: 1,
            explanation: "'Boisterous' means noisy and energetic, opposite of subdued which means quiet and restrained.",
            optionExplanations: {
                0: "Dim - similar to subdued (not bright)",
                1: "Boisterous - correct! Means loud and energetic, opposite of subdued",
                2: "Solemn - similar to subdued (serious and quiet)",
                3: "Crestfallen - similar to subdued (dejected)"
            }
        },
        {
            question: "Choose the word opposite in meaning to 'FERVENT':",
            options: ["Partial", "Dispassionate", "Ardent", "Decent"],
            correct: 1,
            explanation: "'Dispassionate' means without strong emotion, opposite of fervent which means passionate.",
            optionExplanations: {
                0: "Partial - refers to bias, not emotional intensity",
                1: "Dispassionate - correct! Means unemotional, opposite of fervent (passionate)",
                2: "Ardent - similar meaning to fervent (passionate)",
                3: "Decent - refers to propriety, not emotional intensity"
            }
        },
        {
            question: "Choose the word opposite in meaning to 'SCRUPULOUS':",
            options: ["Careless", "Wise", "Caring", "Careful"],
            correct: 0,
            explanation: "'Careless' means not paying attention to detail, opposite of scrupulous which means very careful.",
            optionExplanations: {
                0: "Careless - correct! Means not careful, opposite of scrupulous",
                1: "Wise - refers to wisdom, not carefulness",
                2: "Caring - similar to scrupulous (showing concern)",
                3: "Careful - similar meaning to scrupulous"
            }
        },
        {
            question: "Choose the word which is most opposite in meaning to 'DROWSY':",
            options: ["Sleepy", "Nodding", "Yawning", "Wakeful"],
            correct: 3,
            explanation: "'Wakeful' means alert and awake, opposite of drowsy which means sleepy.",
            optionExplanations: {
                0: "Sleepy - similar meaning to drowsy",
                1: "Nodding - similar to drowsy (falling asleep)",
                2: "Yawning - similar to drowsy (showing tiredness)",
                3: "Wakeful - correct! Means alert and awake, opposite of drowsy"
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
        },
        // BITSAT Fill-in-the-blank and meaning questions
        {
            question: "Fill in the blank: Freedom and equality are the ______ rights of every human.",
            options: ["Inalienable", "Inscrutable", "Incalculable", "Institutional"],
            correct: 0,
            explanation: "'Inalienable' means unable to be taken away or given away by the possessor.",
            optionExplanations: {
                0: "Inalienable - correct! Means rights that cannot be taken away",
                1: "Inscrutable - means impossible to understand or interpret",
                2: "Incalculable - means too great to be calculated or estimated",
                3: "Institutional - means relating to an institution or organization"
            }
        },
        {
            question: "Fill in the blank: The team was well trained and strong, but somehow their ______ was low.",
            options: ["Morale", "Moral", "Feeling", "Consciousness"],
            correct: 0,
            explanation: "'Morale' means the confidence, enthusiasm, and discipline of a person or group.",
            optionExplanations: {
                0: "Morale - correct! Refers to team spirit and confidence",
                1: "Moral - refers to principles of right and wrong behavior",
                2: "Feeling - too general for this context",
                3: "Consciousness - refers to awareness, not team spirit"
            }
        },
        {
            question: "Fill in the blank: His speech was disappointing; it ______ all the major issues.",
            options: ["Projected", "Revealed", "Skirted", "Analyzed"],
            correct: 2,
            explanation: "'Skirted' means to go around or avoid dealing with something.",
            optionExplanations: {
                0: "Projected - means to present or promote an idea",
                1: "Revealed - means to make known or show",
                2: "Skirted - correct! Means avoided dealing with the issues",
                3: "Analyzed - means examined in detail"
            }
        },
        {
            question: "What is a person who does not believe in any religion called?",
            options: ["Philatelist", "Rationalist", "Atheist", "Pagan"],
            correct: 2,
            explanation: "An 'atheist' is a person who disbelieves or lacks belief in the existence of God or gods.",
            optionExplanations: {
                0: "Philatelist - a person who collects stamps",
                1: "Rationalist - a person who bases opinions on reason and knowledge",
                2: "Atheist - correct! A person who doesn't believe in any religion or god",
                3: "Pagan - a person holding religious beliefs other than Christianity, Judaism, or Islam"
            }
        },
        {
            question: "What is a person who believes that pleasure is the chief good called?",
            options: ["Stoic", "Hedonist", "Epicure", "Sensual"],
            correct: 1,
            explanation: "A 'hedonist' is a person who believes that the pursuit of pleasure is the most important thing in life.",
            optionExplanations: {
                0: "Stoic - a person who endures pain without showing feelings",
                1: "Hedonist - correct! A person who believes pleasure is the chief good",
                2: "Epicure - a person who takes particular pleasure in fine food and drink",
                3: "Sensual - relating to physical rather than spiritual pleasures"
            }
        },
        {
            question: "What is a person who is in charge of a museum called?",
            options: ["Caretaker", "Warden", "Supervisor", "Curator"],
            correct: 3,
            explanation: "A 'curator' is a keeper or custodian of a museum or other collection.",
            optionExplanations: {
                0: "Caretaker - a person employed to look after a building",
                1: "Warden - an official responsible for supervising a particular place",
                2: "Supervisor - a person who supervises workers or work",
                3: "Curator - correct! A person in charge of a museum or collection"
            }
        },
        // BITSAT Fill-in-the-blank Questions
        {
            question: "Fill in the blank: I ______ to go there when I was a student.",
            options: ["Liked", "Used", "Prefer", "Denied"],
            correct: 1,
            explanation: "'Used' is correct in the phrase 'used to' which indicates a past habit or state.",
            optionExplanations: {
                0: "Liked - doesn't fit the context of past habit",
                1: "Used - correct! 'Used to go' indicates a past habit or regular action",
                2: "Prefer - present tense, doesn't fit past context",
                3: "Denied - means refused, doesn't fit the context"
            }
        },
        {
            question: "Fill in the blank: She was angry ______ me.",
            options: ["At", "About", "With", "In"],
            correct: 2,
            explanation: "'With' is the correct preposition to use after 'angry' when referring to a person.",
            optionExplanations: {
                0: "At - used with things or situations, not people",
                1: "About - used with topics or issues, not people",
                2: "With - correct! Used when angry at a person",
                3: "In - not used with 'angry'"
            }
        },
        {
            question: "Fill in the blank: You should not laugh ______ the poor.",
            options: ["On", "At", "With", "Over"],
            correct: 1,
            explanation: "'At' is the correct preposition meaning to mock or ridicule someone.",
            optionExplanations: {
                0: "On - not used with 'laugh' in this context",
                1: "At - correct! 'Laugh at' means to mock or ridicule",
                2: "With - means to laugh together, not to mock",
                3: "Over - not typically used with 'laugh' in this context"
            }
        },
        {
            question: "Fill in the blank: They were afraid ______ the lion, so they dropped the idea of hunting in the jungle.",
            options: ["In", "To", "From", "Of"],
            correct: 3,
            explanation: "'Of' is the correct preposition to use after 'afraid'.",
            optionExplanations: {
                0: "In - not used with 'afraid'",
                1: "To - not used with 'afraid'",
                2: "From - not used with 'afraid'",
                3: "Of - correct! 'Afraid of' is the standard phrase"
            }
        },
        {
            question: "Fill in the blank: Our company signed a profitable ______ last month.",
            options: ["Issue", "Agenda", "Deal", "Paper"],
            correct: 2,
            explanation: "'Deal' refers to a business agreement or contract.",
            optionExplanations: {
                0: "Issue - refers to a problem or topic, not a business agreement",
                1: "Agenda - refers to a list of items to be discussed",
                2: "Deal - correct! A business agreement or contract",
                3: "Paper - too general, doesn't specifically mean business agreement"
            }
        },
        {
            question: "Fill in the blank: What is your ______ for tonight?",
            options: ["Principle", "Motto", "Plan", "Objective"],
            correct: 2,
            explanation: "'Plan' refers to what you intend to do for a specific time period.",
            optionExplanations: {
                0: "Principle - a fundamental rule or belief",
                1: "Motto - a short phrase expressing a belief or ideal",
                2: "Plan - correct! What you intend to do tonight",
                3: "Objective - a goal, but too formal for this casual context"
            }
        },
        {
            question: "Fill in the blank: The miser gazed ______ at the pile of gold coins in front of him.",
            options: ["Avidly", "Admiringly", "Thoughtfully", "Earnestly"],
            correct: 0,
            explanation: "'Avidly' means with great eagerness or greed, fitting for a miser looking at gold.",
            optionExplanations: {
                0: "Avidly - correct! Means with great eagerness or greed",
                1: "Admiringly - means with respect or approval, less intense than avidly",
                2: "Thoughtfully - means in a contemplative way, doesn't capture the greed",
                3: "Earnestly - means seriously, but doesn't capture the greedy eagerness"
            }
        },
        {
            question: "Fill in the blank: I saw a ______ of cows in the field.",
            options: ["Group", "Herd", "Swarm", "Flock"],
            correct: 1,
            explanation: "'Herd' is the correct collective noun for cows.",
            optionExplanations: {
                0: "Group - too general, not the specific collective noun for cows",
                1: "Herd - correct! The specific collective noun for cattle/cows",
                2: "Swarm - used for insects like bees",
                3: "Flock - used for birds or sheep"
            }
        },
        {
            question: "Fill in the blank: China is a big country; in area it is bigger than any other country ______ Russia.",
            options: ["Accept", "Except", "Expect", "Access"],
            correct: 1,
            explanation: "'Except' means excluding or apart from.",
            optionExplanations: {
                0: "Accept - means to receive or agree to something",
                1: "Except - correct! Means excluding or apart from",
                2: "Expect - means to anticipate or look forward to",
                3: "Access - means the ability to enter or approach"
            }
        },
        {
            question: "Fill in the blank: The treasure was hidden ______ a big shore.",
            options: ["On", "Underneath", "Toward", "Off"],
            correct: 1,
            explanation: "'Underneath' means below or beneath something.",
            optionExplanations: {
                0: "On - means on top of, not hidden",
                1: "Underneath - correct! Means below or beneath, indicating hidden location",
                2: "Toward - indicates direction, not location",
                3: "Off - means away from, not a hiding place"
            }
        },
        {
            question: "Fill in the blank: There are not solitary, free-living creatures; every form of life is ______ other forms.",
            options: ["Dependent on", "Parallel to", "Overshadowed by", "Segregated from"],
            correct: 0,
            explanation: "'Dependent on' means relying on or needing something for support.",
            optionExplanations: {
                0: "Dependent on - correct! All life forms rely on each other for survival",
                1: "Parallel to - means alongside but separate, contradicts the statement",
                2: "Overshadowed by - means dominated or made less important",
                3: "Segregated from - means separated, opposite of the intended meaning"
            }
        },
        {
            question: "Fill in the blank: I'll take ______ now as I have another appointment somewhere else.",
            options: ["Departure", "Your leave", "Permission", "Leave from work"],
            correct: 1,
            explanation: "'Take your leave' is an idiomatic expression meaning to say goodbye and depart.",
            optionExplanations: {
                0: "Departure - a noun, doesn't fit with 'take'",
                1: "Your leave - correct! 'Take your leave' means to say goodbye and go",
                2: "Permission - doesn't fit the context of departing",
                3: "Leave from work - too specific and awkward phrasing"
            }
        },
        {
            question: "Fill in the blank: The lawyer advised the convict not to ______ anything.",
            options: ["Hold up", "Hold over", "Hold back", "Hold in"],
            correct: 2,
            explanation: "'Hold back' means to withhold or not reveal information.",
            optionExplanations: {
                0: "Hold up - means to delay or rob",
                1: "Hold over - means to postpone or continue",
                2: "Hold back - correct! Means to withhold or not reveal information",
                3: "Hold in - means to contain or suppress emotions"
            }
        },
        {
            question: "Fill in the blank: Hospital services across the capital ______ for three hours due to the strike.",
            options: ["Were disrupted", "Had been disrupted", "Are disrupted", "Have disrupted"],
            correct: 0,
            explanation: "'Were disrupted' is the correct past tense passive form for a completed action.",
            optionExplanations: {
                0: "Were disrupted - correct! Past tense passive for completed action",
                1: "Had been disrupted - past perfect, implies action before another past action",
                2: "Are disrupted - present tense, doesn't fit past context",
                3: "Have disrupted - present perfect active, wrong voice"
            }
        },
        {
            question: "Fill in the blank: One of them would keep a look-out on the road behind to warn us ______ approaching vehicles.",
            options: ["For", "Of", "Against", "With"],
            correct: 1,
            explanation: "'Warn of' means to alert someone about something.",
            optionExplanations: {
                0: "For - not used with 'warn' in this context",
                1: "Of - correct! 'Warn of' means to alert about something",
                2: "Against - used when warning against doing something",
                3: "With - not used with 'warn' in this context"
            }
        },
        {
            question: "Fill in the blank: The top-ranking manager ______ his success in the profession to his managing director's guidance.",
            options: ["Accounts", "Attributes", "Agrees", "Consider"],
            correct: 1,
            explanation: "'Attributes' means to regard something as being caused by something else.",
            optionExplanations: {
                0: "Accounts - means explains, but 'accounts for' would be needed",
                1: "Attributes - correct! Means regards as being caused by",
                2: "Agrees - doesn't fit the context of crediting success",
                3: "Consider - wrong form, would need 'considers'"
            }
        },
        {
            question: "Fill in the blank: The earth ______ round the Sun.",
            options: ["Move", "Moves", "Moved", "Moving"],
            correct: 1,
            explanation: "'Moves' is the correct present tense form for a general truth.",
            optionExplanations: {
                0: "Move - incorrect form, subject-verb disagreement",
                1: "Moves - correct! Present tense for universal truth",
                2: "Moved - past tense, doesn't fit universal truth",
                3: "Moving - present participle, needs auxiliary verb"
            }
        },
        {
            question: "Fill in the blank: I ______ him only one letter up to now.",
            options: ["Sent", "Have sent", "Have been sending", "Shall send"],
            correct: 1,
            explanation: "'Have sent' is the present perfect tense, appropriate for actions completed up to now.",
            optionExplanations: {
                0: "Sent - simple past, doesn't connect to present",
                1: "Have sent - correct! Present perfect for action completed up to now",
                2: "Have been sending - present perfect continuous, implies ongoing action",
                3: "Shall send - future tense, doesn't fit 'up to now'"
            }
        },
        {
            question: "Fill in the blank: I shall telephone you when he ______ back.",
            options: ["Comes", "Coming", "Shall come", "Came"],
            correct: 0,
            explanation: "'Comes' is correct in time clauses after 'when' - use present tense for future meaning.",
            optionExplanations: {
                0: "Comes - correct! Present tense in time clauses for future meaning",
                1: "Coming - present participle, needs auxiliary verb",
                2: "Shall come - future tense not used in time clauses",
                3: "Came - past tense, doesn't fit future context"
            }
        },
        {
            question: "Choose the most appropriate preposition: He is not in the office ______ the moment.",
            options: ["From", "With", "For", "At"],
            correct: 3,
            explanation: "'At the moment' is a fixed phrase meaning 'right now' or 'currently'.",
            optionExplanations: {
                0: "From - not used with 'the moment'",
                1: "With - not used with 'the moment'",
                2: "For - not used with 'the moment'",
                3: "At - correct! 'At the moment' means currently or right now"
            }
        },
        {
            question: "Choose the most appropriate preposition: She is very affectionate ______ her children.",
            options: ["Upon", "With", "Towards", "Over"],
            correct: 2,
            explanation: "'Towards' is the correct preposition to use with 'affectionate'.",
            optionExplanations: {
                0: "Upon - not typically used with 'affectionate'",
                1: "With - not the standard preposition with 'affectionate'",
                2: "Towards - correct! Standard preposition with 'affectionate'",
                3: "Over - not used with 'affectionate'"
            }
        },
        {
            question: "Choose the most appropriate preposition: People were alarmed ______ the tiger.",
            options: ["At", "In", "On", "For"],
            correct: 0,
            explanation: "'At' is the correct preposition to use with 'alarmed' when referring to the cause.",
            optionExplanations: {
                0: "At - correct! 'Alarmed at' is used for the cause of alarm",
                1: "In - not used with 'alarmed'",
                2: "On - not used with 'alarmed'",
                3: "For - not typically used with 'alarmed'"
            }
        },
        // Additional BITSAT Reading Comprehension Questions
        {
            question: "What is meant by 'Sentiment' in the context of steam vehicle passage?",
            options: ["Depression", "Fascination", "Celebration", "Resentment"],
            correct: 3,
            explanation: "'Sentiment against steam-powered road vehicles' refers to resentment or opposition to these vehicles.",
            optionExplanations: {
                0: "Depression - refers to sadness, not opposition",
                1: "Fascination - opposite of the intended meaning",
                2: "Celebration - opposite of the intended meaning",
                3: "Resentment - correct! Sentiment here means opposition or hostility"
            }
        },
        {
            question: "The Pyreolophore was:",
            options: ["A self-propelled mechanical vehicle", "A steam-powered tricycle", "A steam tractor", "The name of the world's first internal combustion engine"],
            correct: 3,
            explanation: "The passage states that Niépce and his brother 'created the world's first internal combustion engine which they called Pyreolophore'.",
            optionExplanations: {
                0: "A self-propelled mechanical vehicle - this describes Cugnot's invention",
                1: "A steam-powered tricycle - this was also Cugnot's creation",
                2: "A steam tractor - this was built by Cugnot for the French Army",
                3: "The name of the world's first internal combustion engine - correct!"
            }
        },
        {
            question: "Reading Comprehension: 'Harold, a professional man who had worked in an office for many years, had a fearful dream. In it, he found himself in a land where small slug-like animals with slimy tentacles lived on people's bodies... Harold later threw off the security bug and took freelance work.' The statement that 'he later threw off the security bug' means that:",
            options: ["Harold succeeded in overcoming the need for security", "Harold stopped giving much importance to dreams", "Harold started tolerating social victimization", "Harold killed all the bugs troubling him"],
            correct: 0,
            explanation: "'Security bug' symbolizes Harold's dependence on job security. Throwing it off means overcoming this need.",
            optionExplanations: {
                0: "Harold succeeded in overcoming the need for security - correct! He left secure office job for freelance work",
                1: "Harold stopped giving much importance to dreams - not the main point of the metaphor",
                2: "Harold started tolerating social victimization - opposite of what happened",
                3: "Harold killed all the bugs troubling him - too literal interpretation"
            }
        },
        {
            question: "Reading Comprehension (Harold's dream): Which phrase best helps to bring out the precise meaning of 'loathsome creatures'?",
            options: ["Security bug and slimy tentacles", "Fearful dream and slug-like animals", "Slimy tentacles and slug-like animals", "Slug-like animals and security bug"],
            correct: 2,
            explanation: "'Slimy tentacles and slug-like animals' are the physical descriptors that make the creatures loathsome.",
            optionExplanations: {
                0: "Security bug and slimy tentacles - security bug is metaphorical, not descriptive",
                1: "Fearful dream and slug-like animals - fearful dream describes the context, not the creatures",
                2: "Slimy tentacles and slug-like animals - correct! Both are physical descriptors of repulsiveness",
                3: "Slug-like animals and security bug - security bug is the metaphor, not description"
            }
        },
        {
            question: "Reading Comprehension (Harold's dream): In his dream, Harold found the loathsome creatures:",
            options: ["In his village", "In his own house", "In a different land", "In his office"],
            correct: 2,
            explanation: "The passage states 'he found himself in a land where small slug-like animals... lived'.",
            optionExplanations: {
                0: "In his village - not mentioned in the passage",
                1: "In his own house - not mentioned in the passage",
                2: "In a different land - correct! The passage says 'he found himself in a land'",
                3: "In his office - not mentioned in the dream description"
            }
        },
        {
            question: "Reading Comprehension (Harold's dream): Harold's dream was fearful because:",
            options: ["It brought him face to face with reality", "It was full of vivid pictures of snakes", "He saw huge elephants in it", "In it he saw slimy creatures feeding on people's bodies"],
            correct: 3,
            explanation: "The dream was fearful because of the disturbing image of creatures living on people's bodies.",
            optionExplanations: {
                0: "It brought him face to face with reality - this was the result, not why it was fearful",
                1: "It was full of vivid pictures of snakes - the creatures were slug-like, not snakes",
                2: "He saw huge elephants in it - elephants were the positive outcome, not fearful",
                3: "In it he saw slimy creatures feeding on people's bodies - correct! This is what made it fearful"
            }
        },
        {
            question: "Reading Comprehension: 'Our world has a heritage of culture and beauty, but unfortunately we have been handing on this heritage only to the less active and important members of each generation.' Our world has a heritage of culture means:",
            options: ["A richness of tradition", "An inherited cultural tradition", "Too many cultures", "Cultures which are now extinct"],
            correct: 1,
            explanation: "'Heritage' specifically means something inherited from the past, passed down through generations.",
            optionExplanations: {
                0: "A richness of tradition - too general, doesn't capture 'heritage' meaning",
                1: "An inherited cultural tradition - correct! Heritage means inherited from past generations",
                2: "Too many cultures - not what heritage means",
                3: "Cultures which are now extinct - opposite, heritage implies continuation"
            }
        },
        {
            question: "Reading Comprehension (heritage passage): 'The less active and important people' are the:",
            options: ["Lazy people", "Uncommitted people", "Common people", "People who are in a position of power"],
            correct: 2,
            explanation: "The passage contrasts these people with those in 'key positions of power', indicating common people.",
            optionExplanations: {
                0: "Lazy people - 'less active' doesn't necessarily mean lazy",
                1: "Uncommitted people - not the intended meaning in context",
                2: "Common people - correct! Contrasted with those in positions of power",
                3: "People who are in a position of power - opposite, these are the 'important' people"
            }
        },
        {
            question: "Reading Comprehension (heritage passage): 'Men ignorant of the past' means persons who:",
            options: ["Do not learn from experience", "Ignore the lessons of history", "Are not aware of history", "Have no respect for the past"],
            correct: 2,
            explanation: "'Ignorant of the past' means lacking knowledge or awareness of history.",
            optionExplanations: {
                0: "Do not learn from experience - about personal experience, not historical knowledge",
                1: "Ignore the lessons of history - implies they know but choose to ignore",
                2: "Are not aware of history - correct! Ignorant means lacking knowledge",
                3: "Have no respect for the past - about attitude, not knowledge"
            }
        }
    ]
};
