import { Button, Container, Divider, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import ClientList from './components/ClientList';
import AddOrderedClientsModal from './components/ClientOrderVisitModal';
import clientService from './services/clients';
import { IClient } from './types';

const App = () => {
  const [clients, setClients] = useState<IClient[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const openModal = (): void => setModalOpen(true);

  const closeModal = (): void => {
    setModalOpen(false);
    setError(undefined);
  };

  useEffect(() => {
    const fetchPatientList = async () => {
      const result = await clientService.getAll();
      setClients(result);
    };

    fetchPatientList();
  }, []);

  return (
    <div className="App">
      <Router>
        <Container>
          <Typography variant="h3" style={{ marginBottom: '0.5em' }}>
            Clean Home
          </Typography>
          <>
            <AddOrderedClientsModal
              modalOpen={modalOpen}
              error={error}
              onClose={closeModal}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={() => openModal()}
            >
              Ordem de visitas
            </Button>
          </>
          <Divider hidden />
          <Routes>
            <Route
              path="/"
              element={<ClientList clients={clients} setClients={setClients} />}
            />
            <Route path="*" element={<h1>Não encontrado</h1>} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
};

export default App;
