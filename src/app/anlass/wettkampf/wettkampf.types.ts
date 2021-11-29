export interface Wettkampf {
  id: string,
  wettkampfRegeln: WettkampfRegeln,
  abteilungen: Abteilung[],
  resultate: Resultat[]
}

export interface Resultat {
  wettkampfId: string,
  athletId: string,
  geraet: Geraet,
  value: number
}

export interface WettkampfRegeln {
  erlaubteKategorien: Kategorie[],
  erlaubtMannschaft: boolean,
  mannschaftKategorien: MannschaftKategorie[],
}

export interface MannschaftKategorie {
  name: string,
  kategorien: Kategorie[];
}

export interface Abteilung {
  id: string,
  name: string,
  startzeit: string,
  riegen: Riege[]
}

export interface Riege {
  id: string,
  startgeraet: Geraet,
  anlage: Anlage,
  athleten: string[]
}

export interface Geraet {
  index: number,
  name: string,
  shortName: string
}

export type Anlage = 'GELB' | 'BLAU' | 'ROT' | 'GRUEN';

export const GERAETE = {
  RE: {index: 0, name: 'Reck', shortName: 'RE'},
  BO: {index: 1, name: 'Boden', shortName: 'BO'},
  SR: {index: 2, name: 'Schaukelringe', shortName: 'SR'},
  SP: {index: 3, name: 'Sprung', shortName: 'SP'},
  BA: {index: 4, name: 'Barren', shortName: 'BA'}
}

export type Kategorie = 'K1_TI' | 'K2_TI' | 'K3_TI' | 'K4_TI' | 'K5_TI' | 'K6_TI' | 'K7_TI' | 'KD' |
  'K1_TU' | 'K2_TU' | 'K3_TU' | 'K4_TU' | 'K5_TU' | 'K6_TU' | 'K7_TU' | 'KH';

export const wettkampfExample: Wettkampf = {
  id: 'abc',
  wettkampfRegeln: {
    erlaubteKategorien: ['K1_TI', 'K2_TI', 'K3_TI', 'K4_TI', 'K5_TI', 'K6_TI', 'K7_TI', 'KD',
      'K1_TU', 'K2_TU', 'K3_TU', 'K4_TU', 'K5_TU', 'K6_TU', 'K7_TU', 'KH'],
    erlaubtMannschaft: true,
    mannschaftKategorien: [
      {name: 'Turnerinnen', kategorien: ['K1_TI', 'K2_TI', 'K3_TI', 'K4_TI']},
      {name: 'Turner', kategorien: ['K1_TU', 'K2_TU', 'K3_TU', 'K4_TU']}
    ]
  },
  abteilungen: [],
  resultate: []

}
