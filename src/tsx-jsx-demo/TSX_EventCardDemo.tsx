import React from 'react';

/*
TSX (TypeScript + JSX)

Key points:
- Define types/interfaces for your data.
    - type: for simple values (string, number, boolean)
    - interface: for complex objects (with properties and methods)
- Use {} to inject dynamic values.
- Avoid hardcoded values — use typed objects instead.
*/

type Event = {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    attendees: number;
    image: string;
    category: string;
};

const TSX_EventCardDemo: React.FC = () => {


    /*
    Why use TypeScript here?

    - The `event` object is explicitly typed as `Event`.
    - TypeScript enforces the correct data types for each property.
    - For example, if `id` is not a number, TypeScript will throw a compile-time error.
    - This helps catch bugs early and improves code reliability and maintainability.
    */

    const event: Event = {
        id: 1, // if id is not a number, TS will throw an error
        title: 'Tech Innovators Summit 2026',
        date: 'March 25, 2026',
        time: '09:00 AM',
        location: 'Silicon Valley Convention Center',
        attendees: 1200,
        image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=800',
        category: 'Technology',
    };

    return (
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border-2 border-slate-100 hover:border-red-100 group">

            <div className="relative h-64 overflow-hidden">
                <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md text-slate-900 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm">
                        {event.category}
                    </span>
                </div>
            </div>

            <div className="p-8">
                <div className="flex items-center text-slate-500 text-sm mb-4 space-x-4">

                    <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        </svg>
                        {event.date}
                    </div>

                    <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"></circle>
                        </svg>
                        {event.time}
                    </div>

                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-red-600 transition-colors">
                    {event.title}
                </h3>

                <div className="space-y-3 mb-8">

                    <div className="flex items-start text-slate-600 text-sm">
                        <svg className="w-4 h-4 mr-3 mt-0.5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        </svg>
                        {event.location}
                    </div>

                    <div className="flex items-center text-slate-600 text-sm">
                        <svg className="w-4 h-4 mr-3 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="9" cy="7" r="4"></circle>
                        </svg>
                        {event.attendees.toLocaleString()} Attendees
                    </div>

                </div>

                <button className="w-full py-3 bg-slate-50 text-slate-900 font-bold rounded-xl group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                    Register Now
                </button>
            </div>

        </div>
    );
};

export default TSX_EventCardDemo;