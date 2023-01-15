import { Box, TextField } from '@mui/material';
import { styled } from '@mui/system';
import { Colors } from '../theme';

export const SearchBoxContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: Colors.body_bg,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 999999,
  opacity: 0.9,
}));

export const SearchFild = styled(TextField)(({ theme }) => ({
  color: Colors.black,
  width: '60%',
  '.MuiInput-root': {
    fontSize: '1rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '2rem',
    },
  },
  '.MuiInput-root::before': {
    borderBottom: `1px solid ${Colors.light_gray}`,
  },
}));
