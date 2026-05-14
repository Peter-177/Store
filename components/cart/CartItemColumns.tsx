import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/utils/format";
export const FirstColumn = ({
  name,
  image,
}: {
  name: string;
  image: string;
}) => {
  return (
    <div className="relative h-24 w-24 sm:h-32 sm:w-32">
      <Image
        sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
        className="w-full rounded-md object-cover"
        fill
        src={image}
        alt={name}
      />
    </div>
  );
};

export const SecondColumn = ({
  name,
  company,
  ProductId,
}: {
  name: string;
  company: string;
  ProductId: string;
}) => {
  return (
    <div className="sm:w-48">
      <Link href={`/product/${ProductId}`}>
        <h3 className="font-medium capitalize hover:underline">{name}</h3>
      </Link>
      <h4 className="mt-2 capitalize text-xs">{company}</h4>
    </div>
  );
};

export const FourthColumn = ({ price }: { price: number }) => {
  return <p className="font-medium md:ml-auto">{formatPrice(price)}</p>;
};
