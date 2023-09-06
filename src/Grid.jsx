import { range } from './utils';

function Grid({ numRows, numCols }) {
  return (
    <div className="grid">
      {range(numRows).map((row) => (
        <div className="row" key={row}>
          {range(numCols).map((column) => (
            <div className="cell" key={column}></div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Grid;
