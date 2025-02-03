// pages/profile.tsx
"use client";
import { observer } from 'mobx-react-lite';
import { useStore } from '@/stores/storeContext';
import { useEffect } from 'react';

const ProfilePage = observer(() => {
  const { userStore } = useStore();

  useEffect(() => {
    if (userStore.isAuthenticated && !userStore.user) {
      userStore.loadProfile();
    }
  }, [userStore]);

  if (!userStore.user) return <div>Loading...</div>;

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {userStore.user.name}</p>
      <p>Email: {userStore.user.email}</p>
      <p>Role: {userStore.user.role}</p>
    </div>
  );
});

export default ProfilePage;