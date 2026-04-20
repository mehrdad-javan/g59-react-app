
export type EventItem = {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    attendees: number;
    image: string;
    category: string;
}

export interface EventItemProps {
    event: EventItem;
    onRegister: () => void;
}

export interface RegisterModalProps {
    event: EventItem;
    onClose: () => void;
    onSuccess: (message: string) => void;
}