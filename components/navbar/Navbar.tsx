import Logo from "@/components/navbar/Logo";
import LinksDropdown from "@/components/navbar/LinksDropdown";
import DarkMode from "@/components/navbar/DarkMode";
import CartButton from "@/components/navbar/CartButton";
import NavSearch from "@/components/navbar/NavSearch";
import Container from "@/components/global/Container";
import { currentUser } from "@clerk/nextjs/server";

const Navbar = async () => {
  const user = await currentUser();
  const profileImage = user?.imageUrl ?? null;

  return (
    <nav className="border-b">
      <Container className="mx-auto max-w-screen-2xl px-8 flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-8">
        <Logo />
        <NavSearch />
        <div className="flex gap-4 items-center">
          <CartButton/>
          <DarkMode/>
          <LinksDropdown profileImage={profileImage} />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
