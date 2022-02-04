import React from "react";
import { useHistory, useParams } from "react-router-dom";

function Detail(props) {
  const history = useHistory();
  const { params } = useParams();

  const findItemId = props.shoes.find((item) => {
    return item.id == params;
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
            alt="shoes1"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{findItemId.title}</h4>
          <p>{findItemId.content}</p>
          <p>{findItemId.price}원</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              // history.goBack();
              history.push("/");
            }}
          >
            뒤로가기
          </button>
          &nbsp;
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
