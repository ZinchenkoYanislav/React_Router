import { Routes, Route } from 'react-router-dom';
import UserAlboms from './pages/UserAlboms';
import UserListPage from './pages/UserListPage';

export default function UsersModule() {
  return (
    <Routes>
        <Route path='' element={<UserListPage />}></Route>
        <Route path='10' element={<UserAlboms />}></Route>
    </Routes>
  )
}
