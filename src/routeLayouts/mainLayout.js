import { Outlet } from 'react-router-dom';
const MainLayout = () => {

  return (
    <>
      <main style={{backgroundColor:'#266d9d'}}>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;