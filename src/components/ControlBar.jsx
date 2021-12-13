import { useState } from "react";

export default function ControlBar({ onSubmit, onAddRow }) {
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);

  function handleChangeRows(e) {
    const { value } = e.target;
    setRows(Number(value));
  }

  function handleChangeColumns(e) {
    const { value } = e.target;
    setColumns(Number(value));
  }

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit({ rows, columns });
  }

  return (
    <>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <label className="inputLabel">
          <span className="labelText">Rows</span>
          <input
            type="number"
            name="rows"
            className="input"
            value={rows}
            onChange={handleChangeRows}
            required
          />
        </label>
        <label className="inputLabel">
          <span className="labelText">Columns</span>
          <input
            type="number"
            name="columns"
            className="input"
            value={columns}
            onChange={handleChangeColumns}
            required
          />
        </label>
        <button type="submit">Create table</button>
      </form>
      <button type="button" onClick={() => onAddRow()}>
        Add row
      </button>
    </>
  );
}
