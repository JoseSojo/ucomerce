import React from 'react';
import { Clock } from 'lucide-react';
import { BlogPost } from '@/domain/blog';
import Link from 'next/link';
import Image from 'next/image';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 animate-slide-up">
      <Link href={`/blog/${post.id}`}>
        <div className="relative h-56 overflow-hidden">
          <img
            width={25}
            height={25}
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </Link>

      <div className="p-6">
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-sm font-medium text-primary-light bg-primary-light/10 px-3 py-1 rounded-full">
            {post.category}
          </span>
          <div className="flex items-center text-sm text-gray-600">
            <Clock size={14} className="mr-1" />
            <span>{post.readingTime} min read</span>
          </div>
        </div>

        <Link href={`/blog/${post.id}`}>
          <h2 className="text-xl font-semibold text-primary-dark mb-2 hover:text-primary-medium transition-colors line-clamp-2">
            {post.title}
          </h2>
        </Link>

        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <img
              width={25}
              height={25}
              src={post.author.avatar}
              alt={post.author.name}
              className="w-8 h-8 rounded-full mr-2 object-cover"
            />
            <span className="text-sm font-medium text-gray-700">{post.author.name}</span>
          </div>
          <span className="text-sm text-gray-500">{post.date}</span>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;