import AboutUs from "@/components/About-Component/AboutUs";
import HeaderComponent from "@/components/Common-Component/HeaderComponent";
import HomePageMain from "@/components/HomePage-Component/HomePageMain";
import StepsToBeFollowed from "@/components/StepsToBeFollowed/StepsToBeFollowed";

export default function Home() {
  return (
    <div className="min-h-screen w-full p-5 flex flex-col gap-5">
      <HeaderComponent />
      <HomePageMain />
      <AboutUs />
      <StepsToBeFollowed />
    </div>
  );
}
