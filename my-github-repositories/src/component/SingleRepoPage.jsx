import React from 'react';
import SingleRepo from './SingleRepo';
import { useParams } from 'react-router-dom';
import { Heading, Box, Container } from '@chakra-ui/react';

function SingleRepoPage() {
    const { id } = useParams();

    return (
        <Container mt={[4, 8]} border borderRadius={10} maxW='2xl' bg='blue.600' centerContent>
            <Heading>Single Repository Details</Heading>
            <SingleRepo id={id} />
        </Container>
    );
}

export default SingleRepoPage;

