import { Typography } from '@mui/material';
import React from 'react';
import { ProductMetaWrapper } from '../../styles/products';

const ProductsMeta = ({ product, matches }) => {
  return (
    <ProductMetaWrapper>
      <Typography
        variant={matches ? 'subtitle1' : 'h4'}
        noWrap={true}
        lineHeight={2}
      >
        {product.name}
      </Typography>
      <Typography variant={matches ? 'caption' : 'body1'}>
        {product.price}
      </Typography>
    </ProductMetaWrapper>
  );
};

export default ProductsMeta;
