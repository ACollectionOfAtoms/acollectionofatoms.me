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
import './index.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`david adam hernandez`, `acollectionofatoms`, `developer nyc`]} />
    <h2 className='centerText'>Hello </h2>
    <img className='centeredImage' src={internet} />
    <h2 className='centerText'>Traveller</h2>
    <img className='centeredImage' src={startrek} />
    <p> This is a <a href='https://en.wikipedia.org/wiki/Website'>website</a> created by <span> David</span> <a href='https://en.wikipedia.org/wiki/Adam_(given_name)'> Adam</a> Hernandez (No one calls him <span> David</span>). </p>
    <img className='centeredImage' src={trumpetskull} />
    <p>This collection of atoms obtained a B.S in <a href='https://en.wikipedia.org/wiki/Bioinformatics'>Biochemistry-Computation</a> from the esteemed <a href='https://www.utexas.edu/'>University of Texas at Austin</a>.</p>
    <img className='centeredImage' src={creepyeye} /> 
    <p> Nowadays he is only using the computation side of his degree as a <a href='https://en.wikipedia.org/wiki/Software_engineer'>software engineer</a> living in <a href='https://en.wikipedia.org/wiki/New_York_City'> New York City</a> (Such a lovely place!).</p>
    <img className='centeredImage' src={exer} />
    <p>If you'd like to talk shop, feel free to <a href="mailto:davidatomhernandez@gmail.com">contact</a> him.</p>
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <img className='centeredImage' src={dancer1} />
      <img className='centeredImage' src={dancer2} />
    </div>
  </Layout>
)

export default IndexPage
