import { Box, Button, Container, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { useState } from 'react';
import { mainMassages } from '../src/data/messages';
import Appbar from './components/appbar';
import Banner from './components/banner';
import AppDrawer from './components/drawer';
import Footer from './components/footer';
import Products from './components/products';
import Promotions from './components/promotions';
import SearchBox from './components/search';
import { UIProvider } from './context/ui';
import theme from './styles/theme';

function App() {
  const [count, setCount] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <UIProvider>
        <Appbar />
        <Banner />
        <Promotions message={mainMassages} sx={{ maxWidth: 'false' }} />

        <Container
          maxWidth
          sx={{
            background: '#fff',
          }}
        >
          <Box display="flex" justifyContent={'center'} sx={{ pt: 4 }}>
            <Typography variant="h4">Our products</Typography>
          </Box>
          <Products />
          <Button variant="contained" onClick={() => setCount(count + 1)}>
            Test
          </Button>
          <Typography>{count}</Typography>
          <AppDrawer />
          <SearchBox />
        </Container>
        <Footer />
      </UIProvider>
    </ThemeProvider>
  );
}

export default App;
