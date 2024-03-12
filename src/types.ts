export interface IClient {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  coordinateX: number;
  coordinateY: number;
}

export type IClientFormValues = Omit<IClient, 'id'>;
