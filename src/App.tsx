// rsc: used to create react arrow function

//import {Home, Info, Phone, Star} from "lucide-react";
import RouterDemo from "./router-demo/RouterDemo.tsx";
/*
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

 */


const App = () => {


    return (
        <>
            {/* Navbar */}
            {/*
            <Navbar title="EventApp" items={navItems} />
            <Hero/>
            <EventList/>
            <Footer/>
            */}


            { /*
            <Toast message="Event Created successfully" type="success" onClose={() => alert('Toast Closed')}/>
            <Toast message="Please enter a valid email!" type="error" onClose={() => alert('Toast Closed')}/>


            <Toast message="Please enter a valid email!" type="info" onClose={() => alert('Toast Closed')}/>
            */}

            <RouterDemo />
        </>
    );

};

export default App;