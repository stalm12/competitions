export interface VeranstaltungOverview {
  id: string;
  titel: string;
  startDatum: Date;
  endDatum: Date;
}

export const veranstaltungOverviewExample1: VeranstaltungOverview = {
  id: 'anlass_id',
  titel: 'MMG 2022',
  startDatum: new Date(),
  endDatum: new Date()
}

export const veranstaltungOverviewExample2: VeranstaltungOverview = {
  id: '122',
  titel: 'MMG 2023',
  startDatum: new Date(),
  endDatum: new Date()
}

export const veranstaltungOverviewExample3: VeranstaltungOverview = {
  id: '123',
  titel: 'MMG 2024',
  startDatum: new Date(),
  endDatum: new Date()
}
