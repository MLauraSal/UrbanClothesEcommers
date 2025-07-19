import { Drawer, IconButton, List, ListItem, ListItemText, Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import GridViewIcon from "@mui/icons-material/GridView";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth } from "../../hooks/useAuth"; 


const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    Swal.fire({
      icon: "info",
      title: "Sesión cerrada",
      text: "Tu sesión se cerró correctamente.",
      timer: 1500,
      showConfirmButton: false,
    });
    navigate("/");
  };

  return (
    <>
      {/* Mobile bottom nav */}
      <div className="fixed bottom-0 left-0 w-full bg-white flex justify-around items-center py-2 shadow-md z-50 md:hidden">
        <IconButton onClick={() => setMenuOpen(true)}>
          <MenuIcon />
        </IconButton>
        <Link to="/">
          <IconButton>
            <HomeIcon />
          </IconButton>
        </Link>
        {user ? (
          <IconButton onClick={() => setProfileOpen(true)}>
            <Avatar src={user.profilePic} alt="Perfil" />
          </IconButton>
        ) : (
          <IconButton onClick={handleLogout}>
            <PersonIcon />
          </IconButton>
        )}
        {user && (
          <IconButton onClick={() => setProfileOpen(true)}>
            <GridViewIcon />
          </IconButton>
        )}
      </div>

      {/* Drawer de navegación */}
      <Drawer anchor="left" open={menuOpen} onClose={() => setMenuOpen(false)}>
        <List className="w-64">
          <ListItem button component={Link} to="/" onClick={() => setMenuOpen(false)}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/blog" onClick={() => setMenuOpen(false)}>
            <ListItemText primary="Blog" />
          </ListItem>
          <ListItem button component={Link} to="/contact" onClick={() => setMenuOpen(false)}>
            <ListItemText primary="Contacto" />
          </ListItem>
          <ListItem button component={Link} to="/login" onClick={() => setMenuOpen(false)}>
            <ListItemText primary="Login" />
          </ListItem>
        </List>
      </Drawer>

      {/* Drawer del perfil */}
      <Drawer anchor="right" open={profileOpen} onClose={() => setProfileOpen(false)}>
        <div className="w-64 p-4">
          {user && (
            <>
              <div className="text-center mb-4">
                <Avatar src={user.profilePic} sx={{ width: 64, height: 64 }} className="mx-auto" />
                <p className="font-bold mt-2">{user.username}</p>
              </div>
              <List>
                <ListItem button component={Link} to="/profile" onClick={() => setProfileOpen(false)}>
                  <ListItemText primary="Mi perfil" />
                </ListItem>
                <ListItem button component={Link} to="/favorites" onClick={() => setProfileOpen(false)}>
                  <ListItemText primary="Mis favoritos" />
                </ListItem>
                <ListItem
                  button
                  onClick={() => {
                    setProfileOpen(false);
                    handleLogout();
                  }}
                >
                  <LogoutIcon className="mr-2" />
                  <ListItemText primary="Cerrar sesión" />
                </ListItem>
              </List>
            </>
          )}
        </div>
      </Drawer>
    </>
  );
};

export default MobileNav;
