import React from "react";
import Wrapper from "../Wrapper";
import Div from "../Div";
import Image from "next/image";

import { AspectRatio } from "../ui/aspect-ratio";
import Separator from "./Separator";
import ImageSlider from "./ImageSlider";
import { getDatas } from "@/lib/Queries";

const LuxuryFootages = async () => {
  let data = null;
  try {
    data = await getDatas();
  } catch (error) {
    console.log(error);
  }

  return (
    <section className="w-full bg-myGold mt-10 px-4 py-10 md:px-8 lg:px-0">
      <Wrapper className="w-full flex flex-col">
        <Div>
          <h1 className="text-54 font-signature text-myDarkGreen lg:text-72">
            Luxury Footages
          </h1>
        </Div>

        <Div>
          <Div className="md:hidden overflow-hidden">
            <AspectRatio ratio={1 / 1}>
              <ImageSlider data={data.data[1].related_galleries} square />
            </AspectRatio>
          </Div>

          <Div column full className="max-md:hidden gap-8">
            {data.data.map((item: any, idx: any) => {
              return (
                <div key={idx}>
                  {idx == 0 && (
                    <Div
                      full
                      grid
                      className="gap-4 grid-cols-3 lg:gap-5"
                      key={item.itinerary_id}
                    >
                      {item.related_galleries.slice(0, 3).map((item: any) => {
                        return (
                          <AspectRatio ratio={1 / 1} key={item.gallery_id}>
                            <Image
                              src={item.src}
                              width={400}
                              height={400}
                              alt="gambar"
                              className="w-full h-full object-cover object-center rounded-sm cursor-pointer"
                            />
                          </AspectRatio>
                        );
                      })}
                    </Div>
                  )}

                  {idx == 1 && (
                    <Div full key={item.itinerary_id}>
                      <Separator color="white" className="mb-0 lg:mb-0" />
                    </Div>
                  )}

                  {idx == 2 && (
                    <Div
                      full
                      grid
                      className="gap-4 grid-cols-3 lg:gap-5"
                      key={item.itinerary_id}
                    >
                      {item.related_galleries.slice(0, 3).map((item: any) => {
                        return (
                          <AspectRatio ratio={1 / 1} key={item.gallery_id}>
                            <Image
                              src={item.src}
                              width={400}
                              height={400}
                              alt="gambar"
                              className="w-full h-full object-cover object-center rounded-sm cursor-pointer"
                            />
                          </AspectRatio>
                        );
                      })}
                    </Div>
                  )}
                </div>
              );
            })}
          </Div>
        </Div>
      </Wrapper>
    </section>
  );
};

export default LuxuryFootages;
