import Navbar from "./Navbar.tsx";

const AppLayout = () => {



    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />

            <main className="container mx-auto p-4 bg-white shadow-md rounded-lg">
                {/* Render Components */}


            </main>

            <footer className="text-center p-4 mt-8 text-gray-500">
                &copy; 2026 React Router Demo
            </footer>
        </div>
    );
};

export default AppLayout;