export const bdInitialMatieres = [
    {
        "_id" : "1",
        "nom" : "Grails",
        "nomProf" : "Gregory",
        "photo" : '../assets/img/avatars/2.png',
        "photoProf" :  '../assets/img/avatars/1.png'
    },
    {
        "_id" : "2",
        "nom" : "Angular",
        "nomProf" : "Buffa",
        "photo" : '../assets/img/avatars/2.png',
        "photoProf" :  '../assets/img/avatars/1.png'
    },
    {
        "_id" : "3",
        "nom" : "Jakarta",
        "nomProf" : "Grin",
        "photo" : '../assets/img/avatars/2.png',
        "photoProf" :  '../assets/img/avatars/1.png'
    },
    {
        "_id" : "4",
        "nom" : "Big Data",
        "nomProf" : "Mopolo",
        "photo" : '../assets/img/avatars/2.png',
        "photoProf" :  '../assets/img/avatars/1.png'
    },
    {
        "_id" : "5",
        "nom" : "C#",
        "nomProf" : "Naina",
        "photo" : '../assets/img/avatars/2.png',
        "photoProf" :  '../assets/img/avatars/1.png'
    }
];

export const bdInitialAssignments = [
    {
        "_id" : "1",
        "photoAuteur" : "../assets/img/avatars/1.png",
        "nomAuteur" : "Angelo",
        "titre" : "Devoir 1",
        "matiere" : {
            "_id" : "5",
            "nom" : "C#",
            "nomProf" : "Naina",
            "photo" : '../assets/img/avatars/2.png',
            "photoProf" :  '../assets/img/avatars/1.png'
        },
        "dateRendu" : new Date(),
        "rendu" : false,
        "note" : NaN,
        "remarque" : null
    },
    {
        "_id" : "2",
        "photoAuteur" : "../assets/img/avatars/1.png",
        "nomAuteur" : "Marly",
        "titre" : "Devoir 2",
        "matiere" : {
            "_id" : "3",
            "nom" : "Jakarta",
            "nomProf" : "Grin",
            "photo" : '../assets/img/avatars/2.png',
            "photoProf" :  '../assets/img/avatars/1.png'
        },
        "dateRendu" : new Date(),
        "rendu" : true,
        "note" : 16,
        "remarque" : "Très bien"
    },
    {
        "_id" : "3",
        "photoAuteur" : "../assets/img/avatars/1.png",
        "nomAuteur" : "Ndriana",
        "titre" : "Devoir 3",
        "matiere" : {
            "_id" : "4",
            "nom" : "Big Data",
            "nomProf" : "Mopolo",
            "photo" : '../assets/img/avatars/2.png',
            "photoProf" :  '../assets/img/avatars/1.png'
        },
        "dateRendu" : new Date(),
        "rendu" : false,
        "note" : NaN,
        "remarque" : null
    },
    {
        "_id" : "4",
        "photoAuteur" : "../assets/img/avatars/1.png",
        "nomAuteur" : "Ifaharana",
        "titre" : "Devoir 4",
        "matiere" : {
            "_id" : "2",
            "nom" : "Angular",
            "nomProf" : "Buffa",
            "photo" : '../assets/img/avatars/2.png',
            "photoProf" :  '../assets/img/avatars/1.png'
        },
        "dateRendu" : new Date(),
        "rendu" : true,
        "note" : 15,
        "remarque" : "Bien"
    },
    {
        "_id" : "5",
        "photoAuteur" : "../assets/img/avatars/1.png",
        "nomAuteur" : "Thierry",
        "matiere" : {
            "_id" : "1",
            "nom" : "Grails",
            "nomProf" : "Gregory",
            "photo" : '../assets/img/avatars/2.png',
            "photoProf" :  '../assets/img/avatars/1.png'
        },
        "titre" : "Devoir 5",
        "dateRendu" : new Date(),
        "rendu" : false,
        "note" : NaN,
        "remarque" : null
    }
];