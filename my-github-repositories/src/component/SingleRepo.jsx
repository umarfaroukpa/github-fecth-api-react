import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Container, Heading, Box } from '@chakra-ui/react';

function SingleRepo() {
    const { id } = useParams();
    const [repo, setRepo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRepo = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`https://api.github.com/repositories/${id}`);
                setRepo(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchRepo();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!repo) return <div>Repository not found</div>;

    return (
        <Container pt={70}>
            <Box>{repo.full_name}</Box>
            <Box>Description: {repo.description}</Box>
            <Box>Language: {repo.language}</Box>
            <Box>Stars: {repo.stargazers_count}</Box>
            <Box>URL: <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.html_url}</a></Box>
            <Link to="/">
                <Button m={6} p={1} colorScheme="blue">Back To Main Page</Button>
            </Link>
        </Container>
    );
}

export default SingleRepo;

