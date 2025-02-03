// pages/login.tsx
"use client";
import { observer } from 'mobx-react-lite';
import { useStore } from '@/stores/storeContext';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = observer(() => {
  const { userStore } = useStore();
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await userStore.login(credentials);
    if (userStore.isAuthenticated) {
      router.push('/dashboard');
    }
  };

  return (
    <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <label htmlFor='email' className='block text-sm/6 font-medium text-gray-900'>Email address</label>
            <input
              type="email"
              value={credentials.email}
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
              className='block w-full rounded-md border-0 py-3.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm/6'
            />
          </div>
          <div>
          <label htmlFor='password' className='block text-sm/6 font-medium text-gray-900'>Password</label>
            <input
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              className='block w-full rounded-md border-0 py-3.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm/6'
            />
          </div>
          <button type="submit" disabled={userStore.isLoading} className='flex w-full justify-center rounded-md bg-green-600 px-3 py-3.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500'>
            {userStore.isLoading ? 'Logging in...' : 'Login'}
          </button>
          {userStore.error && <div className="error">{userStore.error}</div>}
        </form>
      </div>
    </div>
  );
});

export default LoginPage;