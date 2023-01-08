import { Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Colors } from '../theme';
import '@fontsource/oswald';

export const BannerContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  padding: '0px 0px',
  background: Colors.light_gray,
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export const BannerImage = styled('img')(({ src, theme }) => ({
  src: `url(${src})`,
  width: '500px',
  [theme.breakpoints.down('md')]: {
    width: '280px',
    height: '380px',
  },

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const BannerContent = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  maxWidth: 420,
  padding: '30px',
}));

export const BannerTitle = styled(Typography)(({ theme }) => ({
  lineHeight: 1.5,
  fontSize: '72px',
  marginBottom: '20px',
  fontFamily: 'Oswald',
  [theme.breakpoints.down('sm')]: {
    fontSize: '42px',
  },
}));

export const BannerDescription = styled(Typography)(({ theme }) => ({
  lineHeight: 1.2,
  letterSpacing: 1.25,
  marginBottom: '3em',
  fontFamily: 'Oswald',
  [theme.breakpoints.down('md')]: {
    lineHeight: 1,
    letterSpacing: 1,
    marginBottom: '1.5em',
  },
}));
