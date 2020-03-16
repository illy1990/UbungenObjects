// ---------------------- Übung 1 - Objects CodeFlow Übung lev1_1: ----------------------
let europäischeUnion = {
    Belgien: "(BE)",
    Griechenland: "(EL)",
    Litauen: "(LT)",
    Portugal: "(PT)",
    Bulgarien: "(BG)",
    Spanien: "(ES)",
    Luxemburg: "(LU)",
    Rumänien: "(RO)",
    Tschechien: "(CZ)",
    Frankreich: "(FR)",
    Ungarn: "(HU)",
    Slowenien: "(SI)",
    Dänemark: "(DK)",
    Kroatien: "(HR)",
    Malta: "(MT)",
    Slowakei: "(SK)",
    Deutschland: "(DE)",
    Italien: "(IT)",
    Niederlände: "(NL)",
    Finnland: "(FI)",
    Estland: "(EE)",
    Zypern: "(CY)",
    Österreich: "(AT)",
    Schweden: "(SE)",
    Irland: "(IE)",
    Lettland: "(LV)",
    Polen: "(PL)",
    VereinigtesKonigreich: "(UK)",
    BeneluxUnion: function () {
        console.log(europäischeUnion.Belgien),
            console.log(europäischeUnion.Niederlände),
            console.log(europäischeUnion.Luxemburg)
    }
}

europäischeUnion.BeneluxUnion();


// ---------------------- Übung 2 - CodeFlow Übung lev1_2: Objects: ----------------------

let person = {
    name: "Peter",
    alter: 29,
    sagNameAlter: function () {
        alert(person.alter);
    }
}

// person.sagNameAlter();
console.log(person.name);
console.log(person.alter);

// ---------------------- Übung 3 - CodeFlow Übung lev1_4: Objects Accessing ----------------------

var unsereHaustiere = [
    {
        tiertyp: "Katze",
        names: [
            "Gipsy",
            "Nala",
            "Dinky"
        ]
    },
    {
        tiertyp: "Hunde",
        names: [
            "Knöpfchen",
            "Pinselchen",
            "Droopy"
        ]
    }
];

console.log(unsereHaustiere[0].names[1]);
console.log(unsereHaustiere[1].names[2]);
console.log(unsereHaustiere[1].names[0], unsereHaustiere[1].names[1], unsereHaustiere[1].names[2])

unsereHaustiere[1].names[1] = "DänischeBulldogge";
unsereHaustiere[1].names[2] = "Wauwi";
unsereHaustiere[1].names[3] = "Schnuckelchen";
console.log(unsereHaustiere[1].names[1], unsereHaustiere[1].names[2], unsereHaustiere[1].names[3])



// ---------------------- Übung 4 - CodeFlow Übung lev1_4: Objects Accessing ----------------------
var unserLager = {
    schreibtisch: {
        schublade: "Hefter"
    },
    schrank: {
        "Obere Schublade": {
            Ordner1: "eine Datei",
            Ordner2: "Geheimnisse"
        },
        "Untere schublade": "Cola"
    }
};
// ---------------------- Übung 5 - CodeFlow Übung lev1_7: Objects Arrays Loop Accessing ----------------------

var myMusic = [
    {
        kunstler: "The Beatles",
        title: "Abbey Road",
        release_jahr: 1969,
        formate: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        kunstler: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_jahr: 1978,
        formate: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        kunstler: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_jahr: 1971,
        formate: ["CS", "LP", "Download"],
        gold: true
    },
    {
        kunstler: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_jahr: 1983,
        formate: ["LP", "CD", "MC", "Download"],
        gold: true
    }
];

myMusic.forEach((kunstler) => { document.write(kunstler.value) });

myMusic.forEach((title) => { document.write(myMusic.title) });

myMusic.forEach((formate) => { document.write(myMusic.formate) });

