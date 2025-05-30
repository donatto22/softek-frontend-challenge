import Nav from '@components/nav/Nav'
import { Navigate, Outlet } from 'react-router-dom'
import { Paths } from '../routes'
import useUserStore from 'src/shared/store/useUserStore'
import Steps from '@components/steps/Steps'

const PlansOutlet = () => {
    const user = useUserStore((state) => state.profile)

    if (!user || user == null) {
        return <Navigate to={Paths.home} />
    }

    return (
        <>
            <Nav />
            <Steps />
            <Outlet />
        </>
    )
}

export default PlansOutlet