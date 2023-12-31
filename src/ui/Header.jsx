import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder.jsx";
import Username from "../features/user/username.jsx";

function Header() {
  return (
    <header
      className="flex items-center justify-between border-b 
      border-stone-300 bg-yellow-400 px-4 py-3 uppercase sm:px-6"
    >
      <Link to="/" className="tracking-widest sm:text-lg">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
