export const Home = () => (
    <div className="p-4">
        <h1 className="text-2xl font-bold">Home Page</h1>
        <p>Welcome to the React Router Demo!</p>
        <p className="mt-2">React Router allows you to handle navigation in a single-page application (SPA) without reloading the page.</p>
    </div>
);

export const About = () => (
    <div className="p-4">
        <h1 className="text-2xl font-bold text-blue-600">About Page</h1>
        <p>This is where you'd describe your application.</p>
    </div>
);

export const Contact = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold text-green-600">Contact Us</h1>
            <form className="mt-4 flex flex-col gap-2 max-w-sm">
                <input className="border p-2 rounded" type="text" placeholder="Your Name" />
                <textarea className="border p-2 rounded" placeholder="Your Message"></textarea>
                <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Send</button>
            </form>
        </div>
    );
};

export const UserProfile = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold text-purple-600">User Profile</h1>
            <p>Viewing profile for User ID <span className="font-mono bg-yellow-100 p-1"></span></p>
        </div>
    );
};

export const NotFound = () => (
    <div className="p-8 text-center">
        <h1 className="text-4xl font-extrabold text-red-500">404</h1>
        <p className="text-xl">Page Not Found</p>
    </div>
);