import CommonListing from "@/components/CommonListing";
import { productByCategory } from "@/services/product";

export default async function CHAAllProducts() {
  const getAllProducts = await productByCategory("CHA");

  return <CommonListing data={getAllProducts && getAllProducts.data} />;
}
