import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navigation absolute w-full z-10 flex flex-col sm:flex-row sm:items-center justify-between px-5 sm:px-16 py-5">
      <Link to="/">
        <div className="app-logo text-white flex justify-center items-center gap-4">
          <img
            src="https://res.cloudinary.com/dskl0qde4/image/upload/v1678478055/spacex-logo_xy6kl8.png"
            alt=""
            className="logo w-[5rem] animate-wiggle"
          />
          <h2 className="font-semibold text-2xl">SpaceXplorer</h2>
        </div>
      </Link>
      <ul className="nav-links flex justify-center gap-10 mt-5 sm:mt-0">
        <li>
          <NavLink
            to="capsules"
            className={`text-white border border-slate-400/70 p-2 rounded-md sm:text-xl hover:bg-slate-400/30 transition-colors duration-300 ease-in-out ${({
              isActive,
            }: {
              isActive: boolean;
            }) => (isActive ? 'active' : '')}`}
          >
            Capsules
          </NavLink>
        </li>
        <li>
          <NavLink
            to="rockets"
            className={`text-white border border-slate-400/70 p-2 rounded-md sm:text-xl hover:bg-slate-400/30 transition-colors duration-300 ease-in-out ${({
              isActive,
            }: {
              isActive: boolean;
            }) => (isActive ? 'active' : '')}`}
            end
          >
            Rockets
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
