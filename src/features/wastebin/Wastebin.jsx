import { useLoaderData, useLocation } from "react-router-dom";
import { getWastebins } from "../../services/apiWaste";
import * as React from "react";
import PropTypes from "prop-types";
import { useTable } from "react-table";

function Wastebin() {
  const wastebins = useLoaderData() || [];
  const { userID } = useLocation().state;

  const filteredData = wastebins.filter((data) => {
    return data.user_id.includes(userID);
  });

  const data = React.useMemo(() => filteredData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Address",
        accessor: "address",
      },
      {
        Header: "Emptying_schedule",
        accessor: "emptying_schedule",
      },
      {
        Header: "User_id",
        accessor: "user_id",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div>
      <div>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup, hgIndex) => {
              const hgProps = headerGroup.getHeaderGroupProps
                ? headerGroup.getHeaderGroupProps()
                : {};
              const hgKey = hgProps.key || headerGroup.id || hgIndex;
              return (
                <tr {...hgProps} key={hgKey}>
                  {headerGroup.headers.map((column, colIndex) => {
                    const colProps = column.getHeaderProps
                      ? column.getHeaderProps()
                      : {};
                    const colKey =
                      colProps.key || column.id || column.accessor || colIndex;
                    return (
                      <th {...colProps} key={colKey}>
                        {column.render("Header")}
                      </th>
                    );
                  })}
                </tr>
              );
            })}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={row.id}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()} key={cell.column.id}>
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export async function loader() {
  const wastebins = await getWastebins();
  return Array.isArray(wastebins) ? wastebins : []; // always return an array
}

Wastebin.propTypes = {
  userID: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Wastebin;
