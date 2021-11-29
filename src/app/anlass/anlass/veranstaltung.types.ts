import {Wettkampf, wettkampfExample} from "../wettkampf/wettkampf.types";

export interface Veranstaltung {
  id: string;
  titel: string;
  beschreibung: string;
  logo: string;
  webseite: string;
  startdatum: Date;
  enddatum: Date;
  anmeldeschluss: Date;
  veranstalter: Veranstalter;
  wettkampf: Wettkampf;
  dokumente: Dokument[];
  location: Adresse
}

export interface Veranstalter {
  id: string,
  adresse: Adresse,
  bankInformation: BankInformation
}

export interface Adresse {
  id: string,
  vorname: string,
  nachname: string,
  strasse: string,
  plz: string,
  ort: string
}

export interface BankInformation {

}

export interface Dokument {
  id: string,
  name: string,
  url: string
}

export const dokumentExample: Dokument = {
  id: '123',
  name: 'ausschreibnug',
  url: 'https://tbm-anmeldung.azurewebsites.net/assets/Ausschriebung_MMG2021.pdf'
}

export const adressExample: Adresse = {
  id: 'bbb',
  nachname: 'Stalder',
  vorname: 'Marius',
  strasse: 'Stockerenweg 11',
  plz: '3114',
  ort: 'Wichtrach'
}

export const veranstaltungExample: Veranstaltung = {
  id: 'anlass_id',
  titel: 'MMG 2022 Zollikofen',
  beschreibung: 'Im Namen des OKs und des Turnvereins Zollikofen begrüsse ich euch zur ' +
    'MMG 2022 vom 04. April 2022',
  logo: 'https://tb-mittelland.ch/files/turnverband_bern_mittelland_theme/logo.jpg',
  webseite: 'websiteURL',
  startdatum: new Date(Date.now()),
  enddatum: new Date(Date.now()),
  anmeldeschluss: new Date(Date.now()),
  veranstalter: {
    id: 'abc',
    adresse: adressExample,
    bankInformation: {}
  },
  wettkampf: wettkampfExample,
  dokumente: [dokumentExample],
  location: adressExample
}
