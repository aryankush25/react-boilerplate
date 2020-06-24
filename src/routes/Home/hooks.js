import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../store/actions/userActions';

export const useHomeHook = () => {
  const dispatch = useDispatch();

  const logoutRequestHandler = useCallback(() => {
    dispatch(startLogout());
  }, [dispatch]);

  return { logoutRequestHandler };
};
