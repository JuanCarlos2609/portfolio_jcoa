import { Routes, Route, Navigate } from 'react-router-dom';
import { FullScreenLayout } from './layouts';
import { Home } from './views/Home';
import { Proyects } from './views/Proyects';

export const App = () => {
  return (
    <FullScreenLayout>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/proyects' element={<Proyects />} />

        <Route path='*' element={<Navigate to='/home' replace />} />
      </Routes>
    </FullScreenLayout>
  );
};
