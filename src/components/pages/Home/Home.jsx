import ComponentFive from "./ComponentFive";
import ComponentOne from "./ComponentOne";
import ComponentThree from "./ComponentThree";
import ComponentSix from "./ComponentSix";
import ComponentSeven from "./ComponentSeven";
const Home = () => {
    return (
        <div className="min-h-screen bg-black  " >
           <ComponentOne />
           <ComponentThree /> 
           <ComponentFive />
           <ComponentSix />
           <ComponentSeven />
        </div>
    );
}

export default Home