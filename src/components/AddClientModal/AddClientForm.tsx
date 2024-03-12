import { Button, Grid, TextField } from '@mui/material';
import { SyntheticEvent, useState } from 'react';

import { IClientFormValues } from '../../types';

interface IProps {
  onCancel: () => void;
  onSubmit: (values: IClientFormValues) => void;
}

const AddClientForm = ({ onCancel, onSubmit }: IProps) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [coordinateX, setCoordinateX] = useState(0);
  const [coordinateY, setCoordinateY] = useState(0);

  const addClient = (e: SyntheticEvent) => {
    e.preventDefault();
    onSubmit({
      name,
      username,
      email,
      phone,
      coordinateX,
      coordinateY,
    });
  };

  return (
    <div>
      <form onSubmit={addClient}>
        <TextField
          label="Nome"
          fullWidth
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <TextField
          label="Nome de usuário"
          fullWidth
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <TextField
          label="Email"
          fullWidth
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <TextField
          label="Telefone"
          placeholder="DDD 9 9999-9999"
          fullWidth
          value={phone}
          onChange={({ target }) => setPhone(target.value)}
        />

        <TextField
          label="coordinateX"
          fullWidth
          value={Number(coordinateX)}
          onChange={(event) => setCoordinateX(Number(event.target.value))}
          type="number"
        />

        <TextField
          label="coordinateY"
          fullWidth
          value={Number(coordinateY)}
          onChange={(event) => setCoordinateY(Number(event.target.value))}
          type="number"
        />

        <Grid>
          <Grid item>
            <Button
              color="secondary"
              variant="contained"
              style={{ float: 'left' }}
              type="button"
              onClick={onCancel}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item>
            <Button
              style={{
                float: 'right',
              }}
              type="submit"
              variant="contained"
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddClientForm;
