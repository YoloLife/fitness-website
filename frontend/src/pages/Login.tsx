import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    // Simply redirect to home page since we've removed authentication
    const nextParam = new URLSearchParams(window.location.search).get('next');
    navigate(nextParam || '/', { replace: true });
  }, [navigate]);

  return (
    <div className="container mx-auto p-4 text-center">
      <p>Redirecting to home page...</p>
    </div>
  );
}