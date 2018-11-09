import React from 'react';
import './Programmes.css'
import {Segment, Grid, Header} from 'semantic-ui-react'

const TextHeader = {
    fontSize: '2em',
    fontFamily: 'Montserrat',
    textAlign: "center",
    textTransform: "uppercase"
};

const TextBody = {
    fontSize: '1.3em',
    lineHeight: '1.5em',
    fontFamily: 'Montserrat'
};

const Programmes = (props) => {
    return(
        <>
          <Segment id="healthcarephoto" style={{height: '30em' }} vertical> </Segment>

            <Segment style={{ padding: '6em 0em', minHeight: '30em'}} basic>
            <Grid container stackable verticalAlign='middle'>
            <Grid.Row centered>
                <Grid.Column width={4}>
                    <Header style={TextHeader} as='h1'> Healthcare </Header>
                </Grid.Column>
                <Grid.Column width={8} style={TextBody}>
                ORWDAP believes that empowered women are the key to transforming communities; we have therefore developed Girls enterprise, a new social enterprise whose is mission is to ensure women have the strength and support to drive this development.
                </Grid.Column>
            </Grid.Row>
            </Grid>
            </Segment>

            <Segment id="classroomphoto" style={{height: '30em' }} vertical> </Segment>

            <Segment style={{ padding: '6em 0em', minHeight: '30em'}} basic>
            <Grid container stackable verticalAlign='middle'>
            <Grid.Row centered reversed="computer tablet">
                <Grid.Column width={4}>
                    <Header style={TextHeader} as='h1'> Education & Training </Header>
                </Grid.Column>
                <Grid.Column width={8} style={TextBody}>
                Providing a safe space where women can thrive and achieve their full potential is something we believe to be a critical component in women’s development. ORWDAP focusses on developing young women’s skills and education through a variety of platforms:
                <ul>
                    <li> IT Classes</li>
                    <li> Entrepreneurship Classes</li>
                    <li> Leadership Classes</li>
                    <li> Accessible online courses via Girls Enterprise</li>
                </ul>
                </Grid.Column>
            </Grid.Row>
            </Grid>
            </Segment>
          
            <Segment id="childrenphoto" style={{height: '30em' }} vertical> </Segment>

            <Segment style={{ padding: '6em 0em', minHeight: '30em'}} basic>
            <Grid container stackable verticalAlign='middle'>
            <Grid.Row centered>
                <Grid.Column width={4}>
                    <Header style={TextHeader} as='h1'> Children </Header>
                </Grid.Column>
                <Grid.Column width={8} style={TextBody}>
                ORWDAP wants to ensure all members of the community have access to education and healthcare. When children don’t have access to education due to a variety of constraints, our classrooms are open to them for learning and creative workshops.
                </Grid.Column>
            </Grid.Row>
            </Grid>
          </Segment>
        </>
    )
}

export default Programmes;