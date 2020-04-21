import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

interface NotAllowedProps {
  to: string;
}

const NotAllowed: React.SFC<NotAllowedProps> = ({ to }: { to: string }) => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRedirect(true);
    }, 1);
  }, []);

  if (redirect) {
    return <Redirect to={to} />;
  }
  return null;
};

export default NotAllowed;
