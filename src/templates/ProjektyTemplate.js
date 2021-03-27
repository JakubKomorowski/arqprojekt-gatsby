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

const ProjektyTemplate = ({ data }) => {
  const { title, mainDescription, gallery } = data.datoCmsProjekt

  return (
    <MainTemplate>
      <SEO title={title} />
      <PostTemplate
        title={title}
        description={mainDescription}
        gallery={gallery}
        options={options}
      />
    </MainTemplate>
  )
}

export const query = graphql`
  query singleProjektQuery($slug: String!) {
    datoCmsProjekt(slug: { eq: $slug }) {
      title
      slug
      mainDescription
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

export default ProjektyTemplate
