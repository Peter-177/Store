import { formatPrice } from "@/utils/format";
import { Product } from "@prisma/client";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import FavoriteToggleButton from "./FavoriteToggleButton";

const ProductsGrid = ({ products }: { products: Product[] }) => {
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const { name, price, image } = product;
        const productId = product.id;
        const dollarsAmount = formatPrice(price);
        return (
          <article key={productId} className="group relative">
            <Link href={`/products/${productId}`}>
              <Card className="transform group-hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden border-none bg-muted/30">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
                    priority
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h2 className="text-xl capitalize font-semibold tracking-tight">{name}</h2>
                  <p className="text-muted-foreground font-medium mt-2 text-lg">
                    {dollarsAmount}
                  </p>
                </CardContent>
              </Card>
            </Link>
            <div className="absolute top-5 right-5 z-10">
              <FavoriteToggleButton productId={productId} />
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ProductsGrid;

