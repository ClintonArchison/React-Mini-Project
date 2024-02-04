export function StudentAttendance({ data }: any) {
  return <>
    <div className="container">
      <table width='100%' className="table">
        <thead>
          <tr><td colSpan={2} align='center' className="table-primary"><b>STUDENT ATTENDANCE</b></td></tr>
          <tr>
            <td ><b>Month</b></td>
            <td align="center"><b>Percentage</b></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>June</td>
            <td align="center">{data.students[0].attendance[0]}</td>
          </tr>
          <tr>
            <td>July</td>
            <td align="center">{data.students[0].attendance[1]}</td>
          </tr>
          <tr>
            <td>August</td>
            <td align="center">{data.students[0].attendance[2]}</td>
          </tr>
          <tr>
            <td>September</td>
            <td align="center">{data.students[0].attendance[3]}</td>
          </tr>
          <tr>
            <td>October</td>
            <td align="center">{data.students[0].attendance[4]}</td>
          </tr>
          <tr>
            <td>November</td>
            <td align="center">{data.students[0].attendance[5]}</td>
          </tr>
          <tr>
            <td>December</td>
            <td align="center">{data.students[0].attendance[6]}</td>
          </tr>
          <tr>
            <td>January</td>
            <td align="center">{data.students[0].attendance[7]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </>;
}
