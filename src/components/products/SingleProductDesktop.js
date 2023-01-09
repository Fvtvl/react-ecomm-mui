import {
  Product,
  ProductActionButton,
  ProductActionWrapper,
  ProductAddToCart,
  ProductFavButton,
  ProductImage,
} from '../../styles/products';
import ProductsMeta from './ProductsMeta';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FitScreenIcon from '@mui/icons-material/FitScreen';
import { useCallback, useState } from 'react';
import { Stack } from '@mui/material';

const SingleProductDesktop = ({ product, matches }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleMouseEnter = useCallback(() => {
    console.log('enter');
    setShowOptions(true);
  }, [setShowOptions]);
  const handleMouseLeave = useCallback(() => {
    console.log('leave');
    setShowOptions(false);
  }, [setShowOptions]);

  return (
    <>
      <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProductImage src={product.image} />
        <ProductFavButton isFav={0}>
          <FavoriteIcon />
        </ProductFavButton>

        {showOptions && (
          <ProductAddToCart show={showOptions} variant="contained">
            Add to cart
          </ProductAddToCart>
        )}
        <ProductActionWrapper show={showOptions}>
          <Stack direction={matches ? 'row' : 'column'}>
            <ProductActionButton>
              <ShareIcon />
            </ProductActionButton>
            <ProductActionButton>
              <FitScreenIcon />
            </ProductActionButton>
          </Stack>
        </ProductActionWrapper>
      </Product>
      <ProductsMeta product={product} matches={matches} />
    </>
  );
};

export default SingleProductDesktop;
