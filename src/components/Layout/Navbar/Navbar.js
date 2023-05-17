import Links from "./Links";
import NavLogo from "./NavLogo";
import NavSearch from "./NavSearch";

const Navbar = () => {
  return (
    <div className="container mx-auto flex justify-between items-center relative  ">
      <NavLogo />
      <Links />
    </div>
  );
};

export default Navbar;
