import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { requestUserRequest } from '../../store/actions/userActions';

export const useLoginHook = () => {
  const dispatch = useDispatch();
  const userName = 'React';
  const password = 'react';

  const signInRequestHandler = useCallback(() => {
    dispatch(requestUserRequest(userName, password));
  }, [dispatch]);

  return { signInRequestHandler };
};
