import { Divider, ListItemButton, ListItemIcon } from '@mui/material';
import {
  ActionIconsContainerDesktop,
  ActionIconsContainerMobile,
  MyList,
} from '../../styles/appbar';
import ShoppingCardIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Person';
import PersonIcon from '@mui/icons-material/Favorite';
import { Colors } from '../../styles/theme';

const Actions = ({ matches }) => {
  const Component = matches
    ? ActionIconsContainerMobile
    : ActionIconsContainerDesktop;

  return (
    <Component>
      <MyList type="row">
        <ListItemButton
          sx={{
            justifyContent: 'center',
          }}
        >
          <ListItemIcon
            sx={{
              display: 'flex',
              justifyContent: 'center',
              color: matches ? Colors.dim_grey : Colors.white,
            }}
          >
            <ShoppingCardIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton
          sx={{
            justifyContent: 'center',
          }}
        >
          <ListItemIcon
            sx={{
              display: 'flex',
              justifyContent: 'center',
              color: matches ? Colors.dim_grey : Colors.white,
            }}
          >
            <PersonIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton
          sx={{
            justifyContent: 'center',
          }}
        >
          <ListItemIcon
            sx={{
              display: 'flex',
              justifyContent: 'center',
              color: matches ? Colors.dim_grey : Colors.white,
            }}
          >
            <FavoriteIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
      </MyList>
    </Component>
  );
};

export default Actions;
