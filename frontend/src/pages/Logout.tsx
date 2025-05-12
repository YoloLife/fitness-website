import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();
  
  useEffect(() => {
    // In a frontend-only project, we can just redirect to home
    // No actual auth signout needed
    navigate("/");
  }, [navigate]);

  return null;
}