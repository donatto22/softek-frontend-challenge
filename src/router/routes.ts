import { lazy } from 'react'
import LazyLoader from 'src/shared/hoc/LazyLoader'

export const Elements = {
    Home: LazyLoader(lazy(() => import('../pages/home/Home'))),
    Plans: LazyLoader(lazy(() => import('../pages/plans/Plans'))),
    Summary: LazyLoader(lazy(() => import('../pages/summary/Summary')))
}

export const Paths = {
    home: '/',

    plans: '/plans',
    summary: '/summary'
}