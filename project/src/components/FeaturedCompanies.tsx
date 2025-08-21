import React from 'react';
import { Building, Users, MapPin, Star } from 'lucide-react';

const FeaturedCompanies: React.FC = () => {
  const companies = [
    {
      id: '1',
      name: 'TechCorp Inc.',
      industry: 'Technology',
      location: 'San Francisco, CA',
      employees: '1,000-5,000',
      rating: 4.8,
      openJobs: 24,
      description: 'Leading technology company focused on innovative solutions and cutting-edge software development.',
      logo: '🚀'
    },
    {
      id: '2',
      name: 'Design Studio',
      industry: 'Design & Creative',
      location: 'New York, NY',
      employees: '50-200',
      rating: 4.9,
      openJobs: 8,
      description: 'Award-winning design agency creating beautiful digital experiences for global brands.',
      logo: '🎨'
    },
    {
      id: '3',
      name: 'AI Solutions Ltd.',
      industry: 'Artificial Intelligence',
      location: 'Boston, MA',
      employees: '200-500',
      rating: 4.7,
      openJobs: 15,
      description: 'Pioneering AI research and development with focus on machine learning and data science.',
      logo: '🤖'
    },
    {
      id: '4',
      name: 'CloudTech',
      industry: 'Cloud Computing',
      location: 'Seattle, WA',
      employees: '500-1,000',
      rating: 4.6,
      openJobs: 32,
      description: 'Cloud infrastructure and DevOps solutions provider serving enterprise clients worldwide.',
      logo: '☁️'
    },
    {
      id: '5',
      name: 'Growth Agency',
      industry: 'Marketing',
      location: 'Remote',
      employees: '20-50',
      rating: 4.8,
      openJobs: 6,
      description: 'Digital marketing agency specializing in growth hacking and performance marketing.',
      logo: '📈'
    },
    {
      id: '6',
      name: 'StartupXYZ',
      industry: 'Fintech',
      location: 'Austin, TX',
      employees: '100-200',
      rating: 4.5,
      openJobs: 12,
      description: 'Revolutionary fintech startup disrupting traditional banking with innovative solutions.',
      logo: '💰'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Featured Companies
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover amazing companies that are actively hiring and building the future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company) => (
            <div
              key={company.id}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-blue-200 transition-all duration-200 cursor-pointer group"
            >
              {/* Company Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center text-2xl">
                    {company.logo}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {company.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{company.industry}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-1 text-yellow-500">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-sm font-medium text-gray-700">{company.rating}</span>
                </div>
              </div>

              {/* Company Info */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-2 text-gray-600 text-sm">
                  <MapPin className="h-4 w-4" />
                  <span>{company.location}</span>
                </div>
                
                <div className="flex items-center space-x-2 text-gray-600 text-sm">
                  <Users className="h-4 w-4" />
                  <span>{company.employees} employees</span>
                </div>
                
                <div className="flex items-center space-x-2 text-gray-600 text-sm">
                  <Building className="h-4 w-4" />
                  <span>{company.openJobs} open positions</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                {company.description}
              </p>

              {/* Actions */}
              <div className="flex space-x-3">
                <button className="flex-1 px-4 py-2 text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors font-medium text-sm">
                  View Company
                </button>
                <button className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium text-sm">
                  View Jobs
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Companies Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium">
            View All Companies
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCompanies;