import { createContext, useContext, useMemo, useState } from 'react';

export const UIContext = createContext();
export const useUIContext = () => useContext(UIContext);

export const UIProvider = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const value = useMemo(() => {
    return {
      drawerOpen,
      setDrawerOpen,
      showSearchBox,
      setShowSearchBox,
      cart,
      setCart,
      showCart,
      setShowCart,
    };
  }, [drawerOpen, showSearchBox, cart, showCart]);

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
