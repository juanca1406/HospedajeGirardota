import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AddHomeIcon from '@mui/icons-material/AddHome';

const drawerWidth = 240;

function Menu() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <AppBar position="fixed" sx={{ color: "#FFFFFF", backgroundColor: "#E64545", zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                onClick={toggleDrawer}
                            >
                                <MenuIcon />
                            </IconButton>
                            <img src="" alt="" />
                            <Typography variant="h6" noWrap component="div" >
                                Hospedaje Girardota
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    {/* Drawer permanente para pantallas más grandes */}
                    <Drawer
                        variant="permanent"
                        sx={{
                            width: drawerWidth,
                            flexShrink: 0,
                            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                            display: { xs: 'none', sm: 'none', md: 'none', lg: 'none', xl: 'block' }, // Ocultar en dispositivos móviles
                        }}
                    >
                        <Toolbar />
                        <Box sx={{ overflow: 'auto' }}>
                            <br />
                            <Typography variant="h6" sx={{ color: "#2A62A9", display: "row-reverse", marginRight: 20 }}>
                                Menu
                            </Typography>
                            <List sx={{ color: "#2A62A9" }}>
                                {[
                                    { text: "Calendario", route: "/", icon: <EditCalendarIcon /> },
                                    { text: "Añadir habitación", route: "/AddRom", icon: < AddHomeIcon /> },
                                    { text: "Tarifas", route: "/Tarifas", icon: <AttachMoneyIcon /> },
                                ].map((item, index) => (
                                    <ListItem key={item.text} disablePadding>
                                        <ListItemButton component={Link} to={item.route}>
                                            <ListItemIcon>
                                                {item.icon}
                                            </ListItemIcon>
                                            <ListItemText primary={item.text} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                            <Divider />
                            <List>
                                {[{ text: "Ajustes", route: "/Settings", icon: <SettingsIcon /> }].map((item, index) => (
                                    <ListItem key={item.text} disablePadding>
                                        <ListItemButton component={Link} to={item.route}>
                                            <ListItemIcon>
                                                {item.icon}
                                            </ListItemIcon>
                                            <ListItemText primary={item.text} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Drawer>

                    {/* Drawer temporal para dispositivos móviles */}
                    <Drawer
                        variant="temporary"
                        open={open}
                        onClose={toggleDrawer}
                        sx={{
                            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                            display: { xs: 'block', sm: 'block', md: 'block', lg: 'block', xl: 'none' }, // Mostrar en dispositivos móviles
                        }}
                    >
                        <Toolbar />
                        <Box sx={{ overflow: 'auto' }}>
                            <br />
                            <Typography variant="h6" sx={{ color: "#2A62A9", display: "row-reverse", marginRight: 20 }}>
                                Menu
                            </Typography>
                            <List sx={{ color: "#2A62A9" }}>
                                {[
                                    { text: "Calendario", route: "/", icon: <EditCalendarIcon /> },
                                    { text: "Añadir habitación", route: "/AddRom", icon: < AddHomeIcon /> },
                                    { text: "Tarifas", route: "/Tarifas", icon: <AttachMoneyIcon /> },
                                ].map((item, index) => (
                                    <ListItem key={item.text} disablePadding>
                                        <ListItemButton component={Link} to={item.route}>
                                            <ListItemIcon>
                                                {item.icon}
                                            </ListItemIcon>
                                            <ListItemText primary={item.text} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                            <Divider />
                            <List>
                                {[{ text: "Ajustes", route: "/Settings", icon: <SettingsIcon /> }].map((item, index) => (
                                    <ListItem key={item.text} disablePadding>
                                        <ListItemButton component={Link} to={item.route}>
                                            <ListItemIcon>
                                                {item.icon}
                                            </ListItemIcon>
                                            <ListItemText primary={item.text} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Drawer>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Menu;
