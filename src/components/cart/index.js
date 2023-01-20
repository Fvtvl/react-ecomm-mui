import { Close } from '@mui/icons-material';
import {
  Avatar,
  Button,
  Divider,
  Drawer,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useCallback } from 'react';
import { useUIContext } from '../../context/ui';
import { Colors } from '../../styles/theme';

const Cart = React.memo(() => {
  const { cart, setCart, setShowCart, showCart } = useUIContext();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const handleRemoveFromCart = useCallback(
    (item) => {
      setCart(cart.filter((c) => c.id !== item.id));
    },
    [setCart, cart]
  );

  const cartContent = cart.map((item) => (
    <Box key={item.id}>
      <Box
        display="flex"
        sx={{ py: 2 }}
        alignItems="start"
        justifyContent={'space-between'}
      >
        <Box display="flex" flexDirection={'column'} alignItems="center">
          <Avatar src={item.image} sx={{ width: 120, height: 120, m: 2 }} />
          <Typography variant="body1">{item.price}</Typography>
        </Box>
        <Box display="flex" flexDirection={'column'}>
          <Typography variant="h6">{item.name}</Typography>
          <Typography variant="subtitle2">{item.description}</Typography>
        </Box>
        <Box display="flex" flexDirection={'column'}>
          <IconButton onClick={() => handleRemoveFromCart(item)}>
            <Close />
          </IconButton>
        </Box>
      </Box>
      <Divider variant="inset" />
    </Box>
  ));
  return (
    <Drawer
      open={showCart}
      onClose={() => setShowCart(false)}
      anchor="right"
      PaperProps={{
        sx: {
          width: matches ? '100%' : 400,
          background: Colors.light_gray,
          borderRadius: 0,
          color: Colors.black,
        },
      }}
    >
      {cart.length > 0 ? (
        <Box
          sx={{ p: 4 }}
          display="flex"
          justifyContent={'center'}
          alignItems="center"
          flexDirection="column"
        >
          <Typography variant="h4">Your Cart</Typography>

          {cartContent}
          <Button
            variant="contained"
            sx={{ mt: 4, background: Colors.black, color: Colors.white }}
          >
            Proceed to payment
          </Button>
        </Box>
      ) : (
        <Box
          sx={{ p: 4 }}
          display="flex"
          justifyContent={'center'}
          alignItems="center"
          flexDirection="row"
        >
          <Typography variant={matches ? 'h6' : 'h4'}>
            Your cart is empty!
          </Typography>
        </Box>
      )}
      <Button
        sx={{
          color: Colors.light,
          '&:hover': { color: Colors.black },
        }}
        onClick={() => setShowCart(false)}
      >
        Close
      </Button>
    </Drawer>
  );
});

export default Cart;
