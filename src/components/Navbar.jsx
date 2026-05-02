"use client";

import Link from "next/link";
import { useState } from "react";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import girl from "@/assets/animegirl.png";
import { Avatar, Spinner } from "@heroui/react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="border-b px-4 bg-white">
      <nav className="flex justify-between items-center py-4 max-w-7xl mx-auto w-full">

        {/* Left Side → Hamburger + Logo */}
        <div className="flex items-center gap-3">
          
          {/* Hamburger for small + medium */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-3xl cursor-pointer"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>

          {/* Logo */}
          <h3 className="font-black text-lg sm:text-xl">
            <span className="text-xl">🎓</span> SkillSphere
          </h3>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6 text-sm">
          <li className="font-semibold">
            <NavLink href="/">Home</NavLink>
          </li>

          <li className="font-semibold">
            <NavLink href="/all-courses">All Courses</NavLink>
          </li>

          <li className="font-semibold">
            <NavLink href="/profile">My Profile</NavLink>
          </li>
        </ul>

        {/* Right Side → Always Visible */}
        <div className="flex items-center gap-3 sm:gap-4">
          {isPending ? (
            <div className="flex items-center">
              <Spinner color="accent" />
            </div>
          ) : user ? (
            <div className="flex items-center gap-2 sm:gap-3">
              
              {/* Hide text on very small screen */}
              <h2 className="hidden sm:block text-sm font-medium">
                Hello {user.name}
              </h2>

              <Avatar>
                <Avatar.Image
                  src={user?.image}
                  alt="Profile"
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>
                  {user?.name?.charAt(0) || "U"}
                </Avatar.Fallback>
              </Avatar>

              <Link
                href="/register"
                className="bg-blue-400 text-white font-semibold px-3 sm:px-4 py-2 rounded-md text-sm"
                onClick={async () => await authClient.signOut()}
              >
                Logout
              </Link>
            </div>
          ) : (
            <Link
              href="/signin"
              className="bg-blue-400 text-white font-semibold px-3 sm:px-4 py-2 rounded-md text-sm"
            >
              Login
            </Link>
          )}
        </div>
      </nav>

      {/* Mobile + Tablet Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden pb-4">
          <ul className="flex flex-col gap-4 text-sm font-semibold pt-2">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>

            <li>
              <NavLink href="/all-courses">All Courses</NavLink>
            </li>

            <li>
              <NavLink href="/profile">My Profile</NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;