export function DisplinaryAction({ data, role }: any) {
  // console.log("DISPLINARY ACTION PAGE ONLY ALLOWED FOR ADMIN");
  if (role !== "ADMIN") {
    return (
      <p className="text-center h-full">
        <h3 className="display-3 text-center text-danger">401-Unauthorized</h3>
        The Page you were accessing earlier is limited to admin users.
        <br />
        Please login with admin user credentials <a href="/">Here</a>
      </p>
    );
  }
  if (role === "ADMIN") {
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
}
