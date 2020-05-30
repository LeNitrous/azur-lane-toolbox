export const EQUIP_TYPE = {
    1: "Destroyer Gun",
    2: "Light Cruiser Gun",
    3: "Heavy Cruiser Gun",
    4: "Battleship Gun",
    5: "Torpedo",
    6: "Anti Aircraft",
    7: "Fighter",
    8: "Torpedo Bomber",
    9: "Dive Bomber",
    10: "Auxiliary Equipment",
    11: "Large Cruiser Gun",
    12: "Seaplane",
    13: "Submarine Torpedo",
    14: "Anti-Submarine Warfare",
    15: "Helicopter"
};

export const SHIP_HULL_TYPE = {
    1: { type: "vanguard", name: "Destroyer", shortName: "DD" },
    2: { type: "vanguard", name: "Light Cruiser", shortName: "CL" },
    3: { type: "vanguard", name: "Heavy Cruiser", shortName: "CA" },
    4: { type: "main", name: "Battlecruiser", shortName: "BC" },
    5: { type: "main", name: "Battleship", shortName: "BB" },
    6: { type: "main", name: "Light Aircraft Carrier", shortName: "CVL" },
    7: { type: "main", name: "Aircraft Carrier", shortName: "CV" },
    8: { type: "sub", name: "Submarine", shortName: "SS" },
    9: { type: "unused", name: "Aviation Cruiser", shortName: "AV" },
    10: { type: "main", name: "Aviation Battleship", shortName: "BBV" },
    11: { type: "unused", name: "", shortName: "" },
    12: { type: "main", name: "Repair Ship", shortName: "AR" },
    13: { type: "main", name: "Monitor", shortName: "BM" },
    14: { type: "enemy", name: "Torpedo Submarine", shortName: "" },
    15: { type: "unused", name: "", shortName: "" },
    16: { type: "enemy", name: "Explosive Ship", shortName: "" },
    17: { type: "sub", name: "Submarine Seaplane Carrier", shortName: "SSV" },
    18: { type: "main", name: "Large Cruiser", shortName: "CB" }
};

export const SHIP_ARMOR_TYPE = {
    1: "Light",
    2: "Medium",
    3: "Heavy"
};

export const COMMONS_RARITY = {
    1: "Common",
    2: "Rare",
    3: "Elite",
    4: "Super Rare",
    5: "Decisive"
};

export const COMMONS_NATIONS = {
    0: { name: "Other", shortName: "" },
    1: { name: "Eagle Union", shortName: "USS" },
    2: { name: "Royal Navy", shortName: "HMS" },
    3: { name: "Sakura Empire", shortName: "IJN" },
    4: { name: "Iron Blood", shortName: "KMS" },
    5: { name: "Eastern Radiance", shortName: "ROC" },
    6: { name: "Sardegna Empire", shortName: "RN" },
    7: { name: "North Union", shortName: "SN" },
    8: { name: "Iris Libre", shortName: "FFNF" },
    9: { name: "Vichiya Dominion", shortName: "MNF" },
    98: { name: "Universal", shortName: "UNIV" },
    100: { name: "", shortName: "" },
    101: { name: "Neptunia", shortName: "HDN" },
    102: { name: "Bilibili", shortName: "Bilibili" },
    103: { name: "Utawarerumono", shortName: "Utawarerumono" },
    104: { name: "Kizuna AI", shortName: "Kizuna AI" },
    105: { name: "Hololive", shortName: "Hololive" }
};