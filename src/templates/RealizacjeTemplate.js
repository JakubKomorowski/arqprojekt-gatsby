import React from "react"
import { graphql } from "gatsby"
import MainTemplate from "./MainTemplate"
import PostTemplate from "./PostTemplate"
import SEO from "../components/seo"

const options = {
  buttons: {
    showDownloadButton: false,
    showAutoplayButton: false,
    showThumbnailsButton: false,
  },
}

const RealizacjeTemplate = ({ data }) => {
  const { title, description, gallery } = data.datoCmsRealizacja
  return (
    <MainTemplate>
      <SEO title={title} />
      <PostTemplate
        title={title}
        description={description}
        gallery={gallery}
        options={options}
      />
    </MainTemplate>
  )
}

export const query = graphql`
  query singleRealizacjaQuery($slug: String!) {
    datoCmsRealizacja(slug: { eq: $slug }) {
      title
      slug
      description
      gallery {
        url
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
      featuredImage {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`

export default RealizacjeTemplate
