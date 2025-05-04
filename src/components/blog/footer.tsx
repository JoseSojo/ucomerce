import React from 'react';
import { Mail, Github, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';

const FooterBlog: React.FC = () => {
  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-bold mb-4">GrupoKasama</h2>
            <p className="text-gray-300 mb-4 max-w-md">
              Exploring the latest in web development, design, and technology with in-depth articles and guides from industry experts.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-primary-light transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-primary-light transition-colors">
                <Github size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-primary-light transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-primary-light transition-colors">
                <Mail size={20} />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:text-primary-light transition-colors">Technology</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-primary-light transition-colors">Design</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-primary-light transition-colors">Development</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-primary-light transition-colors">Security</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:text-primary-light transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-primary-light transition-colors">Contact</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-primary-light transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-primary-light transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>© {new Date().getFullYear()} InsightBlog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterBlog;