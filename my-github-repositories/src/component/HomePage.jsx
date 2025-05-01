import React from 'react';
import { Link } from 'react-router-dom';
import ReposList from './ReposList';
import { Box, Center, Container, Flex, Heading } from '@chakra-ui/react';

function HomePage({ navigateToRepo }) {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="bg-purple-800 rounded-lg shadow-xl p-6 mb-8">
                <h1 className="text-3xl font-bold text-white text-center mb-6">
                    My GitHub Repositories Portfolio
                </h1>

                <ReposList navigateToRepo={navigateToRepo} />
            </div>
        </div>
    );
}

export default HomePage;
