import { VscCode } from "react-icons/vsc";
import { Button } from "../ui/button";
import Link from "next/link";

const Logo = () => {
  return (
    <Button size={'icon-lg'} asChild>
      <Link href={"/"}>
        <VscCode />
      </Link>
    </Button>
  );
};

export default Logo;
