// rsc: used to create react arrow function

import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import EventList from "./components/EventList.tsx";
import Footer from "./components/Footer.tsx";
import RegisterModal from "./components/RegisterModal.tsx";

const App = () => {


    return (
       <>
         {/* Navbar */} 
         <Navbar />
         <Hero />
         <EventList />
         <Footer />

         <RegisterModal />

       </>
    );

};

export default App;