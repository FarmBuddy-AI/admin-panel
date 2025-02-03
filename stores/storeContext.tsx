// stores/storeContext.tsx
import { createContext, ReactNode, useContext, useRef } from 'react';
import UserStore from './userStore';

interface StoreContextValue {
  userStore: UserStore;
}

const StoreContext = createContext<StoreContextValue | null>(null);

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  // Use useRef to persist the store between renders
  const storeRef = useRef<StoreContextValue>({
    userStore: new UserStore(),
  });

  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
}