import { TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Colors } from '../theme';

export const FooterTitle = styled(Typography)(() => ({
  textTransform: 'uppercase',
  marginBottom: '1em',
}));

export const SubscribeTf = styled(TextField)(() => ({
  color: Colors.white,
  '.MuiInputLabel-root': {
    color: Colors.white,
  },
  '.MuiInputLabel-root::before': {
    borderBottom: `1px solid ${Colors.white}`,
  },
}));
