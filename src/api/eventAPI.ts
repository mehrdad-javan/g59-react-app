import axios from "axios";


const BASE_URL = "http://localhost:8080/api/v1/events";

interface UserResponseDTO {
    id: number;
    email: string;
    fullName: string;
    createDate: string;
}

interface EventResponseDTO {
    id: number;
    title: string;
    description: string | null;
    dateTime: string;
    location: string;
    status: string;
    imageUrl: string | null;
    category: string | null;
    attendees: number;
    createdBy: UserResponseDTO;
    participants: UserResponseDTO[];
}

interface ProblemDetailDTO {
    type?: string;
    title?: string;
    status: number;
    detail?: string;
    instance?: string;
    properties?: Record<string, unknown>;
    errors?: Record<string, string | string[]>;
}

export interface EventRequestDTO {
    title: string;
    description?: string | null;
    dateTime: string;
    location: string;
    status: string;
    imageUrl?: string | null;
    category?: string | null;
    createdByUserId: number;
}

export interface EventParticipantRequestDTO {
    email: string;
    name: string;
}

export const getAllEvents = async (): Promise<EventResponseDTO[]> => {
    try {
        const response = await axios.get<EventResponseDTO[]>(BASE_URL);
        return response.data;
    } catch (error) {
        //console.log("Error: ", error);
        //throw  new Error("Error fetching events");
        const errorMessage = handleApiError(error);
        throw new Error(errorMessage);
    }
}

const handleApiError = (err: unknown): string => {
    if (axios.isAxiosError<ProblemDetailDTO>(err)) {

        const errors = err.response?.data?.errors as Record<string, string | string[]> | undefined;

        let message: string | undefined;
        if (errors && typeof errors === "object") {
            const entries = Object.entries(errors);

            if (entries.length === 1) {
                // One field: take its first message (handles string or string[])
                const [, val] = entries[0];
                message = Array.isArray(val) ? val[0] : val;
            } else if (entries.length > 1) {
                // Multiple fields: combine all messages into one string
                message = entries
                    .map(([field, val]) => {
                        const text = Array.isArray(val) ? val.join(", ") : val;
                        return `${field}: ${text}`;
                    })
                    .join("; ");
            }
        }

        // Fallbacks
        if (!message) {
            const data = err.response?.data as { detail?: string; title?: string } | undefined;
            message = data?.detail || data?.title || "Validation error";
        }

        console.error(message);
        // Return the most informative message we have instead of a generic one
        return message;
    }

    return "Unexpected error occurred";
}


export const getEventById = async (id: number): Promise<EventResponseDTO> => {
    try {

        const response = await axios.get<EventResponseDTO>(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(handleApiError(error));
    }
}

export const createEvent = async (eventData: EventRequestDTO): Promise<EventResponseDTO> => {

    try {
        const response = await axios.post<EventResponseDTO>(BASE_URL, eventData);
        return response.data;
    } catch (error) {
        throw new Error(handleApiError(error));
    }
}


export const addParticipantToEvent = async (
    eventId: number,
    participantData: EventParticipantRequestDTO
): Promise<boolean> => {
    try {
        await axios.post(`${BASE_URL}/${eventId}/participants`, participantData);
        return true;
    } catch (err: unknown) {
        throw new Error(handleApiError(err));
    }
};