const { Patient } = require("../sequelize");

let patientsFixtures = new Array();

const patient1 = {
    lastName: "PEREIRA",
    firstName: "Esteban",
    gender : 0,
    birthDate: "1998-11-08",
    adress: "18 rue André Taboulet 77830 Valence en brie",
    phone: "06 06 06 06 06",
    mail: "mail@test.fr",
    profession: "Etudiant",
    activity: "pas du sport"
};

const patient2 = {
    lastName: "PEREIRA",
    firstName: "Mathilde",
    gender : 1,
    birthDate: "1995-01-30",
    adress: "18 rue André Taboulet 77830 Valence en brie",
    phone: "06 06 06 06 06",
    mail: "mail@test.fr",
    profession: "Etudiante",
    activity: "pas du sport"
};

const patient3 = {
    lastName: "SOLER",
    firstName: "Clément",
    gender : 0,
    birthDate: "1995-01-30",
    adress: "quelque part",
    phone: "06 06 06 06 06",
    mail: "mail@test.fr",
    profession: "FDJ",
    activity: "pas du sport"
};

patientsFixtures.push(patient1);
patientsFixtures.push(patient2);
patientsFixtures.push(patient3);

function load() {
    Patient.destroy({truncate: true});
    patientsFixtures.forEach(fixture => {
        Patient.create(fixture);
    })
}

module.exports = {
    load,
}