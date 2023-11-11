import { Box, Checkbox, Grid, Stack, TextField, TextareaAutosize, Typography, alpha, useMediaQuery, useTheme } from "@mui/material";
import { ActionButton } from "../../components/action-button";

export default function CreateCategoryForm({handleCancel, handleSuccess}) {
    const theme = useTheme();
    const isMediumScreen = useMediaQuery(theme.breakpoints.up('md'));

    const handleContinue = () => {
        console.log('Hello');
        handleSuccess('2421412');
    };

    return (
        <Stack component='form' width={isMediumScreen ? 800 : 500} height={400} bgcolor={alpha(theme.palette.primary.light, 0.6)} py={4} px={isMediumScreen ? 10 : 4} borderRadius={4} spacing={2}>
            <Grid container alignItems='center'>
                <Grid item xs={4}>
                    <Typography>Category Name: </Typography>
                </Grid>
                <Grid item xs={8}>
                    <TextField fullWidth />
                </Grid>
            </Grid>
            <Grid container alignItems='center'>
                <Grid item xs={4}>
                    <Typography>Brand: </Typography>
                </Grid>
                <Grid item xs={8}>
                    <TextField fullWidth />
                </Grid>
            </Grid>
            <Grid container alignItems='center'>
                <Grid item xs={4}>
                    <Typography>Description: </Typography>
                </Grid>
                <Grid item xs={8}>
                    <TextField fullWidth multiline rows={2} />
                </Grid>
            </Grid>
            <Grid container alignItems='center'>
                <Grid item xs={4}>
                    <Typography>Description: </Typography>
                </Grid>
                <Grid item xs={8}>
                    <Checkbox sx={{px: 0}}/>
                </Grid>
            </Grid>

            <Box display='flex' gap={4} width={1} justifyContent='center'>
                <ActionButton bgcolor={alpha(theme.palette.error.dark, 0.8)} label={'Cancel'} handleClick={handleCancel} />
                <ActionButton bgcolor={alpha(theme.palette.success.main, 0.8)} label={'Continue'} 
                handleClick={handleContinue} />
            </Box>
        </Stack>
    );
} 