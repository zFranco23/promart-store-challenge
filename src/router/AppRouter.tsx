import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <PrivateRoute>
            <div>Home</div>
          </PrivateRoute>
          } 
        />
        <Route path='/login' element={
            <div>Login</div>
          
          } 
        />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter