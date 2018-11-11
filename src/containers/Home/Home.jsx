import React from 'react';
import {Responsive, Segment, Image, Grid, Header, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import './Home.css';
import Girls from '../../assets/images/empowergirls.png';

const imgTextHeader =  {
    color: 'white',
    fontSize: '3em',
    fontFamily: 'Montserrat',
}

const Home = (props) => {
    return(
        <>
        <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Image src={Girls} width="100%"/>
        </Responsive>

        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Segment id="homeintro" style={{height: '40em', padding: "10em 0 0 8em" }} vertical>
            <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
                <Grid.Column width={8}>
                    <Header style={imgTextHeader} as='h1'> Empowering women in rural communities </Header>
                    <Button as={Link} to="/about" style={{fontSize: "1.5em"}}> Learn More </Button>
                </Grid.Column>
            </Grid.Row>
            </Grid>
          </Segment>
        </Responsive>
        </>
    )
}

export default Home;