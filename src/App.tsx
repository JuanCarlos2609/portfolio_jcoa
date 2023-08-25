import { Routes, Route, Navigate } from 'react-router-dom';
import { FullScreenLayout } from './layouts';
import { Home } from './views/Home';

export const App = () => {
  return (
    <FullScreenLayout>
      <Routes>
        <Route path='/home' element={<Home />} />

        <Route path='*' element={<Navigate to='/home' replace />} />
      </Routes>
    </FullScreenLayout>
  );
};
