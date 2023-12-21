import CommonListing from "@/components/CommonListing";
import { productByCategory } from "@/services/product";

export default async function SmartDevicesAllProducts() {
  const getAllProducts = await productByCategory("SmartDevices");

  return <CommonListing data={getAllProducts && getAllProducts.data} />;
}
