import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: Category;
  };
}

const seedProducts = initialData.products;

// Mapa para manejar las categorías
// const types = new Map<string, string>([
//   ["men", "Caballeros"],
//   ["women", "Damas"],
//   ["kid", "Niños"],
// ]);

export default async function CategoryId({ params }: Props) {
  const { id } = await params;

  // if (id === "kid") {
  //   notFound();
  // }

  const products = seedProducts.filter((product) => product.gender === id);

  // const typeProduct = types.get(id); // Obtener el valor asociado al id

  const typeProduct: Record<Category, string> = {
    men: "para Hombres",
    women: "para Mujeres",
    kid: "para Niños",
    unisex: "para Todos",
  };

  return (
    <div>
      <Title
        // title={`Articulos para ${typeProduct}`}
        title={`Articulos ${typeProduct[id]}`}
        subtitle="Todos los productos"
        classname="mb-2"
      />
      <ProductGrid products={products} />
    </div>
  );
}
