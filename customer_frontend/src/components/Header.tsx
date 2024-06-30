import { useState } from "react";
import Logo from "./logo.png";
import { ShoppingCart } from "lucide-react";
import ShoppingCartMenu from "./ShoppingCart";

const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false);

  return (
    <div>
      <div className="bg-topHeader flex text-white justify-between pl-5 pr-5">
        <div className="hidden lg:flex md:flex"></div>
        <div
          className="HAMBURGER-ICON space-y-2 py-8 lg:hidden md:hidden"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <span className="block h-0.5 w-8 bg-white"></span>
          <span className="block h-0.5 w-8 bg-white"></span>
          <span className="block h-0.5 w-8 bg-white"></span>
        </div>
        <img src={Logo} alt="Company Logo" className="py-3 h-20" />
        <div
          className="flex items-center"
          onClick={() => setIsShoppingCartOpen((prev) => !prev)}
        >
          <ShoppingCart />
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full bg-navHeader text-white w-64 transform ${
          isNavOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <nav>
          <ul className="mt-2 mb-2 flex flex-col gap-2 p-4">
            <li>
              <a href="" className="hover:text-red-500 pointer-events-none">
                ◈
              </a>
            </li>
            <li>
              <a href="/games" className="hover:text-red-500">
                GAMES
              </a>
            </li>
            <li>
              <a href="/consoles" className="hover:text-red-500">
                CONSOLES
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-red-500">
                ABOUT
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-red-500">
                CONTACT
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-red-500"
                onClick={() => setIsNavOpen((prev) => !prev)}
              >
                CLOSE
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <ShoppingCartMenu
        bool={isShoppingCartOpen}
        setter={setIsShoppingCartOpen}
      />
      <header
        className="hidden
        bg-navHeader text-white p-4 lg:flex md:flex lg:justify-center md:justify-center"
      >
        <nav>
          <ul className="mt-2 mb-2 flex flex-col gap-2 mb-0 mt-0 lg:flex-row md:flex-row items-center gap-6 font-fjalla">
            <li>
              <a href="" className="hover:text-red-500 pointer-events-none">
                ◈
              </a>
            </li>
            <li>
              <a href="/games" className="hover:text-red-500">
                GAMES
              </a>
            </li>
            <li>
              <a href="/consoles" className="hover:text-red-500">
                CONSOLES
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-red-500">
                ABOUT
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-red-500">
                CONTACT
              </a>
            </li>
            <li>
              <a href="" className="hover:text-red-500 pointer-events-none">
                ◈
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
