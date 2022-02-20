import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import "./Detail.scss";
import { CSSTransition } from "react-transition-group";

let Box = styled.div`
  padding-top: 30px;
`;

let Title = styled.h4`
  font-size: 25px;
  color: ${(props) => props.color};
`;

function Detail(props) {
  const [hideModal, hideModalEdit] = useState(true);
  const [inputData, inputDataEdit] = useState("");
  const [tapState, tapStateEdit] = useState(0);
  const [transition, transitionEdit] = useState(false)

  useEffect(() => {
    // axios.get('') // 최초 렌더링, 업데이트 시 실행, 업데이트 시 실행안되게 하려면 deps에 []
    const timer = setTimeout(() => {
      hideModalEdit(false);
    }, 2000);
    console.log("rerendering");
    return () => {
      clearTimeout(timer);
    };
  }, [hideModal]);

  const history = useHistory();
  const { params } = useParams();

  const findItemId = props.shoes.find((item) => item.id == params);

  return (
    <div className="container">
      <Box>
        <Title className="red">Detail</Title>
      </Box>
      {inputData}&nbsp;
      <input
        onChange={(e) => {
          inputDataEdit(e.target.value);
        }}
      />
      {hideModal === true ? (
        <div className="detailAlert-yellow">
          <p>재고가 얼마 남지 않았습니다.</p>
        </div>
      ) : null}
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
          <Info inventory={props.inventory}></Info>
          <button
            className="btn btn-danger"
            onClick={() => {
              history.push("/");
            }}
          >
            뒤로가기
          </button>
          &nbsp;
          <button
            className="btn btn-danger"
            onClick={() => {
              props.inventoryEdit([9, 11, 12]);
            }}
          >
            주문하기
          </button>
        </div>
      </div>
      <Nav className="mt-5" variant="tabs" defaultActiveKey="tap0">
        <Nav.Item>
          <Nav.Link
            eventKey="tap0"
            onClick={() => {
              transitionEdit(false)
              tapStateEdit(0);
            }}
          >
            Tap State 0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="tap1"
            onClick={() => {
              transitionEdit(false)
              tapStateEdit(1);
            }}
          >
            Tap State 1
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <CSSTransition in={transition} classNames="tapTransition" timeout={1000}>
        <TapContent tapState={tapState} transitionEdit={transitionEdit} />
      </CSSTransition>

    </div>
  );
}

function TapContent(props) {
  useEffect(()=>{
    props.transitionEdit(true)
  })

  if (props.tapState === 0) {
    return <div>tapState : 0</div>;
  } else if (props.tapState === 1) {
    return <div>tapState : 1</div>;
  }
}

function Info(props) {
  return <p>재고 : {props.inventory[0]}</p>;
}

export default Detail;
