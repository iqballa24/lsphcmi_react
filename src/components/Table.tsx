import React, { useEffect } from "react";

const Table = ({ column, data }: any) => {
  let number = 1;

  useEffect(() => {
    number = 1;
  }, [data]);

  return (
    <>
      <div className="table100 ver1 m-b-110">
        <div className="table100-head">
          <table className="table">
            <thead>
              <tr className="row100 head">
                {column?.map((col: any) => (
                  <th
                    key={col.id}
                    className={`cell100 ${
                      col.id === 1 ? "column2" : "column3"
                    }`}
                    style={{ paddingLeft: col.id === 1 ? "40px" : "" }}
                  >
                    {col.name}
                  </th>
                ))}
              </tr>
            </thead>
          </table>
        </div>

        <div className="table100-body js-pscroll">
          <table>
            <tbody>
              {data?.map((item:any) => (
                <tr className="row100 body" key={item.id}>
                  <td
                    className="cell100 column2"
                    style={{ paddingLeft: 40 + "px" }}
                  >
                    {number++}
                  </td>
                  <td className="cell100 column3">{item.kdUnit}</td>
                  <td className="cell100 column3">{item.titleUnit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default React.memo(Table);
