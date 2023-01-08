import { IconButton } from '@mui/material';
import { AppbarContainer, AppbarHeader } from '../../styles/appbar';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Actions from './actions';
import { Colors } from '../../styles/theme';

const AppbarMobile = ({ matches }) => {
  return (
    <AppbarContainer>
      <IconButton sx={{ color: matches && Colors.white }}>
        <MenuIcon />
      </IconButton>
      <AppbarHeader textAlign={'center'} variant="h4">
        inShop
      </AppbarHeader>
      <IconButton sx={{ color: Colors.white, marginRight: matches && '20px' }}>
        <SearchIcon />
      </IconButton>
      <Actions matches={matches} />
    </AppbarContainer>
  );
};

export default AppbarMobile;
