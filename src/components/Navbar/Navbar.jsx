import React, { Component } from 'react'
import { Responsive, Visibility, Segment, Container, Menu, Sidebar, Icon, Button} from 'semantic-ui-react'
import Logo from '../../assets/images/logo.png'

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { children } = this.props

    return (
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
                <img src={Logo} alt="Girls Enterprise Logo" style={{height: "74px", width: "188px"}}/>
              </Menu.Item>

              <Menu.Item
                name='home'
                active={this.state.activeItem === 'home'}
                onClick={this.handleItemClick}
              >
                Home
              </Menu.Item>

              <Menu.Item
                name='about'
                active={this.state.activeItem === 'about'}
                onClick={this.handleItemClick}
              >
                About
              </Menu.Item>

            </Menu>
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

class MobileContainer extends Component {
  state = {}

  handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { children } = this.props

    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='uncover' vertical visible={this.state.sidebarOpened}>
              <Menu.Item>
                <img src={Logo} alt="Girls Enterprise Logo" style={{height: "74px", width: "188px"}}/>
              </Menu.Item>

              <Menu.Item
                name='home'
                active={this.state.activeItem === 'home'}
                onClick={this.handleItemClick}
              >
                Home
              </Menu.Item>

              <Menu.Item
                name='about'
                active={this.state.activeItem === 'about'}
                onClick={this.handleItemClick}
              >
                About
              </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher
            dimmed={this.state.sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: '100vh' }}
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
                </Menu>
              </Container>
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
) 

export default ResponsiveContainer;