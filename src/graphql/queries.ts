import gql from 'graphql-tag'

export const QUERY_LAUNCHES = gql`
  query Launches {
    launches {
      mission_id
      mission_name
      details
      launch_date_utc
      launch_year
      links {
        article_link
        flickr_images
      }
    }
  }
`
