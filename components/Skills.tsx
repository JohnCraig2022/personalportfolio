import { GiSkills } from "react-icons/gi";
import Title from "./Title";
import SkillsInput from "./SkillsInput";

const Skills = () => {
  return (
    <div className="wrapper">
      <Title text="Skills" icon={<GiSkills />} />
      <div className="flex gap-4 flex-wrap">
        <SkillsInput
          title="Javascript"
          link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        />
        <SkillsInput title="Reactjs" link="https://react.dev/" />
        <SkillsInput title="Nextjs" link="https://nextjs.org/" />
        <SkillsInput title="Nodejs" link="https://nodejs.org/en" />
        <SkillsInput
          title="Typescript"
          link="https://www.typescriptlang.org/"
        />
        <SkillsInput title="Expressjs" link="https://expressjs.com/" />
        <SkillsInput title="Python" link="https://www.java.com/en/" />
        <SkillsInput title="Java" link="https://www.mongodb.com/" />
        <SkillsInput title="C++" link="https://en.wikipedia.org/wiki/C%2B%2B" />
        <SkillsInput
          title="C#"
          link="https://learn.microsoft.com/en-us/dotnet/csharp/"
        />
        <SkillsInput title="MySQL" link="https://www.mysql.com" />
        <SkillsInput
          title="Google Firebase"
          link="https://firebase.google.com/"
        />
        <SkillsInput title="Tailwindcss" link="https://tailwindcss.com/" />
        <SkillsInput
          title="HTML5"
          link="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
        />
        <SkillsInput
          title="CSS"
          link="https://developer.mozilla.org/en-US/docs/Web/CSS"
        />
        <SkillsInput title="Eclipse" link="https://www.eclipse.org" />
        <SkillsInput title="VS Code" link="https://code.visualstudio.com/" />
        <SkillsInput title="Git" link="https://git-scm.com/" />
        <SkillsInput title="Github" link="https://github.com/" />
        <SkillsInput title="Figma" link="https://www.figma.com/" />
        <SkillsInput title="Canva" link="https://www.canva.com/" />
        <SkillsInput title="Vercel" link="https://vercel.com/" />
      </div>
    </div>
  );
};

export default Skills;
