import React from 'react';

const ServicesSection = () => {
    const services = [
        {
            title: "Urgent Care",
            image: "/UrgentCare.jpg", // Replace with your actual image path
            items: [
                "Allergies",
                "Birth control", 
                "Cold & Flu",
                "Ear Pain",
                "Headache",
                "Insect Bites",
                "Pink Eye",
                "Rash",
                "Sore Throat",
                "Yeast Infections",
                "Covid-19"
            ],
            color: "from-blue-50 to-blue-100",
            titleColor: "text-blue-600"
        },
        {
            title: "Primary Care",
            image: "/PrimaryCare.jpg", // Replace with your actual image path
            items: [
                "Asthma",
                "Diabetes",
                "High blood pressure",
                "High Cholestrol",
                "Obesity",
                "Pre-Diabetes",
                "Thyphoid Issues"
            ],
            color: "from-orange-50 to-orange-100",
            titleColor: "text-orange-600"
        },
        {
            title: "Mental Health",
            image: "/mental-health.jpg", // Replace with your actual image path
            items: [
                "Addictions",
                "Anxiety",
                "Bipolar",
                "Depression",
                "Grief & Loss",
                "Life changes",
                "Panic Disorder",
                "Parenting Support",
                "Stress Management",
                "Phobias",
                "Trauma & PTSD"
            ],
            color: "from-purple-50 to-purple-100",
            titleColor: "text-purple-600"
        },
        {
            title: "Dermatology",
            image: "/dermatology.jpg", // Replace with your actual image path
            items: [
                "Acne",
                "Boils",
                "Cysts",
                "Eczema",
                "Hives",
                "Skin Pigmentation Disorder",
                "Cold Sores",
                "Alopecia (Hair Loss)"
            ],
            color: "from-green-50 to-green-100",
            titleColor: "text-green-600"
        }
    ];

    return (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 right-20 w-24 h-24 bg-blue-300/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-40 left-16 w-32 h-32 bg-purple-300/15 rounded-full blur-2xl animate-bounce"></div>
                <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-orange-300/20 rounded-full blur-lg animate-ping"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        What we care for.
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
                    {services.map((service, index) => (
                        <div 
                            key={index}
                            className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
                        >
                            {/* Service Image */}
                            <div className={`bg-gradient-to-br ${service.color} p-6 rounded-t-3xl`}>
                                <div className="w-full h-48 rounded-2xl overflow-hidden shadow-lg">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                            </div>

                            {/* Service Details */}
                            <div className="p-6">
                                <h3 className={`text-xl font-bold mb-4 ${service.titleColor}`}>
                                    {service.title}
                                </h3>
                                
                                <ul className="space-y-2 text-gray-600">
                                    {service.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-center text-sm">
                                            <span className="w-2 h-2 bg-gray-400 rounded-full mr-3 flex-shrink-0"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <button className={`mt-4 ${service.titleColor} hover:underline text-sm font-semibold transition-all duration-200`}>
                                    And more
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Learn More Button */}
                <div className="text-center">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-12 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        Learn more
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;