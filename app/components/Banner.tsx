"use client";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <Carousel
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      autoPlay
      infiniteLoop
      interval={5000}
    >
      <div>
        <Image
          src="/images/banner1.jpg"
          priority
          width={1920}
          height={576}
          alt="banner"
        />
      </div>
      <div>
        <Image
          src="/images/banner2.jpg"
          priority
          width={1920}
          height={576}
          alt="banner"
        />
      </div>
      <div>
        <Image
          src="/images/banner3.jpg"
          priority
          width={1920}
          height={576}
          alt="banner"
        />
      </div>
    </Carousel>
  );
};

export default Banner;
