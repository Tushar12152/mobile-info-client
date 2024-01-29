import Choise from "../Components/Choise";
import MobileByBrands from "../Components/MobileByBrands";
import Responsive from "../Utils/Responsive";

const Home = () => {
    return (
        <div>
             <MobileByBrands/>
            <Responsive>
            <Choise/>
            </Responsive>
        </div>
    );
};

export default Home;