import { Suspense, type ComponentType } from 'react'
import { PuffLoader } from 'react-spinners'

const Loader = () => {
    return (
        <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
        }}>
            <PuffLoader />
        </div>
    )
}

const LazyLoader = (WrappedComponent: ComponentType) => {
    return () => {
        return (
            <Suspense fallback={<Loader />}>
                <WrappedComponent />
            </Suspense>
        )
    }
}

export default LazyLoader