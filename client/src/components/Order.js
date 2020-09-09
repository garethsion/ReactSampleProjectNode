/**
* Each purchase order has a snapshot view on the landong page, within a card.
* This class contains the card and styling necessary to render the snapshot,
* pulling data from the context api.
*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { POConsumer } from '../context';
// import styled from 'styled-components';

export default class Order extends Component {
  render() {
    // const {id, orderDetails, total, creationDate} = this.props.order;
    return (
      <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          {/* <POConsumer>
            {(value)=>(
                <div className="img-container p-5"
                onClick={()=>value.handleDetail(id)
            }>
            <Link to="/details" className="text-dark">
              <h2>{orderDetails.orderName}</h2>
              <p>{orderDetails.orderSummary}</p>
              <p><span className="mr-1">
                <b>Created:</b>
              </span>{creationDate}</p>
            </Link>
          </div>)}

          </POConsumer> */}

          {/* card footer */}
          <div className="card-footer d-flex justify-content-between">
            {/* <p className="align-self-center mb-0">{orderDetails.orderId}</p> */}
            <h5 className="text-dark font-italic mb-0">
              <span className="mr-1">£</span>
              {/* {total} */}
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

// const OrderWrapper = styled.div `
//   .card {
//     border-color:  transparent;
//     transition: all 1s linear;
//     width: 17rem;
//     height: 34rem
//   }
//   .card-footer{
//     background: transparent;
//     border-top: transparent;
//     transition: all 1s linear;
//   }
//   &:hover{
//     .card{
//       border: 0.04rem solid rgba(0,0,0,0.2);
//       box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
//     }
//     .card-footer{
//       background: rgba(247, 247, 247);
//     }
//   }
//   .img-container{
//     position: relative;
//     overflow: hidden;
//   }
//   .card-img-top{
//     transition: all 1s linear;
//   }
//   .img-container:hover .card-img-top{
//     transform: scale(1.6);
//   }
// `;
