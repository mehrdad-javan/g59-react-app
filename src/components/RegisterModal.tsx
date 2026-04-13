
const RegisterModal = () => {
    return (
        <div id="event-modal"
             className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[100] hidden flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[98vh] overflow-y-auto shadow-2xl relative">

                <button id="close-modal"
                        className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>

                <div className="p-8">
                    <div id="modal-event-details">
                        <img id="modal-img" src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4" alt="Concert" className="w-full h-64 object-cover rounded-xl mb-6"/>
                        <h2 id="modal-title" className="text-3xl font-bold text-slate-900 mb-2">Summer Music Festival</h2>
                        <div id="modal-meta" className="text-slate-500 mb-6 flex gap-4 text-sm">
                            <span id="modal-date">Aug 24 · 7:00 PM</span>
                            <span id="modal-location">Stockholm Arena</span>
                        </div>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            Join us for this exciting event! Learn from industry experts, network with fellow enthusiasts,
                            and explore the latest trends. This is a great opportunity to expand your knowledge
                            and be part of a vibrant community.
                        </p>
                    </div>

                    <div className="border-t border-slate-100 pt-8">
                        <h3 className="text-xl font-semibold mb-4">Register for this Event</h3>
                        <form id="registration-form" className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                                <input type="text" id="reg-name" required
                                       className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"/>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                                <input type="email" id="reg-email" required
                                       className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"/>
                            </div>
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