import gql from "graphql-tag";

//for the homePage
export const GET_ALL_BARS = gql`
  query AllBars {
    bars {
      id
      name
      imageUrl
      desc
      numberOfTables
    }
  }
`;
