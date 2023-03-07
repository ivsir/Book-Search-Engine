import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      books {
        authors {
          _id
        }
        description
        bookId
        title
        image
        link
      }
      }
    }
  }
`;
