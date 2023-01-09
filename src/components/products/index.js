import { Container, Grid, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import { products } from '../../data/products';
import SingleProduct from './SingleProduct';
import SingleProductDesktop from './SingleProductDesktop';

const Products = React.memo(() => {
  console.log('products');
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const renderProducts = products.map((product) => (
    <Grid
      item
      xs={2}
      sm={3}
      md={4}
      key={product.id}
      display="flex"
      flexDirection={'column'}
      alignItems="center"
    >
      {matches ? (
        <SingleProduct product={product} matches={matches} />
      ) : (
        <SingleProductDesktop product={product} matches={matches} />
      )}
    </Grid>
  ));

  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        justifyContent={'center'}
        sx={{ margin: '20px 4px 10px 4px' }}
        columns={{ xs: 4, sm: 9, md: 16 }}
      >
        {renderProducts}
      </Grid>
    </Container>
  );
});

export default Products;
