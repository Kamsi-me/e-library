import Articles from "../components/articles";
import HeroSection from "../components/heroSection";
import News from "../components/news";

export default function Index() {
  return (
    <div className="max-w-[82rem] mx-auto">
      <HeroSection />
      <Articles />
      <News />
    </div>
  );
}
