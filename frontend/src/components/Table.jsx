export function Table({ columns, data }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-blue-800">
        <thead>
          <tr className="bg-gray-200">
            {columns.map((colName, colIndex) => (
              <th key={colIndex} className="border px-4 py-2 text-left">
                {colName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 0 ? "bg-gray-100" : "bg-white"}
            >
              {columns.map((colName, colIndex) => (
                <td key={colIndex} className="border px-4 py-2">
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
