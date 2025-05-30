import './plantype.scss'

import checkActive from '../../../assets/plans/check-active.png'
import checkInactive from '../../../assets/plans/check-inactive.png'

const PlanType = ({ icon, title, description, active, onClick }: {
    icon: string
    title: string
    description: string
    active: boolean
    onClick: () => void
}) => {
    return (
        <div className={`type ${active ? '' : 'type-hover'}`} onClick={onClick}>
            <div className="type__check">
                <img src={active ? checkActive : checkInactive} alt="check icon" />
            </div>

            <div className="type__description">
                <img src={icon} alt='Icono' />
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default PlanType