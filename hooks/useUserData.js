import { useQuery } from 'react-query';
import { fetchUserData } from '../services/api';

export const useUserData = () => {
  return useQuery('userData', fetchUserData);
};
