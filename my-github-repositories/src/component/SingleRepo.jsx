import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Container, Heading, Box } from '@chakra-ui/react';

function RepoPage({ repoId, navigateToHome }) {
    const [repo, setRepo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchRepo = async () => {
        try {
          setLoading(true);
          const response = await fetch(`https://api.github.com/repositories/${repoId}`);
          
          if (!response.ok) {
            throw new Error('Failed to fetch repository details');
          }
          
          const data = await response.json();
          setRepo(data);
          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      };
  
      if (repoId) {
        fetchRepo();
      }
    }, [repoId]);
  
    return (
      <div className="max-w-4xl mx-auto">
        <button
          onClick={navigateToHome}
          className="flex items-center gap-1 text-purple-800 hover:text-purple-600 mb-4 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to repositories</span>
        </button>
        
        <div className="bg-purple-800 rounded-lg shadow-xl overflow-hidden">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-white mb-6">Repository Details</h1>
            
            {loading ? (
              <div className="flex justify-center items-center py-10">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
              </div>
            ) : error ? (
              <div className="text-white bg-red-500 p-4 rounded-md">
                Error: {error}
              </div>
            ) : !repo ? (
              <div className="text-white text-center py-8">
                Repository not found
              </div>
            ) : (
              <div className="bg-purple-700 rounded-lg p-6 text-white">
                <h2 className="text-2xl font-bold mb-4">{repo.name}</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-purple-300 text-sm">Repository Name</h3>
                    <p>{repo.full_name}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-purple-300 text-sm">Description</h3>
                    <p>{repo.description || 'No description available'}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-purple-300 text-sm">Language</h3>
                      <p>{repo.language || 'Not specified'}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-purple-300 text-sm">Stars</h3>
                      <p className="flex items-center gap-1">
                        <Star size={16} />
                        {repo.stargazers_count}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-purple-300 text-sm">Forks</h3>
                      <p>{repo.forks_count}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-purple-300 text-sm">Created At</h3>
                      <p>{new Date(repo.created_at).toLocaleDateString()}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-purple-300 text-sm">Repository URL</h3>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-purple-200 hover:text-white transition-colors"
                    >
                      {repo.html_url}
                      <ExternalLink size={16} />
                    </a>
                  </div>
                  
                  <div className="pt-4">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-md transition-colors"
                    >
                      <Github size={16} />
                      View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

export default RepoPage;