import { Typography } from '@mui/material';
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerTitle,
} from '../../styles/banner';

const Banner = () => {
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
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
