import IProductDetails from "./ProductDetails";
import { IProductChoices } from "./ProductChoice";
import Image from "./Image";

interface IProduct {
  productDetails: IProductDetails;
  productChoices: IProductChoices[];
  images: Image[]
}

export default IProduct;