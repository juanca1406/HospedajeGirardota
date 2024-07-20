import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Reserva from './Reserva';
import Grid from '@mui/material/Grid';
import DialogTitle from '@mui/material/DialogTitle';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Clientes from './Customer';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
    id: string;
    onClose: () => void;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs(props: TabPanelProps) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const { onClose } = props;
    const handleCerrar = () => {
        onClose(); // Llama a la función onClose
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                <Box sx={{}}>
                    <DialogTitle>Añadir una reserva</DialogTitle>
                    <Box sx={{ marginTop: "10px" }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                                <Tab icon={<CalendarMonthIcon />} label="Reserva" {...a11yProps(0)} sx={{ width: { xs: '50%', sm: '3%', md: '2%', lg: '3%', xl: '100%' } }} />
                                <Tab icon={<PermIdentityIcon />} label="Cliente" {...a11yProps(1)} sx={{ width: { xs: '50%', sm: '3%', md: '2%', lg: '3%', xl: '100%' } }} />
                            </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0} id="ringtone-menu" onClose={handleCerrar}>
                            <Reserva onClose={handleCerrar} />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1} id="client-tab" onClose={handleCerrar}>
                            <Clientes onClose={handleCerrar} />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2} id="canceled-tab" onClose={handleCerrar}>
                            Anulados
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={3} id="project-tab" onClose={handleCerrar}>
                            Del proyecto
                        </CustomTabPanel>
                    </Box>
                </Box>
            </Grid >
        </Grid >

    );
}
