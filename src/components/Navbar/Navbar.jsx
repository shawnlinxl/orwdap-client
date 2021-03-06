import React, { Component } from 'react'
import {Responsive, Visibility, Segment, Container, Menu, Sidebar, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import Logo from '../../assets/images/logo.png'
import LogoSquare from '../../assets/images/logo_square.png'

class NavbarAuto extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { children } = this.props

    return (
      <>
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            textAlign='center'
            style={{ minHeight: 80, padding: '0em 0em' }}
            vertical
          >
            <Menu
              secondary={!this.state.fixed}
              size='large'
            >

              <Menu.Item>
                <img src={Logo} alt="ORWDAP Logo" style={{height: "74px", width: "74px"}}/>
              </Menu.Item>

              <Menu.Item
                name='home'
                active={this.state.activeItem === 'home'}
                onClick={this.handleItemClick}
                as={Link}
                to="/"
              >
              Home
              </Menu.Item>

              <Menu.Item
                name='about'
                active={this.state.activeItem === 'about'}
                onClick={this.handleItemClick}
                as={Link}
                to="/about"
              >
              About
              </Menu.Item>

              <Menu.Item
                name='programmes'
                active={this.state.activeItem === 'programmes'}
                onClick={this.handleItemClick}
                as={Link}
                to="/programmes"
              >
              Programmes
              </Menu.Item>

              <Menu.Item
                name='volunteer'
                active={this.state.activeItem === 'volunteer'}
                onClick={this.handleItemClick}
                as={Link}
                to="volunteer"
              >
              Volunteer
              </Menu.Item>


            </Menu>
          </Segment>
        </Visibility>

        {children}
      </Responsive>

      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='overlay' vertical visible={this.state.sidebarOpened}>
              <Menu.Item>
                <img src={Logo} alt="ORWDAP Logo" style={{height: "74px", width: "74px"}}/>
              </Menu.Item>

              <Menu.Item
                name='home'
                active={this.state.activeItem === 'home'}
                onClick={this.handleItemClick}
                as={Link}
                to="/"
              >
              Home
              </Menu.Item>

              <Menu.Item
                name='about'
                active={this.state.activeItem === 'about'}
                onClick={this.handleItemClick}
                as={Link}
                to="/about"
              >
              About
              </Menu.Item>

              <Menu.Item
                name='programmes'
                active={this.state.activeItem === 'programmes'}
                onClick={this.handleItemClick}
                as={Link}
                to="/programmes"
              >
              Programmes
              </Menu.Item>

              <Menu.Item
                name='volunteer'
                active={this.state.activeItem === 'volunteer'}
                onClick={this.handleItemClick}
                as={Link}
                to="volunteer"
              >
              Volunteer
              </Menu.Item>
            </Sidebar>

          <Sidebar.Pusher
            dimmed={this.state.sidebarOpened}
            onClick={this.handlePusherClick}
          >
            <Segment
              textAlign='center'
              vertical
            >
              <Container>
                <Menu secondary size='small'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                    <img src={LogoSquare} alt="ORWDAP Logo"/>
                  </Menu.Item>
                </Menu>
              </Container>
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>

      </>
    )
  }
}

const Navbar = ({ children }) => (
  <>
    <NavbarAuto>{children}</NavbarAuto>
  </>
) 

export default Navbar;