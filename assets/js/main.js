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

console.log(unserLager.schrank[0][0])


