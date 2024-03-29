export function StudentInfo({ data }: any) {
  return (
    <div className="container">
      <table width="100%" className="table">
        <thead>
          <tr>
            <td colSpan={2} align="center" className="table-primary">
              <b>STUDENT INFORMATION</b>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Full Name</td>
            <td>{data.students[0].full_name}</td>
          </tr>
          <tr>
            <td>Birth Marks</td>
            <td>{data.students[0].birth_marks}</td>
          </tr>
          <tr>
            <td>Father Name</td>
            <td>{data.students[0].father_name}</td>
          </tr>
          <tr>
            <td>Mother Name</td>
            <td>{data.students[0].mother_name}</td>
          </tr>
          <tr>
            <td>Phone number</td>
            <td>{data.students[0].phone_number}</td>
          </tr>
          <tr>
            <td>Academic Year</td>
            <td>{data.students[0].academic_year}</td>
          </tr>
          <tr>
            <td>City</td>
            <td>{data.students[0].city}</td>
          </tr>
          <tr>
            <td>State</td>
            <td>{data.students[0].state}</td>
          </tr>
          <tr>
            <td>Pin Code</td>
            <td>{data.students[0].pin}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
