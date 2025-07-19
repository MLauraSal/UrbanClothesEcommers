import { AppBar, Toolbar, Typography, Avatar, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const DashboardHeader = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1f2937" }}>
      <Toolbar className="flex justify-between">
        <div className="flex items-center gap-2">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ display: { md: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            Dashboard
          </Typography>
        </div>
        <Avatar alt="Admin" src="/profile.jpg" />
      </Toolbar>
    </AppBar>
  );
};

export default DashboardHeader;
