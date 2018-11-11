import React from 'react';
import './Volunteer.css'
import { Segment, Container, Header } from 'semantic-ui-react';

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

const Volunteer = (props) => {
    return(
        <Segment basic>
        <Container>
        <Header style={TextHeader} as="h1">Volunteer</Header>

        <div style={TextBody}>
        We are looking for volunteers who are committed to women’s rights and community development. Whatever skills or experience you have to offer, we have a range of opportunities available, including:
 
        <ul>
            <li>
            Vocational training: Opportunities for people with good knowledge/experience in business development, leadership and IT to share their talent with women in the community.
            </li>

            <li>
            Healthcare Development: Opportunities for medical/nursing/public health students/professional to help run our health workshop and develop our health guides for women across Central & West Africa
            </li>

            <li>
            Children’s development: Opportunities for people who are passionate about child development and education; developing lessons and creative workshops for children who aren’t able to go to school.
            </li>
        </ul>

        Contact us at: info@orwdap.org
        </div>
        
        </Container>
        </Segment>
    )
}

export default Volunteer;