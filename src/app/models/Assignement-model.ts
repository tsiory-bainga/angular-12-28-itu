export class Assignment {
    _id! : string;
    photoAuteur : string = '';
    nomAuteur! : string;
    matiere! : {
        nom : string;
        nomProf : string;
        photo : string;
        photoProf : string;
    };
    dateRendu! : Date;
    rendu! : boolean;
    note : number = NaN; 
}