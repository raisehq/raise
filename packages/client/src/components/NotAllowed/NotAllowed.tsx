import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Card, Loader } from 'semantic-ui-react';

interface NotAllowedProps {
  to: string; 
}

const NotAllowed : React.SFC<NotAllowedProps>= ({ to }) => {
  const [redirect, setRedirect] = useState(false);

  useEffect(()=> {
    setTimeout(() => {
      setRedirect(true);
    }, 1);
  }, [])

  if (redirect) {
    return <Redirect to={to} />
  }
  return (
    <Card>
      Checking Ethereum network connection...
      <Loader />
    </Card>
  )
}

export default NotAllowed;