import React from "react";
import { Button } from "@mui/material";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  border: '1px solid #000',
  borderRadius: '5px',
  marginBottom: theme.spacing(2),
  marginLeft: theme.spacing(1),
}));

const Product = (props) => {
  const dispatch = useDispatch();
  const { products = [] } = props;

  // If no products are passed, use a default product
  const itemsToRender = products.length > 0 ? products : [{
    id: 'default',
    image: 'default-image-url',
    productName: 'Default Product',
    price: 0
  }];

  return (
    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
      <Grid container spacing={{ xs: 4, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="center">
        {itemsToRender.map((product) => (
          <Grid item xs={2} sm={3} md={3.5} key={product.id}>
            <Item>
              <img src={product.image} alt={product.productName} />
              <h2>{product.productName}</h2>
              <p>${product.price}</p>
              <Button 
                onClick={() => dispatch(addItem({
                  productName: product.productName,
                  price: product.price
                }))} 
                variant="contained"
              >
                Add To Cart
              </Button>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Product;