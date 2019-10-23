import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import {fetchAllCurrencies} from '../store/actions/currenciesActions'
import NavPanel from "./NavPanel";
import TableComponent from "./TableComponent";

class App extends Component {
  componentDidMount() {
    this.props.fetchAllCurrencies()
  }
  
  render() {
    return (
      <Fragment>
        <NavPanel/>
        <TableComponent/>
      </Fragment>
    )
  }
}

export default connect(
  null,
  dispatch => ({
    fetchAllCurrencies: () => dispatch(fetchAllCurrencies())
  })
)(App);