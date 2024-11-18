
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Herovideo";
import Ourprocess from "../components/ourprocess/Ourprocess";
import Successstories from "../components/successstories/Successstories";
import Faqsection from "../components/faq/FAQ";
import LogoSlider from "../components/logoslider/LogoSlider";
import Footer from "../components/footer/Footer";

const Home = () => {
    return (
        <div>
            <div>
                <Navbar />
                <Hero />
                <Ourprocess />
                <Successstories />
                <LogoSlider />
                <Faqsection />
                <Footer />
            </div>

        </div>

    )
};

export default Home
