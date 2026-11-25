export type Room = {
  name: string
  meaning: string
  number: string
  image: string
  position: string
  tint: string
  size: string
  sleeps: string
  view: string
  price: number
  note: string
}

export type Moment = {
  time: string
  hour: number
  title: string
  text: string
  image: string
  position: string
}

export type Letter = {
  from: string
  city: string
  date: string
  text: string
  stamp: string
  tilt: number
}

/** Live conditions for the hotel's location, assembled from the Open-Meteo forecast and marine APIs. */
export type SeaConditions = {
  /** Local hour (0..24) the readings were taken at, in the hotel's timezone. */
  nowHour: number
  /** Local date label, for example "Tuesday 25 November". */
  dateLabel: string
  airTemp: number
  feelsLike: number
  humidity: number
  uvIndexMax: number
  condition: string
  windSpeed: number
  /** Degrees the wind blows from. */
  windFrom: number
  waterTemp: number | null
  waveHeight: number | null
  wavePeriod: number | null
  sunrise: string
  sunset: string
  /** Sea level against mean sea level, one value per hour from 00:00 local time. */
  tideHourly: number[]
  updatedAt: number
}
