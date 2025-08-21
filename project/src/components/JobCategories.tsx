import React from 'react';
import { 
  Code, 
  Palette, 
  TrendingUp, 
  Users, 
  Shield, 
  Stethoscope, 
  GraduationCap, 
  Wrench,
  Calculator,
  Megaphone,
  Building,
  Truck
} from 'lucide-react';

const JobCategories: React.FC = () => {
  const categories = [
    {
      id: 'technology',
      name: 'Technology',
      icon: Code,
      jobCount: 15420,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700'
    },
    {
      id: 'design',
      name: 'Design & Creative',
      icon: Palette,
      jobCount: 8350,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700'
    },
    {
      id: 'marketing',
      name: 'Marketing & Sales',
      icon: TrendingUp,
      jobCount: 12680,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-700'
    },
    {
      id: 'hr',
      name: 'Human Resources',
      icon: Users,
      jobCount: 5240,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-700'
    },
    {
      id: 'finance',
      name: 'Finance & Accounting',
      icon: Calculator,
      jobCount: 9870,
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-700'
    },
    {
      id: 'healthcare',
      name: 'Healthcare',
      icon: Stethoscope,
      jobCount: 7650,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      textColor: 'text-red-700'
    },
    {
      id: 'education',
      name: 'Education',
      icon: GraduationCap,
      jobCount: 4320,
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-700'
    },
    {
      id: 'engineering',
      name: 'Engineering',
      icon: Wrench,
      jobCount: 11200,
      color: 'from-gray-500 to-gray-600',
      bgColor: 'bg-gray-50',
      textColor: 'text-gray-700'
    },
    {
      id: 'legal',
      name: 'Legal',
      icon: Shield,
      jobCount: 3450,
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50',
      textColor: 'text-teal-700'
    },
    {
      id: 'media',
      name: 'Media & Communications',
      icon: Megaphone,
      jobCount: 6180,
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-700'
    },
    {
      id: 'construction',
      name: 'Construction',
      icon: Building,
      jobCount: 8920,
      color: 'from-amber-500 to-amber-600',
      bgColor: 'bg-amber-50',
      textColor: 'text-amber-700'
    },
    {
      id: 'logistics',
      name: 'Logistics & Supply Chain',
      icon: Truck,
      jobCount: 5670,
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-cyan-50',
      textColor: 'text-cyan-700'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Browse Jobs by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find opportunities in your field of expertise across various industries
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="group cursor-pointer"
              >
                <div className={`${category.bgColor} rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-200 hover:shadow-lg`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${category.textColor}`}>
                        {category.jobCount.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500">open jobs</div>
                    </div>
                  </div>
                  
                  <h3 className={`text-lg font-semibold ${category.textColor} group-hover:text-opacity-80 transition-colors`}>
                    {category.name}
                  </h3>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-gray-600">View all positions</span>
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                      <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? 
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium">
            Browse All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default JobCategories;