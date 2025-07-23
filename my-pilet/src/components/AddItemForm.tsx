import React from 'react';
import InputField  from './InputField';

export interface AddItemFormProps {
  title: string;
  body: string;
  onTitleChange: (value: string) => void;
  onBodyChange: (value: string) => void;
  onAdd: () => void;
  disabled?: boolean;
}

const AddItemForm: React.FC<AddItemFormProps> = ({
  title,
  body,
  onTitleChange,
  onBodyChange,
  onAdd,
  disabled = false,
}) => (
  <div className="bg-white rounded-lg shadow p-4 w-full max-w-sm">
    <div className="flex items-center mb-4">
      <h2 className="text-xl font-semibold">Add New Item</h2>
    </div>
    <InputField label="Title" value={title} onChange={onTitleChange} placeholder="Enter item title..." />
    <InputField label="Body" value={body} onChange={onBodyChange} textarea placeholder="Enter item description..." />
    <button
      onClick={onAdd}
      disabled={disabled}
      className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed mt-4"
    >
      Add Item
    </button>
  </div>
);

export default AddItemForm;
