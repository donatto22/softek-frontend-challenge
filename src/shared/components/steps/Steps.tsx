import { useLocation } from 'react-router-dom'
import './steps.scss'

import divider from '../../../assets/steps/step-progress.png'

import step1_icon from '../../../assets/steps/stepper-1.png'
import step1_icon_active from '../../../assets/steps/stepper-1-active.png'

import step2_icon from '../../../assets/steps/stepper-2.png'
import step2_icon_active from '../../../assets/steps/stepper-2-active.png'

const Step = ({ number, description, active = false }: {
    number: 1 | 2
    description: string
    active?: boolean
}) => {
    const iconMap = {
        1: active ? step1_icon_active : step1_icon,
        2: active ? step2_icon_active : step2_icon,
    }

    return (
        <div className="steps__container">
            <img src={iconMap[number]} alt={`Paso ${number}`} />
            <p className={active ? 'step-active' : 'step-inactive'}>{description}</p>
        </div>
    )
}

const Steps = () => {
    const { pathname } = useLocation()

    return (
        <>
            <div className='steps'>
                <Step number={1} description='Planes y coberturas' active={pathname == '/plans' ? true : false} />
                <div>
                    <img src={divider} alt="Step progress divider" />
                </div>
                <Step number={2} description='Resumen' active={pathname == '/summary' ? true : false} />
            </div>

            <div id="steps-mobile">
                <p>Paso {pathname == '/plans' ? 1 : 2} de 2 </p>

                <div className="progress-bar">
                    <div
                        className="progress-bar__fill"
                        style={{ width: `${pathname == '/plans' ? 50 : 100}%` }}
                    />
                </div>
            </div>
        </>
    )
}

export default Steps