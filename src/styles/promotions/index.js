import { Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import { Colors } from '../theme';
import '@fontsource/oswald';

export const PromotionsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px 0px 20px 0px',
  overflow: 'hidden',
  background: Colors.black,

  [theme.breakpoints.up('md')]: {
    padding: '40px 0px 40px 0px',
  },
}));

export const MessageText = styled(Typography)(({ theme }) => ({
  color: Colors.white,
  fontSize: '1.5rem',
  fontFamily: 'Oswald',

  [theme.breakpoints.up('md')]: {
    fontSize: '3rem',
  },
}));
