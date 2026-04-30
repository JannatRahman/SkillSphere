"use client";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
    
          <h3 className="font-black text-lg">
            <span className="text-xl">🎓</span>

            SkillSphere</h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li className="font-semibold">
            <NavLink href={"/"}>Home</NavLink>
          </li>
          <li className="font-semibold">
            <NavLink href={"/all-courses"}>All Courses</NavLink>
          </li>
          
          
          <li className="font-semibold">
            <NavLink href={"/my-profile"}>My Profile</NavLink>
          </li>
        </ul>

        <div className="flex gap-4">
          <ul className="flex items-center gap-4  text-sm">
            <li>
              <Link href={"/signup"}>SignUp</Link>
            </li>
            <li>
              <Link href={"/signin"}>SignIn</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;