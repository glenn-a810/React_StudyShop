import "./App.css";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import React, { useContext, useState } from "react";
import data from "./asset/data";
import { Link, Route, Switch } from "react-router-dom";
import Detail from "./Detail";
import axios from "axios";
import Cart from "./Cart";

export const inventoryContext = React.createContext();

function App() {
  const [shoes, shoesEdit] = useState(data);
  const [inventory, inventoryEdit] = useState([10, 11, 12]);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Dev Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/detail">
              Detail
            </Nav.Link>
            <Nav.Link as={Link} to="/detail/0">
              Detail0
            </Nav.Link>
            <Nav.Link as={Link} to="/detail/1">
              Detail1
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Switch>
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
            <inventoryContext.Provider value={inventory}>
              <div className="row">
                {shoes.map((key, id) => {
                  return <Item data={shoes[id]} id={id} key={id} />;
                })}
              </div>
            </inventoryContext.Provider>
            <button
              onClick={() => {
                axios
                  .get("https://codingapple1.github.io/shop/data2.json")
                  .then((res) => {
                    shoesEdit([...shoes, ...res.data]);
                    console.log(shoes);
                  })
                  .catch((e) => {
                    console.log(e);
                  });
              }}
              className="btn btn-primary"
            >
              더보기
            </button>
          </div>
        </Route>

        <Route path="/detail/:params">
          <Detail
            shoes={shoes}
            inventory={inventory}
            inventoryEdit={inventoryEdit}
          />
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>

        <Route path="/:id">
          <div>아무거나 적었을 때 이거 보여짐</div>
        </Route>

      </Switch>
    </div>
  );

  function Item(props) {
    const inventory = useContext(inventoryContext);

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
        {inventory[props.id]}
      </div>
    );
  }
}

export default App;
