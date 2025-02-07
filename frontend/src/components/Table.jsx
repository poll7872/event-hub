export function Table({ columns, data }) {
  return (
    <div className="overflow-x-auto w-5xl mx-auto my-5">
      <table className="min-w-full border border-blue-800 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-blue-800 text-white">
            {columns.map((colName, colIndex) => (
              <th
                key={colIndex}
                className="border border-blue-800 px-4 py-2 text-left"
              >
                {colName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 0 ? "bg-blue-100" : "bg-blue-200"}
            >
              {columns.map((colName, colIndex) => (
                <td key={colIndex} className="text-left px-4 py-2">
                  {row[colName]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
