import AboutUs from "@/components/About-Component/AboutUs";
import FooterComponent from "@/components/Common-Component/FooterComponent";
import HomePageHeader from "@/components/HomePage-Component/HomePageHeader";
import HomePageMain from "@/components/HomePage-Component/HomePageMain";
import StepsToBeFollowed from "@/components/StepsToBeFollowed/StepsToBeFollowed";
import Testonomial from "@/components/Testonomial-Component/Testonomial";

export default function Home() {
  return (
    <div className="min-h-screen w-full p-5 flex flex-col gap-5">
      <HomePageHeader />
      <HomePageMain />
      <AboutUs />
      <StepsToBeFollowed />
      <Testonomial />
      <FooterComponent />
    </div>
  );
}
