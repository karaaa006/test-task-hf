export default function Total({ tableValues }) {
  function getMatrixTotal(matrix) {
    return matrix.flatMap((el) => el).reduce((el, acc) => (acc += el), 0);
  }

  function getTotalAverage(matrix) {
    if (!getMatrixTotal(matrix)) return 0;

    const flatMatrixLength = matrix.flatMap((el) => el).length;

    return Math.round(getMatrixTotal(matrix) / flatMatrixLength);
  }

  return (
    <div>
      <div>Total: {getMatrixTotal(tableValues)}</div>
      <div>Total avarage: {getTotalAverage(tableValues)}</div>
    </div>
  );
}
