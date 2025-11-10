import { Link } from "react-router-dom";
import Username from "../features/user/Username.jsx";

function Header() {
  return (
    <header className="flex item-center justify-between bg-yellow-500 px-4 py-3 uppercase border-y border-stone-500 sm:px-6">
      <Link
        to="/"
        className="tracking-widest font-semibold
      "
      >
        WASTE COMPANY
      </Link>

      <Username />
    </header>
  );
}

export default Header;
