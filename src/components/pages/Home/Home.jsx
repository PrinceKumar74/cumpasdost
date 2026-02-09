import ComponentFive from "./ComponentFive";
import ComponentOne from "./ComponentOne";
import ComponentThree from "./ComponentThree";
import ComponentSix from "./ComponentSix";
import ComponentSeven from "./ComponentSeven";
const Home = () => {
    return (
        <div className="min-h-screen bg-[#f6f6f7]">
           <ComponentOne />
           <ComponentThree /> 
           <ComponentFive />
           <ComponentSix />
           <ComponentSeven />
        </div>
    );
}

export default Home