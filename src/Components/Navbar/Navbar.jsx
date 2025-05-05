import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const baseClasses =
        "text-green-600 font-medium px-3 py-2 rounded-md transition duration-300";
    const activeClasses = "bg-sky-200 text-green-800";

    return (
        <nav className="bg-sky-100 shadow-md">
            <ul className="flex justify-center items-center space-x-8 p-4">
                <li>
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            `${baseClasses} ${isActive ? activeClasses : "hover:bg-sky-200 hover:text-green-800"}`
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/product"
                        className={({ isActive }) =>
                            `${baseClasses} ${isActive ? activeClasses : "hover:bg-sky-200 hover:text-green-800"}`
                        }
                    >
                        Product
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `${baseClasses} ${isActive ? activeClasses : "hover:bg-sky-200 hover:text-green-800"}`
                        }
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
