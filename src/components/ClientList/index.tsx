import {
  Box,
  Button,
  Table,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import axios from 'axios';
import { Dispatch, SetStateAction, useState } from 'react';

import useModal from '../../hooks/useModal';
import clientsService from '../../services/clients';
import { IClient, IClientFormValues } from '../../types';
import AddClientModal from '../AddClientModal';

interface IProps {
  clients: IClient[];
  setClients: Dispatch<SetStateAction<IClient[]>>;
}

const ClientList = ({ clients, setClients }: IProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const { modalOpen, openModal, closeModal, error, setError, setModalOpen } =
    useModal();

  const submitNewClient = async (values: IClientFormValues) => {
    try {
      const client = await clientsService.create(values);
      setClients(clients.concat(client));
      setModalOpen(false);
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        if (e?.response?.data && typeof e?.response?.data === 'string') {
          const message = e.response.data.replace(
            'Something went wrong. Error: ',
            '',
          );
          setError(message);
          throw new Error(message);
        } else {
          setError('Unrecognized axios error');
        }
      } else {
        setError('Unknown error');
        throw new Error('Unknown error');
      }
    }
  };

  return (
    <div className="App">
      <Box>
        <Typography align="left" variant="h6" style={{ marginTop: '2em' }}>
          Lista de clientes
        </Typography>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar cliente..."
          style={{ marginBottom: '1em' }}
        />
      </Box>
      <Table style={{ marginBottom: '2em' }}>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Telefone</TableCell>
          </TableRow>
        </TableHead>
        <tbody>
          {clients
            .filter(
              (client) =>
                client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                client.phone.toLowerCase().includes(searchTerm.toLowerCase()),
            )
            .map((client: IClient) => (
              <tr key={client.id}>
                <TableCell>{client.name}</TableCell>
                <TableCell>{client.email}</TableCell>
                <TableCell>{client.phone}</TableCell>
              </tr>
            ))}
        </tbody>
      </Table>
      <AddClientModal
        modalOpen={modalOpen}
        onSubmit={submitNewClient}
        error={error}
        onClose={closeModal}
      />
      <Button variant="contained" onClick={() => openModal()}>
        Novo Cliente
      </Button>
    </div>
  );
};

export default ClientList;
