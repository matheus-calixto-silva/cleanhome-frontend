import axios from 'axios';

import { apiBaseUrl } from '../constants';
import { IClient, IClientFormValues } from '../types';

const getAll = async () => {
  const { data } = await axios.get<IClient[]>(`${apiBaseUrl}/clients`);

  return data;
};

const getVisitOrder = async () => {
  const { data } = await axios.get<IClient[]>(
    `${apiBaseUrl}/clients/visit-order`,
  );

  return data;
};

const create = async (object: IClientFormValues) => {
  const { data } = await axios.post<IClient>(`${apiBaseUrl}/clients`, object);
  return data;
};

export default {
  getAll,
  getVisitOrder,
  create,
};
