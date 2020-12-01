import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { MainPage } from './components/Main/MainPage';

import './App.css';
import 'antd/dist/antd.css';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: 'Bearer cbf2ec11463bc6e096550e0fdd917bba15a2e0cd',
    'Content-Type': 'application/json',
  },
});

function App() {
  return (
    <ApolloProvider client={client}>
      <MainPage />
    </ApolloProvider>
  );
}

export default App;
