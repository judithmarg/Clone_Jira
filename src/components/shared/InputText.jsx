import { Box, Input, InputAdornment, InputLabel } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

export const InputText = ({ title, Icon, type, name, value, handleOnChange }) => {
    return (
        <Box>
            <InputLabel htmlFor={`input-with-${name}`}>
                {title}
            </InputLabel>
            <Input
                id={`input-with-${name}`}
                startAdornment={
                    <InputAdornment position="start">
                        {Icon}
                    </InputAdornment>
                }
                type={type}
                name={name}
                value={value}
                onChange={handleOnChange}
            />
        </Box>
    )
}
