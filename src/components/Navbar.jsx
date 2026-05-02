"use client";

import Link from "next/link";
import { useState } from "react";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import { Avatar, Spinner } from "@heroui/react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-pink-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Left Side */}
        <div className="flex items-center gap-3">
          
          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-3xl cursor-pointer text-gray-700"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>

          {/* Logo */}
          <Link href="/">
            <h3 className="font-black text-lg sm:text-xl text-gray-800 cursor-pointer">
              <span className="text-2xl">🎓</span>{" "}
              <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                SkillSphere
              </span>
            </h3>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 text-sm">
          <li className="font-semibold text-gray-700 hover:text-pink-500 transition">
            <NavLink href="/">Home</NavLink>
          </li>

          <li className="font-semibold text-gray-700 hover:text-pink-500 transition">
            <NavLink href="/all-courses">All Courses</NavLink>
          </li>

          <li className="font-semibold text-gray-700 hover:text-pink-500 transition">
            <NavLink href="/profile">My Profile</NavLink>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3 sm:gap-4">
          {isPending ? (
            <Spinner color="secondary" />
          ) : user ? (
            <div className="flex items-center gap-2 sm:gap-3">
              
              {/* Greeting */}
              <h2 className="hidden md:block text-sm font-medium text-gray-700">
                Hello, <span className="font-semibold">{user.name}</span>
              </h2>

              {/* Avatar */}
              <Avatar className="ring-2 ring-pink-200">
                <Avatar.Image
                  src={user?.image}
                  alt="Profile"
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>
                  {user?.name?.charAt(0) || "U"}
                </Avatar.Fallback>
              </Avatar>

              {/* Logout */}
              <Link
                href="/register"
                className="bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold px-4 py-2 rounded-xl text-sm shadow-md hover:scale-105 transition duration-300"
                onClick={async () => await authClient.signOut()}
              >
                Logout
              </Link>
            </div>
          ) : (
            <Link
              href="/signin"
              className="bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold px-4 py-2 rounded-xl text-sm shadow-md hover:scale-105 transition duration-300"
            >
              Login
            </Link>
          )}
        </div>
      </nav>

      {/* Mobile + Tablet Dropdown */}
      {menuOpen && (
        <div className="lg:hidden border-t border-pink-100 bg-white/95 backdrop-blur-md shadow-sm">
          <ul className="max-w-7xl mx-auto px-4 py-5 flex flex-col gap-5 text-sm font-semibold">
            <li className="hover:text-pink-500 transition">
              <NavLink href="/">Home</NavLink>
            </li>

            <li className="hover:text-pink-500 transition">
              <NavLink href="/all-courses">All Courses</NavLink>
            </li>

            <li className="hover:text-pink-500 transition">
              <NavLink href="/profile">My Profile</NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;