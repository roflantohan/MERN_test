import App from './App';
import {
    ApolloProvider,
} from "@apollo/client";
import client from "./realm_apollo/client"


const AppWithApollo = () => {
  //console.log(client)
  return(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  )
}

export default AppWithApollo;