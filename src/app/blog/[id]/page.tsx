"use client";

import React, { useEffect, useState } from 'react';
import { Clock, ChevronLeft, Calendar, User } from 'lucide-react';
import { BlogPost } from '@/domain/blog';
import { blogPosts } from '@/domain/data';
import Link from 'next/link';
import Header from '@/components/app/home/Header';
import Image from 'next/image';

export default function BlogPostPage({ params }: { params: { id: string } }) {
    const id = params.id;
    const [post, setPost] = useState<BlogPost | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Simulate loading from API
        setIsLoading(true);
        setTimeout(() => {
            const foundPost = blogPosts.find(p => p.id === id);
            if (foundPost) {
                setPost(foundPost);
                setIsLoading(false);
            } else {
                setError('Post not found');
                setIsLoading(false);
            }
        }, 500);
    }, [id]);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="animate-pulse flex flex-col items-center">
                    <div className="h-12 w-40 bg-gray-300 rounded mb-4"></div>
                    <div className="h-4 w-24 bg-gray-300 rounded"></div>
                </div>
            </div>
        );
    }

    if (error || !post) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className='bg-gradient-to-l bg-red-400 from-[#72AFC1] to-[#16446A] h-[70px]'>
                    <Header />
                </div>
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-primary-dark mb-4">Article Not Found</h2>
                    <p className="text-gray-600 mb-6">The article you're looking for doesn't exist or has been removed.</p>
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-primary-medium hover:text-primary-dark font-medium transition-colors"
                    >
                        <ChevronLeft size={20} className="mr-1" />
                        Back to all articles
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className='bg-gradient-to-l bg-red-400 from-[#72AFC1] to-[#16446A] h-[70px]'>
                <Header />
            </div>
            <div
                className="h-96 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${post.coverImage})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-dark/90 flex items-end">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                        <Link
                            href="/blog"
                            className="inline-flex items-center text-white hover:text-primary-light font-medium mb-4 transition-colors"
                        >
                            <ChevronLeft size={20} className="mr-1" />
                            Back to all articles
                        </Link>
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-4xl">
                            {post.title}
                        </h1>
                        <div className="flex flex-wrap items-center text-primary-light gap-y-2 gap-x-6">
                            <div className="flex items-center">
                                <Calendar size={18} className="mr-2" />
                                <span>{post.date}</span>
                            </div>
                            <div className="flex items-center">
                                <Clock size={18} className="mr-2" />
                                <span>{post.readingTime} min read</span>
                            </div>
                            <div className="flex items-center">
                                <User size={18} className="mr-2" />
                                <span>{post.author.name}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 mb-10 animate-slide-up">
                        <div
                            className="prose prose-lg max-w-none prose-headings:text-primary-dark prose-a:text-primary-medium prose-a:no-underline hover:prose-a:underline"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        <div className="mt-10 pt-8 border-t border-gray-200">
                            {/* <TagList tags={post.tags} className="mb-6" /> */}

                            <div className="flex items-center">
                                <img
                                    width={25}
                                    height={25}
                                    src={post.author.avatar}
                                    alt={post.author.name}
                                    className="w-12 h-12 rounded-full mr-4 object-cover"
                                />
                                <div>
                                    <h3 className="font-medium text-primary-dark">About the author</h3>
                                    <p className="text-gray-600">{post.author.name}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <h3 className="text-xl font-semibold text-primary-dark mb-6">Continue Reading</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {blogPosts
                                .filter(p => p.id !== post.id)
                                .slice(0, 2)
                                .map(relatedPost => (
                                    <Link
                                        key={relatedPost.id}
                                        href={`/post/${relatedPost.id}`}
                                        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col animate-slide-up"
                                    >
                                        <div className="h-40 overflow-hidden">
                                            <img
                                            width={25}
                                            height={25}
                                                src={relatedPost.coverImage}
                                                alt={relatedPost.title}
                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="p-6 flex-1 flex flex-col">
                                            <h4 className="text-lg font-medium text-primary-dark mb-2 hover:text-primary-medium transition-colors">
                                                {relatedPost.title}
                                            </h4>
                                            <p className="text-gray-600 mb-4 text-sm line-clamp-2">{relatedPost.excerpt}</p>
                                            <div className="mt-auto flex items-center justify-between">
                                                <span className="text-primary-light text-sm">{relatedPost.category}</span>
                                                <span className="text-gray-500 text-sm flex items-center">
                                                    <Clock size={14} className="mr-1" />
                                                    {relatedPost.readingTime} min
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
