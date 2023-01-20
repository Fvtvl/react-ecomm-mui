import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Slide,
  Typography,
  useMediaQuery,
  Zoom,
} from '@mui/material';
import { Box } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import { useTheme } from '@emotion/react';
import { Colors } from '../../styles/theme';
import {
  ProductDetailInfoWrapper,
  ProductDetailWrapper,
} from '../../styles/productdetail';
import { Product, ProductImage } from '../../styles/products';
import IncDec from '../ui';
import { Facebook, Favorite, Instagram, Twitter } from '@mui/icons-material';
import useCart from '../../hooks/useCart';

const ZoomTransition = React.forwardRef((props, ref) => {
  return <Zoom {...props} ref={ref} />;
});

const SlideTransition = React.forwardRef((props, ref) => {
  return <Slide {...props} ref={ref} />;
});

const ProductDetail = ({ open, onClose, product }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const { addToCart, addToCartText } = useCart(product);

  return (
    <Dialog
      TransitionComponent={matches ? SlideTransition : ZoomTransition}
      variant="permanat"
      open={open}
      onClose={onClose}
      fullScreen={matches}
      maxWidth={matches ? 'sm' : 'md'}
    >
      <DialogTitle sx={{ background: Colors.light_gray }}>
        <Box
          display={'flex'}
          alignItems="center"
          justifyContent={'space-between'}
        >
          Product Title
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <ProductDetailWrapper flexDirection={matches ? 'column' : 'row'}>
          <Product sx={{ mr: 4 }}>
            <ProductImage
              src={product.image}
              width={matches ? '80%' : '100%'}
            />
          </Product>
          <ProductDetailInfoWrapper sx={{ mt: 4 }}>
            <Typography variant={matches ? 'caption' : 'subtitle1'}>
              1212142141
            </Typography>
            <Typography variant={matches ? 'caption' : 'subtitle1'}>
              5 in stock
            </Typography>
            <Typography variant={matches ? 'h5' : 'h3'}>
              {product.name}
            </Typography>
            <Typography variant={matches ? 'caption' : 'subtitle1'}>
              {product.description}
            </Typography>
            <Box
              display="flex"
              sx={{ mt: 4 }}
              alignItems="center"
              justifyContent="space-between"
              flexDirection={matches ? 'column' : 'row'}
            >
              <IncDec />
              <Button
                variant="contained"
                sx={matches ? { mt: 3 } : { mt: 0 }}
                onClick={addToCart}
              >
                {addToCartText}
              </Button>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              sx={{ mt: 4, color: Colors.light }}
            >
              <Favorite sx={{ mr: 2 }} />
              Add to wishlist
            </Box>
            <Box sx={{ mt: 4, color: Colors.light }}>
              <Facebook />
              <Twitter sx={{ pl: theme.spacing(4) }} />
              <Instagram sx={{ pl: theme.spacing(4) }} />
            </Box>
          </ProductDetailInfoWrapper>
        </ProductDetailWrapper>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetail;
