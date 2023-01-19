import { IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Colors } from '../../styles/theme';
import { clamp } from './clamp';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const IncDec = React.memo(() => {
  const clampV = clamp(1, 10);
  const [value, setValue] = useState(1);
  return (
    <Box display="flex">
      <IconButton
        sx={{
          borderRadius: 0,
          background: Colors.light_gray,
          '&:hover': { background: Colors.dove_gray },
        }}
        onClick={() => setValue(clampV(value - 1))}
      >
        <RemoveIcon />
      </IconButton>
      <Typography
        variant="h6"
        sx={{ border: `1px solid ${Colors.light_gray}`, p: '0px 10px' }}
      >
        {value}
      </Typography>
      <IconButton
        sx={{
          borderRadius: 0,
          background: Colors.light_gray,
          '&:hover': { background: Colors.dove_gray },
        }}
        onClick={() => setValue(clampV(value + 1))}
      >
        <AddIcon />
      </IconButton>
    </Box>
  );
});

export default IncDec;
