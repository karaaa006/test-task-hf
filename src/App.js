import { useReducer } from "react";
import "./App.css";
import ControlBar from "./components/ControlBar";
import Table from "./components/Table";
import Total from "./components/Total";

const initialState = { tableValues: [], numColumns: 0 };

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reducer(state, action) {
  switch (action.type) {
    case "createTable":
      const createdTableValues = [];
      const { columns, rows } = action.payload;

      for (let i = 0; i < rows; i++) {
        const colArray = [];

        for (let i = 0; i < columns; i++) {
          colArray.push(getRandomNumber(100, 999));
        }
        createdTableValues.push(colArray);
      }

      return {
        ...state,
        tableValues: createdTableValues,
        numColumns: columns,
      };

    case "addRow":
      const newRow = [];

      for (let i = 0; i < state.numColumns; i++) {
        newRow.push(getRandomNumber(100, 999));
      }

      return {
        ...state,
        tableValues: [...state.tableValues, newRow],
      };

    case "delRow":
      const newTableValues = state.tableValues.filter(
        (row, idx) => idx !== action.payload
      );

      return {
        ...state,
        tableValues: newTableValues,
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function onSubmit({ rows, columns }) {
    dispatch({ type: "createTable", payload: { rows, columns } });
  }
  function onAddRow() {
    if (state.tableValues.length > 0) dispatch({ type: "addRow" });
  }
  function onDelRow(idx) {
    dispatch({ type: "delRow", payload: idx });
  }

  return (
    <div className="App">
      <ControlBar onSubmit={onSubmit} onAddRow={onAddRow} />

      {state.tableValues.length > 0 && (
        <>
          <Table tableValues={state.tableValues} onDelRow={onDelRow} />
          <Total tableValues={state.tableValues} />
        </>
      )}
    </div>
  );
}

export default App;
