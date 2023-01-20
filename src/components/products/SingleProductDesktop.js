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
import useDialogModal from '../../hooks/useDialogModal';
import ProductDetail from '../productdetail';
import useCart from '../../hooks/useCart';

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

  const [ProductDetailDialog, showProductDetailDialog] =
    useDialogModal(ProductDetail);

  const { addToCart, addToCartText } = useCart(product);

  return (
    <>
      <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProductImage src={product.image} width="100%" />
        <ProductFavButton isFav={0}>
          <FavoriteIcon />
        </ProductFavButton>

        {showOptions && (
          <ProductAddToCart
            show={showOptions}
            variant="contained"
            onClick={addToCart}
          >
            {addToCartText}
          </ProductAddToCart>
        )}
        <ProductActionWrapper show={showOptions}>
          <Stack direction={matches ? 'row' : 'column'}>
            <ProductActionButton>
              <ShareIcon />
            </ProductActionButton>
            <ProductActionButton onClick={() => showProductDetailDialog()}>
              <FitScreenIcon />
            </ProductActionButton>
          </Stack>
        </ProductActionWrapper>
      </Product>
      <ProductsMeta product={product} matches={matches} />
      <ProductDetailDialog product={product} />
    </>
  );
};

export default SingleProductDesktop;
