import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function ReservationForm() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [guests, setGuests] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formMobile">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control
          type="tel"
          placeholder="Enter your mobile number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formGuests">
        <Form.Label>Number of Guests</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter number of guests"
          min="1"
          max="10"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>

      <style type="text/css">{`
        .form-group {
          margin-bottom: 1rem;
        }
        
        @media (max-width: 576px) {
          .form-group {
            margin-bottom: 0.5rem;
          }
        }
      `}</style>
    </Form>
  );
}

export default ReservationForm;
