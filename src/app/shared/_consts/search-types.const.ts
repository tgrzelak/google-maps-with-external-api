import { Search } from '../../models/search.model';
import { SearchType } from '../../models/search-type.model';

export const SEARCH_TYPES: Search[] = [
  { value: SearchType.VEHICLE },
  { value: SearchType.PARKING },
  { value: SearchType.POI },
  { value: SearchType.SHOW_ALL }
];
