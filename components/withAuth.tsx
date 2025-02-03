// components/withAuth.tsx
import { observer } from 'mobx-react-lite';
import { useStore } from '@/stores/storeContext';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const withAuth = (WrappedComponent: React.ComponentType, allowedRoles?: string[]) => {
  const AuthComponent = observer((props: any) => {
    const { userStore } = useStore();
    const router = useRouter();

    useEffect(() => {
      if (!userStore.isAuthenticated) {
        router.push('/login');
      } else if (allowedRoles && !allowedRoles.includes(userStore.userRole)) {
        router.push('/unauthorized');
      }
    }, [userStore.isAuthenticated, userStore.userRole, router]);

    return <WrappedComponent {...props} />;
  });

  return AuthComponent;
};

// Usage:
// export default withAuth(DashboardPage, ['admin', 'manager']);