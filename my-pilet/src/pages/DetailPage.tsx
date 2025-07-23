import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { Post } from '../types';

const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation<{ post?: Post }>();
  const passedPost = location.state?.post;
  const [data, setData] = useState<Post | null>(passedPost ?? null);

  useEffect(() => {
    if (passedPost) {
      return;
    }
    let cancelled = false;
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then((post: Post) => {
        if (!cancelled) {
          setData(post);
        }
      });
    return () => {
      cancelled = true;
    };
  }, [id, passedPost]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <Link to="/dashboard" className="text-blue-600 hover:underline">
        &larr; Back to Dashboard
      </Link>
      <h1 className="text-2xl font-bold mt-4 mb-2">{data.title}</h1>
      <p className="text-gray-700">{data.body}</p>
    </div>
  );
};
export default DetailPage;
