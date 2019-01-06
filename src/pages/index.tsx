import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import internet from '../images/internet1.gif';
import startrek from '../images/startrek.gif';
import trumpetskull from '../images/trumpetskull.gif';
import creepyeye from '../images/creepyeye.gif';
import dancer1 from '../images/dancer1.gif';
import dancer2 from '../images/dancer2.gif';
import exer from '../images/excercise.gif';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hello </h1> 
    <img src={internet} />
    <h1>Traveller</h1>
    <img src={startrek} />
    <p> This is a <a href='https://en.wikipedia.org/wiki/Website'>website</a> created by <span> David</span> <a href='https://en.wikipedia.org/wiki/Adam_(given_name)'> Adam</a> Hernandez (No one calls him <span> David</span>). </p>
    <img src={trumpetskull} />
    <p>This collection of atoms obtained a B.S in <a href='https://en.wikipedia.org/wiki/Bioinformatics' target='_blank'>Biochemistry-Computation</a> from the esteemed <a href='https://www.utexas.edu/' target='_blank'>University of Texas at Austin</a>.</p>
    <img src={creepyeye} /> 
    <p> Nowadays he is only using the computation side of his degree as a <a href='https://en.wikipedia.org/wiki/Software_engineer'>software engineer</a> living in <a href='https://en.wikipedia.org/wiki/New_York_City'> New York City</a> (Such a lovely place!).</p>
    <img src={exer} />
    <p>If you'd like to talk shop, feel free to <a href='#contact'>contact</a> him.</p>
    <img src={dancer1} />
    <img src={dancer2} />
  </Layout>
)

export default IndexPage
