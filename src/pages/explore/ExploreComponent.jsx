import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Search, X, Send, Phone, Video, MoreVertical, Smile, Paperclip, ArrowLeft, Circle } from 'lucide-react';
import Sidebar from '../../components/Sidebar';

const ExploreComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    all: true,
    gynecologists: false,
    generalPractitioner: false,
    optometrist: false
  });
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Sample doctor data matching the UI
  const doctors = [
    {
      id: 1,
      name: "Dr Chrismi",
      specialty: "Gynecologist",
      username: "drChrismi",
      image: "https://images.unsplash.com/photo-1666887360742-974c8fce8e6b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isOnline: true,
      lastSeen: "Online now"
    },
    {
      id: 2,
      name: "Dr Farouq",
      specialty: "General practitioner",
      username: "drFarouq",
      image: "https://images.unsplash.com/photo-1582895361887-24daa40c8667?q=80&w=2141&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isOnline: false,
      lastSeen: "2 hours ago"
    },
    {
      id: 3,
      name: "Dr. Miss Nike",
      specialty: "Gynecologist",
      username: "drNike",
      image: "https://images.unsplash.com/photo-1616291446004-b89a8453561c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isOnline: true,
      lastSeen: "Online now"
    },
    {
      id: 4,
      name: "Mr Khalil",
      specialty: "General practitioner",
      username: "drKhalil",
      image: "https://images.unsplash.com/photo-1657781763785-8b186ab5d726?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isOnline: false,
      lastSeen: "1 hour ago"
    },
    {
      id: 5,
      name: "Miss Muslimah",
      specialty: "Gynecologist",
      username: "drMuslimah",
      image: "https://images.unsplash.com/photo-1678695972687-033fa0bdbac9?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isOnline: true,
      lastSeen: "Online now"
    },
    {
      id: 6,
      name: "Dr AGM",
      specialty: "General practitioner",
      username: "drAgm",
      image: "https://images.unsplash.com/photo-1613115016363-a9dbcf4b9e93?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isOnline: false,
      lastSeen: "30 minutes ago"
    },
    {
      id: 7,
      name: "Dr Kennedy",
      specialty: "Gynecologist",
      username: "drKennedy",
      image: "https://images.unsplash.com/photo-1666887360369-1901f341fdad?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isOnline: true,
      lastSeen: "Online now"
    },
    {
      id: 8,
      name: "Miss Liya",
      specialty: "Gynecologist",
      username: "liya",
      image: "https://images.unsplash.com/photo-1655720357761-f18ea9e5e7e6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isOnline: false,
      lastSeen: "15 minutes ago"
    }
  ];

  const handleFilterChange = (filterKey) => {
    if (filterKey === 'all') {
      setSelectedFilters({
        all: true,
        gynecologists: false,
        generalPractitioner: false,
        optometrist: false
      });
    } else {
      setSelectedFilters(prev => ({
        ...prev,
        all: false,
        [filterKey]: !prev[filterKey]
      }));
    }
  };

  const handleConnect = (doctor) => {
    setSelectedDoctor(doctor);
    setIsChatOpen(true);
  };

  const filteredDoctors = useMemo(() => {
    let filtered = doctors;

    if (searchTerm) {
      filtered = filtered.filter(doctor =>
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.username.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (!selectedFilters.all) {
      filtered = filtered.filter(doctor => {
        if (selectedFilters.gynecologists && doctor.specialty === 'Gynecologist') return true;
        if (selectedFilters.generalPractitioner && doctor.specialty === 'General practitioner') return true;
        if (selectedFilters.optometrist && doctor.specialty === 'Optometrist') return true;
        return false;
      });
    }

    return filtered;
  }, [searchTerm, selectedFilters]);

  const DoctorCard = ({ doctor }) => (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <div className="flex justify-center pt-6">
        <div className="relative">
          <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-white shadow-lg">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-full object-cover"
            />
          </div>
          {doctor.isOnline && (
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-2 border-white rounded-full flex items-center justify-center">
              <Circle className="w-3 h-3 fill-current text-white" />
            </div>
          )}
        </div>
      </div>
      
      <div className="p-4 text-center">
        <h3 className="font-semibold text-gray-900 text-sm mb-1">{doctor.name}</h3>
        <p className="text-gray-600 text-sm mb-1">{doctor.specialty}</p>
        <p className="text-blue-600 text-sm mb-4">💙{doctor.username}</p>
        <div className="flex items-center justify-center mb-3">
          <div className={`w-2 h-2 rounded-full mr-2 ${doctor.isOnline ? 'bg-green-500' : 'bg-gray-400'}`}></div>
          <span className="text-xs text-gray-500">{doctor.lastSeen}</span>
        </div>
        <button 
          onClick={() => handleConnect(doctor)}
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
        >
          Connect Now
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex h-full bg-gray-50 mt-4 relative">
      {/* Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200 p-6 shadow-sm">
        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search doctors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 transition-all duration-300"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Specialties</h3>
          
          <div className="space-y-3">
            {[
              { key: 'all', label: 'All Specialties', color: 'text-gray-700' },
              { key: 'gynecologists', label: 'Gynecologists', color: 'text-blue-600' },
              { key: 'generalPractitioner', label: 'General Practitioner', color: 'text-blue-600' },
              { key: 'optometrist', label: 'Optometrist', color: 'text-blue-600' }
            ].map(filter => (
              <label key={filter.key} className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-colors">
                <input
                  type="checkbox"
                  checked={selectedFilters[filter.key]}
                  onChange={() => handleFilterChange(filter.key)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className={filter.color}>{filter.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Platform Filter */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Platform</h3>
          
          <div className="space-y-3">
            {[
              { value: 'all', label: 'All Platforms' },
              { value: 'healthify', label: 'Healthify Only' }
            ].map(platform => (
              <label key={platform.value} className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-colors">
                <input
                  type="radio"
                  name="platform"
                  value={platform.value}
                  checked={selectedPlatform === platform.value}
                  onChange={(e) => setSelectedPlatform(e.target.value)}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-blue-600">{platform.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map(doctor => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No doctors found</h3>
              <p className="text-gray-600">Try adjusting your search terms or filters</p>
            </div>
          )}
        </div>
      </div>

      {/* Chat Modal */}
      {isChatOpen && selectedDoctor && (
        <ChatInterface 
          doctor={selectedDoctor} 
          onClose={() => {
            setIsChatOpen(false);
            setSelectedDoctor(null);
          }} 
        />
      )}
    </div>
  );
};

// const ChatInterface = ({ doctor, onClose }) => {
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([
//     {
//       id: 1,
//       text: `Hello! I'm Dr. ${doctor.name}. How can I help you today?`,
//       sender: 'doctor',
//       timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
//       isWelcome: true
//     }
//   ]);
//   const [isTyping, setIsTyping] = useState(false);
//   const messagesEndRef = useRef(null);
//   const inputRef = useRef(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   useEffect(() => {
//     inputRef.current?.focus();
//   }, []);

//   const handleSendMessage = () => {
//     if (message.trim()) {
//       const newMessage = {
//         id: messages.length + 1,
//         text: message,
//         sender: 'user',
//         timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//       };
      
//       setMessages(prev => [...prev, newMessage]);
//       setMessage('');
      
//       // Simulate doctor typing and response
//       setIsTyping(true);
//       setTimeout(() => {
//         setIsTyping(false);
//         const doctorResponse = {
//           id: messages.length + 2,
//           text: getDoctorResponse(message),
//           sender: 'doctor',
//           timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//         };
//         setMessages(prev => [...prev, doctorResponse]);
//       }, 1500 + Math.random() * 1000);
//     }
//   };

//   const getDoctorResponse = (userMessage) => {
//     const responses = [
//       "Thank you for sharing that with me. Can you tell me more about your symptoms?",
//       "I understand your concern. How long have you been experiencing this?",
//       "Based on what you've told me, I'd like to ask a few more questions to better understand your situation.",
//       "That's helpful information. Have you noticed any patterns or triggers?",
//       "I appreciate you being thorough. Let me provide some guidance on this matter.",
//       "Your health is important to us. I'd recommend we schedule a more detailed consultation.",
//       "This sounds like something we should address properly. Are you available for a video call?"
//     ];
//     return responses[Math.floor(Math.random() * responses.length)];
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault();
//       handleSendMessage();
//     }
//   };

//   const baseurl = 'https://healtify-x18v.onrender.com/api/v1/chats/chat' //base url for gemini 1.5 api, that will chat with user instead of response


//   return (
//      <div className="flex">
//       <main className="flex-1 p-4"> 
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[80vh] flex flex-col overflow-hidden">
//             {/* Chat Header */}
//             <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex items-center justify-between">
//               <div className="flex items-center space-x-4">
//                 <button 
//                   onClick={onClose}
//                   className="p-2 hover:bg-blue-500 rounded-full transition-colors"
//                 >
//                   <ArrowLeft className="w-5 h-5" />
//                 </button>
//                 <div className="relative">
//                   <img
//                     src={doctor.image}
//                     alt={doctor.name}
//                     className="w-12 h-12 rounded-full border-2 border-white"
//                   />
//                   {doctor.isOnline && (
//                     <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
//                   )}
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-lg">{doctor.name}</h3>
//                   <p className="text-blue-100 text-sm">{doctor.specialty}</p>
//                   <div className="flex items-center space-x-1">
//                     <div className={`w-2 h-2 rounded-full ${doctor.isOnline ? 'bg-green-400' : 'bg-gray-400'}`}></div>
//                     <span className="text-xs text-blue-100">{doctor.lastSeen}</span>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="flex items-center space-x-2">
//                 <button className="p-2 hover:bg-blue-500 rounded-full transition-colors">
//                   <Phone className="w-5 h-5" />
//                 </button>
//                 <button className="p-2 hover:bg-blue-500 rounded-full transition-colors">
//                   <Video className="w-5 h-5" />
//                 </button>
//                 <button className="p-2 hover:bg-blue-500 rounded-full transition-colors">
//                   <MoreVertical className="w-5 h-5" />
//                 </button>
//                 <button 
//                   onClick={onClose}
//                   className="p-2 hover:bg-blue-500 rounded-full transition-colors"
//                 >
//                   <X className="w-5 h-5" />
//                 </button>
//               </div>
//             </div>

//             {/* Messages Area */}
//             <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
//               {messages.map((msg) => (
//                 <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
//                   <div className={`max-w-xs lg:max-w-md xl:max-w-lg ${
//                     msg.sender === 'user' 
//                       ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-l-2xl rounded-tr-2xl' 
//                       : 'bg-white border border-gray-200 text-gray-800 rounded-r-2xl rounded-tl-2xl shadow-sm'
//                   } p-4 ${msg.isWelcome ? 'border-l-4 border-l-green-500' : ''}`}>
//                     <p className="text-sm leading-relaxed">{msg.text}</p>
//                     <p className={`text-xs mt-2 ${
//                       msg.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
//                     }`}>
//                       {msg.timestamp}
//                     </p>
//                   </div>
//                 </div>
//               ))}
              
//               {isTyping && (
//                 <div className="flex justify-start">
//                   <div className="bg-white border border-gray-200 rounded-r-2xl rounded-tl-2xl p-4 shadow-sm">
//                     <div className="flex space-x-1">
//                       <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
//                       <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
//                       <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//               <div ref={messagesEndRef} />
//             </div>

//             {/* Message Input */}
//             <div className="p-4 bg-white border-t border-gray-200">
//               <div className="flex items-end space-x-3">
//                 <button className="p-2 text-gray-500 hover:text-blue-600 transition-colors">
//                   <Paperclip className="w-5 h-5" />
//                 </button>
//                 <button className="p-2 text-gray-500 hover:text-blue-600 transition-colors">
//                   <Smile className="w-5 h-5" />
//                 </button>
//                 <div className="flex-1 relative">
//                   <textarea
//                     ref={inputRef}
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                     onKeyPress={handleKeyPress}
//                     placeholder="Type your message here..."
//                     className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none max-h-32"
//                     rows="1"
//                     style={{ minHeight: '44px' }}
//                   />
//                 </div>
//                 <button
//                   onClick={handleSendMessage}
//                   disabled={!message.trim()}
//                   className="p-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
//                 >
//                   <Send className="w-5 h-5" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>

//   );
// };
const ChatInterface = ({ doctor, onClose }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: `Hello! I'm Dr. ${doctor.name}. How can I help you today?`,
      sender: 'doctor',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isWelcome: true
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const baseurl = 'https://healtify-x18v.onrender.com/api/v1/chats/chat';

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSendMessage = async () => {
    if (message.trim()) {
      const userMessage = {
        id: messages.length + 1,
        text: message,
        sender: 'user',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, userMessage]);
      setMessage('');
      setIsTyping(true);

      try {
        const res = await fetch(baseurl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ message }) // Adjust based on your API structure
        });

        const data = await res.json();

        setIsTyping(false);

        const doctorReply = {
          id: userMessage.id + 1,
          text: (data.reply || 'Sorry, I did not understand that.').replace(/\*/g, ''),
          sender: 'doctor',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };


        setMessages((prev) => [...prev, doctorReply]);

      } catch (error) {
        setIsTyping(false);
        console.error('Error fetching AI response:', error);
        setMessages((prev) => [
          ...prev,
          {
            id: userMessage.id + 1,
            text: 'There was an issue connecting to the doctor. Please try again later.',
            sender: 'doctor',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex">
      <main className="flex-1 p-4">
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[80vh] flex flex-col overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button onClick={onClose} className="p-2 hover:bg-blue-500 rounded-full transition-colors">
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <div className="relative">
                  <img src={doctor.image} alt={doctor.name} className="w-12 h-12 rounded-full border-2 border-white" />
                  {doctor.isOnline && (
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{doctor.name}</h3>
                  <p className="text-blue-100 text-sm">{doctor.specialty}</p>
                  <div className="flex items-center space-x-1">
                    <div className={`w-2 h-2 rounded-full ${doctor.isOnline ? 'bg-green-400' : 'bg-gray-400'}`}></div>
                    <span className="text-xs text-blue-100">{doctor.lastSeen}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-blue-500 rounded-full transition-colors">
                  <Phone className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-blue-500 rounded-full transition-colors">
                  <Video className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-blue-500 rounded-full transition-colors">
                  <MoreVertical className="w-5 h-5" />
                </button>
                <button onClick={onClose} className="p-2 hover:bg-blue-500 rounded-full transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs lg:max-w-md xl:max-w-lg ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-l-2xl rounded-tr-2xl'
                      : 'bg-white border border-gray-200 text-gray-800 rounded-r-2xl rounded-tl-2xl shadow-sm'
                  } p-4 ${msg.isWelcome ? 'border-l-4 border-l-green-500' : ''}`}>
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                    <p className={`text-xs mt-2 ${msg.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                      {msg.timestamp}
                    </p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-200 rounded-r-2xl rounded-tl-2xl p-4 shadow-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex items-end space-x-3">
                <button className="p-2 text-gray-500 hover:text-blue-600 transition-colors">
                  <Paperclip className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-500 hover:text-blue-600 transition-colors">
                  <Smile className="w-5 h-5" />
                </button>
                <div className="flex-1 relative">
                  <textarea
                    ref={inputRef}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message here..."
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none max-h-32"
                    rows="1"
                    style={{ minHeight: '44px' }}
                  />
                </div>
                <button
                  onClick={handleSendMessage}
                  disabled={!message.trim()}
                  className="p-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};


export default ExploreComponent;