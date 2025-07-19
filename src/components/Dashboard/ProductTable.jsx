import {
  Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, Paper, Button, IconButton, Avatar
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ProductFormModal from './ProductFormModal';
import { useState } from 'react';

const ProductTable = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Producto 1',
      price: 100,
      stock: 50,
      image: 'https://via.placeholder.com/50',
      description: 'Descripción del producto 1',
      category: 'Ropa'
    },
    {
      id: 2,
      name: 'Producto 2',
      price: 150,
      stock: 30,
      image: 'https://via.placeholder.com/50',
      description: 'Descripción del producto 2',
      category: 'Calzado'
    }
  ]);

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
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  const handleSave = (productData) => {
    if (selectedProduct) {
      setProducts(prev =>
        prev.map(p => p.id === selectedProduct.id ? { ...p, ...productData } : p)
      );
    } else {
      const newProduct = { ...productData, id: Date.now() };
      setProducts(prev => [...prev, newProduct]);
    }
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
            {products.map(product => (
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
            ))}
            {products.length === 0 && (
              <TableRow>
                <TableCell colSpan={7} align="center">No hay productos.</TableCell>
              </TableRow>
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
