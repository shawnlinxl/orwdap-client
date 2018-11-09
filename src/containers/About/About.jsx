import React from 'react';
import {Segment, Grid, Header, Image} from 'semantic-ui-react'
import './About.css'

const imgTextHeader =  {
    color: 'white',
    fontSize: '4em',
    fontFamily: 'Montserrat'
}

const imgTextBody =  {
    color: 'white',
    fontSize: '2em',
    fontFamily: 'Montserrat'
}

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

const About = (props) => {
    return(
        <>
          <Segment id="aboutintro" style={{ padding: '8em 0em', height: '40em' }} vertical>
            <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
                <Grid.Column width={8}>
                    <Header style={imgTextHeader} as='h1'> ORWDAP </Header>
                    <p style={imgTextBody}>
                        The Organisation for Rural Women’s Development Association for Progress
                    </p>
                </Grid.Column>
            </Grid.Row>
            </Grid>
          </Segment>

          <Segment style={{ padding: '2em 0em'}} basic>
            <Grid container stackable verticalAlign='middle'>
            <Grid.Row centered>
                <Grid.Column width={4}>
                    <Header style={TextHeader} as='h1'> Our Story </Header>
                </Grid.Column>
                <Grid.Column width={10} style={TextBody}>
                    The Organisation for Rural Women’s Development Association for Progress (ORWDAP) was initiated in 1990 and gained its registered status in 1998 by a group of women whose main objective was to meet the needs of women living in remote areas. The organisation has since evolved to include other activities such as leadership development, healthcare development and community outreach, all with the focus of developing and empowering women in rural areas.
                </Grid.Column>
            </Grid.Row>
            </Grid>
          </Segment>

          <Segment style={{ padding: '2em 0em'}} basic>
            <Grid container stackable  verticalAlign='middle'>
            <Grid.Row centered reversed="computer tablet">
                <Grid.Column width={4}>
                    <Header style={TextHeader} as='h1'> Our Team </Header>
                </Grid.Column>
                <Grid.Column width={10}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <Image src='https://react.semantic-ui.com/images/avatar/large/elliot.jpg' inline circular size='small' />
                            </Grid.Column>
                            <Grid.Column width={12} style={TextBody}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptatibus, deleniti saepe provident nisi at minus doloremque pariatur minima, qui iusto illum eligendi quidem doloribus, repellat sequi nesciunt laboriosam impedit.
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width={4}>
                                <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' inline circular size='small' />
                            </Grid.Column>
                            <Grid.Column width={12} style={TextBody}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi iste, eum commodi facilis dolores odio sit cum fugiat quidem aliquam! Neque repudiandae accusamus perferendis inventore culpa ad ullam ipsam necessitatibus.
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width={4}>
                                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' inline circular size='small' />
                            </Grid.Column>
                            <Grid.Column width={12} style={TextBody}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi iste, eum commodi facilis dolores odio sit cum fugiat quidem aliquam! Neque repudiandae accusamus perferendis inventore culpa ad ullam ipsam necessitatibus.
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
               

            </Grid.Row>
            </Grid>
          </Segment>
        </>
    )
}

export default About;