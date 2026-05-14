import { fetchProductReviews } from "@/utils/action";
import SectionTitle from "../global/SectionTitle";
import ReviewCard from "./ReviewCard";

const ProductReview = async ({ productId }: { productId: string }) => {
  const reviews = await fetchProductReviews(productId);

  return (
    <div className="mt-16">
      <SectionTitle text="product reviews" />
      {reviews.map((review) => {
        const { comment, rating, authorImageUrl, authorName } = review;
        const reviewInfo = {
          comment,
          rating,
          image: authorImageUrl,
          name: authorName,
        };
        return <ReviewCard key={review.id} reviewInfo={reviewInfo} />;
      })}
    </div>
  );
};

export default ProductReview;
