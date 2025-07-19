import {
    Table, TableBody, TableCell, TableContainer, TableHead,
    TableRow, Paper, Button, IconButton
  } from '@mui/material';
  import { useState } from 'react';
  import EditIcon from '@mui/icons-material/Edit';
  import DeleteIcon from '@mui/icons-material/Delete';
  import UserFormModal from './UserFormModal';
  
  const UserTable = () => {
    const [users, setUsers] = useState([
      { id: 1, name: "Juan Pérez", email: "juan@gmail.com" },
      { id: 2, name: "Ana Torres", email: "ana@gmail.com" },
    ]);
  
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
  
    const handleAdd = () => {
      setSelectedUser(null);
      setModalOpen(true);
    };
  
    const handleEdit = (user) => {
      setSelectedUser(user);
      setModalOpen(true);
    };
  
    const handleDelete = (id) => {
      setUsers(prev => prev.filter(u => u.id !== id));
    };
  
    const handleSave = (userData) => {
      if (selectedUser) {
        // Editar usuario
        setUsers(prev =>
          prev.map(u => u.id === selectedUser.id ? { ...u, ...userData } : u)
        );
      } else {
        // Crear nuevo usuario
        const newUser = { ...userData, id: Date.now() };
        setUsers(prev => [...prev, newUser]);
      }
    };
  
    return (
      <div>
        <div className="flex justify-end mb-2">
          <Button variant="contained" onClick={handleAdd}>Nuevo Usuario</Button>
        </div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead className="bg-gray-200">
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Email</TableCell>
                <TableCell align="right">Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map(user => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell align="right">
                    <IconButton onClick={() => handleEdit(user)} color="primary">
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(user.id)} color="error">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
              {users.length === 0 && (
                <TableRow>
                  <TableCell colSpan={3} align="center">
                    No hay usuarios registrados.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
  
        <UserFormModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          onSave={handleSave}
          initialData={selectedUser}
        />
      </div>
    );
  };
  
  export default UserTable;
  