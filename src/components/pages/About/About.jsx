
import ComponentOne from "./ComponentOne";
import ComponentTwo from "./ComponentTwo";
import OurStory from "./OurStory";
import OurValues from "./OurValues";
import LetHelp from "./LetHelp";

const About = () => {
    return (
        <div className="w-full bg-[var(--cd-bg)] text-[var(--cd-text)]" >
            
           <ComponentOne />
           <ComponentTwo />
           <OurStory />
           <OurValues />
           <LetHelp />
           
        </div>
    );
}

export default About