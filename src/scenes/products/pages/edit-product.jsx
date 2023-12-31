import { Box,Container, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import StyledModal from "../../../components/modal";
import { useState } from "react";
import SuccessConfirmModal from "../../../components/success-confirm-modal";
import CreateProductForm from "../create-product-form";
import { Helmet } from "react-helmet";
import axios from 'axios';
import { useEffect } from "react";
export default  function EditProductPage() {
    const theme = useTheme();
    const isSmallDownScreen = useMediaQuery(theme.breakpoints.down('sm'))
    const params = useParams();
    const navigate = useNavigate();
    const [openCancelModal, setOpenCancelModal] = useState(false);
    const [openSuccessModal, setOpenSuccessModal] = useState(false);
    const [ successCategoryId, setSuccessCategoryId] = useState('');
    const id=params.id;
    const [product,setProductData]=useState([]);
    const [isloading,setLoading]=useState(true);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/products/${id}`).then(res => { setProductData(res.data.product); setLoading(false)})
    }, []);
    const handleCancel = () => setOpenCancelModal(true);
    const handleConfirm = () => {
        setOpenSuccessModal(true);
    }
    if(!isloading){

    
    return (
        <Container maxWidth='xl'>
            <Helmet>
                <title>Edit Product - Canteen Dashboard</title>
            </Helmet>
            <Stack direction='row'  justifyContent={'space-between'} alignItems={'center'} mb={4}>
                <Box display={'flex'} flexDirection={'column'} justifyContent={'center'}>
                    <Typography variant="h2" fontWeight='bold'>Products</Typography>
                    <Typography variant="subtitle2">
                        Edit Product <Typography component="span" color="primary.dark">#{params.id}</Typography>
                    </Typography>
                </Box>
            </Stack>
            <Box mt={4} display='flex' width={1} justifyContent='center'>
                <CreateProductForm
                 editMode={true}
                 product={product}
                 handleCancel={handleCancel} handleSucces={handleConfirm}/>
            </Box>

            <StyledModal open={openCancelModal} handleClose={() => setOpenCancelModal(false)} handleContinue={() => {
                setOpenCancelModal(false);
                navigate('/products')
            }} title={'Are you sure to continue?'} content={'If you continue, the current product data will be removed'} />

            <SuccessConfirmModal 
            open={openSuccessModal} 
            handleClose={() => navigate('/products')}
            handleContinue={() => {
                setOpenSuccessModal(false);
                navigate('/products/new-product')
            }}
            title={'Product Edited Successfully'}
            content={`The product was edited ID: ${successCategoryId}`}
            link={`/products/${successCategoryId}`}    
            />
        </Container>
    )
        }
}