import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, Button
} from '@mui/material';
import { useState, useEffect } from 'react';

const ProductFormModal = ({ open, onClose, onSave, initialData }) => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    stock: '',
    image: '',
    description: '',
    category: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialData,
        description: initialData.description || '',
        category: initialData.category || ''
      });
    } else {
      setFormData({
        name: '', price: '', stock: '', image: '', description: '', category: ''
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = () => {
    if (formData.name && formData.price && formData.stock) {
      onSave({
        ...formData,
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock)
      });
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{initialData ? "Editar Producto" : "Nuevo Producto"}</DialogTitle>
      <DialogContent className="flex flex-col gap-4 py-4">
        <TextField label="Nombre" name="name" value={formData.name} onChange={handleChange} fullWidth />
        <TextField label="Precio" name="price" value={formData.price} onChange={handleChange} type="number" fullWidth />
        <TextField label="Stock" name="stock" value={formData.stock} onChange={handleChange} type="number" fullWidth />
        <TextField label="URL de Imagen" name="image" value={formData.image} onChange={handleChange} fullWidth />
        <TextField label="Descripción" name="description" value={formData.description} onChange={handleChange} fullWidth multiline rows={3} />
        <TextField label="Categoría" name="category" value={formData.category} onChange={handleChange} fullWidth />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={handleSubmit} variant="contained">Guardar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductFormModal;
