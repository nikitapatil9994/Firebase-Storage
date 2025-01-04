import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import { auth } from '../Services/firebase';

const PrivatePage = ({ children }) => {
  const [user] = useAuthState(auth);
  console.log(user);

  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivatePage;
