import { Avatar, FormControl, ListItemText, MenuItem, Select, Tooltip } from '@mui/material'
import { useSelectAvatar } from '../../hooks/useSelectAvatar'

export const SelectAvatar = ({ nameAvatar, updateAssign, read = false }) => {

    const { users, asigneeUser, handleOnChange} = useSelectAvatar({nameAvatar, updateAssign})
    if (read) {
        return (
            <Tooltip title={asigneeUser?.name}>
            <Avatar sx={{ width: 24, height: 24 }} src={asigneeUser?.avatar} />
            </Tooltip>
        )
    }

    return (
        <>
            <FormControl sx={{ m: 1, width: '100%' }}>
                <Select
                    value={asigneeUser}
                    onChange={(e) => handleOnChange(e)}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    sx={{
                        ".MuiOutlinedInput-input": {
                            display: "flex",
                            gap: "12px",
                            alignItems: "center",
                            padding: "2px 12px",
                            fontSize: "14px"
                        },
                        ".MuiOutlinedInput-notchedOutline": {
                            border: "2px solid pink",
                        },
                        ".MuiListItemText-root .MuiListItemText-primary": {
                            fontSize: "14px"
                        }
                    }}
                >
                    {users.map((user) => (
                        <MenuItem key={user.id} value={user} sx={{ display: "flex", gap: "16px" }}>
                            <Avatar sx={{ width: 24, height: 24 }} src={user.avatar} />
                            <ListItemText sx={{ fontSize: "14px" }} primary={user.name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </>
    )
}
