import React from "react";
import logo from "../assets/Logo.svg";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@heroui/react";

export default function NavbarArea() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "About Us",
    "Pricing",
    "Customers",
    "Solutions",
    " Book a Demo",
    "Contact Us",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="border-b-[1px] border-teal-900">
      <NavbarContent>
        <NavbarBrand>
          <img src={logo} alt="" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-2 text-white" justify="center">
        <NavbarItem>
          <Link href="#">
            About Us
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link href="#">
            Pricing
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" href="#">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">
            Solutions
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="hidden sm:flex gap-1">
        <NavbarItem className="lg:flex">
          <Button
            as={Link}
            className="rounded-full bg-primary"
            color="primary"
            href="#"
            variant="flat"
          >
            Book a Demo
          </Button>
        </NavbarItem>
        <NavbarItem className="">
          <Button
            as={Link}
            className="text-white rounded-full border-2"
            color="white"
            href="#"
            variant="bordered"
          >
            Contact Us
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} className="text-white">
            <Link
              className="w-full"
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
        style={{ color: isMenuOpen ? "white" : "white" }}
      />
    </Navbar>
  );
}
