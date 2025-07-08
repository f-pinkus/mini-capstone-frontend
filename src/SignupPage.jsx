import "./Form.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SignupPage() {
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("/signup", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        navigate("/login"); // Navigate to login page after successful signup
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div className="container my-5" id="signup">
      <h1 className="mb-4">Signup</h1>

      {errors.length > 0 && (
        <div className="alert alert-danger">
          <ul className="mb-0">
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      <form onSubmit={handleSubmit} className="needs-validation" noValidate>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input name="name" type="text" id="name" className="form-control" required />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input name="email" type="email" id="email" className="form-control" required />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input name="password" type="password" id="password" className="form-control" required />
        </div>

        <div className="mb-3">
          <label htmlFor="password_confirmation" className="form-label">Password Confirmation:</label>
          <input
            name="password_confirmation"
            type="password"
            id="password_confirmation"
            className="form-control"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Signup</button>
      </form>
    </div>
  );
}
