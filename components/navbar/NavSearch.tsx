import { Input } from "../ui/input";

const NavSearch = () => {
  return (
    <div>
      <Input
        type="search"
        placeholder="search Product"
        className="max-w-xs dark:bg-muted"
      />
    </div>
  );
};

export default NavSearch;
