import { IconButton, Slide } from '@mui/material';
import React from 'react';
import { useUIContext } from '../../context/ui';
import { SearchBoxContainer, SearchFild } from '../../styles/search';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { Colors } from '../../styles/theme';

const SearchBox = React.memo(() => {
  console.log('searchbox');
  const { showSearchBox, setShowSearchBox } = useUIContext();

  return (
    <Slide direction="down" in={showSearchBox} timeout={500}>
      <SearchBoxContainer>
        <SearchFild
          color="secondary"
          variant="standard"
          placeholder="search..."
        />
        <IconButton>
          <SearchIcon
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
            }}
            color={Colors.light_gray}
          ></SearchIcon>
        </IconButton>
        <IconButton
          sx={{
            position: 'absolute',
            top: 20,
            right: 20,
          }}
          onClick={() => setShowSearchBox(false)}
        >
          <CloseIcon
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
            }}
            color={Colors.light_gray}
          />
        </IconButton>
      </SearchBoxContainer>
    </Slide>
  );
});

export default SearchBox;
