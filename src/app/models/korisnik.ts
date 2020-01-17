import { Adresa } from "./adresa";

export class Korisnik {

    constructor(
        private idKorisnik: number,
        private brojLk: string,
        private brojTelefona: string,
        private email: string,
        private ime: string,
        private prezime: string,
        private adresa: Adresa,
        private kucniBroj: string
        ) {}
}