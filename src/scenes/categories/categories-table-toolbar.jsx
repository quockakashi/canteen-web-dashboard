import { Delete, FilterList, FilterListOffOutlined, Search } from "@mui/icons-material";
import { Box, FormControl, IconButton, InputBase, Toolbar, Tooltip, Typography, alpha } from "@mui/material";
import { Form } from "react-router-dom";

export default function CategoriesTableToolbar(props) {
    const { numSelected } = props;
  
    return (
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
            borderRadius: '8px 8px 0 0'
          }),
        }}
      >
        {numSelected > 0 ? (
          <Typography
            sx={{ flex: '1 1 100%' }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>
        ) : (
          <Box 
            boxShadow='5px 5px 5px rgba(0, 0, 0, 0.1)'
            borderRadius={4}
            px={2}
            mr={3}
        >
            <InputBase placeholder="Search category">
            </InputBase>
            <IconButton>
                <Search />
            </IconButton>
          </Box>
        )}
  
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton>
              <Delete />
            </IconButton>
          </Tooltip>
        ) : (
          null
        )}
      </Toolbar>
    );
}