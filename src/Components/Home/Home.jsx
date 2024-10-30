import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    const navigation = useNavigation()
    return (
        <div className="w-11/12 mx-auto py-5">
            <Header></Header>
            {
                navigation.state === "loading"? <p>Loading .....</p>:<Outlet></Outlet>

            }
            <Footer></Footer>
        </div>
    );
};

export default Home;