import { Routes, Route } from 'react-router';
import { MainLayout } from './layouts';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<div>Home Page</div>} />
      </Route>
    </Routes>
  );
};

export default App;
