import { Button, IconButton } from '@mui/material';
import { Box } from '@mui/system';
import styled from '@emotion/styled';
import { Colors } from '../theme';
import { slideInBottom, slideInRight } from '../../animation';

export const Product = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',

  [theme.breakpoints.up('md')]: {
    position: 'relative',
  },
}));

export const ProductImage = styled('img')(({ src, theme }) => ({
  src: `url(${src})`,
  maxWidth: '100%',
  height: 'auto',
}));

export const ProductActionButton = styled(IconButton)(() => ({
  background: Colors.white,
  margin: 4,
}));

export const ProductFavButton = styled(ProductActionButton, {
  shouldForwardProp: (prop) => prop !== 'isFav',
})(({ isFav, theme }) => ({
  color: isFav ? Colors.black : Colors.light,

  [theme.breakpoints.up('md')]: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
}));

export const ProductAddToCart = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'show',
})(({ show, theme }) => ({
  width: '120px',
  fontSize: '12px',
  [theme.breakpoints.up('md')]: {
    position: 'absolute',
    bottom: '2%',
    width: '100%',
    padding: '10px 5px',
    animation:
      show &&
      `${slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  },
  background: Colors.dove_gray,
  opacity: 0.9,
  color: Colors.black,
  '&:hover': {
    backgroundColor: Colors.black,
    color: Colors.white,
  },
}));

export const ProductMetaWrapper = styled(Box)(({ theme }) => ({
  padding: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

export const ProductActionWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'show',
})(({ theme, show }) => ({
  [theme.breakpoints.up('md')]: {
    display: show ? 'visible' : 'none',
    position: 'absolute',
    right: 0,
    top: '20%',
    animation:
      show &&
      `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  },
}));

export const BannerShopButton = styled(Button)(({ theme }) => ({
  padding: '20px 0px',
  fontWeight: 'bold',
  fontSize: '16px',
  color: Colors.white,
  background: Colors.black,
  '&:hover': {
    backgroundColor: Colors.dim_grey,
    color: Colors.black,
  },
  [theme.breakpoints.down('sm')]: {
    width: '90%',
    padding: '10px 0px',
    fontSize: '14px',
  },
}));
