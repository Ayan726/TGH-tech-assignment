import React from "react";
import { Link } from "react-router-dom";

function Layout({ children }: { children: React.ReactNode }) {

  return (
    <div className="bg-purpleBg min-h-screen w-screen text-white">
      <nav className="w-full">
        <ul className="flex justify-between px-10 items-center h-20">
          <Link to={"/"} className="no-underline font-bold  text-lg">Home</Link>
          <Link to={"/bookmark"} className="no-underline font-bold  text-lg">Bookmark</Link>
        </ul>
        {children}
      </nav>
    </div>
  );
}

export default Layout;
