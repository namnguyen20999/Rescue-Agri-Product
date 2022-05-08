import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Error from '../Components/Error';
import Loading from '../Components/Loading';
import { deleteUser, getAllUsers } from '../actions/userActions';
import { FaTrashAlt } from 'react-icons/fa';
import { Container, Table } from 'react-bootstrap';
export default function Userslist() {
  const dispatch = useDispatch();
  const usersstate = useSelector(state => state.getAllUsersReducer);
  const { error, loading, users } = usersstate;
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <Container>
      <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Users list</h3>
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}
      <Table>
        <thead>
          <tr>
            <th>User Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {users &&
            users.map(user => {
              return (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <FaTrashAlt
                      onClick={() => {
                        dispatch(deleteUser(user._id));
                      }}
                      style={{ color: 'red' }}
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Container>
  );
}
