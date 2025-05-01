import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Box, Button, ButtonGroup, Flex, Input, Stack, Text, } from '@chakra-ui/react';
import CreateOrUpdateRepoModal from './CreateOrUpdateRepoModal';

function ReposList({ navigateToRepo }) {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const perPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Replace with your GitHub username
        const response = await fetch(
          `https://api.github.com/users/umarfaroukpa/repos?page=${page}&per_page=${perPage}`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        
        const data = await response.json();
        setRepositories(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCreateOrUpdate = (formData) => {
    console.log('FormData:', formData);
    // API implementation would go here
    setIsModalOpen(false);
  };

  const handleDelete = (repoId) => {
    console.log('Deleting repo with ID:', repoId);
    // API implementation would go here
  };

  const filteredRepositories = repositories.filter((repo) =>
    repo.full_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="relative flex-1 max-w-md">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 bg-purple-700 border-purple-600 rounded-md text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Search repositories..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-1 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors ml-4"
        >
          <Plus size={18} />
          <span>New Repo</span>
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-10">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      ) : error ? (
        <div className="text-white bg-red-500 p-4 rounded-md">
          Error: {error}
        </div>
      ) : (
        <>
          <div className="space-y-3 mb-6">
            {filteredRepositories.length === 0 ? (
              <div className="text-center text-white py-8">
                No repositories found
              </div>
            ) : (
              filteredRepositories.map((repo) => (
                <RepoCard 
                  key={repo.id} 
                  repo={repo} 
                  onClick={() => navigateToRepo(repo.id)}
                  onDelete={() => handleDelete(repo.id)}
                />
              ))
            )}
          </div>

          <div className="flex justify-center mt-6">
            <div className="flex space-x-2">
              <button
                onClick={prevPage}
                disabled={page === 1}
                className={`flex items-center gap-1 px-4 py-2 rounded-md ${
                  page === 1
                    ? 'bg-purple-700 text-purple-300 cursor-not-allowed'
                    : 'bg-purple-600 hover:bg-purple-700 text-white'
                } transition-colors`}
              >
                <ChevronLeft size={18} />
                <span>Previous</span>
              </button>
              
              <span className="flex items-center px-4 py-2 bg-purple-700 text-white rounded-md">
                Page {page}
              </span>
              
              <button
                onClick={nextPage}
                className="flex items-center gap-1 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                <span>Next</span>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </>
      )}

      {isModalOpen && (
        <RepoModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleCreateOrUpdate}
        />
      )}
    </div>
  );
}

export default ReposList;