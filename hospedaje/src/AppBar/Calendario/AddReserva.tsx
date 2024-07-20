import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Dialog from '@mui/material/Dialog';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Grid } from '@mui/material';
import Tabs from './Tabs'
import AddRom from '../AddHabitacion/AddRom';
import logo from "../../img/Logo.png";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

export interface ConfirmationDialogRawProps {
    id: string;
    keepMounted: boolean;
    open: boolean;
    value: string;
    onClose: (value?: string) => void;
}

export interface AddHabitacionDialogProps {
    id: string;
    keepMounted: boolean;
    open: boolean;
    valueHabitacion: string;
    onClose: () => void;
}

function Habitacion(props: ConfirmationDialogRawProps) {
    const { onClose, value: valueProp, open } = props;
    const [, setValue] = React.useState(valueProp);

    React.useEffect(() => {
        if (!open) {
            setValue(valueProp);
        }
    }, [valueProp, open]);
    const handleCerrar = () => {
        onClose(); // Llama a la función onClose
    };
    return (
        <Dialog
            sx={{ '& .MuiDialog-paper': { minWidth: { xs: '410px', sm: '1300px', md: '1300px', lg: '1300px', xl: '1300px' }, height: "1300px" } }}
            open={open}
            onClose={() => onClose()}
        >
            <Tabs onClose={handleCerrar} index={0} value={0} id={''} />
        </Dialog >
    );
}

function AddHabitacion(props: AddHabitacionDialogProps) {
    const { valueHabitacion: valueProp, open } = props;
    const [, setValue] = React.useState(valueProp);

    React.useEffect(() => {
        if (!open) {
            setValue(valueProp);
        }
    }, [valueProp, open]);

    return (
        <Dialog
            sx={{ '& .MuiDialog-paper': { minWidth: '1300px', height: "1300px" } }}
            open={open}
        >
            <AddRom />
        </Dialog >
    );
}

export default function ConfirmationDialog() {
    const [open, setOpen] = React.useState(false);
    const [OpenHabitacion, setOpenHabitacion] = React.useState(false);
    const [value, setValue] = React.useState('');
    const [valueHabitacion,] = React.useState('');

    const handleClickListItem = () => {
        setOpen(true);
    };
    const handleClickHabitacion = () => {
        setOpenHabitacion(true);
    };

    const handleCloseHabitacion = (newValue?: string) => {
        setOpenHabitacion(false);

        if (newValue) {
            setValue(newValue);
        }
    };
    const handleClose = (newValue?: string) => {
        setOpen(false);

        if (newValue) {
            setValue(newValue);
        }
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Box sx={{ bgcolor: 'background.paper', display: "flex", justifyContent: "space-between", marginLeft: { xs: '0%', sm: '3%', md: '2%', lg: '3%', xl: '14%' }, marginTop: { xs: '15%', sm: '2%', md: '8%', lg: '7%', xl: '5%' } }}>
                    <List component="div" role="group" sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Box sx={{ marginRight: 2 }}>
                            <Card>
                                <CardActionArea onClick={handleClickListItem}>
                                    <CardMedia
                                        component="img"
                                        height="200px"
                                        image={logo}
                                        alt="Habitación 1"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Habitación Parejas 1
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <PermIdentityIcon />
                                        </Typography>
                                        2
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Box>
                        <Card>
                            <CardActionArea onClick={handleClickListItem}>
                                <CardMedia
                                    component="img"
                                    height="200px"
                                    image={logo}
                                    alt="Habitación 1"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Habitación Parejas 1
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <PermIdentityIcon />
                                    </Typography>
                                    2
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Habitacion
                            id="ringtone-menu"
                            keepMounted
                            open={open}
                            onClose={handleClose}
                            value={value}
                        />
                    </List>
                </Box>
            </Grid>
        </Grid>
    );
}
