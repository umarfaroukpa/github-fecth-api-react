import { useState } from 'react';

function RepoModal({ isOpen, onClose, onSubmit, repo = null }) {
  const [name, setName] = useState(repo ? repo.name : '');
  const [description, setDescription] = useState(repo ? repo.description : '');

  if (!isOpen) return null;

  const handleSubmit = () => {
    const formData = {
      name,
      description
    };
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-black bg-opacity-30" onClick={onClose}></div>
        
        <div className="bg-white rounded-lg shadow-xl z-10 w-full max-w-md">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">
              {repo ? 'Update Repository' : 'Create New Repository'}
            </h3>
          </div>
          
          <div className="p-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="repo-name" className="block text-sm font-medium text-gray-700 mb-1">
                  Repository Name
                </label>
                <input
                  id="repo-name"
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter repository name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              
              <div>
                <label htmlFor="repo-desc" className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  id="repo-desc"
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter repository description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
          
          <div className="px-6 py-4 bg-gray-50 flex justify-end space-x-3 rounded-b-lg">
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700"
              onClick={handleSubmit}
            >
              {repo ? 'Update' : 'Create'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RepoModal;