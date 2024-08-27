import SectionTitleAndText from "../../Shared/SectionTitleAndText/SectionTitleAndText";
import Banner from "../Banner/Banner";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import Jobs from "../Jobs/Jobs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <SectionTitleAndText
        title={`Job Category List`}
        text={`Explore thousands of job opportunities with all the information you need. Its your future`}
      ></SectionTitleAndText>
      <Jobs></Jobs>
      <SectionTitleAndText
        title={`Featured Jobs`}
        text={`Explore thousands of job opportunities with all the information you need. Its your future`}
      ></SectionTitleAndText>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Home;
