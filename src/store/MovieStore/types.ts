import { MovieData } from '../../components/MovieTable/types';

export interface Inputs {
  status: 'Idle' | 'Pending' | 'Failed';
  data: MovieData[];
  total: number;
  page: number;
  last_page: number;
  errorMessage: string | null;
}
