import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()

  function clicked() {
    const menu = document.getElementById("menu");
    if (menu !== null) {
      menu.classList.toggle("hidden");
    }
  }

  return (
    <div className="bg-black  text-white h-14 sticky top-0">
      <header>
        <nav
          className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg
        "
        >
          <div onClick={() => navigate("/")} className="w-64">
            logo
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            className="h-6 w-6 cursor-pointer lg:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={clicked}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

          <div
            className="hidden w-full lg:flex lg:items-center lg:w-auto xs:bg-pink-50 lg:bg-black"
            id="menu"
          >
            <div className="w-80 bg-slate-200">
              <input type="text" className="w-full text-red-400" />
            </div>
            <ul
              className="
              pt-4
              text-base
              lg:flex
              lg:justify-between 
              lg:pt-0"
            >
              <>
                <li>
                  <a
                    className="md:p-4 py-2 block hover:text-purple-400"
                    href="/orders"
                  >
                    Orders
                  </a>
                </li>
                <li>
                  <a
                    className="md:p-4 py-2 block hover:text-purple-400"
                    href="/listing"
                  >
                    Products
                  </a>
                </li>

                <li>
                  <a
                    className="md:p-4 py-2 block hover:text-purple-400"
                    href="/cart"
                  >
                    Cart
                  </a>
                </li>
                <li>
                  <a
                    className="md:p-4 py-2 block hover:text-purple-400 text-yellow-300"
                    href="/signup"
                  >
                    Sign Up
                  </a>
                </li>
                <li>
                  <a
                    className="md:p-4 py-2 block hover:text-purple-400 text-yellow-300"
                    href="/account"
                  >
                    Accout
                  </a>
                </li>
              </>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
