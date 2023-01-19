import CloseIcon from '@mui/icons-material/Close';
import {
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import React from 'react';
import { useUIContext } from '../../context/ui';
import { DrawerCloseButton } from '../../styles/appbar';
import { Colors } from '../../styles/theme';

const AppDrawer = React.memo(() => {
  console.log('appdrawer');
  const { drawerOpen, setDrawerOpen } = useUIContext();
  return (
    <>
      {drawerOpen && (
        <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
          <CloseIcon
            sx={{
              fontSize: '2,5rem',
              color: Colors.white,
            }}
          />
        </DrawerCloseButton>
      )}
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <List>
          <ListItemButton>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
          <Divider variant="middle" />
          <ListItemButton>
            <ListItemText>Categories</ListItemText>
          </ListItemButton>
          <Divider variant="middle" />
          <ListItemButton>
            <ListItemText>Products</ListItemText>
          </ListItemButton>
          <Divider variant="middle" />
          <ListItemButton>
            <ListItemText>Contact Us</ListItemText>
          </ListItemButton>
          <Divider variant="middle" />
        </List>
      </Drawer>
    </>
  );
});

export default AppDrawer;
