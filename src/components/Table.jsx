export default function Table({ tableValues, onDelRow }) {
  function getMatrixSum(matrix) {
    const sumArray = [];

    matrix.forEach((arr) => {
      arr.forEach((el, idx) => {
        if (sumArray[idx] === undefined) sumArray[idx] = 0;

        sumArray[idx] += el;
      });
    });
    return sumArray;
  }

  function getMatrixAvarage(matrix) {
    return getMatrixSum(matrix).map((el) => Math.round(el / matrix.length));
  }

  return (
    <table>
      <tbody className="tableBody">
        {tableValues.map((row, rowIdx) => (
          <tr className="bodyRow" key={rowIdx} onClick={() => onDelRow(rowIdx)}>
            {row.map((column, colIdx) => (
              <td key={colIdx}>{column}</td>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr className="footRow">
          {getMatrixAvarage(tableValues).map((column, idx) => (
            <td key={idx}>{column}</td>
          ))}
        </tr>
        <tr className="footRow">
          {getMatrixSum(tableValues).map((column, idx) => (
            <td key={idx}>{column}</td>
          ))}
        </tr>
      </tfoot>
    </table>
  );
}
