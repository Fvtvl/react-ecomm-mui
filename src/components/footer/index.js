import { Facebook, Instagram, Send, Twitter } from '@mui/icons-material';
import {
  Box,
  Button,
  Grid,
  List,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import { FooterTitle, SubscribeTf } from '../../styles/footer';
import { Colors } from '../../styles/theme';

const Footer = React.memo(() => {
  return (
    <Box
      sx={{
        color: Colors.white,
        background: Colors.black,
        p: { xs: 4, md: 10 },
        pt: 12,
        pb: 12,
        fontSize: { xs: '12px', md: '14px' },
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">About us</FooterTitle>
          <Typography variant="caption2">
            PUMA and our third party partners use cookies and related
            technologies on this website. For more information please visit our
            Privacy Policy or click Manage Cookies to opt out or manage cookie
            preferences
          </Typography>
          <Box sx={{ mt: 4, color: Colors.white }}>
            <Instagram sx={{ mr: 1 }} />
            <Facebook sx={{ mr: 1 }} />
            <Twitter />
          </Box>
        </Grid>
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">information</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                About Us
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Order Tracking
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Privary &amp; Policy
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Term &amp; Conditions
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">my account</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Login
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                My cart
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                My Account
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Wishlist
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">newslatter</FooterTitle>
          <Stack>
            <SubscribeTf label="Email address" variant="standard" />
            <Button
              startIcon={<Send sx={{ color: Colors.white }} />}
              sx={{
                mt: 4,
                mb: 4,
                background: Colors.dim_grey,
                '&:hover': { background: Colors.shaft },
              }}
            >
              SUBSCRIBE
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
});

export default Footer;
