import { breedsPart1 } from './breedsPart1';
import { breedsPart2 } from './breedsPart2';
import { breedsPart3 } from './breedsPart3';
import { Breed } from '../types/dog';

export const ALL_BREEDS: Breed[] = [
  ...breedsPart1,
  ...breedsPart2,
  ...breedsPart3,
];

export const UNIQUE_COUNTRIES: string[] = Array.from(
  new Set(ALL_BREEDS.map((b) => b.originCountry))
).sort((a, b) => a.localeCompare(b, 'fr'));

export const UNIQUE_TEMPERAMENTS: string[] = Array.from(
  new Set(ALL_BREEDS.flatMap((b) => b.temperament))
).sort((a, b) => a.localeCompare(b, 'fr'));
