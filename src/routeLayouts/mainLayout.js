import { Outlet } from 'react-router-dom';
const MainLayout = () => {

  return (
    <>
      <main style={{backgroundColor:'#ab7878'}}>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;