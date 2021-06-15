import React from 'react';

import styles from '../styles/Home.module.css';

import {
  Button,
  Container,
  Row,
  Col
} from 'reactstrap';

import IndexNavbar from '../components/IndexNavbar';
import IndexHeader from '../components/IndexHeader';
import DarkFooter from '../components/DarkFooter';

import { Form } from 'reactstrap'

export default function Home() {
  React.useEffect(() => {
    
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
        <div className="section section-about-us">
          <Container>
            <Row id="acercade">
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Quienes somos</h2>
                <h5 className="description">
                  KIDNEYS brinda Servicio Nefrológico Integral y de Calidad, 
                  priorizando la atención personalizada, al paciente portador 
                  de la enfermedad renal.
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style ={{
                      backgroundImage:
                        "url('/img/landing-bg-1.jpg')",
                    }}
                  >
                    <p className="blockquote blockquote-info">
                      "Iniciar tu día bebiendo 
                      un simple vaso de agua simple
                      es una excelente manera 
                      de cuidar tus riñones.
                      " <br></br>
                      Cuida tu salud!
                      <br></br>
                      <small>-Kidneys</small>
                    </p>
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                      "url('/img/landing-bg-4.jpg')",
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url('/img/landing-bg-2.jpg')",
                    }}
                  ></div>
                  <h3>
                    Con beneplácito agrado presentamos nuestro proyecto, 
                  </h3>
                  <p>
                    
                    hoy consolidado, que identificado como 
                    KIDNEYS SRL - SERVICIO DE NEFROLOGIA -, 
                    permite acrecentar las prestaciones que en materia de 
                    servicio de salud reafirma el posicionamiento del prestigioso 
                    Sanatorio Argentino en nuestra ciudad y la región.
                  </p>
                  <p>
                    Conforma KIDNEYS SRL un equipo de profesionales 
                    especialistas e idóneos en su ámbito de especificidad 
                    para brindar un servicio nefrológico integral y de calidad, 
                    priorizando la atención personalizada al paciente portador 
                    de la enfermedad renal.
                  </p>
                  <p>
                    Las prestaciones de KIDNEYS SRL comprenden tratamiento 
                    de hemodiálisis en pacientes agudos y crónicos, cobertura 
                    permanente de guardias pasivas y consultorios nefrológicos 
                    a cargo del Dr. Homero Gonzalez y la Dra. Amelia De Mont; 
                    complementándose con consultorios de nutrición a cargo de la 
                    Lic. Marta Gonzalez y psicología a cargo de la Lic. Natalia Gonzalez.
                  </p>
                  <p>
                    Con la convicción de la dedicación profesional responsable 
                    y la certeza de los principios fundantes que configuran a 
                    KIDNEYS SRL como “un Servicio al servicio de los Pacientes”, 
                    agradecemos a Uds. su decidido apoyo.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-team text-center">
          <Container id="conocenos">
            <h2 className="title">Nuestro equipo</h2>
            <div className="team">
              <Row>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src="/img/avatar.jpg"
                    ></img>
                    <h4 className="title">Lic. Natalia Gonzalez</h4>
                    <p className="category text-info">Psicologa</p>
                    <p className="description">
                      Lorem Ipsum es simplemente el texto de relleno de 
                      las imprentas y archivos de texto. Lorem Ipsum ha sido 
                      el texto de relleno estándar de las industrias desde 
                      el año 1500, cuando un impresor (N. del T. persona que se 
                      dedica a la imprenta) desconocido usó una galería de textos y 
                      los mezcló de tal manera que logró hacer un libro de textos 
                      especimen.{" "}
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src="/img/ryan.jpg"
                    ></img>
                    <h4 className="title">Dr. Homero Gonzalez</h4>
                    <p className="category text-info">Nefrologo</p>
                    <p className="description">
                      No sólo sobrevivió 500 años, sino que tambien 
                      ingresó como texto de relleno en documentos electrónicos, 
                      quedando esencialmente igual al original.{" "}
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-linkedin"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src="/img/eva.jpg"
                    ></img>
                    <h4 className="title">Lic. Marta Gonzalez</h4>
                    <p className="category text-info">Nutricionista</p>
                    <p className="description">
                      Fue popularizado en los 60s con la creación de las hojas 
                      "Letraset", las cuales contenian pasajes de Lorem Ipsum, 
                      y más recientemente con software de autoedición, como por 
                      ejemplo Aldus PageMaker, el cual incluye versiones de 
                      Lorem Ipsum.{" "}
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-google-plus"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-youtube"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        </div>
        <DarkFooter />
      </div>
    </>
  )
}
