import SectionTitle from "@/components/global/SectionTitle";
import ProductsGrid from "@/components/products/ProductsGrid";
import { fetchUserFavorites } from "@/utils/action";

const Favorites = async () => {
  const favorite = await fetchUserFavorites();
  if (favorite.length === 0)
    return <SectionTitle text="You have no favorites yet." />;
  return (
    <div>
      <SectionTitle text="Favorites" />
      <ProductsGrid products={favorite.map((favorite) => favorite.product)} />
    </div>
  );
};

export default Favorites;

