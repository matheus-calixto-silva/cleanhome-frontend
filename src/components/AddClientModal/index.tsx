import {
  Alert,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
} from '@mui/material';

import { IClientFormValues } from '../../types';

import AddClientForm from './AddClientForm';

interface IProps {
  modalOpen: boolean;
  onClose: () => void;
  onSubmit: (values: IClientFormValues) => void;
  error?: string;
}

const defaultProps: Partial<IProps> = {
  error: '',
};

const AddClientModal = ({ modalOpen, onClose, onSubmit, error }: IProps) => (
  <Dialog fullWidth open={modalOpen} onClose={() => onClose()}>
    <DialogTitle>Adicionar Novo paciente</DialogTitle>
    <Divider />
    <DialogContent>
      {error && <Alert severity="error">{error}</Alert>}
      <AddClientForm onSubmit={onSubmit} onCancel={onClose} />
    </DialogContent>
  </Dialog>
);

AddClientModal.defaultProps = defaultProps;

export default AddClientModal;
