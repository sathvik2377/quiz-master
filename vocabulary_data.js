// Enhanced Vocabulary Data with 90 questions (30 each category)
// Randomized correct answers to avoid patterns

const vocabularyData = {
    synonyms: [
        // Challenging BITSAT-level Synonym Questions,
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
        },
        // Additional Challenging Synonym Questions
        {
            question: "Choose the best synonym for 'PERSPICACIOUS':",
            options: ["Obtuse", "Astute", "Verbose", "Reticent"],
            correct: 1,
            explanation: "'Perspicacious' means having keen insight or discernment; astute.",
            optionExplanations: {
                0: "Obtuse - opposite meaning; means lacking sharpness of mind",
                1: "Astute - correct! Means having sharp insight and good judgment",
                2: "Verbose - refers to being wordy, unrelated to mental acuity",
                3: "Reticent - means reserved in speech, unrelated to insight"
            }
        },
        {
            question: "Choose the best synonym for 'OBSEQUIOUS':",
            options: ["Defiant", "Servile", "Candid", "Aloof"],
            correct: 1,
            explanation: "'Obsequious' means excessively eager to please or obey; servile.",
            optionExplanations: {
                0: "Defiant - opposite meaning; means boldly resistant",
                1: "Servile - correct! Means excessively submissive or fawning",
                2: "Candid - means frank and honest, unrelated to submissiveness",
                3: "Aloof - means distant and reserved, opposite of eager to please"
            }
        },
        {
            question: "Choose the best synonym for 'PERFUNCTORY':",
            options: ["Meticulous", "Cursory", "Enthusiastic", "Deliberate"],
            correct: 1,
            explanation: "'Perfunctory' means carried out with minimal effort or care; cursory.",
            optionExplanations: {
                0: "Meticulous - opposite meaning; means extremely careful",
                1: "Cursory - correct! Means hasty and superficial",
                2: "Enthusiastic - opposite meaning; perfunctory lacks enthusiasm",
                3: "Deliberate - opposite meaning; means careful and intentional"
            }
        },
        {
            question: "Choose the best synonym for 'TRUCULENT':",
            options: ["Peaceful", "Belligerent", "Timid", "Diplomatic"],
            correct: 1,
            explanation: "'Truculent' means eager or quick to argue or fight; aggressively defiant.",
            optionExplanations: {
                0: "Peaceful - opposite meaning; truculent implies aggression",
                1: "Belligerent - correct! Means hostile and aggressive",
                2: "Timid - opposite meaning; truculent implies boldness",
                3: "Diplomatic - opposite meaning; implies peaceful negotiation"
            }
        },
        {
            question: "Choose the best synonym for 'SANGUINE':",
            options: ["Pessimistic", "Optimistic", "Melancholic", "Apathetic"],
            correct: 1,
            explanation: "'Sanguine' means optimistic or positive, especially in difficult situations.",
            optionExplanations: {
                0: "Pessimistic - opposite meaning; sanguine means hopeful",
                1: "Optimistic - correct! Means hopeful and confident",
                2: "Melancholic - opposite meaning; means sad and gloomy",
                3: "Apathetic - means lacking interest, unrelated to optimism"
            }
        },
        {
            question: "Choose the best synonym for 'VITUPERATIVE':",
            options: ["Laudatory", "Abusive", "Conciliatory", "Neutral"],
            correct: 1,
            explanation: "'Vituperative' means bitter and abusive in language or manner.",
            optionExplanations: {
                0: "Laudatory - opposite meaning; means expressing praise",
                1: "Abusive - correct! Means harsh and insulting",
                2: "Conciliatory - opposite meaning; means intended to placate",
                3: "Neutral - opposite meaning; vituperative is strongly negative"
            }
        },
        {
            question: "Choose the best synonym for 'PUSILLANIMOUS':",
            options: ["Courageous", "Craven", "Audacious", "Resolute"],
            correct: 1,
            explanation: "'Pusillanimous' means showing a lack of courage or determination; cowardly.",
            optionExplanations: {
                0: "Courageous - opposite meaning; pusillanimous means cowardly",
                1: "Craven - correct! Means contemptibly lacking in courage",
                2: "Audacious - opposite meaning; means showing boldness",
                3: "Resolute - opposite meaning; means admirably determined"
            }
        },
        {
            question: "Choose the best synonym for 'RECALCITRANT':",
            options: ["Compliant", "Obstinate", "Amenable", "Docile"],
            correct: 1,
            explanation: "'Recalcitrant' means having an obstinately uncooperative attitude.",
            optionExplanations: {
                0: "Compliant - opposite meaning; means willing to conform",
                1: "Obstinate - correct! Means stubbornly refusing to change",
                2: "Amenable - opposite meaning; means open to suggestion",
                3: "Docile - opposite meaning; means easily taught or controlled"
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
        },
        // Additional Challenging Antonym Questions
        {
            question: "Choose the word opposite in meaning to 'PERSPICACIOUS':",
            options: ["Astute", "Obtuse", "Keen", "Discerning"],
            correct: 1,
            explanation: "'Obtuse' means slow to understand, opposite of perspicacious which means having keen insight.",
            optionExplanations: {
                0: "Astute - similar meaning to perspicacious",
                1: "Obtuse - correct! Means lacking sharpness of mind, opposite of perspicacious",
                2: "Keen - similar meaning to perspicacious",
                3: "Discerning - similar meaning to perspicacious"
            }
        },
        {
            question: "Choose the word opposite in meaning to 'MAGNANIMOUS':",
            options: ["Generous", "Noble", "Petty", "Forgiving"],
            correct: 2,
            explanation: "'Petty' means small-minded, opposite of magnanimous which means generous and noble.",
            optionExplanations: {
                0: "Generous - similar meaning to magnanimous",
                1: "Noble - similar meaning to magnanimous",
                2: "Petty - correct! Means small-minded and ungenerous, opposite of magnanimous",
                3: "Forgiving - similar meaning to magnanimous"
            }
        },
        {
            question: "Choose the word opposite in meaning to 'PARSIMONIOUS':",
            options: ["Frugal", "Lavish", "Economical", "Thrifty"],
            correct: 1,
            explanation: "'Lavish' means spending freely, opposite of parsimonious which means extremely frugal.",
            optionExplanations: {
                0: "Frugal - similar meaning to parsimonious",
                1: "Lavish - correct! Means spending freely, opposite of parsimonious",
                2: "Economical - similar meaning to parsimonious",
                3: "Thrifty - similar meaning to parsimonious"
            }
        },
        {
            question: "Choose the word opposite in meaning to 'TRUCULENT':",
            options: ["Belligerent", "Conciliatory", "Aggressive", "Hostile"],
            correct: 1,
            explanation: "'Conciliatory' means intended to placate, opposite of truculent which means aggressively defiant.",
            optionExplanations: {
                0: "Belligerent - similar meaning to truculent",
                1: "Conciliatory - correct! Means peaceful and placating, opposite of truculent",
                2: "Aggressive - similar meaning to truculent",
                3: "Hostile - similar meaning to truculent"
            }
        },
        {
            question: "Choose the word opposite in meaning to 'SANGUINE':",
            options: ["Optimistic", "Despondent", "Hopeful", "Confident"],
            correct: 1,
            explanation: "'Despondent' means dejected, opposite of sanguine which means optimistic.",
            optionExplanations: {
                0: "Optimistic - similar meaning to sanguine",
                1: "Despondent - correct! Means dejected and hopeless, opposite of sanguine",
                2: "Hopeful - similar meaning to sanguine",
                3: "Confident - similar meaning to sanguine"
            }
        },
        {
            question: "Choose the word opposite in meaning to 'OBSEQUIOUS':",
            options: ["Servile", "Defiant", "Fawning", "Submissive"],
            correct: 1,
            explanation: "'Defiant' means boldly resistant, opposite of obsequious which means excessively submissive.",
            optionExplanations: {
                0: "Servile - similar meaning to obsequious",
                1: "Defiant - correct! Means boldly resistant, opposite of obsequious",
                2: "Fawning - similar meaning to obsequious",
                3: "Submissive - similar meaning to obsequious"
            }
        },
        {
            question: "Choose the word opposite in meaning to 'PERFUNCTORY':",
            options: ["Cursory", "Thorough", "Superficial", "Hasty"],
            correct: 1,
            explanation: "'Thorough' means complete and careful, opposite of perfunctory which means superficial.",
            optionExplanations: {
                0: "Cursory - similar meaning to perfunctory",
                1: "Thorough - correct! Means complete and careful, opposite of perfunctory",
                2: "Superficial - similar meaning to perfunctory",
                3: "Hasty - similar meaning to perfunctory"
            }
        },
        {
            question: "Choose the word opposite in meaning to 'INSCRUTABLE':",
            options: ["Mysterious", "Transparent", "Enigmatic", "Cryptic"],
            correct: 1,
            explanation: "'Transparent' means easily understood, opposite of inscrutable which means impossible to understand.",
            optionExplanations: {
                0: "Mysterious - similar meaning to inscrutable",
                1: "Transparent - correct! Means easily understood, opposite of inscrutable",
                2: "Enigmatic - similar meaning to inscrutable",
                3: "Cryptic - similar meaning to inscrutable"
            }
        },
        {
            question: "Choose the word opposite in meaning to 'INDEFATIGABLE':",
            options: ["Tireless", "Weary", "Persistent", "Energetic"],
            correct: 1,
            explanation: "'Weary' means tired, opposite of indefatigable which means tireless.",
            optionExplanations: {
                0: "Tireless - similar meaning to indefatigable",
                1: "Weary - correct! Means tired, opposite of indefatigable (tireless)",
                2: "Persistent - similar meaning to indefatigable",
                3: "Energetic - similar meaning to indefatigable"
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
        // Challenging Word Meaning Questions
        {
            question: "What does 'PERSPICACIOUS' mean?",
            options: ["Obtuse and slow", "Having keen insight", "Excessively talkative", "Lacking confidence"],
            correct: 1,
            explanation: "'Perspicacious' means having a ready insight into and understanding of things.",
            optionExplanations: {
                0: "Obtuse and slow - opposite meaning; perspicacious means sharp",
                1: "Having keen insight - correct! Perspicacious means mentally sharp",
                2: "Excessively talkative - unrelated to mental acuity",
                3: "Lacking confidence - unrelated to intellectual ability"
            }
        },
        {
            question: "What does 'OBSEQUIOUS' mean?",
            options: ["Boldly defiant", "Excessively eager to please", "Completely honest", "Emotionally distant"],
            correct: 1,
            explanation: "'Obsequious' means obedient or attentive to an excessive or servile degree.",
            optionExplanations: {
                0: "Boldly defiant - opposite meaning; obsequious means submissive",
                1: "Excessively eager to please - correct! Obsequious means servile",
                2: "Completely honest - unrelated to submissiveness",
                3: "Emotionally distant - opposite of eager to please"
            }
        },
        {
            question: "What does 'TRUCULENT' mean?",
            options: ["Peaceful and calm", "Eager to argue or fight", "Extremely generous", "Highly intelligent"],
            correct: 1,
            explanation: "'Truculent' means eager or quick to argue or fight; aggressively defiant.",
            optionExplanations: {
                0: "Peaceful and calm - opposite meaning; truculent means aggressive",
                1: "Eager to argue or fight - correct! Truculent means belligerent",
                2: "Extremely generous - unrelated to aggressiveness",
                3: "Highly intelligent - unrelated to combativeness"
            }
        },
        {
            question: "What does 'PUSILLANIMOUS' mean?",
            options: ["Extremely brave", "Lacking courage", "Very intelligent", "Highly energetic"],
            correct: 1,
            explanation: "'Pusillanimous' means showing a lack of courage or determination; timid.",
            optionExplanations: {
                0: "Extremely brave - opposite meaning; pusillanimous means cowardly",
                1: "Lacking courage - correct! Pusillanimous means cowardly",
                2: "Very intelligent - unrelated to courage",
                3: "Highly energetic - unrelated to bravery"
            }
        },
        {
            question: "What does 'VITUPERATIVE' mean?",
            options: ["Highly praising", "Bitter and abusive", "Extremely quiet", "Very generous"],
            correct: 1,
            explanation: "'Vituperative' means bitter and abusive in language or manner.",
            optionExplanations: {
                0: "Highly praising - opposite meaning; vituperative means critical",
                1: "Bitter and abusive - correct! Vituperative means harshly critical",
                2: "Extremely quiet - unrelated to verbal abuse",
                3: "Very generous - unrelated to harsh language"
            }
        },
        {
            question: "What does 'RECALCITRANT' mean?",
            options: ["Easily controlled", "Obstinately uncooperative", "Extremely helpful", "Very intelligent"],
            correct: 1,
            explanation: "'Recalcitrant' means having an obstinately uncooperative attitude toward authority.",
            optionExplanations: {
                0: "Easily controlled - opposite meaning; recalcitrant means uncontrollable",
                1: "Obstinately uncooperative - correct! Recalcitrant means stubbornly defiant",
                2: "Extremely helpful - opposite meaning; recalcitrant means unhelpful",
                3: "Very intelligent - unrelated to cooperativeness"
            }
        },
        {
            question: "What does 'MAGNANIMOUS' mean?",
            options: ["Petty and small-minded", "Generous in forgiving", "Extremely angry", "Very confused"],
            correct: 1,
            explanation: "'Magnanimous' means generous or forgiving, especially toward a rival or less powerful person.",
            optionExplanations: {
                0: "Petty and small-minded - opposite meaning; magnanimous means noble",
                1: "Generous in forgiving - correct! Magnanimous means noble and generous",
                2: "Extremely angry - unrelated to generosity",
                3: "Very confused - unrelated to nobility of spirit"
            }
        },
        {
            question: "What does 'PARSIMONIOUS' mean?",
            options: ["Extremely generous", "Excessively frugal", "Very talkative", "Highly intelligent"],
            correct: 1,
            explanation: "'Parsimonious' means extremely frugal; unwilling to spend.",
            optionExplanations: {
                0: "Extremely generous - opposite meaning; parsimonious means stingy",
                1: "Excessively frugal - correct! Parsimonious means extremely thrifty",
                2: "Very talkative - unrelated to spending habits",
                3: "Highly intelligent - unrelated to frugality"
            }
        },
        {
            question: "What does 'PERFUNCTORY' mean?",
            options: ["Extremely thorough", "Carried out with minimal effort", "Very enthusiastic", "Highly detailed"],
            correct: 1,
            explanation: "'Perfunctory' means carried out with a minimum of effort or reflection.",
            optionExplanations: {
                0: "Extremely thorough - opposite meaning; perfunctory means superficial",
                1: "Carried out with minimal effort - correct! Perfunctory means cursory",
                2: "Very enthusiastic - opposite meaning; perfunctory lacks enthusiasm",
                3: "Highly detailed - opposite meaning; perfunctory means superficial"
            }
        },
        {
            question: "What does 'SANGUINE' mean?",
            options: ["Extremely pessimistic", "Optimistic and confident", "Very angry", "Completely confused"],
            correct: 1,
            explanation: "'Sanguine' means optimistic or positive, especially in an apparently bad situation.",
            optionExplanations: {
                0: "Extremely pessimistic - opposite meaning; sanguine means hopeful",
                1: "Optimistic and confident - correct! Sanguine means hopeful",
                2: "Very angry - unrelated to optimism",
                3: "Completely confused - unrelated to attitude"
            }
        },
        {
            question: "What does 'INSCRUTABLE' mean?",
            options: ["Easily understood", "Impossible to understand", "Very talkative", "Extremely generous"],
            correct: 1,
            explanation: "'Inscrutable' means impossible to understand or interpret.",
            optionExplanations: {
                0: "Easily understood - opposite meaning; inscrutable means mysterious",
                1: "Impossible to understand - correct! Inscrutable means enigmatic",
                2: "Very talkative - unrelated to comprehensibility",
                3: "Extremely generous - unrelated to understanding"
            }
        },
        {
            question: "What does 'INDEFATIGABLE' mean?",
            options: ["Easily tired", "Persisting tirelessly", "Very confused", "Extremely lazy"],
            correct: 1,
            explanation: "'Indefatigable' means persisting tirelessly; showing sustained enthusiastic action.",
            optionExplanations: {
                0: "Easily tired - opposite meaning; indefatigable means untiring",
                1: "Persisting tirelessly - correct! Indefatigable means never giving up",
                2: "Very confused - unrelated to persistence",
                3: "Extremely lazy - opposite meaning; indefatigable means energetic"
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
