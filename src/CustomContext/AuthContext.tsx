import React, {createContext, useState, useContext, useEffect} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

type FireBaseUserType = [FirebaseAuthTypes.User | null | undefined, boolean];

const AuthContext = createContext<FireBaseUserType>([undefined, false]); // Initializing should be false

interface ProviderType {
  children: JSX.Element;
}

export const AuthContextProvider: React.FC<ProviderType> = ({children}) => {
  const [initializing, setInitializing] = useState<boolean>(true);
  const [user, setUser] = useState<FireBaseUserType>([null, initializing]);

  function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
    if (user === null) {
      // User signed out
      setUser([null, false]);
    } else {
      setUser([user, false]);
    }
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export const useAuth = (): FireBaseUserType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthContextProvider');
  }
  return context;
};
