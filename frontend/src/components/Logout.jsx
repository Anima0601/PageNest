import React from 'react';
import { useAuth } from '../Context/AuthProvider';
import { toast } from 'react-toastify';

function Logout() {
  const [authUser, setAuthUser] = useAuth();

  const handleLogout = () => {
    try {
      setAuthUser({ ...authUser, user: null });
      localStorage.removeItem("User");
      toast.success("Logout Successful");
      window.location.reload();
    } catch (error) {
      toast.error("Error: " + error.message);
    }
  };

  return (
    <div>
      <button className="btn btn-active btn-error" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Logout;

