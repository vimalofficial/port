"use client";

import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import "./index.css";

export default function NavbarComponent() {
  const profileImg =
    "https://yryxyauqirxkozodoxdz.supabase.co/storage/v1/object/public/static-images/vimal_pk.jpg";

  return (
    <Navbar  rounded className="individual-class-navbar py-4 shadow-sm" >
      {/* BRAND */}
      <NavbarBrand href="/" className="flex items-center gap-3">
        <img
          src={profileImg}
          alt="Profile"
          className="w-13 h-12 rounded-full object-cover"
        />

        <span className="text-xl font-semibold dark:text-white">Vimal PK</span>
      </NavbarBrand>

      {/* RIGHT SIDE */}
      <div className="flex md:order-2">

        <NavbarToggle />
      </div>

      {/* NAV LINKS */}
      <NavbarCollapse>
        <NavbarLink className="!text-lg" href="/" active>
          Home
        </NavbarLink>
        <NavbarLink className="!text-lg" href="/about">About</NavbarLink>
        <NavbarLink className="!text-lg" href="/services">Services</NavbarLink>
        <NavbarLink className="!text-lg" href="/pricing">Pricing</NavbarLink>
        <NavbarLink className="!text-lg" href="/contact">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
