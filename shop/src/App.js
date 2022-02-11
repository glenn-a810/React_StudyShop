import "./App.css";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useState } from "react";
import data from "./asset/data";
import { Link, Route, Switch } from "react-router-dom";
import Detail from "./Detail";

function App() {
  const [shoes, shoesEdit] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Dev Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
            <Nav.Link>Pricing</Nav.Link>
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
            <div className="row">
              {data.map((key, id) => {
                return <Item data={data[id]} id={id} key={id} />;
              })}
            </div>
          </div>
        </Route>

        <Route path="/detail/:params">
          <Detail shoes={shoes} />
          {/*<Detail shoes={data} />*/}
        </Route>

        <Route path="/:id">
          <div>아무거나 적었을 때 이거 보여짐</div>
        </Route>
      </Switch>
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
