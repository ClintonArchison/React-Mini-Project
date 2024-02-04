export function Marks({ data }: any) {
  return <>
    <div className="container">
      <table width='100%' className="table">
        <thead>
          <tr><td colSpan={2} align='center' className="table-primary"><b>STUDENT MARKS</b></td></tr>
          <tr>
            <td><b>Subjects</b></td>
            <td align="center"><b>Marks</b></td>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td>Tamil</td>
            <td align="center">{data.students[0].marks[0]}</td>
          </tr>
          <tr>
            <td>English</td>
            <td align="center">{data.students[0].marks[1]}</td>
          </tr>
          <tr>
            <td>Science</td>
            <td align="center">{data.students[0].marks[2]}</td>
          </tr>
          <tr>
            <td>Mathematics</td>
            <td align="center">{data.students[0].marks[3]}</td>
          </tr>
          <tr>
            <td>Social Studies</td>
            <td align="center">{data.students[0].marks[4]}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr className="table-group-divider">
            <td><b>Overall Attendance Percentage</b></td>
            <td align="center"><b>{data.students[0].total_marks[0]}</b></td>
          </tr>
        </tfoot>
      </table>
    </div>
  </>;
}
