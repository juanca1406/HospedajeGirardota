import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Divider, Grid, InputLabel, TextField } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import React from 'react';
import { useNumeroNoche } from './CalendarioFechas/NumeroNocheContext';
import Calendario from './CalendarioFechas/Calendario';

interface ReservaProps {
    onClose: () => void;
}

function Reserva(props: ReservaProps) {
    const [count, setCount] = React.useState(1);
    const { numeroNoche } = useNumeroNoche();
    const { onClose } = props;

    const handleCerrar = () => {
        onClose();
    };
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Box sx={{ marginTop: "-2%", display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ flex: 1, marginRight: '10px' }} >
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: "100%" }}>
                            <DialogTitle >Periodo</DialogTitle>
                            <Divider />
                            <Box sx={{ display: 'flex', flexDirection: 'column', paddingRight: '10px', marginBottom: "20px" }}>
                                <Calendario />
                            </Box>
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

                                <Box sx={{ flexDirection: 'row', marginBottom: "15px", width: { xs: '150%', sm: '3%', md: '2%', lg: '3%', xl: '100%' }, marginLeft: { xs: '6%', sm: '3%', md: '2%', lg: '3%', xl: '25%' } }}>
                                    <InputLabel id="demo-simple-select-label" >Números de noches</InputLabel>
                                    <ButtonGroup>
                                        <Button
                                            aria-label="reduce"
                                            onClick={() => {
                                                setCount(Math.max(count - 1, 0));
                                            }}
                                        >
                                            <RemoveIcon fontSize="small" />
                                        </Button>

                                        <Box sx={{ textAlign: "center" }}>
                                            <TextField value={numeroNoche} id="outlined-basic" variant="outlined" sx={{ textAlign: "center" }} />
                                        </Box>
                                        x
                                        <Button
                                            aria-label="increase"
                                            onClick={() => {
                                                setCount(count + 1);
                                            }}
                                        >
                                            <AddIcon fontSize="small" />
                                        </Button>
                                    </ButtonGroup>
                                </Box>
                            </Box>
                            <Box sx={{ flexDirection: 'row', marginBottom: "15px", width: { xs: '150%', sm: '3%', md: '2%', lg: '3%', xl: '100%' }, marginLeft: { xs: '6%', sm: '3%', md: '2%', lg: '3%', xl: '25%' } }}>
                                <InputLabel id="demo-simple-select-label">Números de personas</InputLabel>
                                <ButtonGroup>
                                    <Button
                                        aria-label="reduce"
                                        onClick={() => {
                                            setCount(Math.max(count - 1, 0));
                                        }}
                                    >
                                        <RemoveIcon fontSize="small" />
                                    </Button>
                                    <Box sx={{ textAlign: "center" }}>
                                        <TextField value={count} id="outlined-basic" variant="outlined" sx={{ textAlign: "center" }} />
                                    </Box>
                                    <Button
                                        aria-label="increase"
                                        onClick={() => {
                                            setCount(count + 1);
                                        }}
                                    >
                                        <AddIcon fontSize="small" />
                                    </Button>
                                </ButtonGroup>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ flex: 1, marginLeft: { xs: '-110%', sm: '3%', md: '2%', lg: '3%', xl: '0%' }, marginTop: { xs: '150%', sm: '2%', md: '8%', lg: '7%', xl: '0%' } }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <DialogTitle >Precio</DialogTitle>
                            <Divider />
                            <Box sx={{ display: 'flex', flexDirection: 'column', paddingRight: '10px', marginBottom: "20px" }}>
                                <InputLabel id="demo-simple-select-label">Precio de la habitación</InputLabel>
                                <TextField type="number" id="outlined-basic" variant="outlined" sx={{ textAlign: "center" }} />
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', paddingRight: '10px', marginBottom: "20px" }}>
                                <InputLabel id="demo-simple-select-label">Total a pagar</InputLabel>
                                <TextField label="$" type="number" id="outlined-basic" variant="outlined" sx={{ textAlign: "center" }} />
                            </Box>
                        </Box>
                    </Box>
                </Box >
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <Button variant="contained" color="primary" onClick={handleCerrar}>
                        Cerrar
                    </Button>
                </Box>
            </Grid>
        </Grid >

    )
}

export default Reserva;
