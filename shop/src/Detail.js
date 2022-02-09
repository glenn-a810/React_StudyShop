import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import "./Detail.scss";

let Box = styled.div`
  padding-top: 30px;
`;

let Title = styled.h4`
  font-size: 25px;
  color: ${(props) => props.color};
`;

function Detail(props) {
  useEffect(()=>{
    // const timer = setTimeout(()=>{},2000)
    // return ()=>{}
  })

  const history = useHistory();
  const { params } = useParams();

  const findItemId = props.shoes.find((item) => item.id == params);

  return (
    <div className="container">
      <Box>
        <Title className="red">Detail</Title>
      </Box>

      <div className="detailAlert-yellow">
        <p>재고가 얼마 남지 않았습니다.</p>
      </div>

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
