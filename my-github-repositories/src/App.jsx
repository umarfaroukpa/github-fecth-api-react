import React from 'react';
import { Route, BrowserRouter, Link, Switch } from 'react-router-dom';
import SingleRepoPage from './component/SingleRepoPage';
import NotFound from './component/NotFound';
import ErrorBoundary from './component/ErrorBoundary'
import HomePage from './component/HomePage';
import { Box, Center } from '@chakra-ui/react';
import CreateOrUpdateRepoModal from './component/CreateOrUpdateRepoModal';
import { color } from 'framer-motion';


function App() {
  return (
    <ErrorBoundary>
      <HomePageLink />
      <Switch>
        <Route path="/" exact>
          <HomePage />
          <CreateOrUpdateRepoModal />
        </Route>
        <Route path="/repos/:id" component={SingleRepoPage} />
        <Route component={NotFound} />
      </Switch>
      < Footer />
    </ErrorBoundary>
  );
}


const HomePageLink = () => (
  <Box position="absolute" top="0" left="0" padding="1rem" ml={10} color={'#fff'}>
    <Link to="/">Home</Link>
  </Box>
);

function Footer() {
  return (
    <footer className="bg-purple-800 text-white p-4 text-center">
      <p>By Umar Farouk Ilyas &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}


export default App;











