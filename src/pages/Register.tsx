import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<RegisterFormData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const disableState = () => {
    if (
      formData.email == "" ||
      formData.username == "" ||
      formData.password == "" ||
      formData.confirmPassword == ""
    ) {
      return true;
    }
    if (formData.password !== formData.confirmPassword) {
      return true;
    }
    return false;
  };

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
  };

  const submitHandler = async (e: any) => {
    e.preventDefault();
    fetch("http://localhost:3000/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: formData.username,
        email: formData.email,
        password: formData.password,
        role: "STUDENT",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Registration Successful !!!");
        if (data.success) {
          navigate("/");
        }
      });
  };
  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <div className="mb-2">
          <label htmlFor="email" className="form-label">
            Username
          </label>

          <input
            type="text"
            className="form-control"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
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
            type="password"
            className="form-control"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="mb-2">
          <label htmlFor="password" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <div className="mb-2 d-flex justify-content-center">
          <button className="btn btn-primary" disabled={disableState()}>
            Submit
          </button>
        </div>

        <p className="text-center">
          Already have an account? <a href="/">Login here</a>
        </p>
      </form>
    </div>
  );
}

type RegisterFormData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};
