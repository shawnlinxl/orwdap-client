import React from 'react';
import {Responsive, Segment, Image} from 'semantic-ui-react'
import './Home.css'
import Girls from '../../assets/images/africangirls.jpg'

const Home = (props) => {
    return(
        <>
        <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Image src={Girls} width="100%"/>
        </Responsive>

        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Segment id="homeintro" style={{height: '40em' }} vertical>
          </Segment>
        </Responsive>
        </>
    )
}

export default Home;