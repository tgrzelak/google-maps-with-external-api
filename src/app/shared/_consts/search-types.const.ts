import { SearchType } from 'src/app/models/search-type.model';
import { Search } from 'src/app/models/search.model';

export const SEARCH_TYPES: Search[] = [
  { value: SearchType.VEHICLE },
  { value: SearchType.PARKING },
  { value: SearchType.POI },
  { value: SearchType.SHOW_ALL }
];
