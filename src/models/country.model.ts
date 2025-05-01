export interface Country {
  name: {
    common: string;
    official: string;
  };
  capital: string[];
  continents: string[];
  population: number;
  cca3: string;
  flags: {
    alt: string;
    png: string;
  };
  region: string;
  subregion: string;
  timezones: string[];
} 