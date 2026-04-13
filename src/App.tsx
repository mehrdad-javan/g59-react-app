// rsc: used to create react arrow function

import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";

const App = () => {


    return (
       <>
         {/* Navbar */} 
         <Navbar />
         <Hero />


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
               <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border-2 border-slate-100 hover:border-red-100 group">
                 <div className="relative h-64 overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=800" alt="Tech Innovators Summit 2026" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                     <div className="absolute top-4 left-4">
                       <span className="bg-white/90 backdrop-blur-md text-slate-900 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm">Technology</span>
                     </div>
                 </div>
                 <div className="p-8">
                   <div className="flex items-center text-slate-500 text-sm mb-4 space-x-4">
                     <div className="flex items-center">
                       <svg className="w-4 h-4 mr-2 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                       March 25, 2026
                     </div>
                     <div className="flex items-center">
                       <svg className="w-4 h-4 mr-2 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                       09:00 AM
                     </div>
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-red-600 transition-colors">Tech Innovators Summit 2026</h3>
                   <div className="space-y-3 mb-8">
                     <div className="flex items-start text-slate-600 text-sm">
                       <svg className="w-4 h-4 mr-3 mt-0.5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                       Silicon Valley Convention Center
                     </div>
                     <div className="flex items-center text-slate-600 text-sm">
                       <svg className="w-4 h-4 mr-3 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                       1,200 Attendees
                     </div>
                   </div>
                   <button className="w-full py-3 bg-slate-50 text-slate-900 font-bold rounded-xl group-hover:bg-red-600 group-hover:text-white transition-all duration-300">Register Now</button>
                 </div>
               </div>

               <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border-2 border-slate-100 hover:border-red-100 group">
                 <div className="relative h-64 overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800" alt="Global Marketing Expo" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                     <div className="absolute top-4 left-4">
                       <span className="bg-white/90 backdrop-blur-md text-slate-900 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm">Marketing</span>
                     </div>
                 </div>
                 <div className="p-8">
                   <div className="flex items-center text-slate-500 text-sm mb-4 space-x-4">
                     <div className="flex items-center">
                       <svg className="w-4 h-4 mr-2 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                       April 12, 2026
                     </div>
                     <div className="flex items-center">
                       <svg className="w-4 h-4 mr-2 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                       10:30 AM
                     </div>
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-red-600 transition-colors">Global Marketing Expo</h3>
                   <div className="space-y-3 mb-8">
                     <div className="flex items-start text-slate-600 text-sm">
                       <svg className="w-4 h-4 mr-3 mt-0.5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                       New York City Hall
                     </div>
                     <div className="flex items-center text-slate-600 text-sm">
                       <svg className="w-4 h-4 mr-3 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                       850 Attendees
                     </div>
                   </div>
                   <button className="w-full py-3 bg-slate-50 text-slate-900 font-bold rounded-xl group-hover:bg-red-600 group-hover:text-white transition-all duration-300">Register Now</button>
                 </div>
               </div>

               <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border-2 border-slate-100 hover:border-red-100 group">
                 <div className="relative h-64 overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800" alt="Sustainable Future Forum" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                     <div className="absolute top-4 left-4">
                       <span className="bg-white/90 backdrop-blur-md text-slate-900 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm">Environment</span>
                     </div>
                 </div>
                 <div className="p-8">
                   <div className="flex items-center text-slate-500 text-sm mb-4 space-x-4">
                     <div className="flex items-center">
                       <svg className="w-4 h-4 mr-2 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                       May 05, 2026
                     </div>
                     <div className="flex items-center">
                       <svg className="w-4 h-4 mr-2 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                       02:00 PM
                     </div>
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-red-600 transition-colors">Sustainable Future Forum</h3>
                   <div className="space-y-3 mb-8">
                     <div className="flex items-start text-slate-600 text-sm">
                       <svg className="w-4 h-4 mr-3 mt-0.5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                       London Eco Park
                     </div>
                     <div className="flex items-center text-slate-600 text-sm">
                       <svg className="w-4 h-4 mr-3 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                       500 Attendees
                     </div>
                   </div>
                   <button className="w-full py-3 bg-slate-50 text-slate-900 font-bold rounded-xl group-hover:bg-red-600 group-hover:text-white transition-all duration-300">Register Now</button>
                 </div>
               </div>

               <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border-2 border-slate-100 hover:border-red-100 group">
                 <div className="relative h-64 overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800" alt="AI & Robotics Workshop" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                     <div className="absolute top-4 left-4">
                       <span className="bg-white/90 backdrop-blur-md text-slate-900 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm">Workshop</span>
                     </div>
                 </div>
                 <div className="p-8">
                   <div className="flex items-center text-slate-500 text-sm mb-4 space-x-4">
                     <div className="flex items-center">
                       <svg className="w-4 h-4 mr-2 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                       June 18, 2026
                     </div>
                     <div className="flex items-center">
                       <svg className="w-4 h-4 mr-2 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                       11:00 AM
                     </div>
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-red-600 transition-colors">AI & Robotics Workshop</h3>
                   <div className="space-y-3 mb-8">
                     <div className="flex items-start text-slate-600 text-sm">
                       <svg className="w-4 h-4 mr-3 mt-0.5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                       Tokyo Innovation Hub
                     </div>
                     <div className="flex items-center text-slate-600 text-sm">
                       <svg className="w-4 h-4 mr-3 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                       300 Attendees
                     </div>
                   </div>
                   <button className="w-full py-3 bg-slate-50 text-slate-900 font-bold rounded-xl group-hover:bg-red-600 group-hover:text-white transition-all duration-300">Register Now</button>
                 </div>
               </div>

               <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border-2 border-slate-100 hover:border-red-100 group">
                 <div className="relative h-64 overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800" alt="Annual Design Awards" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                     <div className="absolute top-4 left-4">
                       <span className="bg-white/90 backdrop-blur-md text-slate-900 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm">Design</span>
                     </div>
                 </div>
                 <div className="p-8">
                   <div className="flex items-center text-slate-500 text-sm mb-4 space-x-4">
                     <div className="flex items-center">
                       <svg className="w-4 h-4 mr-2 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                       July 22, 2026
                     </div>
                     <div className="flex items-center">
                       <svg className="w-4 h-4 mr-2 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                       07:00 PM
                     </div>
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-red-600 transition-colors">Annual Design Awards</h3>
                   <div className="space-y-3 mb-8">
                     <div className="flex items-start text-slate-600 text-sm">
                       <svg className="w-4 h-4 mr-3 mt-0.5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                       Paris Design Center
                     </div>
                     <div className="flex items-center text-slate-600 text-sm">
                       <svg className="w-4 h-4 mr-3 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                       1,500 Attendees
                     </div>
                   </div>
                   <button className="w-full py-3 bg-slate-50 text-slate-900 font-bold rounded-xl group-hover:bg-red-600 group-hover:text-white transition-all duration-300">Register Now</button>
                 </div>
               </div>

               <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border-2 border-slate-100 hover:border-red-100 group">
                 <div className="relative h-64 overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800" alt="Startup Founders Networking" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                     <div className="absolute top-4 left-4">
                       <span className="bg-white/90 backdrop-blur-md text-slate-900 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm">Networking</span>
                     </div>
                 </div>
                 <div className="p-8">
                   <div className="flex items-center text-slate-500 text-sm mb-4 space-x-4">
                     <div className="flex items-center">
                       <svg className="w-4 h-4 mr-2 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                       August 10, 2026
                     </div>
                     <div className="flex items-center">
                       <svg className="w-4 h-4 mr-2 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                       06:30 PM
                     </div>
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-red-600 transition-colors">Startup Founders Networking</h3>
                   <div className="space-y-3 mb-8">
                     <div className="flex items-start text-slate-600 text-sm">
                       <svg className="w-4 h-4 mr-3 mt-0.5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                       Berlin Co-working Space
                     </div>
                     <div className="flex items-center text-slate-600 text-sm">
                       <svg className="w-4 h-4 mr-3 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                       200 Attendees
                     </div>
                   </div>
                   <button className="w-full py-3 bg-slate-50 text-slate-900 font-bold rounded-xl group-hover:bg-red-600 group-hover:text-white transition-all duration-300">Register Now</button>
                 </div>
               </div>
             </div>
           </div>
         </section>

         <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
               <div className="col-span-2">
                 <div className="flex items-center mb-6">
                   <div className="bg-red-600 p-2 rounded-xl">
                     <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                   </div>
                   <span className="ml-3 font-bold text-2xl tracking-tight text-white">Event App</span>
                 </div>
                 <p className="text-slate-400 max-w-sm mb-8">
                   Empowering event organizers with modern tools to create, manage, and scale exceptional experiences worldwide.
                 </p>
                 <div className="flex space-x-4">
                   <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300" aria-label="Facebook">
                     <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
                   </a>
                   <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300" aria-label="Twitter">
                     <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                   </a>
                   <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300" aria-label="Instagram">
                     <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.981 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.351-.2 6.772-2.617 6.98-6.981.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.353-2.612-6.77-6.981-6.98C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                   </a>
                   <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300" aria-label="Github">
                     <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                   </a>
                 </div>
               </div>

               <div>
                 <h3 className="text-white font-bold mb-6">Event Services</h3>
                 <ul className="space-y-4">
                   <li><a href="#" className="hover:text-red-500 transition-colors duration-200">Event Planning</a></li>
                   <li><a href="#" className="hover:text-red-500 transition-colors duration-200">Venue Selection</a></li>
                   <li><a href="#" className="hover:text-red-500 transition-colors duration-200">Ticketing Solutions</a></li>
                   <li><a href="#" className="hover:text-red-500 transition-colors duration-200">Marketing Tools</a></li>
                 </ul>
               </div>
               <div>
                 <h3 className="text-white font-bold mb-6">Company</h3>
                 <ul className="space-y-4">
                   <li><a href="#" className="hover:text-red-500 transition-colors duration-200">About Us</a></li>
                   <li><a href="#" className="hover:text-red-500 transition-colors duration-200">Careers</a></li>
                   <li><a href="#" className="hover:text-red-500 transition-colors duration-200">Contact</a></li>
                   <li><a href="#" className="hover:text-red-500 transition-colors duration-200">Privacy Policy</a></li>
                 </ul>
               </div>
             </div>

             <div className="pt-8 border-t border-slate-800">
               <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                 <div className="text-sm">
                   © 2026 Event App. All rights reserved.
                 </div>
                 <div className="flex items-center space-x-6 text-sm">
                   <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                   <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                   <a href="#" className="hover:text-white transition-colors">Cookies</a>
                 </div>
                 <div className="flex items-center text-sm group cursor-pointer">
                   <svg className="w-4 h-4 mr-2 group-hover:text-red-500 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                   <span className="group-hover:text-white transition-colors">hello@eventapp.com</span>
                 </div>
               </div>
             </div>
           </div>
         </footer>




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
       </>
    );

};

export default App;