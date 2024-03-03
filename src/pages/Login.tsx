import { useState } from "react";
import { useNavigate } from "react-router-dom";
export function Login({ loginMethod }: any) {
  const navigate = useNavigate();
  const [failedmessage, setfailedmessage] = useState('');
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const handleChange = (event: any) => {
    setfailedmessage("");
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
          loginMethod(data.username, data.role);

          navigate("/dashboard/student-info");
        }else{
          setfailedmessage("In-correct Credentials");
        }
      })
      .catch((e) => {
        alert("login successfull");
      });
  };

  return (
    <div className="d-flex page align-items-center justify-content-center" >
      <form onSubmit={submitHandler} style={{
          width: 400,
          padding: "3rem",
          borderRadius: "50px",
          background: "#fff",
          boxShadow: "20px 20px 60px #bebebe,-20px -20px 60px #ffffff",
        }}>
          <h1 className="text-center text-primary">LOGIN</h1>
        <div className="col-auto">
          <label htmlFor="email" className="col-form-label">
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
        <br />

        <div className="mb-2 d-flex justify-content-center">
          <button className="btn btn-primary">Submit</button>
        </div>

        <p className="text-center">
          Don't have an account? <a href="/register">Signup here</a>
        </p>
        <div id="failedmessage" className="text-center text-danger">{failedmessage}</div>
      </form>
    </div>
  );
}

type LoginFormData = {
  email: string;
  password: string;
};
