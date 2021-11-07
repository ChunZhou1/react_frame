import React from "react";

import { useEffect, useState } from "react";

import {
  Button,
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,
} from "react-bootstrap";

import "./test.css";
import api from "../api";

const URL = "https://aircall-job.herokuapp.com/activities";

export function Test_container() {
  useEffect(async () => {
    let result = await api.fetchGetData(URL);
    setJson(result[0].id);
  }, []);

  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState(1);
  const [json, setJson] = useState([]);

  let className = "";

  const handle_add = () => {
    setCounter(counter + input);
  };

  const handle_sub = () => {
    setCounter(counter - input);
  };

  const handle_text = (e) => {
    console.log(e.target.value);
    setJson(e.target.value);
  };

  if (counter > 100) {
    className = "green";
  } else if (counter < -100) {
    className = "red";
  } else {
    className = "";
  }
  return (
    <Container>
      <h3 data-testid="header">My Counter</h3>
      <h3 className={className} data-testid="counter">
        {counter}
      </h3>

      <Button onClick={handle_sub} data-testid="subBtn">
        -
      </Button>

      <input
        data-testid="input"
        value={input}
        onChange={(e) => setInput(parseInt(e.target.value))}
      />

      <Button onClick={handle_add} data-testid="addBtn">
        +
      </Button>
      <FloatingLabel controlId="floatingTextarea" className="mb-3">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          value={json}
          onChange={handle_text}
          data-testid="json"
        />
      </FloatingLabel>
    </Container>
  );
}
