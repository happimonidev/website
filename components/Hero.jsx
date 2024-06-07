import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import Button from "./Button";
import { PlayIcon } from "./vectors";

const Hero = () => {
  return (
    <section
      className="relative w-full h-[60vh] md:h-screen bg-cover bg-center flex flex-col justify-center"
      style={{ backgroundImage: "url('/assets/images/hero-image.png')" }}
    >
      <Container>
        <div className="flex flex-col justify-center items-end xl:ml-40">
          <div className="w-full md:w-1/2 xl:w-3/5 2xl:w-1/2 flex flex-col justify-center items-center gap-6">
            <h1 className="text-black text-4xl  md:text-6xl font-bold text-center leading-normal">
              ALL YOUR LOAN NEEDS IN ONE APP
            </h1>
            <Link href="#">
              <Button className="flex items-center rounded-full px-10">
                <PlayIcon />
                <span className="text-xl md:text-3xl">Download APK</span>
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
