import type {RegisterModalProps} from "../types.ts";
import {X} from "lucide-react";
import {type ChangeEvent, type SubmitEvent, useState} from "react";
import {addParticipantToEvent} from "../api/eventAPI.ts";

const RegisterModal = ({event, onClose, onSuccess}: RegisterModalProps) => {

    const [formData, setFormData] = useState<{ name: string; email: string; }>({name: '', email: ''});
    const [errors, setErrors] = useState<{ name?: string; email?: string; }>({});

    const [apiError, setApiError] = useState<string>("");


    const handelInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('### handelInputChange ###');
        console.log('Name:', e.target.name);
        console.log('Value:', e.target.value);
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handelClose = () => {
        setFormData({name: '', email: ''});
        setErrors({});
        onClose();
    }

    const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('### handleSubmit ###');

        const newErrors: { name?: string; email?: string; } = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        setErrors(newErrors);

        if (Object.keys(errors).length > 0) {
            return;
        }

        try {
            await addParticipantToEvent(event.id, formData);

            onSuccess('Registration successful!');
            handelClose();
        } catch (error) {
            console.log(error);
            setApiError(error instanceof  Error ? error.message : "Registration failed");
        }


    }

    return (
        <div id="event-modal"
             className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[98vh] overflow-y-auto shadow-2xl relative">

                <button onClick={onClose} id="close-modal"
                        className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition">
                    <X className="w-5 h-5 text-slate-700"/>
                </button>

                <div className="p-8">
                    <div id="modal-event-details">
                        <img id="modal-img"
                             src={event.image}
                             alt={event.title}
                             className="w-full h-64 object-cover rounded-xl mb-6"/>
                        <h2 id="modal-title" className="text-3xl font-bold text-slate-900 mb-2">{event.title}</h2>
                        <div id="modal-meta" className="text-slate-500 mb-6 flex gap-4 text-sm">
                            <span id="modal-date">{event.date}</span>
                            <span id="modal-location">{event.location}</span>
                        </div>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            Join us for this exciting event! Learn from industry experts, network with fellow
                            enthusiasts,
                            and explore the latest trends. This is a great opportunity to expand your knowledge
                            and be part of a vibrant community.
                        </p>
                    </div>

                    <div className="border-t border-slate-100 pt-8">
                        <h3 className="text-xl font-semibold mb-4">Register for this Event</h3>
                        <form id="registration-form" className="space-y-4" onSubmit={handleSubmit}>
                            {
                                apiError && (
                                    <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700">
                                        {apiError}
                                    </p>
                                )
                            }
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                                <input
                                    onChange={handelInputChange}
                                    name="name"
                                    value={formData.name}
                                    type="text"
                                    id="reg-name"
                                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"/>
                            </div>
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                                <input
                                    onChange={handelInputChange}
                                    name="email"
                                    value={formData.email}
                                    type="email"
                                    id="reg-email"
                                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"/>
                            </div>
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                            <button type="submit"
                                    className="w-full bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition shadow-sm">
                                Confirm Registration
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterModal;