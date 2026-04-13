

type Event = {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    attendees: number;
    image: string;
    category: string;
}

const EventCard = () => {

    const event: Event = {
        id: 1,
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
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md text-slate-900 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm">
                        {event.category}
                    </span>
                </div>
            </div>
            <div className="p-8">
                <div className="flex items-center text-slate-500 text-sm mb-4 space-x-4">
                    <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        {event.date}
                    </div>
                    <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        {event.time}
                    </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-red-600 transition-colors">
                    {event.title}
                </h3>
                <div className="space-y-3 mb-8">
                    <div className="flex items-start text-slate-600 text-sm">
                        <svg className="w-4 h-4 mr-3 mt-0.5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        {event.location}
                    </div>
                    <div className="flex items-center text-slate-600 text-sm">
                        <svg className="w-4 h-4 mr-3 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        {event.attendees.toLocaleString()} Attendees
                    </div>
                </div>
                <button className="w-full py-3 bg-slate-50 text-slate-900 font-bold rounded-xl group-hover:bg-red-600 group-hover:text-white transition-all duration-300">Register Now</button>
            </div>
        </div>
    );
};

export default EventCard;