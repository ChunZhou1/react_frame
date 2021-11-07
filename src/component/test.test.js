import React from "React";
import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom/extend-expect";

import { Test_container } from "./test";

let getByTestId;

beforeEach(async () => {
  const fakeUser = [{ id: 1234 }, { id: 5678 }];

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeUser),
    })
  );

  await act(async () => {
    const component = render(<Test_container />);
    getByTestId = component.getByTestId;
  });
});

test("Header should be display correctly", () => {
  const header = getByTestId("header");
  expect(header.textContent).toBe("My Counter");
});

test("Counter should be zero", () => {
  const counter = getByTestId("counter");
  expect(counter.textContent).toBe("0");
});

test("input should be 1", () => {
  const input = getByTestId("input");
  expect(input.value).toBe("1");
});

test("addBtn should reander with +", () => {
  const addBtn = getByTestId("addBtn");
  expect(addBtn.textContent).toBe("+");
});

test("subBtn should reander with -", () => {
  const subBtn = getByTestId("subBtn");
  expect(subBtn.textContent).toBe("-");
});

test("input can be changed", () => {
  const input = getByTestId("input");
  fireEvent.change(input, {
    target: {
      value: "5",
    },
  });
  expect(input.value).toBe("5");
});

test("click plus btn,the count should be 1", () => {
  const counter = getByTestId("counter");
  const btnAdd = getByTestId("addBtn");

  expect(counter.textContent).toBe("0");

  fireEvent.click(btnAdd);

  expect(counter.textContent).toBe("1");
});

test("click subtract btn,the count should be -1", () => {
  const counter = getByTestId("counter");
  const btnSub = getByTestId("subBtn");

  expect(counter.textContent).toBe("0");

  fireEvent.click(btnSub);

  expect(counter.textContent).toBe("-1");
});

test("Changing value and then click add button, it should be correctly ", () => {
  const counter = getByTestId("counter");
  const btnAdd = getByTestId("addBtn");
  const input = getByTestId("input");

  expect(counter.textContent).toBe("0");

  fireEvent.change(input, {
    target: {
      value: 5,
    },
  });

  fireEvent.click(btnAdd);

  expect(counter.textContent).toBe("5");
});

test("Changing value and then click subtract button, it should be correctly ", () => {
  const counter = getByTestId("counter");
  const btnSub = getByTestId("subBtn");
  const input = getByTestId("input");

  expect(counter.textContent).toBe("0");

  fireEvent.change(input, {
    target: {
      value: 5,
    },
  });

  fireEvent.click(btnSub);

  expect(counter.textContent).toBe("-5");
});

test("Changing value and then click adding and subtracting button, it should be correctly ", () => {
  const counter = getByTestId("counter");
  const btnSub = getByTestId("subBtn");
  const btnAdd = getByTestId("addBtn");
  const input = getByTestId("input");

  fireEvent.change(input, {
    target: {
      value: 10,
    },
  });

  fireEvent.click(btnAdd);
  fireEvent.click(btnAdd);
  fireEvent.click(btnAdd);
  fireEvent.click(btnAdd);
  fireEvent.click(btnSub);
  fireEvent.click(btnSub);

  expect(counter.textContent).toBe("20");
});

test("counter should be correctly color", () => {
  const counter = getByTestId("counter");

  expect(counter.className).toBe("");

  const btnSub = getByTestId("subBtn");
  const btnAdd = getByTestId("addBtn");
  const input = getByTestId("input");

  fireEvent.change(input, {
    target: {
      value: 50,
    },
  });

  fireEvent.click(btnAdd);
  fireEvent.click(btnAdd);

  expect(counter.className).toBe("");

  fireEvent.click(btnAdd);

  expect(counter.className).toBe("green");

  fireEvent.click(btnSub);

  expect(counter.className).toBe("");

  fireEvent.click(btnSub);
  fireEvent.click(btnSub);
  fireEvent.click(btnSub);
  fireEvent.click(btnSub);

  expect(counter.className).toBe("");

  fireEvent.click(btnSub);

  expect(counter.className).toBe("red");
});

test("test ajax if it is ok", () => {
  const textra = getByTestId("json");
  expect(textra.value).toBe("1234");
});
