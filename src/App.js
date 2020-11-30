import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { MainPage } from './components/Main/MainPage';

import './App.css';
import 'antd/dist/antd.css';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
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
