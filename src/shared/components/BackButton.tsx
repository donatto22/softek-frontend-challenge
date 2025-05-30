import { Link } from 'react-router-dom'

import backArrow from '@assets/steps/back-arrow.png'

const BackButton = ({ to }: {
    to: string
}) => {
    return (
        <Link to={to} className="plans-main__back">
            <img src={backArrow} alt="Back arrow" />
            Volver
        </Link>
    )
}

export default BackButton