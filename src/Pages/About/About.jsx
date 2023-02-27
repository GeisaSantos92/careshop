import React from 'react'
import './About.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Person3 from'../../assets/p3.jpg'
import Person6 from'../../assets/p6.jpg'

export const About = () => {
  return (
    <section className="containerMax about">
         <div className="containers">
            <div className="banner-about">
                <h1>THE MOST SIGNIFICANT </h1>
                <h1>INOVATIONS</h1>
                <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto repellendus corrupti consectetur conse <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto repellendus corrupti 
                </p>
            </div>
            <div className="title-product">
              <hr />
              <h1>About Us</h1>
              <hr />
            </div>
            <div className="txt-about">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores porro sequi iusto dolorem alias dolor accusantium, commodi nostrum maxime quam debitis asperiores autem illo id, natus ipsa laudantium ea error!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores veniam mollitia obcaecati iste dolore quisquam sapiente fuga, accusantium similique animi veritatis ratione optio? Quas necessitatibus veniam quo adipisci praesentium suscipit.
                </p>
            </div>
            <div className="title-product">
              <hr />
              <h1>Team</h1>
              <hr />
            </div>
            <div className="team">
                <Container>
                    <Row>
                        <Col>
                            <img src={Person6}alt="" />
                            <h5>ANNA IVANOVA</h5>
                            <span>Marketing Department</span>
                        </Col>
                        <Col>
                            <img src={Person3} alt="" />
                            <h5>ALEXANDER SMIRNOV</h5>
                            <span>Purchasing Department</span>
                        </Col>
                        <Col>
                            <img src={Person6} alt="" />
                            <h5>MARIA VELASOVA</h5>
                            <span>Telemarketing</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img src={Person3} alt="" />
                            <h5>JOHN SMITH</h5>
                            <span>Territorial Manager </span>
                        </Col>
                        <Col>
                            <img src={Person3} alt="" />
                            <h5>PAUL DOWN</h5>
                            <span>Director</span>
                        </Col>
                        <Col>
                            <img src={Person6} alt="" />
                            <h5>KATERINE SANDERS</h5>
                            <span>SEO</span>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="advantages">
                <div className="title-product title-advantages">
                    <hr />
                    <h1>Advantages</h1>
                    <hr />
                </div>
                <div className="advantages-grid">
                    <Container>
                        <Row>
                            <Col>
                                <h6>OVER 20 YEARS OF RESEARCH</h6>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati mollitia repellendus accusantium, modi velit maxime facilis omnis quia animi et rerum officiis incidunt error beatae nesciunt accusamus. Amet, pariatur assumenda.
                                </p>
                            </Col>
                            <Col>
                            <   h6>OVER 20 YEARS OF RESEARCH</h6>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati mollitia repellendus accusantium, modi velit maxime facilis omnis quia animi et rerum officiis incidunt error beatae nesciunt accusamus. Amet, pariatur assumenda.
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h6>OVER 20 YEARS OF RESEARCH</h6>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati mollitia repellendus accusantium, modi velit maxime facilis omnis quia animi et rerum officiis incidunt error beatae nesciunt accusamus. Amet, pariatur assumenda.
                                </p>
                            </Col>
                            <Col>
                                <h6>OVER 20 YEARS OF RESEARCH</h6>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati mollitia repellendus accusantium, modi velit maxime facilis omnis quia animi et rerum officiis incidunt error beatae nesciunt accusamus. Amet, pariatur assumenda.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
         </div>
    </section>
  )
}
