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
import useDialogModal from '../../hooks/useDialogModal';
import ProductDetail from '../productdetail';
import useCart from '../../hooks/useCart';

const SingleProduct = ({ product, matches }) => {
  const [ProductDetailDialog, showProductDetailDialog] =
    useDialogModal(ProductDetail);
  const { addToCart, addToCartText } = useCart(product);

  return (
    <>
      <Product>
        <ProductImage src={product.image} width="70%" />
        <ProductsMeta product={product} matches={matches} />
        <ProductActionWrapper show={1}>
          <Stack direction="row">
            <ProductFavButton isFav={0}>
              <FavoriteIcon />
            </ProductFavButton>
            <ProductFavButton>
              <ShareIcon color="primary" />
            </ProductFavButton>
            <ProductFavButton onClick={() => showProductDetailDialog()}>
              <FitScreenIcon color="primary" />
            </ProductFavButton>
          </Stack>
        </ProductActionWrapper>
        <ProductAddToCart variant="contained" onClick={addToCart}>
          {addToCartText}
        </ProductAddToCart>
      </Product>
      <ProductDetailDialog product={product} />
    </>
  );
};

export default SingleProduct;
