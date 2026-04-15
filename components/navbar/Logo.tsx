import { Armchair } from 'lucide-react';
import { Button } from "../ui/button";
import Link from "next/link";

const Logo = () => {
  return (
    <Button size={'icon'} asChild className='rounded-xl'>
      <Link href={"/"}>
        <Armchair className='w-6 h-6' />
      </Link>
    </Button>
  );
};

export default Logo;
