"use client";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import girl from '@/assets/animegirl.png'
import { Avatar, Spinner } from "@heroui/react";

const Navbar = () => {
 const { data: session, isPending } = authClient.useSession();
 const user = session?.user;

 


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
            <NavLink href={"/profile"}>My Profile</NavLink>
          </li>
        </ul>

 
         <div className="flex gap-4">
          <ul className="flex items-center gap-4  text-sm">
            
           {isPending? (<div className="flex flex-col items-center gap-2">
        <Spinner color="accent" />
        <span className="text-xs text-muted">Accent</span>
      </div>) : user ?  (<div className="flex items-center gap-3">
              <h2 className="">Hello {user.name} </h2>
              
              <Avatar >
              <Avatar.Image
              src={user.image  }
              alt={girl}
               referrerPolicy="no-referrer"
              />
              <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
              
              </Avatar>
              <li>
              <Link 
              href={"/register"} className="bg-blue-400 text-white font-semibold px-4 py-2 rounded-md"
              onClick={async () => await authClient.signOut()}
              >Logout</Link> 
            </li>
            </div>) : 
         
              (<Link href={"/signin"} className="bg-blue-400 text-white font-semibold px-4 py-2 rounded-md">Login</Link>)}
            
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;