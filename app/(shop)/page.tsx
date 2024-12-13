import { Title, ProductGrid } from "@/components";
import { initialData } from "@/seed/seed";

const products = initialData.products;

export default function Home() {
  return (
    <>
      <Title title="Tienda" subtitle="Todos los productos" classname="mb-2" />
      <ProductGrid products={products} />
    </>
  );
}
