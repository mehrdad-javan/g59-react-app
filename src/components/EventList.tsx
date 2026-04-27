import EventCard from "./EventCard.tsx";
import type {EventItem} from "../types.ts";
import {useEffect, useState} from "react";
import RegisterModal from "./RegisterModal.tsx";
import Toast from "./Toast.tsx";
import {getAllEvents} from "../api/eventAPI.ts";




const EventList = () => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedEvent, setSeletcedEvent] = useState<EventItem>();
    const [showToast, setShowToast] = useState<boolean>(false);
    const [toastMessage, setToastMessage] = useState<string>("");

    const [events, setEvents] = useState<EventItem[]>([]);

    useEffect(() => {
        /*const fetchedDataFromAPI: EventItem[] = [
            {
                id: 1,
                image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4",
                category: "Technology",
                date: "March 25, 2026",
                time: "09:00 AM",
                title: "Tech Innovators Summit 2026",
                location: "Silicon Valley Convention Center",
                attendees: 1200
            },
            {
                id: 2,
                image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
                category: "Marketing",
                date: "April 12, 2026",
                time: "10:30 AM",
                title: "Global Marketing Expo",
                location: "New York City Hall",
                attendees: 850
            },
            {
                id: 3,
                image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2",
                category: "Environment",
                date: "May 05, 2026",
                time: "02:00 PM",
                title: "Sustainable Future Forum",
                location: "London Eco Park",
                attendees: 500
            },
            {
                id: 4,
                image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
                category: "Workshop",
                date: "June 18, 2026",
                time: "11:00 AM",
                title: "AI & Robotics Workshop",
                location: "Tokyo Innovation Hub",
                attendees: 300
            },
            {
                id: 5,
                image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
                category: "Design",
                date: "July 22, 2026",
                time: "07:00 PM",
                title: "Annual Design Awards",
                location: "Paris Design Center",
                attendees: 1500
            },
            {
                id: 6,
                image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b",
                category: "Networking",
                date: "August 10, 2026",
                time: "06:30 PM",
                title: "Startup Founders Networking",
                location: "Berlin Co-working Space",
                attendees: 200
            }
        ];
        setEvents(fetchedDataFromAPI);
         */

        const loadEvents = async () => {
            try {
                const data = await getAllEvents();
                setEvents(data.map(event => {
                    const eventDate = new Date(event.dateTime);

                    return {
                        id: event.id,
                        title: event.title,
                        date: eventDate.toLocaleDateString('sv-SE'),
                        time: eventDate.toLocaleTimeString('sv-SE'),
                        location: event.location,
                        attendees: event.attendees,
                        image: event.imageUrl,
                        category: event.category,

                    } as EventItem;
                }))

            } catch (error){
                // todo: set the error message to api error state
            }
        }

        void loadEvents();

    }, [])

    const handleClick = (event: EventItem) => {
        console.log('### Selected Event ###', event);
        setIsModalOpen(true);
        setSeletcedEvent(event);
    }


    return (
        <section id="events-list" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <span className="text-red-600 font-bold tracking-widest uppercase text-xs mb-3 block">Upcoming Experiences</span>
                        <h2 className="text-4xl font-black text-slate-900">Featured <span className="text-red-600">Events</span></h2>
                    </div>
                    <button className="flex items-center text-slate-900 font-bold hover:text-red-600 transition-colors group">
                        View All Events <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {
                        events.map((event, index) => (
                            <EventCard
                                key={index}
                                event={event}
                                onRegister={()=> handleClick(event)}
                            />
                        ))
                    }


                </div>
            </div>


            {isModalOpen && selectedEvent && (<RegisterModal event={selectedEvent} onClose={() => {
                setIsModalOpen(false);
                setSeletcedEvent(undefined);
            }} onSuccess={(message: string) => {
                setIsModalOpen(false);
                setSeletcedEvent(undefined);
                setToastMessage(message);
                setShowToast(true);
            }} />)}

            {showToast && (<Toast message={toastMessage} type="success" onClose={() => setShowToast(false)} />)}

        </section>
    );
};

export default EventList;