import { Korisnik } from './korisnik';

export class Paket {
    constructor(
        private datumPrijema: string,
        private datumPrisepeca: string,
        private napomena: string,
        private tezina: number,
        private korisnik1: Korisnik,
        private korisnik2: Korisnik
    ) {}
}