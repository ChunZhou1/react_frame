import React from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";

import "./input.css";

export function Input_form1() {
  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h1>NEW CLIENT/PATIENT FORM</h1>
          <p>
            Are you or your pet new to our app? Please fill out this simple form
            with as much of your information as you can provide, and it will be
            sent directly to us in preparation for your first appointment
          </p>
          <Form>
            <Form.Group>
              <h2>Owner Information</h2>
              <Form.Label>Name</Form.Label>
              <Row>
                <Col>
                  <Form.Control placeholder="First Name"></Form.Control>
                </Col>
                <Col>
                  <Form.Control placeholder="Last Name"></Form.Control>
                </Col>
              </Row>
            </Form.Group>
            <Row className="space">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridTel">
                <Form.Label>Telephone</Form.Label>
                <Form.Control
                  type="telephone"
                  placeholder="Enter Phone Number"
                />
              </Form.Group>
            </Row>
            <Form.Group controlId="formGridAddress1" className="space">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>
            <Form.Group controlId="formGridAddress2" className="space">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment #" />
            </Form.Group>
            <Row className="space">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control as="select">
                  <option>Choose...</option>
                  <option>New York</option>
                  <option>New Jersey</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCityZip">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>
            <br />
            <h2>Pet Type</h2>
            <br />
            <Container>
              <Row>
                <Col>
                  <Button variant="primary" type="submit" size="lg">
                    Dog
                  </Button>
                </Col>
                <Col>
                  <Button variant="primary" type="submit" size="lg">
                    Cat
                  </Button>
                </Col>
              </Row>
            </Container>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export function Input_form2() {
  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <p>
            Are you or your pet new to our app? Please fill out this simple form
            with as much of your information as you can provide, and it will be
            sent directly to us in preparation for your first appointment
          </p>
          <Form>
            <Form.Group>
              <h2>DOG INFORMATION</h2>
              <Form.Label>Name</Form.Label>
              <Form.Control type="input" placeholder="Name" />
            </Form.Group>
            <Form.Group controlId="formBirth">
              <Form.Label>Birthday</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Row>
              <Form.Group as={Col} controlId="formGridBreed">
                <Form.Label>Breed</Form.Label>
                <Form.Control as="select">
                  <option>Choose...</option>
                  <option>Affenpinscher</option>
                  <option>Akita</option>
                  <option>American Bulldog</option>
                  <option>Terrier</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridColor">
                <Form.Label>Color</Form.Label>
                <Form.Control placeholder="Enter Color" />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId="formGridSex">
                <Form.Label>Sex</Form.Label>
                <Form.Check
                  type="radio"
                  label="Male"
                  name="formHoriRadios"
                  ids="formHoriRadios1"
                />
                <Form.Check
                  type="radio"
                  label="Female"
                  name="formHoriRadios"
                  ids="formHoriRadios1"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridAltered">
                <Form.Label>Altered</Form.Label>
                <Form.Check
                  type="radio"
                  label="Yes"
                  name="formHoriRadios2"
                  ids="formHoriRadios2"
                />
                <Form.Check
                  type="radio"
                  label="No"
                  name="formHoriRadios2"
                  ids="formHoriRadios2"
                />
              </Form.Group>
            </Row>
            <Form.Group>
              <Form.Label>
                Does your Dog have any known allergies or reactions to any
                vaccines or medications?
              </Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Schedule Appointment</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Button variant="primary">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
