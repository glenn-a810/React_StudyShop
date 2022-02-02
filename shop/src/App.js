import "./App.css";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useState } from "react";
import data from "./asset/data";
import { Link, Route, Switch } from "react-router-dom";

function App() {
  const [shoes, shoesEdit] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Dev Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Route exact path="/">
        <div className="jumbotron">
          <h1>20% Season Off</h1>
          <p>
            This is a simple unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </div>

        <div className="container">
          <div className="row">
            {data.map((key, id) => {
              return <Item data={data[id]} id={id} />;
            })}
          </div>
        </div>
      </Route>
      <Route path="/detail">
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
              <h4 className="pt-5">상품명</h4>
              <p>상품설명</p>
              <p>120000원</p>
              <button className="btn btn-danger">주문하기</button>
            </div>
          </div>
        </div>
      </Route>
    </div>
  );

  function Item(props) {
    return (
      <div className="col-md-4">
        <img
          src={
            "https://codingapple1.github.io/shop/shoes" +
            (props.id + 1) +
            ".jpg"
          }
          width="100%"
          alt={props.key}
        />
        <h4>{props.data.title}</h4>
        <p>{props.data.content}</p>
        <p>{props.data.price}원</p>
      </div>
    );
  }
}

export default App;
