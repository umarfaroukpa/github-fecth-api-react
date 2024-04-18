// src/component/GithubPortfolio.jsx

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import queryString from 'query-string';

// function ReposList() {
//   const [repositories, setRepositories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const queryParams = queryString.stringify({
//           per_page: 10,
//           sort: 'updated',
//         });
//         const response = await axios.get(`https://api.github.com/users/umarfaroukpa/repos?${queryParams}`);
//         setRepositories(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError(error); // Make sure error object is set properly
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []); // Make sure to pass an empty dependency array to useEffect

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>; // Make sure to display error message properly

//   return (
//     <div>
//       <h2>My GitHub Repositories</h2>
//       <ul>
//         {repositories.map((repo) => (
//           <li key={repo.id}>{repo.full_name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ReposList;

// src/component/GithubPortfolio.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import queryString from 'query-string';

function ReposList() {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRepositories, setFilteredRepositories] = useState([]);

  const repositoriesPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const queryParams = queryString.stringify({
          per_page: repositoriesPerPage,
          page: currentPage,
          sort: 'updated',
        });
        const response = await axios.get(`https://api.github.com/users/umarfaroukpa/repos?${queryParams}`);
        setRepositories(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage]); // Trigger useEffect when currentPage changes

  useEffect(() => {
    setFilteredRepositories(
      repositories.filter(repo => repo.full_name.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery, repositories]); // Trigger useEffect when searchQuery or repositories change

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>My GitHub Repositories</h2>
      <input type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Search repositories" />
      <ul>
        {filteredRepositories.map((repo) => (
          <li key={repo.id}>{repo.full_name}</li>
        ))}
      </ul>
      <Pagination currentPage={currentPage} totalPages={Math.ceil(filteredRepositories.length / repositoriesPerPage)} onPageChange={handlePageChange} />
    </div>
  );
}

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      {pageNumbers.map((number) => (
        <button key={number} onClick={() => onPageChange(number)}>{number}</button>
      ))}
    </div>
  );
}

export default ReposList;
