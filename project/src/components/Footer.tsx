import React from 'react';
import { Briefcase, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">JobConnect</h3>
                <p className="text-sm text-gray-400">Find Your Dream Job</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Connecting talented professionals with amazing opportunities. 
              Your career journey starts here with thousands of jobs from top companies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-400 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* For Job Seekers */}
          <div>
            <h4 className="text-lg font-semibold mb-4">For Job Seekers</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Browse Jobs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Browse Companies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Job Alerts</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">My Applications</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Resume Builder</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Career Advice</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Salary Guide</a></li>
            </ul>
          </div>

          {/* For Employers */}
          <div>
            <h4 className="text-lg font-semibold mb-4">For Employers</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Post a Job</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Browse Resumes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Employer Branding</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Recruitment Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Resources</a></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact & Support</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>support@jobconnect.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>123 Business Ave, Suite 100<br />San Francisco, CA 94105</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-medium mb-3">Subscribe to our newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-sm focus:outline-none focus:border-blue-500"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-r-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 JobConnect. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;