import React, { useContext, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { LoginPage } from './pages/LoginPage';
import { TodoPage } from './pages/TodoPage';

export const TokenContext = React.createContext(null);

const ProtectedRoute = ({ element }) => {
  const [token] = useContext(TokenContext);
  return token ? element() : <Navigate to="/login" />;
};

function App() {
  const [token, setToken] = useState(null);

  return (
    <div className="App">
      <TokenContext.Provider value={[token, setToken]}>
        <Routes>
          <Route
            path="/"
            element={<ProtectedRoute element={TodoPage} />}
          />
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </TokenContext.Provider>
    </div>
  );
}

export default App;
