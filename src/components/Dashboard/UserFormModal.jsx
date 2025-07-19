import {
    Dialog, DialogTitle, DialogContent, DialogActions,
    TextField, Button
  } from '@mui/material';
  import { useState, useEffect } from 'react';
  
  const UserFormModal = ({ open, onClose, onSave, initialData }) => {
    const [formData, setFormData] = useState({ name: '', email: '' });
  
    useEffect(() => {
      if (initialData) {
        setFormData(initialData);
      } else {
        setFormData({ name: '', email: '' });
      }
    }, [initialData]);
  
    const handleChange = (e) => {
      setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };
  
    const handleSubmit = () => {
      if (formData.name && formData.email) {
        onSave(formData);
        onClose();
      }
    };
  
    return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>{initialData ? "Editar Usuario" : "Nuevo Usuario"}</DialogTitle>
        <DialogContent className="flex flex-col gap-4 py-4">
          <TextField
            label="Nombre"
            name="name"
            fullWidth
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            name="email"
            fullWidth
            value={formData.email}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancelar</Button>
          <Button onClick={handleSubmit} variant="contained">
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  
  export default UserFormModal;
  