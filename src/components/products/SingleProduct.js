import { Stack } from '@mui/material';
import {
  Product,
  ProductActionWrapper,
  ProductAddToCart,
  ProductFavButton,
  ProductImage,
} from '../../styles/products';
import ProductsMeta from './ProductsMeta';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FitScreenIcon from '@mui/icons-material/FitScreen';

const SingleProduct = ({ product, matches }) => {
  return (
    <>
      <Product>
        <ProductImage src={product.image} />
        <ProductsMeta product={product} matches={matches} />
        <ProductActionWrapper show={1}>
          <Stack direction="row">
            <ProductFavButton isFav={0}>
              <FavoriteIcon />
            </ProductFavButton>
            <ProductFavButton>
              <ShareIcon color="primary" />
            </ProductFavButton>
            <ProductFavButton>
              <FitScreenIcon color="primary" />
            </ProductFavButton>
          </Stack>
        </ProductActionWrapper>
      </Product>
      <ProductAddToCart variant="contained">Add to cart</ProductAddToCart>
    </>
  );
};

export default SingleProduct;
