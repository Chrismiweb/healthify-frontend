import React, { useState, useEffect } from 'react';

const TestimonialsSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const testimonials = [
        {
            id: 1,
            rating: 5,
            text: "Doctor was available right away, listened to my symptoms and prescribed the right medication. He made sure no allergies and that was it. Very fast and easy",
            name: "Keemah",
            location: "from kwara"
        },
        {
            id: 2,
            rating: 5,
            text: "The doctor made me feel comfortable right away, very easy to ask about concerns I might have had and great feedback from the doctor.",
            name: "Zainab",
            location: "from lagos"
        },
        {
            id: 3,
            rating: 5,
            text: "My doctor was very professional, thorough, and careful to ask me numerous relevant questions. She answered my questions not only in a detailed manner, but also in a way I could understand.",
            name: "Ibukun",
            location: "from Abuja"
        },
        {
            id: 4,
            rating: 5,
            text: "It was quick & easy to book the appointment. I was able to get a PC appointment the next morning.. within 12 hours! I connected and got my ongoing meds refilled. It was so nice for me living in a rural community.",
            name: "Farouq",
            location: "from Akure"
        },
        {
            id: 5,
            rating: 5,
            text: "Doctor was available right away, listened to my symptoms and prescribed the right medication. He made sure no allergies and that was it. Very fast and easy",
            name: "Keemah",
            location: "from kwara"
        }
    ];

    // Auto-slide functionality
    useEffect(() => {
        if (!isAutoPlaying) return;
        
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / getVisibleCards()));
        }, 4000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, testimonials.length]);

    // Get number of visible cards based on screen size
    const getVisibleCards = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth >= 1024) return 3; // lg screens
            if (window.innerWidth >= 768) return 2;  // md screens
            return 1; // sm screens
        }
        return 3; // default for SSR
    };

    const [visibleCards, setVisibleCards] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            setVisibleCards(getVisibleCards());
        };

        handleResize(); // Set initial value
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const totalSlides = Math.ceil(testimonials.length / visibleCards);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const StarRating = ({ rating }) => {
        return (
            <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                    <svg
                        key={i}
                        className={`w-5 h-5 ${i < rating ? 'text-orange-500' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>
        );
    };

    return (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 right-20 w-32 h-32 bg-blue-300/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-32 left-16 w-48 h-48 bg-orange-300/15 rounded-full blur-2xl animate-bounce"></div>
                <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-purple-300/20 rounded-full blur-lg animate-ping"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Our Customers love us
                    </h2>
                    <div className="flex items-center justify-center space-x-3">
                        <span className="text-2xl font-bold text-gray-800">4.9</span>
                        <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    className="w-6 h-6 text-orange-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <span className="text-gray-600 font-medium">21k+ reviews</span>
                    </div>
                </div>

                {/* Testimonials Slider */}
                <div 
                    className="relative"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                >
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-300 hover:scale-110"
                    >
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-300 hover:scale-110"
                    >
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Testimonials Container */}
                    <div className="overflow-hidden">
                        <div 
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ 
                                transform: `translateX(-${currentSlide * (100 / visibleCards)}%)`,
                                width: `${(testimonials.length / visibleCards) * 100}%`
                            }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={testimonial.id}
                                    className="px-4"
                                    style={{ width: `${100 / testimonials.length}%` }}
                                >
                                    <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-full">
                                        <StarRating rating={testimonial.rating} />
                                        
                                        <p className="text-gray-700 leading-relaxed mb-6 text-sm lg:text-base">
                                            {testimonial.text}
                                        </p>
                                        
                                        <div className="border-t pt-4">
                                            <p className="font-bold text-gray-900 text-lg">
                                                {testimonial.name}
                                            </p>
                                            <p className="text-gray-500 text-sm">
                                                {testimonial.location}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center space-x-2 mt-12">
                    {[...Array(totalSlides)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                currentSlide === index 
                                    ? 'bg-blue-600 scale-125' 
                                    : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;