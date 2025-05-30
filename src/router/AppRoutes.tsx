import { Route, Routes } from 'react-router-dom'
import BaseOutlet from './outlets/BaseOutlet'
import PlansOutlet from './outlets/PlansOutlet'
import { Elements, Paths } from './routes'

const AppRoutes = () => {
    const { Home, Plans, Summary } = Elements

    return (
        <Routes>
            <Route path='/' element={<BaseOutlet />}>
                <Route index element={<Home />} />
            </Route>

            <Route element={<PlansOutlet />}>
                <Route path={Paths.plans} element={<Plans />} />
                <Route path={Paths.summary} element={<Summary />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes