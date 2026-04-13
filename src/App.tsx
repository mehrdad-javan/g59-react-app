// rsc: used to create react arrow function

import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import EventList from "./components/EventList.tsx";
import Footer from "./components/Footer.tsx";
import RegisterModal from "./components/RegisterModal.tsx";
import Toast from "./components/Toast.tsx";
import {Home, Info, Phone, Star} from "lucide-react";

type NavItem = {
    label: string;
    href: string;
    icon: React.ElementType;// React.ElementType represents a React component (e.g., Home, Info) and It allows to pass the component itself and render it dynamically, Use it when you want to pass a component as a prop and render it later
};
const navItems: NavItem[] = [
    {label: 'Home', href: '#', icon: Home},
    {label: 'About', href: '#', icon: Info},
    {label: 'Features', href: '#', icon: Star},
    {label: 'Contact', href: '#', icon: Phone}
];



const App = () => {


    return (
        <>
            {/* Navbar */}
            <Navbar title="EventApp" items={navItems} />
            <Hero/>
            <EventList/>
            <Footer/>

            <RegisterModal/>

            { /*
            <Toast message="Event Created successfully" type="success" onClose={() => alert('Toast Closed')}/>
            <Toast message="Please enter a valid email!" type="error" onClose={() => alert('Toast Closed')}/>

            */}

            <Toast message="Please enter a valid email!" type="info" onClose={() => alert('Toast Closed')}/>

        </>
    );

};

export default App;