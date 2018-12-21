import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hello Traveller</h1>
    <p> This is a <a href='https://en.wikipedia.org/wiki/Website'>website</a> created by <span> David</span> <a href='https://en.wikipedia.org/wiki/Adam_(given_name)'> Adam</a> Hernandez (No one calls him <span> David</span>). </p>
    <p>This collection of atoms obtained a B.S in <a href='https://en.wikipedia.org/wiki/Bioinformatics' target='_blank'>Biochemistry-Computation</a> from the esteemed <a href='https://www.utexas.edu/' target='_blank'>University of Texas at Austin</a>.</p>
    <p> Nowadays he is only using the computation side of his degree as a <a href='https://en.wikipedia.org/wiki/Software_engineer'>software engineer</a> 
      living in <a href='https://en.wikipedia.org/wiki/New_York_City'> New York City</a> (Such a lovely place!).</p>

    <p>If you'd like to talk shop, feel free to <a href='#contact'>contact</a> him.</p>
  </Layout>
)

export default IndexPage
