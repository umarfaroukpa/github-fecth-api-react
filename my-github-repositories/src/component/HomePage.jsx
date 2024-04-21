import React from 'react';
import { Link } from 'react-router-dom';
import ReposList from './ReposList';
import { Box, Center, Container, Flex, Heading } from '@chakra-ui/react';

function HomePage() {
    return (
        <Flex pt={42} minWidth={'max-content'} direction={'column'} align={'Center'} justify={'Center'}>
            <Container border borderRadius={15} maxW='2xl' bg='blue.600' centerContent>
                <Box>
                </Box>
                <Heading>My GitHub Repositories Portfolio</Heading>
                <ReposList />
            </Container>
        </Flex>
    );
}

export default HomePage;
