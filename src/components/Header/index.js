import React from 'react'
import Link from 'gatsby-link'
import { Segment, Container, Menu, Icon } from 'semantic-ui-react'

const Header = ({ history: { location: { pathname } } }) => (
  <div>
    <Menu
      borderless
      style={styles.menu}>
      <Container>
        <Menu.Item
          as={Link}
          to='/'
          active={pathname === '/'}
          style={styles.button}
        >
          Erik McComb's Blog
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item
            as={Link}
            to='/about'
            active={pathname === '/about'}
            style={styles.button}
          >
            About
          </Menu.Item>

          <Menu.Item
            as={Link}
            to='/projects'
            active={pathname === '/projects'}
            style={styles.button}
          >
            Projects
          </Menu.Item>

          <Menu.Item
            as={Link}
            to='/resume'
            active={pathname === '/resume'}
            style={styles.button}         
          >
            Resume
          </Menu.Item>
          
          <Menu.Item>
            <a href='https://www.facebook.com/OneTrueErik' target="_blank">
              <Icon name='facebook' size='huge' /> 
            </a>
          </Menu.Item>
          
          <Menu.Item>
            <a href='https://twitter.com/ErikMccomb' target="_blank">
              <Icon name='twitter' size='huge' />
            </a>
          </Menu.Item>
          
          <Menu.Item>
            <a href='https://www.instagram.com/itserikwith_a_k/' target="_blank">
              <Icon name='instagram' size='huge' />
            </a>
          </Menu.Item>
          
          <Menu.Item>
            <a href='https://github.com/erikmccomb' target="_blank">
              <Icon name='github' size='huge' />
            </a>
          </Menu.Item>
          
        </Menu.Menu>
      </Container>
    </Menu>
  </div>
)

const styles = {
  menu: {
    backgroundColor: '#0a0908',
    marginBottom: '1vh',
    height: '15vh',
    width: '100%',
    display: 'flex',
    borderRadius: 0,
  },
  button: {
    color: '#03f7eb',
  }
}

export default Header