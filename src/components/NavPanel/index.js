import React, {useState} from 'react';
import {connect} from 'react-redux'
import {setActiveScreen} from "../../store/actions/screenActions";
import {getActiveScreen} from "../../store/selectors/screenSelectors"
import {getFavoritesCodesCount} from "../../store/selectors/favoritesSelectors";
import {FAVORITES_SCREEN, ALL_CURRENCIES_SCREEN} from "../../store/constants";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  Badge,
  Collapse,
  NavbarToggler,
} from 'reactstrap';
import './styles.css'

const NavPanel = ({setActiveScreen, activeScreen, favoriteCount}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  return (
    <div className="Navbar">
      <Navbar color="dark" dark expand="md">
        <NavbarBrand tabIndex="0" className="navbar navbar-dark" >Currency List</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Button
                onClick={() => setActiveScreen(ALL_CURRENCIES_SCREEN)}
                className={activeScreen === ALL_CURRENCIES_SCREEN ? 'active' : ''}
                color="link"
              >All Currencies</Button>
            </NavItem>
            <NavItem>
              <Button
                onClick={() => setActiveScreen(FAVORITES_SCREEN)}
                className={activeScreen === FAVORITES_SCREEN ? 'active' : ''}
                color="link"
              >Favorites <Badge color="secondary">{favoriteCount}</Badge></Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default connect(
  state => ({
    activeScreen: getActiveScreen(state),
    favoriteCount: getFavoritesCodesCount(state)
  }),
  dispatch => ({
    setActiveScreen: screen => dispatch(setActiveScreen(screen))
  })
)(NavPanel);