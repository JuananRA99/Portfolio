import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/foro.png";
import projImg2 from "../assets/img/consultas.png";
import projImg3 from "../assets/img/adopcion.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
  const projects = [
    {
      title: "Cursos",
      description: "Foro en el que se resuelven dudas sobre los cursos comprados",
      imgUrl: projImg1,
    },
    {
      title: "Consultas",
      description: "Gestión de consultas y compra de consultas",
      imgUrl: projImg2,
    },
    {
      title: "Adopción",
      description: "Aplicación en la que se facilita la adopción de animales",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Proyectos</h2>
              <p>Estos son algunos de los proyectos que he hecho</p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((project, index) => (
                        <ProjectCard
                          key={index}
                          {...project}
                        />
                      ))}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  )
}

export default Projects;
