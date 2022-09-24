import React, { createContext, useContext, useLayoutEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from 'firebase/firestore';
import { auth, db } from '../config/firebase';

export const AuthContext = createContext({});

export const useAuth = () => {
  const auth = useContext(AuthContext);

  return auth;
};

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [user, loading, error] = useAuthState(auth);

  useLayoutEffect(() => {
    // If clients trying to navigate to /auth when they already authenticated redirect to home
    if (user && pathname === '/auth') {
      navigate('/start-quiz', { replace: true });
    }
  }, [user]);

  const logout = async () => {
    await signOut(auth);
  };

  const signInWithGoogle = async () => {
    const res = await signInWithPopup(auth, new GoogleAuthProvider());
    const user = res.user;
    const q = query(collection(db, 'users'), where('uid', '==', user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name: user.displayName,
        authProvider: 'google',
        email: user.email,
      });
    }
  };

  const value = {
    signInWithGoogle,
    logout,
    user,
    loading,
    error,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
