import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { MainPage } from './components/Main/MainPage';

import './App.css';
import 'antd/dist/antd.css';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer e98d9a220d8001c580b133e08185f9e926917070`,
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
