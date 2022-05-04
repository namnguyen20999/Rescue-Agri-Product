import React from 'react';
import Alert from 'react-bootstrap/Alert';

export default function Error({ success }) {
  return (
    <Alert key="success" variant="success">
      {success}
    </Alert>
  );
}
