import React from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";

function Cart(props) {
  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <td>상품명</td>
            <td>수량</td>
            <td>변경</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{props.state[0].name}</td>
            <td>{props.state[0].quan}</td>
            <td>Table Cell</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

function stateProps(state) {
  return {
    state: state,
  };
}

export default connect(stateProps)(Cart);
// export default Cart;
