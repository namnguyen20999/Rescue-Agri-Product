import React from 'react';
import Alert from 'react-bootstrap/Alert';

export default function Error({ error }) {
  return (
    <Alert key="danger" variant="danger">
      {error}
    </Alert>
  );
}
