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
    <div className="d-flex page align-items-center justify-content-center">
      <form onSubmit={submitHandler} style={{
        width: 400,
        padding: "3rem",
        borderRadius: "50px",
        background: "#fff",
        boxShadow: "20px 20px 60px #bebebe,-20px -20px 60px #ffffff",
      }}>
        < h1 className="text-center text-primary">REGISTER</h1>
        <div className="mb-2">
          <label htmlFor="email" className="form-label">
            Username <span className="text-danger"><sup>*</sup></span>
          </label>

          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-2">
          <label htmlFor="email" className="form-label">
            Email <span className="text-danger"><sup>*</sup></span>
          </label>

          <input
            type="text"
            className="form-control"
            name="email"
            placeholder="abcd@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-2">
          <label htmlFor="password" className="form-label">
            Password <span className="text-danger"><sup>*</sup></span>
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-2">
          <label htmlFor="password" className="form-label">
            Confirm Password <span className="text-danger"><sup>*</sup></span>
          </label>
          <input
            type="password"
            className="form-control"
            name="confirmPassword"
            placeholder="confirm password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <br />

        <div className="mb-2 d-flex justify-content-center">
          <button className="btn btn-primary" disabled={disableState()}>
            Submit
          </button>
        </div>

        <p className="text-center">
          Already have an account? <a href="/">Login here</a>
        </p>
      </form>
    </div >
  );
}

type RegisterFormData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};
