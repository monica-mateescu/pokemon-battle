import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-xl font-bold">Pokémon Battle</h1>
      </header>
      <main className="flex-1 p-4">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>Pokémon Battle</p>
        <small>&copy; {new Date().getFullYear()} - All right reserved</small>
      </footer>
    </div>
  );
};

export default MainLayout;
