// NCERT Periodic Table Groups and Tables Data
const ELEMENT_DETAILS = {
    // Group 1 - Alkali Metals
    "H": { atomicNumber: 1, electronConfig: "1s¹", oxidationStates: ["+1", "-1"], atomicMass: "1.008", type: "non-metal" },
    "Li": { atomicNumber: 3, electronConfig: "[He] 2s¹", oxidationStates: ["+1"], atomicMass: "6.94", type: "alkali metal" },
    "Na": { atomicNumber: 11, electronConfig: "[Ne] 3s¹", oxidationStates: ["+1"], atomicMass: "22.99", type: "alkali metal" },
    "K": { atomicNumber: 19, electronConfig: "[Ar] 4s¹", oxidationStates: ["+1"], atomicMass: "39.10", type: "alkali metal" },
    "Rb": { atomicNumber: 37, electronConfig: "[Kr] 5s¹", oxidationStates: ["+1"], atomicMass: "85.47", type: "alkali metal" },
    "Cs": { atomicNumber: 55, electronConfig: "[Xe] 6s¹", oxidationStates: ["+1"], atomicMass: "132.91", type: "alkali metal" },
    "Fr": { atomicNumber: 87, electronConfig: "[Rn] 7s¹", oxidationStates: ["+1"], atomicMass: "223", type: "alkali metal" },

    // Group 2 - Alkaline Earth Metals
    "Be": { atomicNumber: 4, electronConfig: "[He] 2s²", oxidationStates: ["+2"], atomicMass: "9.01", type: "alkaline earth metal" },
    "Mg": { atomicNumber: 12, electronConfig: "[Ne] 3s²", oxidationStates: ["+2"], atomicMass: "24.31", type: "alkaline earth metal" },
    "Ca": { atomicNumber: 20, electronConfig: "[Ar] 4s²", oxidationStates: ["+2"], atomicMass: "40.08", type: "alkaline earth metal" },
    "Sr": { atomicNumber: 38, electronConfig: "[Kr] 5s²", oxidationStates: ["+2"], atomicMass: "87.62", type: "alkaline earth metal" },
    "Ba": { atomicNumber: 56, electronConfig: "[Xe] 6s²", oxidationStates: ["+2"], atomicMass: "137.33", type: "alkaline earth metal" },
    "Ra": { atomicNumber: 88, electronConfig: "[Rn] 7s²", oxidationStates: ["+2"], atomicMass: "226", type: "alkaline earth metal" },

    // Group 13 - Boron Family
    "B": { atomicNumber: 5, electronConfig: "[He] 2s² 2p¹", oxidationStates: ["+3"], atomicMass: "10.81", type: "metalloid" },
    "Al": { atomicNumber: 13, electronConfig: "[Ne] 3s² 3p¹", oxidationStates: ["+3"], atomicMass: "26.98", type: "metal" },
    "Ga": { atomicNumber: 31, electronConfig: "[Ar] 3d¹⁰ 4s² 4p¹", oxidationStates: ["+1", "+3"], atomicMass: "69.72", type: "metal" },
    "In": { atomicNumber: 49, electronConfig: "[Kr] 4d¹⁰ 5s² 5p¹", oxidationStates: ["+1", "+3"], atomicMass: "114.82", type: "metal" },
    "Tl": { atomicNumber: 81, electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹", oxidationStates: ["+1", "+3"], atomicMass: "204.38", type: "metal" },

    // Group 14 - Carbon Family
    "C": { atomicNumber: 6, electronConfig: "[He] 2s² 2p²", oxidationStates: ["-4", "+2", "+4"], atomicMass: "12.01", type: "non-metal" },
    "Si": { atomicNumber: 14, electronConfig: "[Ne] 3s² 3p²", oxidationStates: ["-4", "+2", "+4"], atomicMass: "28.09", type: "metalloid" },
    "Ge": { atomicNumber: 32, electronConfig: "[Ar] 3d¹⁰ 4s² 4p²", oxidationStates: ["+2", "+4"], atomicMass: "72.63", type: "metalloid" },
    "Sn": { atomicNumber: 50, electronConfig: "[Kr] 4d¹⁰ 5s² 5p²", oxidationStates: ["+2", "+4"], atomicMass: "118.71", type: "metal" },
    "Pb": { atomicNumber: 82, electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²", oxidationStates: ["+2", "+4"], atomicMass: "207.2", type: "metal" },

    // Group 15 - Nitrogen Family
    "N": { atomicNumber: 7, electronConfig: "[He] 2s² 2p³", oxidationStates: ["-3", "+1", "+2", "+3", "+4", "+5"], atomicMass: "14.01", type: "non-metal" },
    "P": { atomicNumber: 15, electronConfig: "[Ne] 3s² 3p³", oxidationStates: ["-3", "+3", "+5"], atomicMass: "30.97", type: "non-metal" },
    "As": { atomicNumber: 33, electronConfig: "[Ar] 3d¹⁰ 4s² 4p³", oxidationStates: ["-3", "+3", "+5"], atomicMass: "74.92", type: "metalloid" },
    "Sb": { atomicNumber: 51, electronConfig: "[Kr] 4d¹⁰ 5s² 5p³", oxidationStates: ["-3", "+3", "+5"], atomicMass: "121.76", type: "metalloid" },
    "Bi": { atomicNumber: 83, electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³", oxidationStates: ["+3", "+5"], atomicMass: "208.98", type: "metal" },

    // Group 16 - Oxygen Family
    "O": { atomicNumber: 8, electronConfig: "[He] 2s² 2p⁴", oxidationStates: ["-2", "+2"], atomicMass: "16.00", type: "non-metal" },
    "S": { atomicNumber: 16, electronConfig: "[Ne] 3s² 3p⁴", oxidationStates: ["-2", "+2", "+4", "+6"], atomicMass: "32.07", type: "non-metal" },
    "Se": { atomicNumber: 34, electronConfig: "[Ar] 3d¹⁰ 4s² 4p⁴", oxidationStates: ["-2", "+2", "+4", "+6"], atomicMass: "78.97", type: "non-metal" },
    "Te": { atomicNumber: 52, electronConfig: "[Kr] 4d¹⁰ 5s² 5p⁴", oxidationStates: ["-2", "+2", "+4", "+6"], atomicMass: "127.60", type: "metalloid" },
    "Po": { atomicNumber: 84, electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴", oxidationStates: ["+2", "+4"], atomicMass: "209", type: "metal" },

    // Group 17 - Halogens
    "F": { atomicNumber: 9, electronConfig: "[He] 2s² 2p⁵", oxidationStates: ["-1"], atomicMass: "19.00", type: "non-metal" },
    "Cl": { atomicNumber: 17, electronConfig: "[Ne] 3s² 3p⁵", oxidationStates: ["-1", "+1", "+3", "+5", "+7"], atomicMass: "35.45", type: "non-metal" },
    "Br": { atomicNumber: 35, electronConfig: "[Ar] 3d¹⁰ 4s² 4p⁵", oxidationStates: ["-1", "+1", "+3", "+5", "+7"], atomicMass: "79.90", type: "non-metal" },
    "I": { atomicNumber: 53, electronConfig: "[Kr] 4d¹⁰ 5s² 5p⁵", oxidationStates: ["-1", "+1", "+3", "+5", "+7"], atomicMass: "126.90", type: "non-metal" },
    "At": { atomicNumber: 85, electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵", oxidationStates: ["-1", "+1", "+3", "+5", "+7"], atomicMass: "210", type: "metalloid" },

    // Group 18 - Noble Gases
    "He": { atomicNumber: 2, electronConfig: "1s²", oxidationStates: ["0"], atomicMass: "4.00", type: "noble gas" },
    "Ne": { atomicNumber: 10, electronConfig: "[He] 2s² 2p⁶", oxidationStates: ["0"], atomicMass: "20.18", type: "noble gas" },
    "Ar": { atomicNumber: 18, electronConfig: "[Ne] 3s² 3p⁶", oxidationStates: ["0"], atomicMass: "39.95", type: "noble gas" },
    "Kr": { atomicNumber: 36, electronConfig: "[Ar] 3d¹⁰ 4s² 4p⁶", oxidationStates: ["0", "+2"], atomicMass: "83.80", type: "noble gas" },
    "Xe": { atomicNumber: 54, electronConfig: "[Kr] 4d¹⁰ 5s² 5p⁶", oxidationStates: ["0", "+2", "+4", "+6", "+8"], atomicMass: "131.29", type: "noble gas" },
    "Rn": { atomicNumber: 86, electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶", oxidationStates: ["0", "+2"], atomicMass: "222", type: "noble gas" },

    // d-block elements with detailed information
    "Sc": { atomicNumber: 21, electronConfig: "[Ar] 3d¹ 4s²", oxidationStates: ["+3"], atomicMass: "44.96", type: "transition metal" },
    "Ti": { atomicNumber: 22, electronConfig: "[Ar] 3d² 4s²", oxidationStates: ["+2", "+3", "+4"], atomicMass: "47.87", type: "transition metal" },
    "V": { atomicNumber: 23, electronConfig: "[Ar] 3d³ 4s²", oxidationStates: ["+2", "+3", "+4", "+5"], atomicMass: "50.94", type: "transition metal" },
    "Cr": { atomicNumber: 24, electronConfig: "[Ar] 3d⁵ 4s¹", oxidationStates: ["+2", "+3", "+6"], atomicMass: "51.99", type: "transition metal" },
    "Mn": { atomicNumber: 25, electronConfig: "[Ar] 3d⁵ 4s²", oxidationStates: ["+2", "+3", "+4", "+6", "+7"], atomicMass: "54.94", type: "transition metal" },
    "Fe": { atomicNumber: 26, electronConfig: "[Ar] 3d⁶ 4s²", oxidationStates: ["+2", "+3"], atomicMass: "55.85", type: "transition metal" },
    "Co": { atomicNumber: 27, electronConfig: "[Ar] 3d⁷ 4s²", oxidationStates: ["+2", "+3"], atomicMass: "58.93", type: "transition metal" },
    "Ni": { atomicNumber: 28, electronConfig: "[Ar] 3d⁸ 4s²", oxidationStates: ["+2"], atomicMass: "58.69", type: "transition metal" },
    "Cu": { atomicNumber: 29, electronConfig: "[Ar] 3d¹⁰ 4s¹", oxidationStates: ["+1", "+2"], atomicMass: "63.55", type: "transition metal" },
    "Zn": { atomicNumber: 30, electronConfig: "[Ar] 3d¹⁰ 4s²", oxidationStates: ["+2"], atomicMass: "65.38", type: "transition metal" },
    "Y": { atomicNumber: 39, electronConfig: "[Kr] 4d¹ 5s²", oxidationStates: ["+3"], atomicMass: "88.91", type: "transition metal" },
    "Zr": { atomicNumber: 40, electronConfig: "[Kr] 4d² 5s²", oxidationStates: ["+4"], atomicMass: "91.22", type: "transition metal" },
    "Nb": { atomicNumber: 41, electronConfig: "[Kr] 4d⁴ 5s¹", oxidationStates: ["+3", "+5"], atomicMass: "92.91", type: "transition metal" },
    "Mo": { atomicNumber: 42, electronConfig: "[Kr] 4d⁵ 5s¹", oxidationStates: ["+2", "+3", "+4", "+5", "+6"], atomicMass: "95.95", type: "transition metal" },
    "Tc": { atomicNumber: 43, electronConfig: "[Kr] 4d⁵ 5s²", oxidationStates: ["+4", "+6", "+7"], atomicMass: "98", type: "transition metal" },
    "Ru": { atomicNumber: 44, electronConfig: "[Kr] 4d⁷ 5s¹", oxidationStates: ["+2", "+3", "+4", "+6", "+8"], atomicMass: "101.07", type: "transition metal" },
    "Rh": { atomicNumber: 45, electronConfig: "[Kr] 4d⁸ 5s¹", oxidationStates: ["+1", "+3"], atomicMass: "102.91", type: "transition metal" },
    "Pd": { atomicNumber: 46, electronConfig: "[Kr] 4d¹⁰", oxidationStates: ["+2", "+4"], atomicMass: "106.42", type: "transition metal" },
    "Ag": { atomicNumber: 47, electronConfig: "[Kr] 4d¹⁰ 5s¹", oxidationStates: ["+1"], atomicMass: "107.87", type: "transition metal" },
    "Cd": { atomicNumber: 48, electronConfig: "[Kr] 4d¹⁰ 5s²", oxidationStates: ["+2"], atomicMass: "112.41", type: "transition metal" },

    // Additional transition metals (3rd series)
    "Hf": { atomicNumber: 72, electronConfig: "[Xe] 4f¹⁴ 5d² 6s²", oxidationStates: ["+4"], atomicMass: "178.49", type: "transition metal" },
    "Ta": { atomicNumber: 73, electronConfig: "[Xe] 4f¹⁴ 5d³ 6s²", oxidationStates: ["+5"], atomicMass: "180.95", type: "transition metal" },
    "W": { atomicNumber: 74, electronConfig: "[Xe] 4f¹⁴ 5d⁴ 6s²", oxidationStates: ["+2", "+3", "+4", "+5", "+6"], atomicMass: "183.84", type: "transition metal" },
    "Re": { atomicNumber: 75, electronConfig: "[Xe] 4f¹⁴ 5d⁵ 6s²", oxidationStates: ["+1", "+2", "+3", "+4", "+5", "+6", "+7"], atomicMass: "186.21", type: "transition metal" },
    "Os": { atomicNumber: 76, electronConfig: "[Xe] 4f¹⁴ 5d⁶ 6s²", oxidationStates: ["+2", "+3", "+4", "+6", "+8"], atomicMass: "190.23", type: "transition metal" },
    "Ir": { atomicNumber: 77, electronConfig: "[Xe] 4f¹⁴ 5d⁷ 6s²", oxidationStates: ["+1", "+3", "+4", "+6"], atomicMass: "192.22", type: "transition metal" },
    "Pt": { atomicNumber: 78, electronConfig: "[Xe] 4f¹⁴ 5d⁹ 6s¹", oxidationStates: ["+2", "+4"], atomicMass: "195.08", type: "transition metal" },
    "Au": { atomicNumber: 79, electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s¹", oxidationStates: ["+1", "+3"], atomicMass: "196.97", type: "transition metal" },
    "Hg": { atomicNumber: 80, electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s²", oxidationStates: ["+1", "+2"], atomicMass: "200.59", type: "transition metal" },

    // f-block elements (lanthanoids)
    "La": { atomicNumber: 57, electronConfig: "[Xe] 5d¹ 6s²", oxidationStates: ["+3"], atomicMass: "138.91", type: "lanthanoid" },
    "Ce": { atomicNumber: 58, electronConfig: "[Xe] 4f¹ 5d¹ 6s²", oxidationStates: ["+3", "+4"], atomicMass: "140.12", type: "lanthanoid" },
    "Pr": { atomicNumber: 59, electronConfig: "[Xe] 4f³ 6s²", oxidationStates: ["+3"], atomicMass: "140.91", type: "lanthanoid" },
    "Nd": { atomicNumber: 60, electronConfig: "[Xe] 4f⁴ 6s²", oxidationStates: ["+3"], atomicMass: "144.24", type: "lanthanoid" },
    "Pm": { atomicNumber: 61, electronConfig: "[Xe] 4f⁵ 6s²", oxidationStates: ["+3"], atomicMass: "145", type: "lanthanoid" },
    "Sm": { atomicNumber: 62, electronConfig: "[Xe] 4f⁶ 6s²", oxidationStates: ["+2", "+3"], atomicMass: "150.36", type: "lanthanoid" },
    "Eu": { atomicNumber: 63, electronConfig: "[Xe] 4f⁷ 6s²", oxidationStates: ["+2", "+3"], atomicMass: "151.96", type: "lanthanoid" },
    "Gd": { atomicNumber: 64, electronConfig: "[Xe] 4f⁷ 5d¹ 6s²", oxidationStates: ["+3"], atomicMass: "157.25", type: "lanthanoid" },
    "Tb": { atomicNumber: 65, electronConfig: "[Xe] 4f⁹ 6s²", oxidationStates: ["+3"], atomicMass: "158.93", type: "lanthanoid" },
    "Dy": { atomicNumber: 66, electronConfig: "[Xe] 4f¹⁰ 6s²", oxidationStates: ["+3"], atomicMass: "162.50", type: "lanthanoid" },
    "Ho": { atomicNumber: 67, electronConfig: "[Xe] 4f¹¹ 6s²", oxidationStates: ["+3"], atomicMass: "164.93", type: "lanthanoid" },
    "Er": { atomicNumber: 68, electronConfig: "[Xe] 4f¹² 6s²", oxidationStates: ["+3"], atomicMass: "167.26", type: "lanthanoid" },
    "Tm": { atomicNumber: 69, electronConfig: "[Xe] 4f¹³ 6s²", oxidationStates: ["+3"], atomicMass: "168.93", type: "lanthanoid" },
    "Yb": { atomicNumber: 70, electronConfig: "[Xe] 4f¹⁴ 6s²", oxidationStates: ["+2", "+3"], atomicMass: "173.05", type: "lanthanoid" },
    "Lu": { atomicNumber: 71, electronConfig: "[Xe] 4f¹⁴ 5d¹ 6s²", oxidationStates: ["+3"], atomicMass: "174.97", type: "lanthanoid" },

    // f-block elements (actinoids)
    "Ac": { atomicNumber: 89, electronConfig: "[Rn] 6d¹ 7s²", oxidationStates: ["+3"], atomicMass: "227", type: "actinoid" },
    "Th": { atomicNumber: 90, electronConfig: "[Rn] 6d² 7s²", oxidationStates: ["+4"], atomicMass: "232.04", type: "actinoid" },
    "Pa": { atomicNumber: 91, electronConfig: "[Rn] 5f² 6d¹ 7s²", oxidationStates: ["+4", "+5"], atomicMass: "231.04", type: "actinoid" },
    "U": { atomicNumber: 92, electronConfig: "[Rn] 5f³ 6d¹ 7s²", oxidationStates: ["+3", "+4", "+5", "+6"], atomicMass: "238.03", type: "actinoid" },
    "Np": { atomicNumber: 93, electronConfig: "[Rn] 5f⁴ 6d¹ 7s²", oxidationStates: ["+3", "+4", "+5", "+6"], atomicMass: "237", type: "actinoid" },
    "Pu": { atomicNumber: 94, electronConfig: "[Rn] 5f⁶ 7s²", oxidationStates: ["+3", "+4", "+5", "+6"], atomicMass: "244", type: "actinoid" },
    "Am": { atomicNumber: 95, electronConfig: "[Rn] 5f⁷ 7s²", oxidationStates: ["+2", "+3", "+4", "+5", "+6"], atomicMass: "243", type: "actinoid" },
    "Cm": { atomicNumber: 96, electronConfig: "[Rn] 5f⁷ 6d¹ 7s²", oxidationStates: ["+3", "+4"], atomicMass: "247", type: "actinoid" },
    "Bk": { atomicNumber: 97, electronConfig: "[Rn] 5f⁹ 7s²", oxidationStates: ["+3", "+4"], atomicMass: "247", type: "actinoid" },
    "Cf": { atomicNumber: 98, electronConfig: "[Rn] 5f¹⁰ 7s²", oxidationStates: ["+2", "+3", "+4"], atomicMass: "251", type: "actinoid" },
    "Es": { atomicNumber: 99, electronConfig: "[Rn] 5f¹¹ 7s²", oxidationStates: ["+2", "+3"], atomicMass: "252", type: "actinoid" },
    "Fm": { atomicNumber: 100, electronConfig: "[Rn] 5f¹² 7s²", oxidationStates: ["+2", "+3"], atomicMass: "257", type: "actinoid" },
    "Md": { atomicNumber: 101, electronConfig: "[Rn] 5f¹³ 7s²", oxidationStates: ["+2", "+3"], atomicMass: "258", type: "actinoid" },
    "No": { atomicNumber: 102, electronConfig: "[Rn] 5f¹⁴ 7s²", oxidationStates: ["+2", "+3"], atomicMass: "259", type: "actinoid" },
    "Lr": { atomicNumber: 103, electronConfig: "[Rn] 5f¹⁴ 6d¹ 7s²", oxidationStates: ["+3"], atomicMass: "266", type: "actinoid" }
};

const NCERT_TABLES_DATA = {
    overview: {
        title: "Inorganic Chemistry Tables",
        description: "Comprehensive collection of periodic table groups with properties, trends, and important information for BITSAT preparation.",
        totalGroups: 11,
        totalElements: 118
    },
    
    groups: {
        group1: {
            name: "Alkali Metals (Group 1)",
            elements: ["H", "Li", "Na", "K", "Rb", "Cs", "Fr"],
            imageUrls: ["https://i.postimg.cc/DfjyDVvB/Screenshot-2025-06-20-181838.png"],
            description: "Highly reactive metals with one valence electron",
            properties: [
                "Single valence electron in outermost shell",
                "Highly reactive, especially with water",
                "Form ionic compounds with non-metals",
                "Soft metals with low melting points",
                "Good conductors of heat and electricity"
            ],
            trends: [
                "Atomic radius increases down the group",
                "Ionization energy decreases down the group",
                "Metallic character increases down the group",
                "Reactivity increases down the group"
            ],
            importantOrders: [
                "Reactivity: Li < Na < K < Rb < Cs",
                "Atomic size: Li < Na < K < Rb < Cs",
                "Ionization energy: Cs < Rb < K < Na < Li",
                "Hydration energy: Li⁺ > Na⁺ > K⁺ > Rb⁺ > Cs⁺"
            ],
            keyReactions: [
                "2M + 2H₂O → 2MOH + H₂",
                "4M + O₂ → 2M₂O",
                "2M + Cl₂ → 2MCl"
            ]
        },
        
        group2: {
            name: "Alkaline Earth Metals (Group 2)",
            elements: ["Be", "Mg", "Ca", "Sr", "Ba", "Ra"],
            imageUrls: ["https://i.postimg.cc/50pNbTw9/Screenshot-2025-06-20-181854.png"],
            description: "Reactive metals with two valence electrons",
            properties: [
                "Two valence electrons in outermost shell",
                "Form divalent cations (M²⁺)",
                "Higher melting points than Group 1",
                "Less reactive than alkali metals",
                "Form ionic compounds"
            ],
            trends: [
                "Atomic radius increases down the group",
                "Ionization energy decreases down the group",
                "Electronegativity decreases down the group",
                "Basic character of oxides increases down the group"
            ],
            importantOrders: [
                "Atomic size: Be < Mg < Ca < Sr < Ba < Ra",
                "Ionization energy: Ra < Ba < Sr < Ca < Mg < Be",
                "Solubility of hydroxides: Be(OH)₂ < Mg(OH)₂ < Ca(OH)₂ < Sr(OH)₂ < Ba(OH)₂ < Ra(OH)₂",
                "Thermal stability of carbonates: BeCO₃ < MgCO₃ < CaCO₃ < SrCO₃ < BaCO₃ < RaCO₃",
                "Hydration energy: Be²⁺ > Mg²⁺ > Ca²⁺ > Sr²⁺ > Ba²⁺ > Ra²⁺"
            ],
            keyReactions: [
                "M + 2H₂O → M(OH)₂ + H₂",
                "2M + O₂ → 2MO",
                "M + Cl₂ → MCl₂"
            ]
        },
        
        group13: {
            name: "Boron Family (Group 13)",
            elements: ["B", "Al", "Ga", "In", "Tl"],
            imageUrls: ["https://i.postimg.cc/d1rBSMT1/Screenshot-2024-12-28-13-02-14-196-2.jpg"],
            description: "Elements with three valence electrons showing varied properties",
            properties: [
                "Three valence electrons (ns²np¹)",
                "Show +3 and +1 oxidation states",
                "Boron is metalloid, others are metals",
                "Form covalent and ionic compounds",
                "Electron deficient compounds"
            ],
            trends: [
                "Metallic character increases down the group",
                "Atomic radius increases down the group",
                "Ionization energy decreases down the group",
                "Stability of +1 oxidation state increases down the group"
            ],
            importantOrders: [
                "Atomic size: B < Al < Ga < In < Tl (Exception: Ga < Al due to d-block contraction)",
                "Ionization energy: Tl < In < Ga < Al < B",
                "Stability of +3 state: B > Al > Ga > In > Tl",
                "Stability of +1 state: Tl > In > Ga > Al > B (Inert pair effect increases down the group)"
            ],
            keyReactions: [
                "2M + 3Cl₂ → 2MCl₃",
                "4M + 3O₂ → 2M₂O₃",
                "M₂O₃ + 6HCl → 2MCl₃ + 3H₂O"
            ]
        },
        
        group14: {
            name: "Carbon Family (Group 14)",
            elements: ["C", "Si", "Ge", "Sn", "Pb"],
            imageUrls: ["https://i.postimg.cc/3NhZsLgZ/Screenshot-2024-12-28-13-02-40-738-2.jpg"],
            description: "Elements showing transition from non-metal to metal",
            properties: [
                "Four valence electrons (ns²np²)",
                "Show +4, +2, and -4 oxidation states",
                "Carbon and Silicon are non-metals/metalloids",
                "Tin and Lead are metals",
                "Form covalent compounds"
            ],
            trends: [
                "Metallic character increases down the group",
                "Atomic radius increases down the group",
                "Ionization energy decreases down the group",
                "Stability of +2 oxidation state increases down the group"
            ],
            importantOrders: [
                "Atomic size: C < Si < Ge < Sn < Pb",
                "Ionization energy: Pb < Sn < Ge < Si < C",
                "Stability of +4 state: C > Si > Ge > Sn > Pb",
                "Stability of +2 state: Pb > Sn > Ge > Si > C"
            ],
            keyReactions: [
                "M + O₂ → MO₂",
                "M + 2Cl₂ → MCl₄",
                "MCl₄ + 2H₂O → MO₂ + 4HCl"
            ]
        },
        
        group15: {
            name: "Nitrogen Family (Group 15)",
            elements: ["N", "P", "As", "Sb", "Bi"],
            imageUrls: [
                "https://i.postimg.cc/cJVhm1C2/Screenshot-2024-12-28-13-04-49-975-2.jpg",
                "https://i.postimg.cc/fyvvDxCQ/Screenshot-2024-12-28-13-05-15-418-2.jpg",
                "https://i.postimg.cc/TwnJS7c2/Screenshot-2025-06-20-202101.png",
                "https://i.postimg.cc/L5TB4J7r/Screenshot-2025-06-20-202131.png",
                "https://i.postimg.cc/Y2fxzP9b/Screenshot-2025-06-20-202136.png",
                "https://i.postimg.cc/8cDmVRyR/Screenshot-2025-06-20-202154.png",
                "https://i.postimg.cc/43D1WkVF/Screenshot-2025-06-20-202201.png"
            ],
            description: "Pnictogens with five valence electrons",
            properties: [
                "Five valence electrons (ns²np³)",
                "Show -3, +3, and +5 oxidation states",
                "Nitrogen and Phosphorus are non-metals",
                "Arsenic and Antimony are metalloids",
                "Bismuth is a metal"
            ],
            trends: [
                "Metallic character increases down the group",
                "Atomic radius increases down the group",
                "Ionization energy decreases down the group",
                "Stability of +5 oxidation state decreases down the group"
            ],
            importantOrders: [
                "Atomic size: N < P < As < Sb < Bi",
                "Ionization energy: Bi < Sb < As < P < N",
                "Stability of +5 state: N > P > As > Sb > Bi (Inert pair effect increases down the group)",
                "Stability of +3 state: Bi > Sb > As > P > N",
                "Electronegativity: N > P > As > Sb > Bi",
                "Bond dissociation energy: N₂ > P₄ > As₄ > Sb₄ > Bi₄"
            ],
            keyReactions: [
                "4M + 3O₂ → 2M₂O₃",
                "4M + 5O₂ → 2M₂O₅",
                "2M + 3Cl₂ → 2MCl₃"
            ]
        },
        
        group16: {
            name: "Oxygen Family (Group 16)",
            elements: ["O", "S", "Se", "Te", "Po"],
            imageUrls: [
                "https://i.postimg.cc/HW0zwggv/Screenshot-2024-12-28-13-05-43-977-2.jpg",
                "https://i.postimg.cc/8zYmpkRc/Screenshot-2024-12-28-13-06-00-089-2.jpg",
                "https://i.postimg.cc/ZnGBS4Y1/Screenshot-2025-06-20-202323.png"
            ],
            description: "Chalcogens with six valence electrons",
            properties: [
                "Six valence electrons (ns²np⁴)",
                "Show -2, +4, and +6 oxidation states",
                "Oxygen and Sulfur are non-metals",
                "Selenium and Tellurium are metalloids",
                "Polonium is a metal"
            ],
            trends: [
                "Metallic character increases down the group",
                "Atomic radius increases down the group",
                "Ionization energy decreases down the group",
                "Stability of +6 oxidation state decreases down the group"
            ],
            importantOrders: [
                "Atomic size: O < S < Se < Te < Po",
                "Ionization energy: Po < Te < Se < S < O",
                "Stability of +6 state: S > Se > Te > Po",
                "Electronegativity: O > S > Se > Te > Po"
            ],
            keyReactions: [
                "M + O₂ → MO₂",
                "M + 3F₂ → MF₆",
                "H₂M + 3O₂ → H₂MO₄"
            ]
        },
        
        group17: {
            name: "Halogens (Group 17)",
            elements: ["F", "Cl", "Br", "I", "At"],
            imageUrls: [
                "https://i.postimg.cc/NjCpKkcg/Screenshot-2024-12-26-12-01-02-698.jpg",
                "https://i.postimg.cc/MKWDtFZ6/Screenshot-2024-12-28-13-06-27-899-2.jpg",
                "https://i.postimg.cc/X7QgPkXw/Screenshot-2024-12-28-13-06-46-277-2.jpg",
                "https://i.postimg.cc/LsZBndDT/Screenshot-2024-12-28-13-07-13-053-2.jpg"
            ],
            description: "Highly reactive non-metals with seven valence electrons",
            properties: [
                "Seven valence electrons (ns²np⁵)",
                "Show -1, +1, +3, +5, and +7 oxidation states",
                "Highly electronegative elements",
                "Form diatomic molecules (X₂)",
                "Strong oxidizing agents"
            ],
            trends: [
                "Atomic radius increases down the group",
                "Ionization energy decreases down the group",
                "Electronegativity decreases down the group",
                "Oxidizing power decreases down the group"
            ],
            importantOrders: [
                "Atomic size: F < Cl < Br < I < At",
                "Ionization energy: At < I < Br < Cl < F",
                "Electronegativity: F > Cl > Br > I > At",
                "Oxidizing power: F₂ > Cl₂ > Br₂ > I₂ > At₂",
                "Bond dissociation energy: Cl₂ > Br₂ > F₂ > I₂ > At₂ (Exception: F₂ has low bond energy due to lone pair repulsion)",
                "Hydration energy: F⁻ > Cl⁻ > Br⁻ > I⁻ > At⁻"
            ],
            keyReactions: [
                "X₂ + H₂ → 2HX",
                "X₂ + 2NaOH → NaX + NaXO + H₂O",
                "3X₂ + 6NaOH → 5NaX + NaXO₃ + 3H₂O"
            ]
        },
        
        group18: {
            name: "Noble Gases (Group 18)",
            elements: ["He", "Ne", "Ar", "Kr", "Xe", "Rn"],
            imageUrls: ["https://i.postimg.cc/vBrrtWpx/Screenshot-2024-12-28-13-07-42-911-2.jpg"],
            description: "Chemically inert gases with complete electron configuration",
            properties: [
                "Complete valence shell (ns²np⁶)",
                "Chemically inert under normal conditions",
                "Monoatomic gases",
                "Low boiling and melting points",
                "Used in lighting and welding"
            ],
            trends: [
                "Atomic radius increases down the group",
                "Ionization energy decreases down the group",
                "Boiling point increases down the group",
                "Chemical reactivity increases down the group"
            ],
            importantOrders: [
                "Atomic size: He < Ne < Ar < Kr < Xe < Rn",
                "Ionization energy: Rn < Xe < Kr < Ar < Ne < He",
                "Boiling point: He < Ne < Ar < Kr < Xe < Rn",
                "Chemical reactivity: He < Ne < Ar < Kr < Xe < Rn"
            ],
            keyReactions: [
                "Xe + F₂ → XeF₂ (under special conditions)",
                "Xe + 2F₂ → XeF₄",
                "Xe + 3F₂ → XeF₆"
            ]
        }
    }
};

// Function to load NCERT Tables content
function loadNCERTTablesContent() {
    const container = document.getElementById('theoryNcertTables');
    if (!container) return;
    
    const data = NCERT_TABLES_DATA;
    
    container.innerHTML = `
        <div class="ncert-tables-container">
            <div class="ncert-header">
                <h2><i class="fas fa-table"></i> ${data.overview.title}</h2>
                <p class="ncert-description">${data.overview.description}</p>

                <!-- Important Usage Instructions -->
                <div class="usage-instructions">
                    <div class="instruction-card">
                        <h3><i class="fas fa-info-circle"></i> How to Use This Section</h3>
                        <div class="instruction-points">
                            <div class="instruction-point">
                                <i class="fas fa-eye"></i>
                                <strong>Click "View Details"</strong> to see multiple images and comprehensive information for each group
                            </div>
                            <div class="instruction-point">
                                <i class="fas fa-expand-arrows-alt"></i>
                                <strong>Click on Images</strong> in the detail view to open them in full-screen popup for better viewing
                            </div>
                            <div class="instruction-point">
                                <i class="fas fa-atom"></i>
                                <strong>Click on Element Symbols</strong> to view detailed information including atomic number, electron configuration, and oxidation states
                            </div>
                            <div class="instruction-point">
                                <i class="fas fa-table"></i>
                                <strong>Interactive Periodic Table:</strong> Click on the "Interactive Periodic Table" card to access a fully interactive periodic table with all 118 elements
                            </div>
                            <div class="instruction-point">
                                <i class="fas fa-mouse-pointer"></i>
                                <strong>Element Details:</strong> In the periodic table, click on any element to see detailed information including atomic mass, electron configuration, and chemical properties
                            </div>
                            <div class="instruction-point">
                                <i class="fas fa-mobile-alt"></i>
                                <strong>Mobile Tip:</strong> For the best periodic table experience on mobile devices, rotate to landscape mode for better visibility
                            </div>
                            <div class="instruction-point">
                                <i class="fas fa-flask"></i>
                                <strong>Special Focus:</strong> d-block and f-block elements have extensive details with valence shell configurations
                            </div>
                        </div>
                    </div>
                </div>

                <div class="ncert-stats">
                    <div class="stat-item">
                        <i class="fas fa-layer-group"></i>
                        <span>${data.overview.totalGroups} Groups</span>
                    </div>
                    <div class="stat-item">
                        <i class="fas fa-atom"></i>
                        <span>${data.overview.totalElements} Elements</span>
                    </div>
                </div>

                <!-- Inorganic Quiz Button - positioned below stats -->
                <div class="inorganic-quiz-button-container" style="text-align: center; margin-top: 30px; padding: 20px;">
                    <button class="inorganic-quiz-btn" onclick="showTheoryTab('inorganicQuiz')" id="inorganicQuizBtn">
                        <i class="fas fa-atom"></i> Take Inorganic Chemistry Quiz
                    </button>
                </div>
            </div>
            
            <div class="groups-grid">
                ${Object.entries(data.groups).map(([key, group]) => `
                    <div class="group-card" onclick="showGroupDetails('${key}')">
                        <div class="group-header">
                            <h3>${group.name}</h3>
                            <div class="elements-list">
                                ${group.elements.map(el => `<span class="element-tag" onclick="event.stopPropagation(); showElementDetails('${el}')">${el}</span>`).join('')}
                            </div>
                        </div>
                        <div class="group-preview">
                            ${group.imageUrls && group.imageUrls.length > 0 ?
                                `<img src="${group.imageUrls[0]}" alt="${group.name}" class="group-image" loading="lazy" onerror="this.style.display='none'">` :
                                `<div class="no-image-placeholder"><i class="fas fa-table"></i><p>No images available</p></div>`
                            }
                        </div>
                        <p class="group-description">${group.description}</p>
                        <button class="view-details-btn">
                            <i class="fas fa-eye"></i> View Details
                        </button>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <!-- Group Details Modal -->
        <div id="groupDetailsModal" class="group-modal" style="display: none;">
            <div class="modal-content-large">
                <div class="modal-header">
                    <h2 id="modalGroupName"></h2>
                    <button onclick="closeGroupDetails()" class="close-btn">&times;</button>
                </div>
                <div class="modal-body" id="modalGroupContent">
                    <!-- Group details will be loaded here -->
                </div>
            </div>
        </div>

        <!-- Element Details Modal -->
        <div id="elementDetailsModal" class="element-modal" style="display: none;">
            <div class="modal-content-medium">
                <div class="modal-header">
                    <h2 id="modalElementName"></h2>
                    <button onclick="closeElementDetails()" class="close-btn">&times;</button>
                </div>
                <div class="modal-body" id="modalElementContent">
                    <!-- Element details will be loaded here -->
                </div>
            </div>
        </div>

        <!-- Image Popup Modal -->
        <div id="imagePopupModal" class="image-popup-modal" style="display: none;">
            <div class="image-popup-content">
                <div class="image-popup-header">
                    <h3 id="imagePopupTitle"></h3>
                    <button onclick="closeImagePopup()" class="close-btn">&times;</button>
                </div>
                <div class="image-popup-body">
                    <img id="popupImage" src="" alt="" class="popup-image">
                </div>
                <div class="image-popup-footer">
                    <p>Click outside the image or press ESC to close</p>
                </div>
            </div>
        </div>
    `;
}

// Function to show group details in modal
function showGroupDetails(groupKey) {
    const group = NCERT_TABLES_DATA.groups[groupKey];
    if (!group) return;

    const modal = document.getElementById('groupDetailsModal');
    const modalName = document.getElementById('modalGroupName');
    const modalContent = document.getElementById('modalGroupContent');

    modalName.textContent = group.name;

    // Special handling for periodic table
    if (groupKey === 'periodicTable') {
        modalContent.innerHTML = getInteractivePeriodicTable();
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        return;
    }

    modalContent.innerHTML = `
        <div class="group-details-content">
            <div class="group-image-section">
                ${group.imageUrls && group.imageUrls.length > 0 ? `
                    <div class="image-gallery">
                        ${group.imageUrls.map((url, index) => `
                            <img src="${url}" alt="${group.name} - Image ${index + 1}" class="detailed-group-image clickable-image" loading="lazy" onerror="this.style.display='none'" onclick="openImagePopup('${url}', '${group.name} - Image ${index + 1}')">
                        `).join('')}
                    </div>
                ` : `
                    <div class="no-image-placeholder-large">
                        <i class="fas fa-table"></i>
                        <p>No images available for this group</p>
                    </div>
                `}
                <div class="elements-detailed">
                    <h4>Elements in this group (Click for details):</h4>
                    <div class="elements-grid">
                        ${group.elements.map(el => `
                            <div class="element-detailed clickable" onclick="showElementDetails('${el}')">
                                <span class="element-symbol">${el}</span>
                                ${ELEMENT_DETAILS[el] ? `<span class="element-number">${ELEMENT_DETAILS[el].atomicNumber}</span>` : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <div class="group-info-section">
                <div class="info-card">
                    <h4><i class="fas fa-info-circle"></i> General Properties</h4>
                    <ul>
                        ${group.properties.map(prop => `<li>${prop}</li>`).join('')}
                    </ul>
                </div>

                <div class="info-card">
                    <h4><i class="fas fa-chart-line"></i> Periodic Trends</h4>
                    <ul>
                        ${group.trends.map(trend => `<li>${trend}</li>`).join('')}
                    </ul>
                </div>

                <div class="info-card">
                    <h4><i class="fas fa-sort-amount-up"></i> Important Orders</h4>
                    <ul>
                        ${group.importantOrders.map(order => `<li><strong>${order}</strong></li>`).join('')}
                    </ul>
                </div>

                <div class="info-card">
                    <h4><i class="fas fa-flask"></i> Key Reactions</h4>
                    <div class="reactions-list">
                        ${group.keyReactions.map(reaction => `
                            <div class="reaction-item">
                                <code>${reaction}</code>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Function to close group details modal
function closeGroupDetails() {
    const modal = document.getElementById('groupDetailsModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Add remaining groups data
NCERT_TABLES_DATA.groups.dblock = {
    name: "d-Block Elements (Transition Metals)",
    elements: ["Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd"],
    imageUrls: [
        "https://i.postimg.cc/V6kVDxrn/Screenshot-2025-06-20-172744.png",
        "https://i.postimg.cc/y8qpwfrg/Screenshot-2025-06-20-172832.png",
        "https://i.postimg.cc/m216pxVW/Screenshot-2025-06-20-172854.png",
        "https://i.postimg.cc/GtVg3zLf/Screenshot-2025-06-20-172859.png"
    ],
    description: "Transition metals with partially filled d-orbitals",
    properties: [
        "Partially filled d-orbitals in atoms or ions",
        "Variable oxidation states",
        "Colored compounds and ions",
        "Catalytic properties",
        "Formation of complex compounds",
        "Magnetic properties"
    ],
    trends: [
        "Atomic radius decreases across the period",
        "Ionization energy increases across the period",
        "Multiple oxidation states",
        "Metallic character remains high"
    ],
    importantOrders: [
        "Atomic size (3d series): Sc > Ti > V > Cr > Mn > Fe > Co > Ni > Cu > Zn",
        "Ionization energy (3d series): Zn > Cu > Ni > Co > Fe > Mn > Cr > V > Ti > Sc",
        "Common oxidation states: +2, +3 (most common), variable oxidation states due to similar energies of (n-1)d and ns orbitals",
        "Magnetic moment (unpaired electrons): Mn²⁺(5) > Fe³⁺(5) > Cr³⁺(3) > Fe²⁺(4) > Co²⁺(3) > Ni²⁺(2)",
        "Density: Generally increases across the period with exceptions",
        "Melting points: Generally high, Cr and W have highest melting points"
    ],
    keyReactions: [
        "M + nHCl → MCl_n + n/2 H₂",
        "M²⁺ + 2OH⁻ → M(OH)₂",
        "Complex formation: M²⁺ + 6NH₃ → [M(NH₃)₆]²⁺"
    ]
};

NCERT_TABLES_DATA.groups.fblock = {
    name: "f-Block Elements (Inner Transition)",
    elements: ["La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr"],
    imageUrls: [
        "https://i.postimg.cc/9FzhBFDm/Screenshot-2025-06-20-173902.png",
        "https://i.postimg.cc/MZ9wRjK3/Screenshot-2025-06-20-173909.png",
        "https://i.postimg.cc/13ksXh59/Screenshot-2025-06-20-173914.png",
        "https://i.postimg.cc/Pq1h83P1/Screenshot-2025-06-20-173936.png",
        "https://i.postimg.cc/Nf0gPkzw/Screenshot-2025-06-20-173943.png"
    ],
    description: "Inner transition elements with f-orbital filling",
    properties: [
        "Filling of f-orbitals (4f for lanthanoids, 5f for actinoids)",
        "Similar chemical properties within series",
        "High density and metallic character",
        "Complex magnetic and electronic properties",
        "Radioactive (actinoids)"
    ],
    trends: [
        "Lanthanoid contraction in 4f series",
        "Atomic radius decreases across the series",
        "Similar chemical properties",
        "Actinoids show more variable oxidation states"
    ],
    importantOrders: [
        "Lanthanoid contraction: La³⁺ > Ce³⁺ > Pr³⁺ > Nd³⁺ > Pm³⁺ > Sm³⁺ > Eu³⁺ > Gd³⁺ > Tb³⁺ > Dy³⁺ > Ho³⁺ > Er³⁺ > Tm³⁺ > Yb³⁺ > Lu³⁺",
        "Common oxidation state: +3 (lanthanoids), +3, +4, +5, +6 (actinoids)",
        "Exceptional oxidation states: Ce⁴⁺, Eu²⁺, Yb²⁺ (lanthanoids)",
        "Actinoid oxidation states: More variable than lanthanoids due to comparable energies of 5f, 6d, and 7s orbitals",
        "Radioactivity: All actinoids are radioactive, half-life decreases with increasing atomic number",
        "Magnetic properties: Complex due to f-orbital involvement"
    ],
    keyReactions: [
        "Ln + 3HCl → LnCl₃ + 3/2 H₂",
        "Ln₂O₃ + 6HCl → 2LnCl₃ + 3H₂O",
        "An + nHCl → AnCl_n + n/2 H₂"
    ]
};

NCERT_TABLES_DATA.groups.periodicTable = {
    name: "Interactive Periodic Table",
    elements: ["All 118 elements"],
    imageUrls: ["https://img.freepik.com/free-vector/periodic-table-design-template_23-2149530917.jpg?t=st=1750425449~exp=1750429049~hmac=14c3ace1e8df90f2258189c7fcf1d2b41ade07a9f7af0f20731eae01853e353d&w=740"],
    description: "Interactive periodic table with clickable elements showing detailed information",
    properties: [
        "118 confirmed elements",
        "7 periods and 18 groups",
        "s, p, d, and f blocks",
        "Metals, non-metals, and metalloids",
        "Synthetic and natural elements"
    ],
    trends: [
        "Atomic radius decreases across period, increases down group",
        "Ionization energy increases across period, decreases down group",
        "Electronegativity increases across period, decreases down group",
        "Metallic character decreases across period, increases down group"
    ],
    importantOrders: [
        "Most electronegative: F > O > N > Cl",
        "Largest atoms: Fr > Cs > Rb > K",
        "Highest ionization energy: He > Ne > F > Ar",
        "Most metallic: Fr > Cs > Ba > Sr"
    ],
    keyReactions: [
        "General trends and patterns",
        "Periodic law applications",
        "Electronic configuration patterns"
    ]
};

// Function to show element details
function showElementDetails(elementSymbol) {
    const element = ELEMENT_DETAILS[elementSymbol];
    if (!element) {
        alert(`Detailed information for ${elementSymbol} is not available yet.`);
        return;
    }

    const modal = document.getElementById('elementDetailsModal');
    const modalName = document.getElementById('modalElementName');
    const modalContent = document.getElementById('modalElementContent');

    modalName.textContent = `${elementSymbol} - ${element.type}`;

    modalContent.innerHTML = `
        <div class="element-details-content">
            <div class="element-info-card">
                <div class="element-symbol-large">${elementSymbol}</div>
                <div class="element-basic-info">
                    <h3>Basic Information</h3>
                    <div class="info-row">
                        <span class="info-label">Atomic Number:</span>
                        <span class="info-value">${element.atomicNumber}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Atomic Mass:</span>
                        <span class="info-value">${element.atomicMass} u</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Element Type:</span>
                        <span class="info-value">${element.type}</span>
                    </div>
                </div>
            </div>

            <div class="element-config-card">
                <h3><i class="fas fa-atom"></i> Electronic Configuration</h3>
                <div class="config-display">
                    <code>${element.electronConfig}</code>
                </div>
                <div class="valence-info">
                    <h4>Valence Shell Configuration</h4>
                    <p>${getValenceShellInfo(element.electronConfig)}</p>
                </div>
            </div>

            <div class="element-oxidation-card">
                <h3><i class="fas fa-plus-minus"></i> Oxidation States</h3>
                <div class="oxidation-states">
                    ${element.oxidationStates.map(state => `<span class="oxidation-badge">${state}</span>`).join('')}
                </div>
                <div class="common-state">
                    <strong>Most Common:</strong> ${element.oxidationStates[0]}
                </div>
            </div>

            ${element.type === 'transition metal' ? `
                <div class="transition-metal-info">
                    <h3><i class="fas fa-cogs"></i> Transition Metal Properties</h3>
                    <ul>
                        <li>Forms colored compounds due to d-d transitions</li>
                        <li>Shows variable oxidation states</li>
                        <li>Acts as catalyst in many reactions</li>
                        <li>Forms complex compounds with ligands</li>
                        <li>Exhibits magnetic properties</li>
                        <li>High melting and boiling points</li>
                        <li>Good conductors of heat and electricity</li>
                    </ul>
                </div>
            ` : ''}

            ${element.type === 'alkali metal' ? `
                <div class="alkali-metal-info">
                    <h3><i class="fas fa-fire"></i> Alkali Metal Properties</h3>
                    <ul>
                        <li>Highly reactive, especially with water</li>
                        <li>Soft metals with low melting points</li>
                        <li>Form ionic compounds with non-metals</li>
                        <li>Good conductors of heat and electricity</li>
                        <li>Reactivity increases down the group</li>
                        <li>Form strongly basic hydroxides</li>
                    </ul>
                </div>
            ` : ''}

            ${element.type === 'alkaline earth metal' ? `
                <div class="alkaline-earth-info">
                    <h3><i class="fas fa-mountain"></i> Alkaline Earth Metal Properties</h3>
                    <ul>
                        <li>Less reactive than alkali metals</li>
                        <li>Form divalent cations (M²⁺)</li>
                        <li>Higher melting points than Group 1</li>
                        <li>Form ionic compounds</li>
                        <li>Burn with characteristic flame colors</li>
                        <li>Form basic oxides and hydroxides</li>
                    </ul>
                </div>
            ` : ''}

            ${element.type === 'metalloid' ? `
                <div class="metalloid-info">
                    <h3><i class="fas fa-balance-scale"></i> Metalloid Properties</h3>
                    <ul>
                        <li>Properties intermediate between metals and non-metals</li>
                        <li>Semiconducting properties</li>
                        <li>Used in electronic devices</li>
                        <li>Can form both ionic and covalent compounds</li>
                        <li>Variable electrical conductivity</li>
                    </ul>
                </div>
            ` : ''}

            ${element.type === 'non-metal' ? `
                <div class="non-metal-info">
                    <h3><i class="fas fa-leaf"></i> Non-Metal Properties</h3>
                    <ul>
                        <li>Poor conductors of heat and electricity</li>
                        <li>Form covalent compounds</li>
                        <li>Can gain electrons to form anions</li>
                        <li>Generally low melting and boiling points</li>
                        <li>Brittle in solid state</li>
                        <li>High electronegativity values</li>
                    </ul>
                </div>
            ` : ''}

            ${element.type === 'noble gas' ? `
                <div class="noble-gas-info">
                    <h3><i class="fas fa-shield-alt"></i> Noble Gas Properties</h3>
                    <ul>
                        <li>Chemically inert under normal conditions</li>
                        <li>Complete valence shell configuration</li>
                        <li>Monoatomic gases</li>
                        <li>Low boiling and melting points</li>
                        <li>Used in lighting and welding</li>
                        <li>Heavier noble gases can form compounds</li>
                    </ul>
                </div>
            ` : ''}

            ${element.type === 'lanthanoid' ? `
                <div class="lanthanoid-info">
                    <h3><i class="fas fa-star"></i> Lanthanoid Properties</h3>
                    <ul>
                        <li>Part of the 4f series (filling 4f orbitals)</li>
                        <li>Shows lanthanoid contraction</li>
                        <li>Similar chemical properties within series</li>
                        <li>Used in magnets, catalysts, and electronics</li>
                        <li>Exhibits unique magnetic and optical properties</li>
                    </ul>
                </div>
            ` : ''}

            ${element.type === 'actinoid' ? `
                <div class="actinoid-info">
                    <h3><i class="fas fa-radiation"></i> Actinoid Properties</h3>
                    <ul>
                        <li>Part of the 5f series (filling 5f orbitals)</li>
                        <li>All elements are radioactive</li>
                        <li>Shows more variable oxidation states than lanthanoids</li>
                        <li>Used in nuclear reactors and weapons</li>
                        <li>Exhibits complex electronic structures</li>
                    </ul>
                </div>
            ` : ''}
        </div>
    `;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Function to get valence shell information
function getValenceShellInfo(electronConfig) {
    const parts = electronConfig.split(' ');
    const valenceShell = parts[parts.length - 1];
    const secondLastShell = parts.length > 1 ? parts[parts.length - 2] : '';

    if (secondLastShell.includes('d') || valenceShell.includes('d')) {
        return `d-block element: ${secondLastShell} ${valenceShell}`;
    } else if (secondLastShell.includes('f') || valenceShell.includes('f')) {
        return `f-block element: ${secondLastShell} ${valenceShell}`;
    } else {
        return `Valence shell: ${valenceShell}`;
    }
}

// Function to close element details modal
function closeElementDetails() {
    const modal = document.getElementById('elementDetailsModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Function to open image popup
function openImagePopup(imageUrl, imageTitle) {
    const modal = document.getElementById('imagePopupModal');
    const popupImage = document.getElementById('popupImage');
    const popupTitle = document.getElementById('imagePopupTitle');

    popupImage.src = imageUrl;
    popupImage.alt = imageTitle;
    popupTitle.textContent = imageTitle;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Add click outside to close functionality
    modal.onclick = function(event) {
        if (event.target === modal) {
            closeImagePopup();
        }
    };
}

// Function to close image popup
function closeImagePopup() {
    const modal = document.getElementById('imagePopupModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Add keyboard support for image popup
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const imageModal = document.getElementById('imagePopupModal');
        if (imageModal && imageModal.style.display === 'flex') {
            closeImagePopup();
        }
    }
});

// Image loading optimization
function optimizeImageLoading() {
    const images = document.querySelectorAll('.group-image, .detailed-group-image');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });

        img.addEventListener('error', function() {
            this.style.display = 'none';
            // Show placeholder if image fails to load
            const placeholder = document.createElement('div');
            placeholder.className = 'no-image-placeholder';
            placeholder.innerHTML = '<i class="fas fa-image"></i><p>Image failed to load</p>';
            this.parentNode.appendChild(placeholder);
        });
    });
}

// Initialize image optimization when content loads
document.addEventListener('DOMContentLoaded', function() {
    // Add observer for dynamically loaded images
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                optimizeImageLoading();
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});

// Periodic table elements data
const PERIODIC_ELEMENTS = {
    1: { symbol: 'H', name: 'Hydrogen', atomicMass: 1.008, category: 'nonmetal', period: 1, group: 1 },
    2: { symbol: 'He', name: 'Helium', atomicMass: 4.003, category: 'noble-gas', period: 1, group: 18 },
    3: { symbol: 'Li', name: 'Lithium', atomicMass: 6.941, category: 'alkali-metal', period: 2, group: 1 },
    4: { symbol: 'Be', name: 'Beryllium', atomicMass: 9.012, category: 'alkaline-earth', period: 2, group: 2 },
    5: { symbol: 'B', name: 'Boron', atomicMass: 10.811, category: 'metalloid', period: 2, group: 13 },
    6: { symbol: 'C', name: 'Carbon', atomicMass: 12.011, category: 'nonmetal', period: 2, group: 14 },
    7: { symbol: 'N', name: 'Nitrogen', atomicMass: 14.007, category: 'nonmetal', period: 2, group: 15 },
    8: { symbol: 'O', name: 'Oxygen', atomicMass: 15.999, category: 'nonmetal', period: 2, group: 16 },
    9: { symbol: 'F', name: 'Fluorine', atomicMass: 18.998, category: 'halogen', period: 2, group: 17 },
    10: { symbol: 'Ne', name: 'Neon', atomicMass: 20.180, category: 'noble-gas', period: 2, group: 18 },
    11: { symbol: 'Na', name: 'Sodium', atomicMass: 22.990, category: 'alkali-metal', period: 3, group: 1 },
    12: { symbol: 'Mg', name: 'Magnesium', atomicMass: 24.305, category: 'alkaline-earth', period: 3, group: 2 },
    13: { symbol: 'Al', name: 'Aluminum', atomicMass: 26.982, category: 'post-transition', period: 3, group: 13 },
    14: { symbol: 'Si', name: 'Silicon', atomicMass: 28.086, category: 'metalloid', period: 3, group: 14 },
    15: { symbol: 'P', name: 'Phosphorus', atomicMass: 30.974, category: 'nonmetal', period: 3, group: 15 },
    16: { symbol: 'S', name: 'Sulfur', atomicMass: 32.065, category: 'nonmetal', period: 3, group: 16 },
    17: { symbol: 'Cl', name: 'Chlorine', atomicMass: 35.453, category: 'halogen', period: 3, group: 17 },
    18: { symbol: 'Ar', name: 'Argon', atomicMass: 39.948, category: 'noble-gas', period: 3, group: 18 },
    19: { symbol: 'K', name: 'Potassium', atomicMass: 39.098, category: 'alkali-metal', period: 4, group: 1 },
    20: { symbol: 'Ca', name: 'Calcium', atomicMass: 40.078, category: 'alkaline-earth', period: 4, group: 2 },
    21: { symbol: 'Sc', name: 'Scandium', atomicMass: 44.956, category: 'transition', period: 4, group: 3 },
    22: { symbol: 'Ti', name: 'Titanium', atomicMass: 47.867, category: 'transition', period: 4, group: 4 },
    23: { symbol: 'V', name: 'Vanadium', atomicMass: 50.942, category: 'transition', period: 4, group: 5 },
    24: { symbol: 'Cr', name: 'Chromium', atomicMass: 51.996, category: 'transition', period: 4, group: 6 },
    25: { symbol: 'Mn', name: 'Manganese', atomicMass: 54.938, category: 'transition', period: 4, group: 7 },
    26: { symbol: 'Fe', name: 'Iron', atomicMass: 55.845, category: 'transition', period: 4, group: 8 },
    27: { symbol: 'Co', name: 'Cobalt', atomicMass: 58.933, category: 'transition', period: 4, group: 9 },
    28: { symbol: 'Ni', name: 'Nickel', atomicMass: 58.693, category: 'transition', period: 4, group: 10 },
    29: { symbol: 'Cu', name: 'Copper', atomicMass: 63.546, category: 'transition', period: 4, group: 11 },
    30: { symbol: 'Zn', name: 'Zinc', atomicMass: 65.38, category: 'transition', period: 4, group: 12 },
    31: { symbol: 'Ga', name: 'Gallium', atomicMass: 69.723, category: 'post-transition', period: 4, group: 13 },
    32: { symbol: 'Ge', name: 'Germanium', atomicMass: 72.64, category: 'metalloid', period: 4, group: 14 },
    33: { symbol: 'As', name: 'Arsenic', atomicMass: 74.922, category: 'metalloid', period: 4, group: 15 },
    34: { symbol: 'Se', name: 'Selenium', atomicMass: 78.96, category: 'nonmetal', period: 4, group: 16 },
    35: { symbol: 'Br', name: 'Bromine', atomicMass: 79.904, category: 'halogen', period: 4, group: 17 },
    36: { symbol: 'Kr', name: 'Krypton', atomicMass: 83.798, category: 'noble-gas', period: 4, group: 18 },
    37: { symbol: 'Rb', name: 'Rubidium', atomicMass: 85.468, category: 'alkali-metal', period: 5, group: 1 },
    38: { symbol: 'Sr', name: 'Strontium', atomicMass: 87.62, category: 'alkaline-earth', period: 5, group: 2 },
    39: { symbol: 'Y', name: 'Yttrium', atomicMass: 88.906, category: 'transition', period: 5, group: 3 },
    40: { symbol: 'Zr', name: 'Zirconium', atomicMass: 91.224, category: 'transition', period: 5, group: 4 },
    41: { symbol: 'Nb', name: 'Niobium', atomicMass: 92.906, category: 'transition', period: 5, group: 5 },
    42: { symbol: 'Mo', name: 'Molybdenum', atomicMass: 95.96, category: 'transition', period: 5, group: 6 },
    43: { symbol: 'Tc', name: 'Technetium', atomicMass: 98, category: 'transition', period: 5, group: 7 },
    44: { symbol: 'Ru', name: 'Ruthenium', atomicMass: 101.07, category: 'transition', period: 5, group: 8 },
    45: { symbol: 'Rh', name: 'Rhodium', atomicMass: 102.906, category: 'transition', period: 5, group: 9 },
    46: { symbol: 'Pd', name: 'Palladium', atomicMass: 106.42, category: 'transition', period: 5, group: 10 },
    47: { symbol: 'Ag', name: 'Silver', atomicMass: 107.868, category: 'transition', period: 5, group: 11 },
    48: { symbol: 'Cd', name: 'Cadmium', atomicMass: 112.411, category: 'transition', period: 5, group: 12 },
    49: { symbol: 'In', name: 'Indium', atomicMass: 114.818, category: 'post-transition', period: 5, group: 13 },
    50: { symbol: 'Sn', name: 'Tin', atomicMass: 118.71, category: 'post-transition', period: 5, group: 14 },
    51: { symbol: 'Sb', name: 'Antimony', atomicMass: 121.76, category: 'metalloid', period: 5, group: 15 },
    52: { symbol: 'Te', name: 'Tellurium', atomicMass: 127.6, category: 'metalloid', period: 5, group: 16 },
    53: { symbol: 'I', name: 'Iodine', atomicMass: 126.904, category: 'halogen', period: 5, group: 17 },
    54: { symbol: 'Xe', name: 'Xenon', atomicMass: 131.293, category: 'noble-gas', period: 5, group: 18 },
    55: { symbol: 'Cs', name: 'Cesium', atomicMass: 132.905, category: 'alkali-metal', period: 6, group: 1 },
    56: { symbol: 'Ba', name: 'Barium', atomicMass: 137.327, category: 'alkaline-earth', period: 6, group: 2 },
    57: { symbol: 'La', name: 'Lanthanum', atomicMass: 138.905, category: 'lanthanide', period: 6, group: 3 },
    58: { symbol: 'Ce', name: 'Cerium', atomicMass: 140.116, category: 'lanthanide', period: 6, group: 3 },
    59: { symbol: 'Pr', name: 'Praseodymium', atomicMass: 140.908, category: 'lanthanide', period: 6, group: 3 },
    60: { symbol: 'Nd', name: 'Neodymium', atomicMass: 144.242, category: 'lanthanide', period: 6, group: 3 },
    61: { symbol: 'Pm', name: 'Promethium', atomicMass: 145, category: 'lanthanide', period: 6, group: 3 },
    62: { symbol: 'Sm', name: 'Samarium', atomicMass: 150.36, category: 'lanthanide', period: 6, group: 3 },
    63: { symbol: 'Eu', name: 'Europium', atomicMass: 151.964, category: 'lanthanide', period: 6, group: 3 },
    64: { symbol: 'Gd', name: 'Gadolinium', atomicMass: 157.25, category: 'lanthanide', period: 6, group: 3 },
    65: { symbol: 'Tb', name: 'Terbium', atomicMass: 158.925, category: 'lanthanide', period: 6, group: 3 },
    66: { symbol: 'Dy', name: 'Dysprosium', atomicMass: 162.5, category: 'lanthanide', period: 6, group: 3 },
    67: { symbol: 'Ho', name: 'Holmium', atomicMass: 164.93, category: 'lanthanide', period: 6, group: 3 },
    68: { symbol: 'Er', name: 'Erbium', atomicMass: 167.259, category: 'lanthanide', period: 6, group: 3 },
    69: { symbol: 'Tm', name: 'Thulium', atomicMass: 168.934, category: 'lanthanide', period: 6, group: 3 },
    70: { symbol: 'Yb', name: 'Ytterbium', atomicMass: 173.054, category: 'lanthanide', period: 6, group: 3 },
    71: { symbol: 'Lu', name: 'Lutetium', atomicMass: 174.967, category: 'lanthanide', period: 6, group: 3 },
    72: { symbol: 'Hf', name: 'Hafnium', atomicMass: 178.49, category: 'transition', period: 6, group: 4 },
    73: { symbol: 'Ta', name: 'Tantalum', atomicMass: 180.948, category: 'transition', period: 6, group: 5 },
    74: { symbol: 'W', name: 'Tungsten', atomicMass: 183.84, category: 'transition', period: 6, group: 6 },
    75: { symbol: 'Re', name: 'Rhenium', atomicMass: 186.207, category: 'transition', period: 6, group: 7 },
    76: { symbol: 'Os', name: 'Osmium', atomicMass: 190.23, category: 'transition', period: 6, group: 8 },
    77: { symbol: 'Ir', name: 'Iridium', atomicMass: 192.217, category: 'transition', period: 6, group: 9 },
    78: { symbol: 'Pt', name: 'Platinum', atomicMass: 195.084, category: 'transition', period: 6, group: 10 },
    79: { symbol: 'Au', name: 'Gold', atomicMass: 196.967, category: 'transition', period: 6, group: 11 },
    80: { symbol: 'Hg', name: 'Mercury', atomicMass: 200.59, category: 'transition', period: 6, group: 12 },
    81: { symbol: 'Tl', name: 'Thallium', atomicMass: 204.383, category: 'post-transition', period: 6, group: 13 },
    82: { symbol: 'Pb', name: 'Lead', atomicMass: 207.2, category: 'post-transition', period: 6, group: 14 },
    83: { symbol: 'Bi', name: 'Bismuth', atomicMass: 208.98, category: 'post-transition', period: 6, group: 15 },
    84: { symbol: 'Po', name: 'Polonium', atomicMass: 209, category: 'post-transition', period: 6, group: 16 },
    85: { symbol: 'At', name: 'Astatine', atomicMass: 210, category: 'halogen', period: 6, group: 17 },
    86: { symbol: 'Rn', name: 'Radon', atomicMass: 222, category: 'noble-gas', period: 6, group: 18 },
    87: { symbol: 'Fr', name: 'Francium', atomicMass: 223, category: 'alkali-metal', period: 7, group: 1 },
    88: { symbol: 'Ra', name: 'Radium', atomicMass: 226, category: 'alkaline-earth', period: 7, group: 2 },
    89: { symbol: 'Ac', name: 'Actinium', atomicMass: 227, category: 'actinide', period: 7, group: 3 },
    90: { symbol: 'Th', name: 'Thorium', atomicMass: 232.038, category: 'actinide', period: 7, group: 3 },
    91: { symbol: 'Pa', name: 'Protactinium', atomicMass: 231.036, category: 'actinide', period: 7, group: 3 },
    92: { symbol: 'U', name: 'Uranium', atomicMass: 238.029, category: 'actinide', period: 7, group: 3 },
    93: { symbol: 'Np', name: 'Neptunium', atomicMass: 237, category: 'actinide', period: 7, group: 3 },
    94: { symbol: 'Pu', name: 'Plutonium', atomicMass: 244, category: 'actinide', period: 7, group: 3 },
    95: { symbol: 'Am', name: 'Americium', atomicMass: 243, category: 'actinide', period: 7, group: 3 },
    96: { symbol: 'Cm', name: 'Curium', atomicMass: 247, category: 'actinide', period: 7, group: 3 },
    97: { symbol: 'Bk', name: 'Berkelium', atomicMass: 247, category: 'actinide', period: 7, group: 3 },
    98: { symbol: 'Cf', name: 'Californium', atomicMass: 251, category: 'actinide', period: 7, group: 3 },
    99: { symbol: 'Es', name: 'Einsteinium', atomicMass: 252, category: 'actinide', period: 7, group: 3 },
    100: { symbol: 'Fm', name: 'Fermium', atomicMass: 257, category: 'actinide', period: 7, group: 3 },
    101: { symbol: 'Md', name: 'Mendelevium', atomicMass: 258, category: 'actinide', period: 7, group: 3 },
    102: { symbol: 'No', name: 'Nobelium', atomicMass: 259, category: 'actinide', period: 7, group: 3 },
    103: { symbol: 'Lr', name: 'Lawrencium', atomicMass: 262, category: 'actinide', period: 7, group: 3 },
    104: { symbol: 'Rf', name: 'Rutherfordium', atomicMass: 267, category: 'transition', period: 7, group: 4 },
    105: { symbol: 'Db', name: 'Dubnium', atomicMass: 270, category: 'transition', period: 7, group: 5 },
    106: { symbol: 'Sg', name: 'Seaborgium', atomicMass: 271, category: 'transition', period: 7, group: 6 },
    107: { symbol: 'Bh', name: 'Bohrium', atomicMass: 270, category: 'transition', period: 7, group: 7 },
    108: { symbol: 'Hs', name: 'Hassium', atomicMass: 277, category: 'transition', period: 7, group: 8 },
    109: { symbol: 'Mt', name: 'Meitnerium', atomicMass: 276, category: 'transition', period: 7, group: 9 },
    110: { symbol: 'Ds', name: 'Darmstadtium', atomicMass: 281, category: 'transition', period: 7, group: 10 },
    111: { symbol: 'Rg', name: 'Roentgenium', atomicMass: 280, category: 'transition', period: 7, group: 11 },
    112: { symbol: 'Cn', name: 'Copernicium', atomicMass: 285, category: 'transition', period: 7, group: 12 },
    113: { symbol: 'Nh', name: 'Nihonium', atomicMass: 284, category: 'post-transition', period: 7, group: 13 },
    114: { symbol: 'Fl', name: 'Flerovium', atomicMass: 289, category: 'post-transition', period: 7, group: 14 },
    115: { symbol: 'Mc', name: 'Moscovium', atomicMass: 288, category: 'post-transition', period: 7, group: 15 },
    116: { symbol: 'Lv', name: 'Livermorium', atomicMass: 293, category: 'post-transition', period: 7, group: 16 },
    117: { symbol: 'Ts', name: 'Tennessine', atomicMass: 294, category: 'halogen', period: 7, group: 17 },
    118: { symbol: 'Og', name: 'Oganesson', atomicMass: 294, category: 'noble-gas', period: 7, group: 18 }
};

// Function to generate interactive periodic table
function getInteractivePeriodicTable() {
    const categoryColors = {
        'alkali-metal': '#ff6b6b',
        'alkaline-earth': '#feca57',
        'transition': '#48dbfb',
        'post-transition': '#ff9ff3',
        'metalloid': '#54a0ff',
        'nonmetal': '#5f27cd',
        'halogen': '#00d2d3',
        'noble-gas': '#ff6348',
        'lanthanide': '#2ed573',
        'actinide': '#ffa502'
    };

    let periodicTableHTML = `
        <div class="periodic-table-container">
            <div class="periodic-table-header">
                <h2>Interactive Periodic Table</h2>
                <div class="mobile-instruction" style="display: none; background: rgba(255, 193, 7, 0.9); color: #333; padding: 10px; border-radius: 10px; margin-bottom: 15px; text-align: center; font-weight: bold;">
                    <i class="fas fa-mobile-alt"></i> For best experience, rotate your device to landscape mode
                </div>
                <div class="legend">
                    <div class="legend-item"><span class="legend-color" style="background: ${categoryColors['alkali-metal']}"></span>Alkali Metals</div>
                    <div class="legend-item"><span class="legend-color" style="background: ${categoryColors['alkaline-earth']}"></span>Alkaline Earth</div>
                    <div class="legend-item"><span class="legend-color" style="background: ${categoryColors['transition']}"></span>Transition Metals</div>
                    <div class="legend-item"><span class="legend-color" style="background: ${categoryColors['post-transition']}"></span>Post-transition</div>
                    <div class="legend-item"><span class="legend-color" style="background: ${categoryColors['metalloid']}"></span>Metalloids</div>
                    <div class="legend-item"><span class="legend-color" style="background: ${categoryColors['nonmetal']}"></span>Non-metals</div>
                    <div class="legend-item"><span class="legend-color" style="background: ${categoryColors['halogen']}"></span>Halogens</div>
                    <div class="legend-item"><span class="legend-color" style="background: ${categoryColors['noble-gas']}"></span>Noble Gases</div>
                    <div class="legend-item"><span class="legend-color" style="background: ${categoryColors['lanthanide']}"></span>Lanthanides</div>
                    <div class="legend-item"><span class="legend-color" style="background: ${categoryColors['actinide']}"></span>Actinides</div>
                </div>
            </div>
            <div class="periodic-table-grid">
    `;

    // Create the periodic table grid (18 columns, 7 periods + 2 for lanthanides/actinides)
    for (let period = 1; period <= 7; period++) {
        periodicTableHTML += `<div class="period-row period-${period}">`;

        for (let group = 1; group <= 18; group++) {
            const element = findElementByPeriodGroup(period, group);

            if (element) {
                const color = categoryColors[element.category] || '#ddd';
                periodicTableHTML += `
                    <div class="element-cell ${element.category}"
                         style="background-color: ${color}"
                         onclick="showPeriodicElementDetails(${element.atomicNumber})"
                         title="${element.name} (${element.symbol})">
                        <div class="atomic-number">${element.atomicNumber}</div>
                        <div class="element-symbol">${element.symbol}</div>
                        <div class="element-name">${element.name}</div>
                        <div class="atomic-mass">${element.atomicMass}</div>
                    </div>
                `;
            } else {
                // Empty cell for proper spacing
                periodicTableHTML += `<div class="element-cell empty"></div>`;
            }
        }

        periodicTableHTML += `</div>`;
    }

    // Add lanthanides and actinides separately
    periodicTableHTML += `
        <div class="lanthanides-actinides">
            <div class="lanthanides-row">
                <div class="series-label">Lanthanides</div>
    `;

    for (let atomicNum = 57; atomicNum <= 71; atomicNum++) {
        const element = PERIODIC_ELEMENTS[atomicNum];
        if (element) {
            const color = categoryColors[element.category] || '#ddd';
            periodicTableHTML += `
                <div class="element-cell ${element.category}"
                     style="background-color: ${color}"
                     onclick="showPeriodicElementDetails(${atomicNum})"
                     title="${element.name} (${element.symbol})">
                    <div class="atomic-number">${atomicNum}</div>
                    <div class="element-symbol">${element.symbol}</div>
                    <div class="element-name">${element.name}</div>
                    <div class="atomic-mass">${element.atomicMass}</div>
                </div>
            `;
        }
    }

    periodicTableHTML += `
            </div>
            <div class="actinides-row">
                <div class="series-label">Actinides</div>
    `;

    for (let atomicNum = 89; atomicNum <= 103; atomicNum++) {
        const element = PERIODIC_ELEMENTS[atomicNum];
        if (element) {
            const color = categoryColors[element.category] || '#ddd';
            periodicTableHTML += `
                <div class="element-cell ${element.category}"
                     style="background-color: ${color}"
                     onclick="showPeriodicElementDetails(${atomicNum})"
                     title="${element.name} (${element.symbol})">
                    <div class="atomic-number">${atomicNum}</div>
                    <div class="element-symbol">${element.symbol}</div>
                    <div class="element-name">${element.name}</div>
                    <div class="atomic-mass">${element.atomicMass}</div>
                </div>
            `;
        }
    }

    periodicTableHTML += `
            </div>
        </div>
    </div>
</div>

<!-- Element Details Modal -->
<div id="periodicElementModal" class="element-modal" style="display: none;">
    <div class="element-modal-content">
        <span class="element-close" onclick="closePeriodicElementModal()">&times;</span>
        <div id="periodicElementDetails"></div>
    </div>
</div>
    `;

    return periodicTableHTML;
}

// Helper function to find element by period and group
function findElementByPeriodGroup(period, group) {
    for (let atomicNum in PERIODIC_ELEMENTS) {
        const element = PERIODIC_ELEMENTS[atomicNum];
        if (element.period === period && element.group === group) {
            return { ...element, atomicNumber: parseInt(atomicNum) };
        }
    }
    return null;
}

// Function to show periodic element details
function showPeriodicElementDetails(atomicNumber) {
    const element = PERIODIC_ELEMENTS[atomicNumber];
    if (!element) return;

    const modal = document.getElementById('periodicElementModal');
    const detailsDiv = document.getElementById('periodicElementDetails');

    detailsDiv.innerHTML = `
        <div class="element-details-header">
            <div class="element-symbol-large" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
                ${element.symbol}
            </div>
            <div class="element-info">
                <h2>${element.name}</h2>
                <p class="element-category">${element.category.replace('-', ' ').toUpperCase()}</p>
            </div>
        </div>

        <div class="element-properties">
            <div class="property-card">
                <h3>Basic Properties</h3>
                <div class="property-row">
                    <span class="property-label">Atomic Number:</span>
                    <span class="property-value">${atomicNumber}</span>
                </div>
                <div class="property-row">
                    <span class="property-label">Atomic Mass:</span>
                    <span class="property-value">${element.atomicMass} u</span>
                </div>
                <div class="property-row">
                    <span class="property-label">Period:</span>
                    <span class="property-value">${element.period}</span>
                </div>
                <div class="property-row">
                    <span class="property-label">Group:</span>
                    <span class="property-value">${element.group}</span>
                </div>
                <div class="property-row">
                    <span class="property-label">Category:</span>
                    <span class="property-value">${element.category.replace('-', ' ')}</span>
                </div>
            </div>
        </div>
    `;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Function to close periodic element modal
function closePeriodicElementModal() {
    const modal = document.getElementById('periodicElementModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Make functions globally available
window.loadNCERTTablesContent = loadNCERTTablesContent;
window.showGroupDetails = showGroupDetails;
window.closeGroupDetails = closeGroupDetails;
window.showElementDetails = showElementDetails;
window.closeElementDetails = closeElementDetails;
window.openImagePopup = openImagePopup;
window.closeImagePopup = closeImagePopup;
window.optimizeImageLoading = optimizeImageLoading;
window.getInteractivePeriodicTable = getInteractivePeriodicTable;
window.showPeriodicElementDetails = showPeriodicElementDetails;
window.closePeriodicElementModal = closePeriodicElementModal;
