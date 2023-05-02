import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';
import { selectToken } from '../features/auth/authSlice';

export default function RequireAuth({ children }: any) {
  const token = useSelector(selectToken);
  let location = useLocation();

  if (!token) {
    return <Navigate to="/auth/signin" state={{ from: location }} replace />;
  }
  return children;
}
