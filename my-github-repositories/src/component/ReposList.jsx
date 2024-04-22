import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Box, Button, ButtonGroup, Flex, Input, Stack, Text, } from '@chakra-ui/react';
import CreateOrUpdateRepoModal from './CreateOrUpdateRepoModal';

function ReposList() {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Number of repos per page
  const perPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.github.com/users/umarfaroukpa/repos?page=${page}&per_page=${perPage}`
        );
        setRepositories(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCreateOrUpdate = (formData) => {
    // Handle creation or update of repository
    console.log('FormData:', formData);
    // You can send a POST request to create a new repository or a PATCH request to update an existing one
    // You'll need to implement this based on your backend API
    // After successfully creating or updating, you can close the modal and fetch the updated list of repositories
    setIsModalOpen(false);
  };

  const handleDelete = (repoId) => {
    // Handle deletion of repository
    console.log('Deleting repo with ID:', repoId);
    // You can send a DELETE request to delete the repository with the specified ID
    // After successfully deleting, you can fetch the updated list of repositories
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Box>
      <Stack spacing={4} mb={4} mt={15}>
        <Input
          placeholder="Search by repository name..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </Stack>
      <Flex direction="column" gap={2} color={'#fff'} _hover={'#C8A2C8'} >
        {filteredRepositories.map((repo) => (
          <Box key={repo.id} p={4} borderWidth="1px" borderRadius="md">
            <Link to={`/repos/${repo.id}`}>
              <Text fontSize="lg">{repo.full_name}</Text>
            </Link>
          </Box>
        ))}
      </Flex>
      <Flex justify="space-around" mt={4}>
        <ButtonGroup>
          <Button colorScheme='teal' mb={2} w={100} onClick={prevPage} disabled={page === 1}>
            Previous
          </Button>
          <Button colorScheme='teal' mb={2} w={100} onClick={nextPage}>Next</Button>
        </ButtonGroup>
      </Flex>
      <Button position="absolute" top="0" right="0" padding="1rem" color={'#fff'} bg={'none'} mt={4} mr={10} onClick={() => setIsModalOpen(true)}>Create New Repo</Button>
      <CreateOrUpdateRepoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleCreateOrUpdate} />
    </Box>
  );
}

export default ReposList;



