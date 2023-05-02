import { Routes, Route } from 'react-router-dom';
import ExerciseDashboard from './components/exercise-dashboard';
import RequireAuth from './components/require-auth';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth>
            <ExerciseDashboard />
          </RequireAuth>
        }
      />
      <Route path="/auth/signin" element={<h1>Login</h1>} />
    </Routes>
  );
}

export default App;
