import React, { useReducer, useState } from 'react';
import AddItemForm from '../components/AddItemForm';
import Pagination from '../components/Pagination';
import { Post } from '../types';
import { ItemList } from '../components/ItemList';

interface DashboardPageProps {
  data: Post[];
}

type Action =
  | { type: 'add'; post: Post }
  | { type: 'init'; posts: Post[] };

function postsReducer(state: Post[], action: Action): Post[] {
  switch (action.type) {
    case 'init':
      return action.posts;
    case 'add':
      return [action.post, ...state];
    default:
      return state;
  }
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ data }) => {
  const [posts, dispatch] = useReducer(postsReducer, data);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = () => {
    const newPost: Post = {
      id: Date.now(),
      title,
      body,
    };
    dispatch({ type: 'add', post: newPost });
    setTitle('');
    setBody('');
  };

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const displayedPosts = posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  return (
    <div className="max-w-full p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <div className="flex flex-col lg:flex-row">
        <div className="w-full mb-6 lg:mb-0 lg:mr-6 lg:w-1/3">
          <AddItemForm
            title={title}
            body={body}
            onTitleChange={setTitle}
            onBodyChange={setBody}
            onAdd={handleSubmit}
            disabled={!title || !body}
          />
        </div>
        <div className="flex-1">
          <ItemList posts={displayedPosts} />
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
      </div>
    </div>
  );
};
