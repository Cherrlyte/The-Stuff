/* eslint-disable testing-library/no-node-access */
//eslint goes to die
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

const invalidList = `[
  { name: "Cool Movie 123", watched: false, rating: "0/10", rdate: "05/05/2005" },
  { name: "Stupid Person's Movie", watched: true, rating: "11/10", rdate: "09/09/2009" },
  { name: "The Rising 1", watched: false, rating: "9/10", rdate: "02/11/1992" }
  { name: "The Rising 2", watched: false, rating: "0/10", rdate: "09/02/2004" },
  { name: "The Rising 3" watched: true, rating: "8/10", rdate: "12/09/2005" }
  { name: "The Rising 1: Reboot", watched: false, rating: "4/10", rdate: "02/11/2006" },
  { name: "The Rising 4", watched: false, rating: "1/10", rdate: "12/01/2010" },
  { name: "The Rising Prologue", watched: false, rating: "2/10", rdate: "05/08/2016" },
  { name: "The Rising Origins", watched: true, rating: "8/10", rdate: "04/05/2020" },
]`

const validList = `
[
    {
        "name": "Cool Movie 123",
        "watched": false,
        "rating": "0/10",
        "rdate": "05/05/2005"
    },
    {
        "name": "Stupid Person's Movie",
        "watched": true,
        "rating": "11/10",
        "rdate": "09/09/2009"
    },
    {
        "name": "The Rising 1",
        "watched": false,
        "rating": "9/10",
        "rdate": "02/11/1992"
    },
    {
        "name": "The Rising 2",
        "watched": false,
        "rating": "0/10",
        "rdate": "09/02/2004"
    },
    {
        "name": "The Rising 3",
        "watched": true,
        "rating": "8/10",
        "rdate": "12/09/2005"
    },
    {
        "name": "The Rising 1: Reboot",
        "watched": false,
        "rating": "4/10",
        "rdate": "02/11/2006"
    },
    {
        "name": "The Rising 4",
        "watched": false,
        "rating": "1/10",
        "rdate": "12/01/2010"
    },
    {
        "name": "The Rising Prologue",
        "watched": false,
        "rating": "2/10",
        "rdate": "05/08/2016"
    },
    {
        "name": "The Rising Origins",
        "watched": true,
        "rating": "8/10",
        "rdate": "04/05/2020"
    }
]`

test("Doesn't render invalid JSON", () => {
  render(<App dlist={invalidList} />);
  const linkElement = screen.getByText("Invalid list!");
  expect(linkElement).toBeInTheDocument();
});

test("Does render valid JSON", () => {
  render(<App dlist={validList} />);
  let failed = false
  try {
    screen.getByText("Invalid list!");
  }
  catch {
    failed = true
  }
  expect(failed).toBe(true)
});

test("Filter works (Removes others)", () => {
  render(<App dlist={validList} />);
  const filterBar = screen.getByPlaceholderText("Type to set filter...")
  let failed = false
  fireEvent.change(filterBar, { target: { value: 'Cool Person' } })
  try {
    screen.getByText("The Rising 1");
  }
  catch {
    failed = true
  }
  expect(failed).toBe(true)
});

test("Filter works (Finds the one)", () => {
  render(<App dlist={validList} />);
  const filterBar = screen.getByPlaceholderText("Type to set filter...")
  let failed = false
  fireEvent.change(filterBar, { target: { value: 'Cool' } })
  try {
    screen.getByText("Cool Movie 123");
  }
  catch {
    failed = true
  }
  expect(failed).toBe(false)
});

test("Edit button works", () => {
  render(<App dlist={validList} />);
  let mObj = screen.getByText("Cool Movie 123")
  const editButton = mObj.querySelector('button')
  fireEvent.click(editButton)
  mObj = mObj.querySelector('input')
  const isInput = (mObj.nodeName === 'INPUT')
  expect(isInput).toBe(true)
});

test("Editing in general works", () => {
  render(<App dlist={validList} />);
  let mObj = screen.getByText("Cool Movie 123")
  const editButton = mObj.querySelector('button')
  fireEvent.click(editButton)
  mObj = mObj.querySelector('input')
  fireEvent.change(mObj, { target: { value: "Not Cool Movie" } })
  fireEvent.click(editButton)
  let failed = false
  try {
    screen.getByText("Not Cool Movie")
  } catch {
    failed = true
  }
  expect(failed).toBe(false)
});
