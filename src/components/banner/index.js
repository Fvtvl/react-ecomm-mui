import { Typography } from '@mui/material';
import React from 'react';
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerTitle,
} from '../../styles/banner';
import { BannerShopButton } from '../../styles/products';

const Banner = React.memo(() => {
  console.log('banner');
  return (
    <BannerContainer>
      <BannerImage src="/images/poster.png" />

      <BannerContent>
        <Typography variant="h6">NEW YEAR. NEW YOU.</Typography>
        <BannerTitle variant="h2">My SportsWear</BannerTitle>

        <BannerDescription variant="subtitle">
          The Suede hit the scene in 1968 and has been changing the game ever
          since. It’s been worn by icons of every generation, and it’s
        </BannerDescription>
        <BannerShopButton>Show now</BannerShopButton>
      </BannerContent>
    </BannerContainer>
  );
});

export default Banner;
