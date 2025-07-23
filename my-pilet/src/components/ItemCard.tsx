import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types';

interface Props {
  post: Post;
}

export const ItemCard: React.FC<Props> = ({ post }) => (
  <Link to={{ pathname: `/dashboard/${post.id}`, state: { post } }}>
    <div className="p-4 bg-white rounded-lg shadow mb-4">
      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-700">{post.body.substring(0, 100)}...</p>
    </div>
  </Link>
);
