import "./App.css";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useState } from "react";
import data from "./asset/data";

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

      <div className="jumbotron">
        <h1>20% Season Off</h1>
        <p>
          This is a simple unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </div>

      <div className="container">
        <div className="row">
          {/*<div className="col-md-4">*/}
          {/*  <img*/}
          {/*    src="https://codingapple1.github.io/shop/shoes1.jpg"*/}
          {/*    width="100%"*/}
          {/*    alt="1"*/}
          {/*  />*/}
          {/*  <h4>{shoes[0].title}</h4>*/}
          {/*  <p>{shoes[0].content}</p>*/}
          {/*  <p>{shoes[0].price}</p>*/}
          {/*</div>*/}
          {/*<div className="col-md-4">*/}
          {/*  <img*/}
          {/*    src="https://codingapple1.github.io/shop/shoes2.jpg"*/}
          {/*    width="100%"*/}
          {/*    alt="2"*/}
          {/*  />*/}
          {/*  <h4>{shoes[1].title}</h4>*/}
          {/*  <p>{shoes[1].content}</p>*/}
          {/*  <p>{shoes[1].price}</p>*/}
          {/*</div>*/}
          {/*<div className="col-md-4">*/}
          {/*  <img*/}
          {/*    src="https://codingapple1.github.io/shop/shoes3.jpg"*/}
          {/*    width="100%"*/}
          {/*    alt="3"*/}
          {/*  />*/}
          {/*  <h4>{shoes[2].title}</h4>*/}
          {/*  <p>{shoes[2].content}</p>*/}
          {/*  <p>{shoes[2].price}</p>*/}
          {/*</div>*/}
          {data.map((key, id) => {
            return <Item data={data[id]} id={id} />;
          })}
        </div>
      </div>
    </div>
  );

  function Item(props) {
    return (
      <div className="col-md-4">
        <img
          src={"https://codingapple1.github.io/shop/shoes" + (props.id+1) + ".jpg"}
          width="100%"
          alt={ props.key }
        />
        <h4>{props.data.title}</h4>
        <p>{props.data.content}</p>
        <p>{props.data.price}원</p>
      </div>
    );
  }
}

export default App;
