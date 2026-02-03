import Image from "next/image";
import NavbarComponent from "./navbar/page";
import Hero from "./herosection/page";

export default function Home() {
  return (
    <>
    <div className="">
    <div className="text-center">
      <NavbarComponent />
      <Hero />
    </div>
    </div>
    </>
  );
}
