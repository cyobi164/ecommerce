import React from "react";
import { ShoppingCart, User} from "lucide-react";

function Header() {
    return (
        <header className="header">
          <nav className="nav">
            <div className="logo">MEKA</div>
            <input type="text" placeholder="Search product..." className="search-bar" />
            <div className="nac-icons">
              <a href="/login"><User size={26} /></a>
              <a href="/cart"><ShoppingCart size={24} /></a>
            </div>
          </nav>
        </header>
    )
}

export default Header;