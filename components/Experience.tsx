import Title from "./Title";
import { MdWork } from "react-icons/md";
import { SiReactivex, SiToptal, SiFreelancer, SiFiverr } from "react-icons/si";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Experiences" icon={<MdWork />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ExperienceCard
          title="ReactJS w/MySQL"
          subTitle="Undergraduate Thesis Web Developer 2023.3 - 2023.6"
          icon={<SiReactivex />}
        />
        <ExperienceCard
          title="Tableau"
          subTitle="Data Analyst Intern 2022.6 = 2022.9"
          icon={<SiToptal />}
        />
        <ExperienceCard
          title="IT Services"
          subTitle="Computer Lab Assistant 2019.6 - 20120.7"
          icon={<SiFreelancer />}
        />

        <ExperienceCard
          title="Freelance"
          subTitle="Office Assistant 2016.4 - 2016.6"
          icon={<SiFiverr />}
        />
      </div>
    </div>
  );
};

export default Experience;
