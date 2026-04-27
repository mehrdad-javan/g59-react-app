import {getAllEvents} from "./eventAPI.ts";


const main = async () => {
    try {
        // Get All Events
        const events = await getAllEvents();
        console.log("Loaded Events:", events);
        //console.log("Titles:", events.map(e => e.title));

        // Get Event By Id
        /*
        const event = await getEventById(1);
        console.log("Event retrieved", event);
         */

        // Create a new Event
        /*
        const newEvent: EventRequestDTO = {
            title: "React Workshop",
            description: "Hands-on session about hook and APIs",
            dateTime: new Date("2026-05-05T10:00:00").toISOString(),  // 2026-05-05T10:00:00
            location: "Lexicon HQ",
            status: "ONGOING",
            imageUrl: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4",   // optional/nullable
            category: "General",   // optional/nullable
            createdByUserId: 1,
        }

        const createdEvent = await createEvent(newEvent);
        console.log("New Event:", createdEvent)

         */

        // Add a participant to an Event
        /*
        const added = await addParticipantToEvent(1, {
            email: "jane.doe@example.com",
            name: "Jane Doe",
        });
        console.log("Participant added:", added);
         */
    } catch (error) {
        console.log(error);
    }
}

main();