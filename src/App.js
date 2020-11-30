import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { MainPage } from './components/Main/MainPage';

import './App.css';
import 'antd/dist/antd.css';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer e8c4ef22590e41600132cbad4abecbf831c04677`,
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
