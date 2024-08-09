import React from "react";
import Wrapper from "../Wrapper";
import Div from "../Div";
import Image from "next/image";

import dummy from "../../../public/images/header-image.svg";
import { AspectRatio } from "../ui/aspect-ratio";
import Separator from "./Separator";

const LuxuryFootages = () => {
  return (
    <section className="w-full bg-myGold mt-10 px-4 py-10 md:px-8 lg:px-0">
      <Wrapper className="w-full flex flex-col">
        <Div>
          <h1 className="text-54 font-signature text-myDarkGreen lg:text-72">
            Luxury Footages
          </h1>
        </Div>

        <Div>
          <Div className="md:hidden">
            <AspectRatio ratio={1 / 1}>
              <Image
                src={dummy}
                width={400}
                alt="gambar"
                className="w-full h-full rounded-md object-cover object-center"
              />
            </AspectRatio>
          </Div>

          <Div column full className="max-md:hidden gap-8">
            <Div full grid className="gap-4 grid-cols-3 lg:gap-8">
              <AspectRatio ratio={16 / 11}>
                <Image
                  src={dummy}
                  width={400}
                  alt="gambar"
                  className="w-full h-full object-cover object-center rounded-sm"
                />
              </AspectRatio>
              <AspectRatio ratio={1 / 1}>
                <Image
                  src={dummy}
                  width={400}
                  alt="gambar"
                  className="w-full h-full object-cover object-center rounded-sm"
                />
              </AspectRatio>
              <AspectRatio ratio={1 / 1}>
                <Image
                  src={dummy}
                  width={400}
                  alt="gambar"
                  className="w-full h-full object-cover object-center rounded-sm"
                />
              </AspectRatio>
            </Div>

            <Div full>
              <Separator color="white" className="mb-0 lg:mb-0" />
            </Div>

            <Div full grid className="gap-4 grid-cols-3 lg:gap-8">
              <AspectRatio ratio={16 / 11}>
                <Image
                  src={dummy}
                  width={400}
                  alt="gambar"
                  className="w-full h-full object-cover object-center rounded-sm"
                />
              </AspectRatio>
              <AspectRatio ratio={1 / 1}>
                <Image
                  src={dummy}
                  width={400}
                  alt="gambar"
                  className="w-full h-full object-cover object-center rounded-sm"
                />
              </AspectRatio>
              <AspectRatio ratio={1 / 1}>
                <Image
                  src={dummy}
                  width={400}
                  alt="gambar"
                  className="w-full h-full object-cover object-center rounded-sm"
                />
              </AspectRatio>
            </Div>
          </Div>
        </Div>
      </Wrapper>
    </section>
  );
};

export default LuxuryFootages;
