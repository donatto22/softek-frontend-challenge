import Footer from '@components/footer/Footer'
import Nav from '@components/nav/Nav'
import { Outlet } from 'react-router-dom'

const BaseOutlet = () => {
    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    )
}

export default BaseOutlet