import React from 'react';
import {Segment, Grid} from 'semantic-ui-react'
import './Home.css'

const Home = (props) => {
    return(
        <>
          <Segment id="homeintro" style={{ padding: '8em 0em', height: '40em' }} vertical>
            <Grid container stackable verticalAlign='middle'>
            </Grid>
          </Segment>
        </>
    )
}

export default Home;