import React, {Fragment} from 'react';
import {connect} from 'react-redux'
import {getCurrenciesList, getIsCurrenciesLoading} from '../../store/selectors/currenciesSelectors'
import { Table, Spinner } from 'reactstrap';

const TableComponent = ({currenciesList, isLoading}) => (
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
            currenciesList.map((item, index) => (
              <tr key={item.code}>
                <th scope="row">{index + 1}</th>
                <td>{item.currency}</td>
                <td>{item.code}</td>
                <td>{item.mid}</td>
                <td>+</td>
              </tr>
            ))
          }
          </tbody>
        </Table>
    }
  </Fragment>
  
)

export default connect(
  state => ({
    currenciesList: getCurrenciesList(state),
    isLoading: getIsCurrenciesLoading(state)
  })
)(TableComponent)