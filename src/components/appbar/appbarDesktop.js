import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { AppbarContainer, AppbarHeader, MyList } from '../../styles/appbar';
import SearchIcon from '@mui/icons-material/Search';
import Actions from './actions';
import { Colors } from '../../styles/theme';
import { useUIContext } from '../../context/ui';

const AppbarDesktop = ({ matches }) => {
  const { setShowSearchBox } = useUIContext();

  return (
    <AppbarContainer>
      <AppbarHeader>inShop</AppbarHeader>
      <MyList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Categories" />
        <ListItemText primary="Products" />
        <ListItemText primary="Contact Us" />
        <ListItemButton>
          <ListItemIcon
            sx={{ color: Colors.white }}
            onClick={() => setShowSearchBox(true)}
          >
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
      <Actions matches={matches} />
    </AppbarContainer>
  );
};

export default AppbarDesktop;
