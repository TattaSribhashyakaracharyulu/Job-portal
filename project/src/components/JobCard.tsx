import React from 'react';
import { MapPin, Clock, DollarSign, Bookmark, ExternalLink, Building } from 'lucide-react';

interface JobCardProps {
  job: {
    id: string;
    title: string;
    company: string;
    location: string;
    type: string;
    salary: string;
    postedTime: string;
    description: string;
    tags: string[];
    logo?: string;
    featured?: boolean;
  };
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className={`bg-white rounded-xl border transition-all duration-200 hover:shadow-lg hover:border-blue-200 p-6 ${
      job.featured ? 'border-blue-200 shadow-md' : 'border-gray-200'
    }`}>
      {job.featured && (
        <div className="mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800">
            ⭐ Featured Job
          </span>
        </div>
      )}

      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
            {job.logo ? (
              <img src={job.logo} alt={job.company} className="w-8 h-8 rounded" />
            ) : (
              <Building className="h-6 w-6 text-gray-600" />
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 mb-1 hover:text-blue-600 cursor-pointer transition-colors">
              {job.title}
            </h3>
            <p className="text-gray-600 font-medium mb-2">{job.company}</p>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-3">
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{job.type}</span>
              </div>
              <div className="flex items-center space-x-1">
                <DollarSign className="h-4 w-4" />
                <span>{job.salary}</span>
              </div>
            </div>
          </div>
        </div>
        
        <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
          <Bookmark className="h-5 w-5" />
        </button>
      </div>

      <p className="text-gray-600 mb-4 line-clamp-2">{job.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {job.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-pointer"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">{job.postedTime}</span>
        
        <div className="flex space-x-3">
          <button className="px-4 py-2 text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors font-medium">
            View Details
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium flex items-center space-x-2">
            <span>Apply Now</span>
            <ExternalLink className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;