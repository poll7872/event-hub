import { CalendarEditFilled, DeleteFilled } from "@fluentui/react-icons";

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
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 0 ? "bg-gray-50" : "bg-gray-200"}
            >
              {columns.map((colName, colIndex) => (
                <td key={colIndex} className="text-left px-4 py-2">
                  {row[colName]}
                </td>
              ))}
              <td className="flex justify-center gap-2 mt-2">
                <CalendarEditFilled className="text-2xl text-green-600 cursor-pointer" />
                <DeleteFilled className="text-2xl text-red-600 cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
