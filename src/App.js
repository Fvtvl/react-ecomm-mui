import { Box, Button, Container, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { mainMassages } from '../src/data/messages';
import Appbar from './components/appbar';
import Banner from './components/banner';
import Products from './components/products';
import Promotions from './components/promotions';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Appbar />
      <Banner />
      <Promotions message={mainMassages} />
      <Container
        maxWidth="false"
        sx={{
          background: '#fff',
        }}
      >
        <Box display="flex" justifyContent={'center'} sx={{ pt: 4 }}>
          <Typography variant="h4">Our products</Typography>
        </Box>
        <Products />
        <Button variant="contained">Test</Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
