import React, { useState } from 'react';
import JobCard from './JobCard';
import { Filter, SlidersHorizontal, ChevronDown } from 'lucide-react';

const JobListings: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const jobs = [
    {
      id: '1',
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120k - $160k',
      postedTime: '2 days ago',
      description: 'We are looking for a skilled Frontend Developer to join our dynamic team. You will be responsible for developing user-facing web applications using modern JavaScript frameworks.',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
      featured: true
    },
    {
      id: '2',
      title: 'Product Manager',
      company: 'StartupXYZ',
      location: 'Remote',
      type: 'Full-time',
      salary: '$100k - $140k',
      postedTime: '1 day ago',
      description: 'Join our product team to drive the development of innovative solutions. You will work closely with engineering and design teams to deliver exceptional user experiences.',
      tags: ['Product Strategy', 'Agile', 'Analytics', 'Leadership']
    },
    {
      id: '3',
      title: 'UX/UI Designer',
      company: 'Design Studio',
      location: 'New York, NY',
      type: 'Contract',
      salary: '$80k - $110k',
      postedTime: '3 days ago',
      description: 'Create beautiful and intuitive user interfaces for web and mobile applications. Collaborate with product managers and developers to bring designs to life.',
      tags: ['Figma', 'User Research', 'Prototyping', 'Design Systems']
    },
    {
      id: '4',
      title: 'Data Scientist',
      company: 'AI Solutions Ltd.',
      location: 'Boston, MA',
      type: 'Full-time',
      salary: '$130k - $170k',
      postedTime: '1 week ago',
      description: 'Analyze complex datasets to extract meaningful insights and build predictive models. Work with machine learning algorithms and statistical methods.',
      tags: ['Python', 'Machine Learning', 'SQL', 'TensorFlow'],
      featured: true
    },
    {
      id: '5',
      title: 'DevOps Engineer',
      company: 'CloudTech',
      location: 'Seattle, WA',
      type: 'Full-time',
      salary: '$110k - $150k',
      postedTime: '4 days ago',
      description: 'Manage and optimize our cloud infrastructure. Implement CI/CD pipelines and ensure system reliability and scalability.',
      tags: ['AWS', 'Docker', 'Kubernetes', 'Jenkins']
    },
    {
      id: '6',
      title: 'Marketing Specialist',
      company: 'Growth Agency',
      location: 'Remote',
      type: 'Part-time',
      salary: '$50k - $70k',
      postedTime: '5 days ago',
      description: 'Develop and execute marketing campaigns across multiple channels. Analyze campaign performance and optimize for better results.',
      tags: ['Digital Marketing', 'SEO', 'Content Strategy', 'Analytics']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Jobs', count: jobs.length },
    { id: 'tech', name: 'Technology', count: 3 },
    { id: 'design', name: 'Design', count: 1 },
    { id: 'marketing', name: 'Marketing', count: 1 },
    { id: 'remote', name: 'Remote', count: 2 }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Latest Job Opportunities
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover your next career opportunity from our curated list of premium job openings
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                <button 
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden p-2 text-gray-400 hover:text-gray-600"
                >
                  <SlidersHorizontal className="h-5 w-5" />
                </button>
              </div>

              <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                {/* Job Categories */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Categories</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-blue-50 text-blue-700 border border-blue-200'
                            : 'hover:bg-gray-50 text-gray-700'
                        }`}
                      >
                        <span>{category.name}</span>
                        <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Job Type */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Job Type</h4>
                  <div className="space-y-2">
                    {['Full-time', 'Part-time', 'Contract', 'Internship'].map((type) => (
                      <label key={type} className="flex items-center space-x-3 cursor-pointer">
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        <span className="text-gray-700">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Salary Range */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Salary Range</h4>
                  <div className="space-y-2">
                    {['$50k - $80k', '$80k - $120k', '$120k - $160k', '$160k+'].map((range) => (
                      <label key={range} className="flex items-center space-x-3 cursor-pointer">
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        <span className="text-gray-700">{range}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Experience Level */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Experience</h4>
                  <div className="space-y-2">
                    {['Entry Level', 'Mid Level', 'Senior Level', 'Executive'].map((level) => (
                      <label key={level} className="flex items-center space-x-3 cursor-pointer">
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        <span className="text-gray-700">{level}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="lg:w-3/4">
            <div className="flex items-center justify-between mb-6">
              <div className="text-gray-600">
                Showing <span className="font-semibold text-gray-900">{jobs.length}</span> jobs
              </div>
              
              <div className="flex items-center space-x-4">
                <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Most Recent</option>
                  <option>Most Relevant</option>
                  <option>Salary: High to Low</option>
                  <option>Salary: Low to High</option>
                </select>
              </div>
            </div>

            <div className="space-y-6">
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="px-8 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                Load More Jobs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobListings;