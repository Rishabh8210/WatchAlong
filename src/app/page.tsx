import AboutUs from "@/components/About-Component/AboutUs";
import FooterComponent from "@/components/Common-Component/FooterComponent";
import HeaderComponent from "@/components/Common-Component/HeaderComponent";
import HomePageMain from "@/components/HomePage-Component/HomePageMain";
import StepsToBeFollowed from "@/components/StepsToBeFollowed/StepsToBeFollowed";
import Testonomial from "@/components/Testonomial-Component/Testonomial";

export default function Home() {
  return (
    <div className="min-h-screen w-full p-5 flex flex-col gap-5">
      <HeaderComponent />
      <HomePageMain />
      <AboutUs />
      <StepsToBeFollowed />
      <Testonomial />
      <FooterComponent />
    </div>
  );
}
