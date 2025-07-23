import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { Post } from '../types';

const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation<{ post?: Post }>();
  const passedPost = location.state?.post;
  const [data, setData] = useState<Post | null>(passedPost ?? null);
  const [isLoading, setIsLoading] = useState<boolean>(!passedPost);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (passedPost) {
      return;
    }
    const controller = new AbortController();
    const { signal } = controller;

    const fetchPost = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { signal });
        if (!res.ok) {
          // Handle HTTP errors like 404
          throw new Error(`Failed to fetch post. Status: ${res.status}`);
        }
        const post: Post = await res.json();
        setData(post);
      } catch (err) {
        // Handle fetch errors and throws error(s)
        if (err instanceof Error && err.name !== 'AbortError') {
            setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchPost();

    return () => {
      controller.abort();
    };
  }, [id, passedPost]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
        <div className="max-w-3xl mx-auto p-4 text-red-600">
            <h1 className="text-2xl font-bold">An Error Occurred</h1>
            <p>{error}</p>
            <Link to="/dashboard" className="text-blue-600 hover:underline mt-4 block">
                ← Go back to Dashboard
            </Link>
        </div>
    );
  }

  if (!data) {
    return <div>Post not found.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <Link to="/dashboard" className="text-blue-600 hover:underline">
        ← Back to Dashboard
      </Link>
      <h1 className="text-2xl font-bold mt-4 mb-2">{data.title}</h1>
      <p className="text-gray-700">{data.body}</p>
    </div>
  );
};

export default DetailPage;