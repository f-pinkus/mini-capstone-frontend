import axios from "axios";
import { useNavigate } from "react-router-dom";

export function LogoutLink() {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    axios.delete("http://localhost:3000/logout").then((response) => {
      console.log(response);
      localStorage.removeItem("email");
      navigate("/"); // Navigate to photos page after logout
    });
  };

  return (
    <button onClick={handleClick}>
      Logout
    </button>
  );
}