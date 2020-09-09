/**
* Landing page, displaying a snapshot of all purchase orders in the database.
* ToDo:
* 1. Work out how to sort the data, anbd provide a sorting dropdown Menu
* 2. Allow for multiple pages, with a maximum of 12 PO's shown per page.
*/

import React, { Component, Fragment} from 'react';
import Order from './Order';
// import {POConsumer} from '../context';

class PurchaseOrderList extends Component {

  render() {
    return (
      <Fragment>
        <div className="py-5">
          <div className="container">
            <div className="row">
                <Order />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default PurchaseOrderList;
