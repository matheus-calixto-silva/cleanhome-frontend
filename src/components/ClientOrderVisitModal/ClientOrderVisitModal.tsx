import { Button, Table, TableCell, TableHead, TableRow } from '@mui/material';
import { useEffect, useState } from 'react';

import clientService from '../../services/clients';
import { IClient } from '../../types';

interface IProps {
  onCancel: () => void;
}

const ClientOrderVisitModal = ({ onCancel }: IProps) => {
  const [clients, setClients] = useState<IClient[]>([]);

  useEffect(() => {
    const fetchOrderedPatientList = async () => {
      const result = await clientService.getVisitOrder();
      setClients(result);
    };

    fetchOrderedPatientList();
  }, []);

  return (
    <div className="App">
      <Table style={{ marginBottom: '2em' }}>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Telefone</TableCell>
            <TableCell>Localização</TableCell>
          </TableRow>
        </TableHead>
        <tbody>
          {Object.values(clients).map((client: IClient) => (
            <tr key={client.id}>
              <TableCell>{client.name}</TableCell>
              <TableCell>{client.email}</TableCell>
              <TableCell>{client.phone}</TableCell>
              <TableCell>
                {client.coordinateX},{client.coordinateY}
              </TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button
        color="secondary"
        variant="contained"
        style={{ float: 'left' }}
        type="button"
        onClick={onCancel}
      >
        Cancel
      </Button>
    </div>
  );
};

export default ClientOrderVisitModal;
