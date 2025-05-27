import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import {
  frame147,
  frame148,
  frame149,
  frame150,
  frame151,
  frame152,
  frame153,
  frame154,
} from "../assets/images";

const ExploreComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    all: true,
    gynecologists: false,
    generalPractitioner: false,
    optometrist: false
  });
  const [selectedPlatform, setSelectedPlatform] = useState('all');

  // Sample doctor data matching the UI
  const doctors = [
    {
      id: 1,
      name: "Miss Oyenuga Ibukun",
      specialty: "Gynecologist",
      username: "drIbukun",
      image: frame147,
    },
    {
      id: 2,
      name: "Mr Farouq",
      specialty: "General practitioner",
      username: "drFarouq",
      image: frame148,
    },
    {
      id: 3,
      name: "Miss Sodiq Zainab",
      specialty: "Gynecologist",
      username: "drZainab",
      image: frame149,
    },
    {
      id: 4,
      name: "Mr newsong",
      specialty: "General practitioner",
      username: "drNewsong",
      image: frame150,
    },
    {
      id: 5,
      name: "Miss Olosasa kareemah",
      specialty: "Gynecologist",
      username: "drKareemah",
      image: frame151,
    },
    {
      id: 6,
      name: "Mr Imam",
      specialty: "General practitioner",
      username: "drImam",
      image: frame152,
    },
    {
      id: 7,
      name: "Miss Daniella",
      specialty: "Gynecologist",
      username: "drDaniella",
      image: frame153,
    },
    {
      id: 8,
      name: "Miss Favour",
      specialty: "Gynecologist",
      username: "drFavour",
      image: frame154,
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

  const filteredDoctors = useMemo(() => {
    let filtered = doctors;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(doctor =>
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.username.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply specialty filters
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
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="flex justify-center pt-4">
        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="p-4 text-center">
        <h3 className="font-semibold text-gray-900 text-sm mb-1">{doctor.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{doctor.specialty}</p>
        <p className="text-blue-600 text-sm mb-4">💙{doctor.username}</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
          Connect
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex h-full bg-[#F0F0F0]-50 mt-4">
      {/* Sidebar */}
      <div className="w-80 bg-[#F9F9F9] border-r border-gray-200 p-6">
        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search here"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-1 rounded">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
          
          <div className="space-y-3">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedFilters.all}
                onChange={() => handleFilterChange('all')}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-gray-700">All</span>
            </label>
            
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedFilters.gynecologists}
                onChange={() => handleFilterChange('gynecologists')}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-blue-600">Gynecologists</span>
            </label>
            
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedFilters.generalPractitioner}
                onChange={() => handleFilterChange('generalPractitioner')}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-blue-600">General Practitioner</span>
            </label>
            
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedFilters.optometrist}
                onChange={() => handleFilterChange('optometrist')}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-blue-600">Optometrist</span>
            </label>
          </div>
        </div>

        {/* Healthify Doctors */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Healthify Doctors</h3>
          
          <div className="space-y-3">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="platform"
                value="all"
                checked={selectedPlatform === 'all'}
                onChange={(e) => setSelectedPlatform(e.target.value)}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="text-blue-600">All</span>
            </label>
            
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="platform"
                value="healthify"
                checked={selectedPlatform === 'healthify'}
                onChange={(e) => setSelectedPlatform(e.target.value)}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="text-blue-600">Healthify</span>
            </label>
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
    </div>
  );
};

export default ExploreComponent;