interface ShoppingCartProps {
  bool: boolean;
  setter: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShoppingCartMenu: React.FC<ShoppingCartProps> = ({ bool, setter }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full bg-white text-white w-64 transform ${
        bool ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <nav>
        <ul className="mt-2 mb-2 flex flex-col gap-2 p-4">
          <li>
            <a
              href=""
              className="hover:text-red-500 text-black"
              onClick={() => setter((prev: any) => !prev)}
            >
              CLOSE
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ShoppingCartMenu;
