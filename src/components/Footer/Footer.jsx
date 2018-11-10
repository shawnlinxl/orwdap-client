import React from 'react';
import {Link} from 'react-router-dom';
import {Segment, Grid, Container, Header, List} from 'semantic-ui-react';

const Footer = () => {
    return(
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
            <Container>
                <Grid divided inverted stackable>
                <Grid.Row>
                    <Grid.Column width={6}>
                    <Header inverted as={Link} to="/about" content='About' />
                    <List link inverted>
                        <List.Item as={Link} to="/">Sitemap</List.Item>
                        <List.Item as={Link} to="/">Contact Us</List.Item>
                    </List>
                    </Grid.Column>
                    <Grid.Column width={6}>
                    <Header inverted as={Link} to='/programmes' content='Programmes' />
                    <List link inverted>
                        <List.Item as={Link} to="/">Healthcare</List.Item>
                        <List.Item as={Link} to="/">Education</List.Item>
                        <List.Item as={Link} to="/">Children</List.Item>
                    </List>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width = {16}>
                    <Header inverted as="h4">@ORWDAP 2018. All rights reserved. Buea, South West Region, Cameroon</Header>
                    </Grid.Column>
                </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    )
}

export default Footer;