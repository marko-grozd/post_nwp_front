import { Korisnik } from './korisnik';

export class Pismo {

    private idpismo: number;

    constructor(
        private preporuceno: boolean, 
        private datumPrispeca: string,
        private datumPrijema: string,
        private korisnik1: Korisnik,      //primalac
        private korisnik2: Korisnik) {}   //posiljalac
    

    
}