import React, { useState } from 'react';

import { AutoComplete, Spin } from 'antd';

import { gql, useQuery } from '@apollo/client';

import './style.css';

export const MainPage = () => {
  const { Option } = AutoComplete;
  console.log(process.env.REACT_APP_GITHUB_ACCESS_TOKEN);
  const [searchValue, setSearchValue] = useState('');
  const GET_VIEW = gql`
query {
  search(
    query: "user:facebook repo:react is:open is:issue in:title ${
      searchValue ?? ''
    }"
    type:ISSUE,
    first: 20,
  ) {
    issueCount
    edges {
      node {
        ... on Issue { 
          title
          url
          labels(first: 5) {
            edges { node { name, color } }
          }
        }
      }
    }
  }
}
`;

  const { loading, error, data } = useQuery(GET_VIEW);
  const res = data?.search?.edges?.map((elem) => elem.node);

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  const handleClick = (url) => {
    setSearchValue('');
    window.open(url);
  };

  if (error) return `Error! ${error.message}`;

  return (
    <div className="main">
      <h1>GutHub Issues search</h1>
      <div className="wrapper">
        <AutoComplete
          style={{
            width: '100%',
          }}
          onSearch={handleSearch}
          placeholder="input here"
          value={searchValue}
        >
          {searchValue.length > 1 &&
            res?.map((item) => (
              <Option key={item.url} value={item.title}>
                <div className="item" onClick={() => handleClick(item.url)}>
                  {item.title}
                  <div className="label_list">
                    {item.labels.edges.map((label) => (
                      <p
                        className="label"
                        style={{
                          backgroundColor: `#${label.node.color}`,
                        }}
                        key={label.node.name}
                      >
                        {label.node.name}
                      </p>
                    ))}
                  </div>
                </div>
              </Option>
            ))}
        </AutoComplete>
        {loading && (
          <Spin style={{ position: 'absolute', right: '1%', top: '5px' }} />
        )}
      </div>
    </div>
  );
};
