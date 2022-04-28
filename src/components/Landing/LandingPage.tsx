import axios from 'axios';
import { useState } from 'react';
import { IUser } from './types';

const LandingPage = (): JSX.Element => {
  const [users, setUsers] = useState<IUser[]>();

  const onTestAPICall = async () => {
    const response = await axios.get<IUser[]>(
      'https://jsonplaceholder.typicode.com/users'
    );

    console.log(response.data);
    const users: IUser[] = response.data;

    setUsers(users);
  };

  const removeData = () => {
    setUsers([]);
  };

  return (
    <div className='h-screen  text-center bg-gray-800'>
      <div className='flex flex-col items-center justify-center h-screen text-2xl'>
        <h1 className='mb-4 text-5xl text-indigo-500'>Landing Page</h1>
        <div className='font-mono'>
          <button
            data-testid='testApiCall'
            className='text-emerald-500 pb-4'
            onClick={onTestAPICall}
          >
            [GET Test Data]
          </button>

          <ul>
            {users?.map((user) => (
              <li key={user.id} className='text-white'>
                {user.name}
              </li>
            ))}
          </ul>

          <button className='text-red-500 pt-4' onClick={removeData}>
            [REMOVE Test Data]
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
