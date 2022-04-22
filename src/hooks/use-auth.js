import { useEffect, useState } from 'react';
import { getFromLocalStorage } from '../services/local-storage-service';
import { USER_TOKENS } from '../constants/config';

const useAuth = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (getFromLocalStorage(USER_TOKENS.ACCESS_TOKEN)) {
      setIsAuth(true);
    }
  }, []);

  return { isAuth };
};

export default useAuth;
