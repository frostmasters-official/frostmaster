import React, { memo, useEffect, useRef, useState } from 'react'
import lg from '../../public/brands/LG_logo_(2014).webp'
import samsung from '../../public/brands/Samsung_Logo.webp'
import sony from '../../public/brands/Sony_logo.webp'
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import haier from '../../public/brands/Haier_logo.webp'
import whirlpool from '../../public/brands/Whirlpool...webp'
import bosch from '../../public/brands/Bosch.webp'
import godrej from '../../public/brands/Godrej.webp'
import hitachi from '../../public/brands/Hitachi.webp'
import IFB from '../../public/brands/ifb.webp'
import panasonic from '../../public/brands/Panasonic.webp'

const brands = [
  { svg: lg, tip: "LG" },
  { svg: samsung, tip: "Samsung" },
  { svg: sony, tip: "Sony" },
  { svg:haier, tip:"Haier"},
  { svg:bosch, tip:"Bosch"},
  { svg:godrej, tip:"Godrej"},
  { svg:hitachi, tip:"Hitachi"},
  { svg:IFB, tip:"IFB"},
  { svg:panasonic, tip:"Panasonic"},
  { svg:whirlpool, tip:"Whirlpool"},
];

const Brands = () => {
    const scrollRef = useRef(null);
  const [width, setWidth] = useState(5);

  useEffect(() => {
    if (scrollRef.current) {
      setWidth(scrollRef.current.scrollWidth);
    }
  }, []);
  return (
    <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold font-heading tracking-wider text-center my-10">We repair everything</h1>
          </div>

          <div className="overflow-hidden w-full">
            <motion.div
              ref={scrollRef}
              className="flex w-max gap-8"
              animate={{
                x: [`0`, `-${width / 2}px`],
              }}
              transition={{
                repeat: Infinity,
                duration: 40,
                ease: "linear",
              }}
            >
              {[...brands, ...brands].map((brand, index) => (
                <motion.div
                  className="h-full py-8 flex-shrink-0"
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, 10, -10, 0],
                    transition: { duration: 0.5 },
                  }}
                  key={index}
                >
                  <div
                    className={`px-4 py-1 text-5xl lg:text-7xl tooltip tooltip-info ${
                      index % 2 === 0 ? "tooltip-bottom" : "tooltip-top"
                    }`}
                    data-tip={brand.tip}
                  >
                    <Image
                      src={brand.svg}
                      alt={brand.tip}
                      className="object-contain"
                      width={120}
                      height={120}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
  )
}

export default memo(Brands)