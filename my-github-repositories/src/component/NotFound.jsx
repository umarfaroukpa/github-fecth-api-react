import { Container, Heading, Button } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <Container pt={70}>
            <Heading>404 - Not Found</Heading>
            <p>The page you are looking for does not exist.</p>
            <Link to="/">
                <Button mt={4} colorScheme="blue">Go back to main page</Button>
            </Link>
        </Container>
    );
}

export default NotFound;
