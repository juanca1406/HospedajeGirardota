import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import { Grid, InputLabel, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

export interface ConfirmationDialogRawProps {
    id: string;
    keepMounted: boolean;
    value: string;
    open: boolean;
    onClose: (value?: string) => void;
}

function Tarifas(props: ConfirmationDialogRawProps) {
    const { onClose, value: valueProp, open } = props;
    const [value, setValue] = React.useState(valueProp);

    React.useEffect(() => {
        if (!open) {
            setValue(valueProp);
        }
    }, [valueProp, open]);

    const handleCancel = () => {
        onClose();
    };

    const handleOk = () => {
        onClose(value);
    };

    const [habitacion, setHabitacion] = useState('');
    const [apellido, setApellido] = useState('');
    // Agrega más estados para otros campos si es necesario

    const handleGuardar = () => {
        // Validar campos antes de guardar
        if (habitacion.trim() === '') {
            alert('Por favor, ingresa el nombre.');
            return;
        }

        handleOk();
    };
    return (
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Dialog
                sx={{ '& .MuiDialog-paper': { minWidth: { xs: '420px', xl: '1300px' } } }}
                open={open}
            >
                <DialogTitle>Crear Tarifas</DialogTitle>
                <DialogContent>
                    <DialogContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <DialogContent >
                            <InputLabel id="demo-simple-select-label" sx={{ p: 2 }} >Habitación</InputLabel>
                            <TextField id="outlined-basic" label="" variant="outlined" fullWidth value={habitacion} onChange={(e) => setHabitacion(e.target.value)} required />
                        </DialogContent>
                        <DialogContent >
                            <InputLabel id="demo-simple-select-label" sx={{ p: 2 }}>Precio</InputLabel>
                            <TextField id="outlined-basic" label="" type='number' variant="outlined" fullWidth value={apellido} onChange={(e) => setApellido(e.target.value)} required />
                        </DialogContent>
                        <DialogContent >
                            <InputLabel id="demo-simple-select-label" sx={{ p: 2 }}>Personas</InputLabel>
                            <TextField id="outlined-basic" label="" variant="outlined" fullWidth value={apellido} onChange={(e) => setApellido(e.target.value)} required />
                        </DialogContent>
                    </DialogContent>
                </DialogContent>
                <DialogContent sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <DialogActions>
                        <Button variant="contained" autoFocus onClick={handleCancel}>
                            Cancelar
                        </Button>
                        <Button variant="contained" onClick={handleGuardar}>Guardar</Button>
                    </DialogActions>
                </DialogContent>
            </Dialog >
        </Grid>
    );
}

export default function ConfirmacionTarifas() {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('');

    const handleClickListItem = () => {
        setOpen(true);
    };

    const handleClose = (newValue?: string) => {
        setOpen(false);

        if (newValue) {
            setValue(newValue);
        }
    };

    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <List component="div" role="group">
                <Button variant="contained" startIcon={<AddIcon />} onClick={handleClickListItem}>Agregar</Button>
                <Tarifas
                    id="ringtone-menu"
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    value={value}
                />
            </List>
        </Box >
    );
}
