import Articles from "@/components/homepage/Articles";
import Banner from "@/components/homepage/Banner";
import BeyondPremium from "@/components/homepage/BeyondPremium";
import Destinations from "@/components/homepage/Destinations";
import Header from "@/components/homepage/Header";
import LuxuryFootages from "@/components/homepage/LuxuryFootages";
import Separator from "@/components/homepage/Separator";
import { Skleton } from "@/components/MySkleton";
import Wrapper from "@/components/Wrapper";

export default function Home() {
  return (
    <>
      <Header />
      <BeyondPremium />
      <Separator />
      <Destinations />
      <LuxuryFootages />
      <Banner />
      <Articles />
      {/* <Wrapper className="w-full bg-orange-400">
        <Skleton />
      </Wrapper> */}
    </>
  );
}
