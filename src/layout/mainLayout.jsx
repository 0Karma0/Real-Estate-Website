import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <>
      <div className='h-16'>
        <Navbar></Navbar>
      </div>
      <div className='min-h-[calc(100vh-284px)]'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default MainLayout