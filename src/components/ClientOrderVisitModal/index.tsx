import {
  Alert,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
} from '@mui/material';

import ClientOrderVisitModal from './ClientOrderVisitModal';

interface IProps {
  modalOpen: boolean;
  onClose: () => void;
  error?: string;
}

const defaultProps: Partial<IProps> = {
  error: '',
};

const AddOrderedClientsModal = ({ modalOpen, onClose, error }: IProps) => (
  <Dialog fullWidth open={modalOpen} onClose={() => onClose()}>
    <DialogTitle>Lista ordenada de clientes</DialogTitle>
    <Divider />
    <DialogContent>
      {error && <Alert severity="error">{error}</Alert>}
      <ClientOrderVisitModal onCancel={onClose} />
    </DialogContent>
  </Dialog>
);

AddOrderedClientsModal.defaultProps = defaultProps;

export default AddOrderedClientsModal;
