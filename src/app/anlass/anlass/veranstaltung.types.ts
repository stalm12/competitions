export interface Veranstaltung {
  id: string;
  titel: string;
  beschreibung: string;
  logo: string;
  webseite: string;
  startdatum: Date;
  enddatum: Date;
  anmeldeschluss: Date;
  veranstalter: any; // Veranstalter
  wettkampf: any; // Wettkampf
  dokumente: any; // Dokument[]
  location: any; // Location
}

export const veranstaltungExample: Veranstaltung = {
  id: 'anlass_id',
  titel: 'MMG 2022 Zollikofen',
  beschreibung: 'Im Namen des OKs und des Turnvereins Zollikofen begrüsse ich euch zum 27. Belper' +
    'Jugendgerätecup vom 30. Oktober 2022',
  logo: 'logoURL',
  webseite: 'websiteURL',
  startdatum: new Date(Date.now()),
  enddatum: new Date(Date.now()),
  anmeldeschluss: new Date(Date.now()),
  veranstalter: {},
  wettkampf: {},
  dokumente: [],
  location: {}
}
