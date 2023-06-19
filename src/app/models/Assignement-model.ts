import { Matiere } from "./Matiere-model";

export class Assignment {
    _id! : string;
    photoAuteur : string = '';
    titre! : string;
    nomAuteur! : string;
    matiere! : Matiere;
    dateRendu! : Date;
    rendu! : boolean;
    note : number = NaN;
    remarque : string | null = '';
}