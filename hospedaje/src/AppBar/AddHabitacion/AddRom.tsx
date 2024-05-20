import React from 'react'
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Autocomplete, Divider, InputLabel, TextField } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Menu from '../Menu';

function AutocompleteCargo() {
    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Cliente}
            sx={{ width: "100%", marginLeft: "0" }}
            renderInput={(params) => <TextField {...params} label="" />}
        />
    );
}
const Cliente = [
    { label: 'Parejas' },

];

function AddRom() {
    const [count, setCount] = React.useState(1);

    return (
        <Box sx={{ marginTop: "60px", display: 'inline-flex', justifyContent: 'space-between', p: 2 }}>
            <Box sx={{ flex: 1, marginRight: '10px' }}>
                <Menu />
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 2, textAlign: "center" }}>
                    <DialogTitle >Añadir Habitación </DialogTitle>
                    <Divider />
                    <Box sx={{ display: 'flex', flexDirection: 'column', paddingRight: '10px', marginTop: "20px", marginBottom: "15px" }}>
                        <InputLabel id="demo-simple-select-label">Nombre de la habitación: </InputLabel>
                        <TextField id="outlined-basic" variant="outlined" sx={{ width: "100%" }} />
                    </Box>
                    <Box sx={{ marginTop: "2%", paddingRight: '10px' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', marginBottom: "15px" }}>
                            <Box sx={{ flex: 1 }}>
                                <InputLabel id="demo-simple-select-label">Descripción: </InputLabel>
                                <TextField id="outlined-basic" variant="outlined" sx={{ width: "100%" }} />
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ flex: 1, marginBottom: "15px" }} >
                        <InputLabel id="demo-simple-select-label" sx={{ p: 2 }}>Categoria:</InputLabel>
                        <AutocompleteCargo />
                    </Box>
                    <Box sx={{ marginTop: "2%", paddingRight: '10px' }}>
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
        </Box >
    )
}

export default AddRom