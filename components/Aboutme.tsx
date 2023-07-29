import { SiInformatica } from "react-icons/si";
import Title from "./Title";

const Aboutme = () => {
  return (
    <div className="wrapper">
      <Title text="About Me" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
          Welcome to my personal portfolio! I am a recent graduate in Compute
          Science driven by the ever-evolving world of technology. As Francis
          Bacon once said, "Knowledge is power", and I firmly believe in making
          a positive impact to society through the power of knowledge. I believe
          that true power lies not only in the accumulation of knowledge but
          also with a strong sense of adventure to experiment and contribute to
          the creation of new ideas.
        </p>
        <p>
          I am excited to contribute to projects that drive innovation and have
          a positive impact on society. I hold high esteem to collaborative
          environments, where diverse perspectives are valued and teamwork is
          the key to success. As I embark on this professional journey, I am
          eager to apply my skills and knowledge to contribute to an
          organization that promotes innovations and utilizes technology to
          enhance our livelihood. I am open to opportunities that challenge me
          to reach new heights. If you are looking for a dedicated and
          passionate computer science graduate who believes in the
          transformative power of knowledge, I am your man! "Knowledge is power,
          and I am ready to empower the world through technology."
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
