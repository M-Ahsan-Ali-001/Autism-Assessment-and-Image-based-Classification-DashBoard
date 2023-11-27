const Realm = require("realm-web");
const { ApolloClient, InMemoryCache } = require("@apollo/client");
const { RestLink } = require("apollo-link-rest");
const gql = require("graphql-tag");

// Set up the RestLink
const restLink = new RestLink({
  uri: '', // replace with your API URL
});

// Set up the ApolloClient
const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});

// Define the query
const query = gql`
  query {
    users @rest(type: "User", path: "/users") {
      id
      name
      
    }
  }
`;

// Fetch the data
client.query({ query })
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
