import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Container, Navbar, Nav, Media, Carousel } from "react-bootstrap";
import NavLink from "react-bootstrap/NavLink";

import "./App.css";

library.add(fab);

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: []
    };
  }

  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
      .then(response => response.json())
      .then(data => {
        return this.setState({ photos: data });
      });
  };

  render() {
    return (
      <div className="App">
        <Container fluid={true} className="p-0" controls={true}>
          <Navbar bg="dark" variant="dark" expand="md">
            <Navbar.Brand href="#home">
              <FontAwesomeIcon icon={["fab", "react"]} className="mr-1" spin />
              Reactstrap
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <NavLink>Teste</NavLink>
                <NavLink>Teste</NavLink>
                <NavLink>Teste</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Container>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block mx-auto img-carousel"
                  alt="First Slide"
                  src="https://via.placeholder.com/300/0000FF"
                />
                <Carousel.Caption>
                  <h3>First Title Caption</h3>
                  <p>First Slide description</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block mx-auto img-carousel"
                  alt="First Slide"
                  src="https://via.placeholder.com/300/00FF00"
                />
                <Carousel.Caption>
                  <h3>First Title Caption</h3>
                  <p>First Slide description</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block mx-auto img-carousel"
                  alt="First Slide"
                  src="https://via.placeholder.com/300/FF0000"
                />
                <Carousel.Caption>
                  <h3>First Title Caption</h3>
                  <p>First Slide description</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Container>

          <Container className="pt-3 section-body">
            {this.state.photos.map(photo => (
              <Media className="pt-3" key={photo.id}>
                <img
                  width={150}
                  height={150}
                  className="mr-3"
                  src={photo.thumbnailUrl}
                  alt="Generic placeholder"
                />

                <Media.Body>
                  <h5>{photo.title}</h5>
                  <p>Media Body</p>
                </Media.Body>
              </Media>
            ))}
          </Container>

          <Container
            fluid={true}
            className="pt-3 footer text-center bg-dark text-light"
          >
            <Container className="d-flex justify-content-around col-12 col-md-6">
              <div>
                <FontAwesomeIcon
                  icon={["fab", "facebook-square"]}
                  className="mr-1"
                />
                Facebook
              </div>
              <div>
                <FontAwesomeIcon icon={["fab", "linkedin"]} className="mr-1" />
                Linkedin
              </div>
              <div>
                <FontAwesomeIcon
                  icon={["fab", "github-square"]}
                  className="mr-1"
                />
                GitHub
              </div>
            </Container>
          </Container>
        </Container>
      </div>
    );
  }
}
