import { useEffect } from "react";

export function DisplinaryAction({ data, role }: any) {
  useEffect(() => {
    console.log("DISPLINARY ACTION PAGE ONLY ALLOWED FOR ADMIN");
    if (role !== "admin") {
      window.location.href = "/unauthorized";
    }
  }, []);
  return (
    <>
      <div className="container">
        <table width="100%" className="table">
          <thead>
            <tr>
              <td colSpan={3} align="center" className="table-primary">
                <b>DISIPLINARY ACTION</b>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>Disiplinary Action</b>
              </td>
              <td>
                <b>Done On</b>
              </td>
              <td align="center">
                <b>Punishment Given</b>
              </td>
            </tr>
            <tr>
              <td>{data.students[0].disciplinary_actions}</td>
              <td>{data.students[0].disciplinary_actions_date}</td>
              <td align="center">{data.students[0].punishment_given}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
