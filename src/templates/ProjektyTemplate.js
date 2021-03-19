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
  const { title, description, gallery } = data.datoCmsProjekt
  // const [bigImage, setBigImage] = useState({ ...gallery[0] })

  // const openImage = url => {
  //   const filteredGallery = gallery.find(el => el.url === url)
  //   setBigImage(filteredGallery)
  //   console.log(filteredGallery)
  // }

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
  query singleProjektQuery($slug: String!) {
    datoCmsProjekt(slug: { eq: $slug }) {
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

export default ProjektyTemplate
