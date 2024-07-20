import { useEffect, useRef, useState } from 'react';
import { DateRange } from 'react-date-range';
import format from 'date-fns/format';
import { differenceInDays } from 'date-fns';
import esLocale from 'date-fns/locale/es';
import { TextField, Box } from '@mui/material';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { useNumeroNoche } from './NumeroNocheContext';

const Calendario = () => {
    const { setNumeroNoche } = useNumeroNoche();
    const { numeroNoche } = useNumeroNoche();
    const [range, setRange] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [open, setOpen] = useState(false);
    const refOne = useRef(null);

    useEffect(() => {
        document.addEventListener("keydown", hideOnEscape, true);
        document.addEventListener("click", hideOnClickOutside, true);
    }, []);

    const hideOnEscape = (e) => {
        if (e.key === "Escape") {
            setOpen(false);
        }
    }

    const hideOnClickOutside = (e) => {
        if (refOne.current && !refOne.current.contains(e.target)) {
            setOpen(false);
        }
    }

    const handleSelect = (ranges) => {
        const { startDate, endDate } = ranges.selection;
        const nights = differenceInDays(endDate, startDate);
        setNumeroNoche(nights);
        setRange([ranges.selection]);
    };

    return (
        <Box position="relative">
            <TextField
                value={`${format(range[0].startDate, "dd/MM/yyyy", { locale: esLocale })} Desde ${format(range[0].endDate, "dd/MM/yyyy", { locale: esLocale })} - ${numeroNoche} noches`}
                readOnly
                onClick={() => setOpen(open => !open)}
                variant="outlined"
                sx={{
                    marginTop: "20px",
                    width: "100%",
                }}
            />
            <Box
                ref={refOne}
                position="absolute"
                top="75px"
                left="20%"
                transform="translateX(-50%)"
                zIndex={9999}
            >
                {open &&
                    <DateRange
                        onChange={handleSelect}
                        editableDateInputs={true}
                        moveRangeOnFirstSelection={false}
                        ranges={range}
                        months={1}
                        direction="horizontal"
                        locale={esLocale}
                        className="calendarElement"
                    />
                }
            </Box>
        </Box>
    );
};

export default Calendario;
