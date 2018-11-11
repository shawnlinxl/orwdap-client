import React from 'react';
import {Responsive, Segment, Grid, Header, Image} from 'semantic-ui-react';
import "./Programmes.css"
import Doctors from "../../assets/images/healthcare.jpg";
import Classroom from "../../assets/images/education.jpg";
import Children from "../../assets/images/children.jpg";

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
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
            <Segment id="healthcarephoto" basic />
            <Segment style={{ padding: '4em 0em', minHeight: '35em'}} basic>
            <Grid container stackable verticalAlign='middle'>
            <Grid.Row centered>
                <Grid.Column width={6}>
                    <Header style={TextHeader} as='h1'> Healthcare </Header>
                </Grid.Column>
                <Grid.Column width={10} style={TextBody}>
                ORWDAP believes that empowered women are the key to transforming communities; we have therefore developed Girls enterprise, a new social enterprise whose is mission is to ensure women have the strength and support to drive this development.
                </Grid.Column>
            </Grid.Row>
            </Grid>
            </Segment>
        </Responsive>

        <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
            <Image src={Doctors} width="100%"/>
            <Segment style={{ padding: '2em 0em'}} basic>
            <Grid container stackable verticalAlign='middle'>
            <Grid.Row centered>
                <Grid.Column width={6}>
                    <Header style={TextHeader} as='h1'> Healthcare </Header>
                </Grid.Column>
                <Grid.Column width={10} style={TextBody}>
                ORWDAP believes that empowered women are the key to transforming communities; we have therefore developed Girls enterprise, a new social enterprise whose is mission is to ensure women have the strength and support to drive this development.
                </Grid.Column>
            </Grid.Row>
            </Grid>
            </Segment>

        </Responsive>



        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
            <Segment id="classroomphoto" basic />
            <Segment style={{ padding: '4em 0em', minHeight: '35em'}} basic>
            <Grid container stackable verticalAlign='middle'>
            <Grid.Row centered reversed="computer tablet">
                <Grid.Column width={6}>
                    <Header style={TextHeader} as='h1'> Education & Training </Header>
                </Grid.Column>
                <Grid.Column width={10} style={TextBody}>
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
        </Responsive>

        <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
            <Image src={Classroom} width="100%"/>
            <Segment style={{ padding: '2em 0em'}} basic>
            <Grid container stackable verticalAlign='middle'>
            <Grid.Row centered reversed="computer tablet">
                <Grid.Column width={6}>
                    <Header style={TextHeader} as='h1'> Education & Training </Header>
                </Grid.Column>
                <Grid.Column width={10} style={TextBody}>
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
        </Responsive>

        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
            <Segment id="childrenphoto" basic />

            <Segment style={{ padding: '4em 0em', minHeight: '35em'}} basic>
            <Grid container stackable verticalAlign='middle'>
            <Grid.Row centered>
                <Grid.Column width={6}>
                    <Header style={TextHeader} as='h1'> Children </Header>
                </Grid.Column>
                <Grid.Column width={10} style={TextBody}>
                ORWDAP wants to ensure all members of the community have access to education and healthcare. When children don’t have access to education due to a variety of constraints, our classrooms are open to them for learning and creative workshops.
                </Grid.Column>
            </Grid.Row>
            </Grid>
          </Segment>
        </Responsive>

        <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
            <Image src={Children} width="100%"/>

            <Segment style={{ padding: '2em 0em'}} basic>
            <Grid container stackable verticalAlign='middle'>
            <Grid.Row centered>
                <Grid.Column width={6}>
                    <Header style={TextHeader} as='h1'> Children </Header>
                </Grid.Column>
                <Grid.Column width={10} style={TextBody}>
                ORWDAP wants to ensure all members of the community have access to education and healthcare. When children don’t have access to education due to a variety of constraints, our classrooms are open to them for learning and creative workshops.
                </Grid.Column>
            </Grid.Row>
            </Grid>
          </Segment>
        </Responsive>
        </>
    )
}

export default Programmes;