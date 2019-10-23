import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import {addToFavorites, removeFromFavorites} from "../../store/actions/favoritesActions";
import {getCurrenciesList, getIsCurrenciesLoading} from '../../store/selectors/currenciesSelectors'
import {getFavoritesCodesList} from "../../store/selectors/favoritesSelectors";
import {getActiveScreen} from "../../store/selectors/screenSelectors";
import {FAVORITES_SCREEN, ALL_CURRENCIES_SCREEN} from "../../store/constants";
import { Table, Spinner } from 'reactstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart as Favorite} from "@fortawesome/free-solid-svg-icons/faHeart";
import {faHeart as NotFavorite} from "@fortawesome/free-regular-svg-icons/faHeart";

class TableComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currenciesList: props.currenciesList
    }
  }
  
  static getDerivedStateFromProps (nextProps) {
    if(nextProps.activeScreen === FAVORITES_SCREEN) {
      const currenciesList = nextProps.currenciesList.filter(item => nextProps.favoriteCodes.includes(item.code))
      return {
        currenciesList
      }
    } else if (nextProps.activeScreen === ALL_CURRENCIES_SCREEN) {
      return {
        currenciesList: nextProps.currenciesList
      }
    }
  }
  
  render() {
    const {isLoading, favoriteCodes, addToFavorites, removeFromFavorites} = this.props
    return (
      <Fragment>
        {
          isLoading ?
            <div className="d-flex justify-content-center"><Spinner className="mt-4" color="dark" /></div> :
            <Table>
              <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Code</th>
                <th>Value</th>
                <th/>
              </tr>
              </thead>
              <tbody>
              {
                this.state.currenciesList.map((item, index) => (
                  <tr key={item.code}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.currency}</td>
                    <td>{item.code}</td>
                    <td>{item.mid}</td>
                    <td>
                      {
                        favoriteCodes.includes(item.code) ?
                          <FontAwesomeIcon
                            icon={Favorite}
                            size="lg"
                            onClick={() => removeFromFavorites(item.code)}
                          /> :
                          <FontAwesomeIcon
                            icon={NotFavorite}
                            size="lg"
                            onClick={() => addToFavorites(item.code)}
                          />
                      }
                    </td>
                  </tr>
                ))
              }
              </tbody>
            </Table>
        }
      </Fragment>
    )
  }
}

export default connect(
  state => ({
    currenciesList: getCurrenciesList(state),
    isLoading: getIsCurrenciesLoading(state),
    favoriteCodes: getFavoritesCodesList(state),
    activeScreen: getActiveScreen(state),
  }),
  dispatch => ({
    addToFavorites: code => dispatch(addToFavorites(code)),
    removeFromFavorites: code => dispatch(removeFromFavorites(code)),
  })
)(TableComponent)