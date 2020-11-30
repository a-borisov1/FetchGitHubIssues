import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { MainPage } from './components/Main/MainPage';

import './App.css';
import 'antd/dist/antd.css';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer 98a64ec31f23bb480f5db180ecfa6ee2246bebde`,
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
