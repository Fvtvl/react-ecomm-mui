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

function ZoomTransition(props) {
  return <Zoom {...props} />;
}

function SlideTransition(props) {
  return <Slide {...props} />;
}

const ProductDetail = ({ open, onClose, product }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Dialog
      TransitionComponent={matches ? SlideTransition : ZoomTransition}
      variant="permanat"
      open={open}
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
            <ProductImage src={product.image} />
          </Product>
          <ProductDetailInfoWrapper>
            <Typography variant="subtitle1"> 1212142141</Typography>
            <Typography variant="subtitle1"> 5 in stock</Typography>
            <Typography variant="h4">{product.name}</Typography>
            <Typography variant="body">{product.description}</Typography>
            <Box
              display="flex"
              sx={{ mt: 4 }}
              alignItems="center"
              justifyContent="space-between"
            >
              <IncDec />
              <Button variant="contained">Add to Cart</Button>
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
