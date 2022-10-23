import {Link} from 'react-router-dom'
import {Component} from 'react'
import {BsBrightnessHigh} from 'react-icons/bs'
import {FaMoon} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  NavbarContainer,
  NavLogo,
  NavItems,
  MenuOptionsSm,
  ThemeButton,
  LogoutButton,
  ProfileImage,
  NavItemsMd,
} from './styledComponent'

class Navbar extends Component {
  state = {isMenuVisible: false}

  onToggleMenu = () => {
    this.setState(prevState => ({isMenuVisible: !prevState.isMenuVisible}))
  }

  render() {
    const {isMenuVisible} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {onToggleTheme, isDarkTheme} = value

          const toggleTheme = () => {
            onToggleTheme()
          }

          return (
            <>
              <NavbarContainer theme={isDarkTheme}>
                <NavLogo
                  src={
                    isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                />
                <NavItems>
                  <ThemeButton onClick={toggleTheme}>
                    {isDarkTheme ? (
                      <BsBrightnessHigh size="60%" fill="white" />
                    ) : (
                      <FaMoon size="60%" />
                    )}
                  </ThemeButton>
                  <ThemeButton onClick={this.onToggleMenu}>
                    <GiHamburgerMenu
                      size="60%"
                      fill={isDarkTheme ? 'white' : 'black'}
                    />
                  </ThemeButton>
                  <ThemeButton>
                    <FiLogOut
                      size="60%"
                      color={isDarkTheme ? 'white' : 'black'}
                    />
                  </ThemeButton>
                </NavItems>
                <NavItemsMd>
                  {isDarkTheme ? (
                    <BsBrightnessHigh
                      size="10%"
                      fill="white"
                      onClick={toggleTheme}
                      cursor="pointer"
                    />
                  ) : (
                    <FaMoon size="10%" onClick={toggleTheme} cursor="pointer" />
                  )}

                  <ThemeButton>
                    <ProfileImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                      alt="profile"
                    />
                  </ThemeButton>
                  <LogoutButton theme={isDarkTheme}>Logout</LogoutButton>
                </NavItemsMd>
              </NavbarContainer>
              <MenuOptionsSm theme={isDarkTheme} visible={isMenuVisible}>
                <Link to="/" text-decoration="none" color="black">
                  Home
                </Link>
                <Link to="/trending">Trending</Link>
                <Link to="/gaming">Gaming</Link>
                <Link to="/saved-videos">Saved videos</Link>
              </MenuOptionsSm>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Navbar
