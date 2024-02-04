export function StudentInfo({ data }: any) {
  return (
    <div className="container">
      <h3 className="mb-2 mx-auto">Student Info</h3>
      <br />

      <p>Full Name: {data.students[0].full_name}</p>
      <p>Father Name: {data.students[0].father_name}</p>
      <p>Mother Name: {data.students[0].mother_name}</p>
    </div>
  );
}
