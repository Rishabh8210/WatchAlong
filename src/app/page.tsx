import HeaderComponent from "@/components/Common-Component/HeaderComponent";
import HomePageMain from "@/components/HomePage-Component/HomePageMain";

export default function Home() {
  return (
    <div className="min-h-screen w-full p-5 flex flex-col gap-5">
      <HeaderComponent />
      <HomePageMain />
    </div>
  );
}
