import React, { useState } from 'react';
import { CardProps, Status } from '@/types/card';

interface AddStoryFormProps {
  onSubmit: (story: CardProps) => void;
  onClose: () => void;
}

const AddStoryForm: React.FC<AddStoryFormProps> = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    category: '',
    status: 'Draft' as Status,
    views: 0
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const date = new Date().toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      });
      onClose()
    alert("This is a Dummy Form")
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
    <div>
      <label className="block text-sm font-medium mb-1" style={{ color: 'var(--color-gray)' }}>
        Title
      </label>
      <input
        type="text"
        required
        value={formData.title}
        onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
        className="w-full px-3 py-2 rounded-lg focus:ring-2"
        style={{
          backgroundColor: 'var(--color-background)',
          color: 'var(--color-foreground)',
          border: '1px solid var(--color-gray)',
          outlineColor: 'var(--color-active)'
        }}
      />
    </div>
  
    <div>
      <label className="block text-sm font-medium mb-1" style={{ color: 'var(--color-gray)' }}>
        Image URL
      </label>
      <input
        type="url"
        required
        value={formData.image}
        onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
        className="w-full px-3 py-2 rounded-lg focus:ring-2"
        style={{
          backgroundColor: 'var(--color-background)',
          color: 'var(--color-foreground)',
          border: '1px solid var(--color-gray)',
          outlineColor: 'var(--color-active)'
        }}
      />
    </div>
  
    <div>
      <label className="block text-sm font-medium mb-1" style={{ color: 'var(--color-gray)' }}>
        Category
      </label>
      <input
        type="text"
        required
        value={formData.category}
        onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value.toUpperCase() }))}
        className="w-full px-3 py-2 rounded-lg focus:ring-2"
        style={{
          backgroundColor: 'var(--color-background)',
          color: 'var(--color-foreground)',
          border: '1px solid var(--color-gray)',
          outlineColor: 'var(--color-active)'
        }}
      />
    </div>
  
    <div>
      <label className="block text-sm font-medium mb-1" style={{ color: 'var(--color-gray)' }}>
        Status
      </label>
      <select
        value={formData.status}
        onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value as CardProps['status'] }))}
        className="w-full px-3 py-2 rounded-lg focus:ring-2"
        style={{
          backgroundColor: 'var(--color-background)',
          color: 'var(--color-foreground)',
          border: '1px solid var(--color-gray)',
          outlineColor: 'var(--color-active)'
        }}
      >
        <option value="draft">Draft</option>
        <option value="pending">Pending</option>
        <option value="published">Published</option>
        <option value="archived">Archived</option>
      </select>
    </div>
  
    <div className="flex justify-end space-x-3 pt-4" style={{ borderTop: '1px solid var(--color-gray)' }}>
      <button
        type="button"
        onClick={onClose}
        className="px-4 py-2 text-sm font-medium rounded-lg transition-colors"
        style={{
          color: 'var(--color-gray)',
          backgroundColor: 'transparent',
        }}
      >
        Cancel
      </button>
      <button
        type="submit"
        className="px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors"
        style={{
          backgroundColor: 'var(--color-active)',
        }}
      >
        Add Story
      </button>
    </div>
  </form>
  
  );
};

export default AddStoryForm;