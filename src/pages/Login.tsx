import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
  };

  const submitHandler = async (e: any) => {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          navigate("/dashboard/student-info");
        }
      });
  };

  // useEffect(() => {
  //   console.log(formData);
  // }, [formData]);

  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <div className="mb-2">
          <label htmlFor="email" className="form-label">
            Email
          </label>

          <input
            type="text"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-2">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="text"
            className="form-control"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="mb-2 d-flex justify-content-center">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}

type LoginFormData = {
  email: string;
  password: string;
};
