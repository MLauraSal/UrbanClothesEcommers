import {
  Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, Paper, Button, IconButton, Avatar
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ProductFormModal from './ProductFormModal';
import { useState } from 'react';
import useProducts  from '../../hooks/useProducts'; // Asegúrate de que la ruta sea correcta

const ProductTable = () => {
  const {
    products,
    addProduct,
    editProduct,
    removeProduct,
    loading
  } = useProducts();

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAdd = () => {
    setSelectedProduct(null);
    setModalOpen(true);
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    if (confirm("¿Estás seguro de eliminar este producto?")) {
      removeProduct(id);
    }
  };

  const handleSave = (productData) => {
    if (selectedProduct) {
      editProduct(selectedProduct.id, productData);
    } else {
      addProduct(productData);
    }
    setModalOpen(false);
  };

  return (
    <div>
      <div className="flex justify-end mb-2">
        <Button variant="contained" onClick={handleAdd}>Nuevo Producto</Button>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead className="bg-gray-200">
            <TableRow>
              <TableCell>Imagen</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell>Categoría</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell align="right">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={7} align="center">Cargando...</TableCell>
              </TableRow>
            ) : products.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} align="center">No hay productos.</TableCell>
              </TableRow>
            ) : (
              products.map(product => (
                <TableRow key={product.id}>
                  <TableCell>
                    <Avatar variant="square" src={product.image} alt={product.name} />
                  </TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>${product.price}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.description}</TableCell>
                  <TableCell align="right">
                    <IconButton onClick={() => handleEdit(product)} color="primary">
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(product.id)} color="error">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <ProductFormModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
        initialData={selectedProduct}
      />
    </div>
  );
};

export default ProductTable;
