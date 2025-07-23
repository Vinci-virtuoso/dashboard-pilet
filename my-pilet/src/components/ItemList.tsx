import React from 'react';
import { Post } from '../types';
import { ItemCard } from './ItemCard';

interface Props {
  posts: Post[];
}

export const ItemList: React.FC<Props> = ({ posts }) => (
  <div className="space-y-4">
    {posts.map((post) => (
      <ItemCard key={post.id} post={post} />
    ))}
  </div>
);
