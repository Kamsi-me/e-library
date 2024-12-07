import Banner from "../components/banner";
// import Contact from "../components/contact";
import NewsLetter from "../components/newsLetter";
import Stats from "../components/stats";
import Steps from "../components/steps";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="max-w-[82rem] px-4 mx-auto mt-6 md:mt-10">
        <Steps />
        <Stats />
        {/* <Contact /> */}
        <NewsLetter />
      </div>
    </div>
  );
}
