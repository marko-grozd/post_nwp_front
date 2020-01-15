export class Korisnik {
    constructor(
        private ime: string,
        private prezime: string,
        private idKorisnik: number) {}

    
    getIme() {
        return this.ime;
    }

    getPrezime() {
        return this.prezime;
    }

    getId() {
        return this.idKorisnik;
    }

    setIme(ime) {
        this.ime = ime;
    }

    setPrezime(prezime) {
        this.prezime = prezime;
    }

    setId(id) {
        this.idKorisnik = id;
    }
}