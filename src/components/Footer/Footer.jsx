import React from 'react';
import {Link} from 'react-router-dom';
import {Segment, Grid, Container, Header, List, Button} from 'semantic-ui-react';

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
                    <Header inverted as="h4">info@orwdap.org</Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width = {16}>
                        <Button circular color='linkedin' icon='linkedin' as='a' href='https://www.linkedin.com/company/orwdap/'/>
                        <Button circular color='facebook' icon='facebook'/>
                        <Button circular color='twitter' icon='twitter' />
                        <Button circular color='google plus' icon='google plus' />
                    </Grid.Column>
                </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    )
}

export default Footer;