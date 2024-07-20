import Box from '@mui/material/Box';
import { Divider, Grid, InputLabel, TextField } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import React from 'react';
import { useNumeroNoche } from './CalendarioFechas/NumeroNocheContext';

interface ReservaProps {
    onClose: () => void; // Declara el tipo de la prop onClose
}

function Clientes(props: ReservaProps) {
    const [count, setCount] = React.useState(1);
    const { numeroNoche } = useNumeroNoche();
    const { onClose } = props;

    const handleCerrar = () => {
        onClose(); // Llama a la función onClose
    };
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Box sx={{ marginTop: "-2%", display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ flex: 1, marginRight: '10px' }} >
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: "100%" }}>
                            <DialogTitle >Registro del cliente</DialogTitle>
                            <Divider />
                            <Box sx={{ marginTop: "2%", paddingRight: '10px' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'row', marginBottom: "15px" }}>
                                    <Box sx={{ flex: 1 }}>
                                        <InputLabel id="demo-simple-select-label">Nombre: </InputLabel>
                                        <TextField id="outlined-basic" variant="outlined" sx={{ width: "100%" }} />
                                    </Box>
                                    <Box sx={{ flex: 1, marginLeft: "40px" }}>
                                        <InputLabel id="demo-simple-select-label">Cedula: </InputLabel>
                                        <TextField id="outlined-basic" variant="outlined" sx={{ width: "100%" }} />
                                    </Box>
                                </Box>
                                <Box sx={{ marginBottom: "20px" }}>
                                    <InputLabel id="demo-simple-select-label">Telefono: </InputLabel>
                                    <TextField id="outlined-basic" variant="outlined" sx={{ width: "100%" }} />
                                </Box>
                            </Box>

                        </Box>
                    </Box>
                </Box >
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <Button variant="contained" color="primary" onClick={handleCerrar}>
                        Cerrar
                    </Button>
                    <Button variant="contained" color="primary" onClick={handleCerrar}>
                        Guardar
                    </Button>
                </Box>
            </Grid>
        </Grid >

    )
}

export default Clientes;
