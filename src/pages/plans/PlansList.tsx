import type { Plan } from '@declarations/Plans'

import homeIcon from '@assets/plans/home.webp'
import hospitalIcon from '@assets/plans/hospital.webp'
import usePlanStore from 'src/shared/store/usePlanStore'
import { useNavigate } from 'react-router-dom'
import { Paths } from 'src/router/routes'

const PlansList = ({ plans, selectedType }: {
    plans: Plan[]
    selectedType: number
}) => {
    const plansIcons = {
        0: homeIcon,
        1: hospitalIcon,
        2: homeIcon
    }

    const setPlanSeleccionado = usePlanStore((state) => state.setPlanSeleccionado)
    const navigate = useNavigate()

    const selectPlan = (plan: Plan) => {
        setPlanSeleccionado(plan.name, selectedType == 2 ? Number((plan.price - (plan.price * 0.05)).toFixed(2)) : plan.price)

        navigate(Paths.summary)
    }

    return (
        <>
            <article className="plans-main_container__list">
                {
                    plans?.map((plan, index) => (
                        <div id='list-item'>
                            <div>
                                <div key={index} className="plans-main_container__list__header">
                                    <div className="plans-main_container__list__header__description">
                                        <h3>{plan.name}</h3>

                                        <div className="plans-main_container__list__header__price">
                                            <p>COSTO DEL PLAN</p>
                                            <p>${selectedType == 2 ? (plan.price - (plan.price * 0.05)).toFixed(2) : plan.price} al mes</p>
                                        </div>
                                    </div>

                                    <img src={plansIcons[index]} alt="Icono del plan" />
                                </div>

                                <hr />

                                <div className="plans-main_container__list__main">
                                    <ul>
                                        {
                                            plan.description.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>

                            <button onClick={() => selectPlan(plan)}
                                className="plans-main_container__list__action">
                                Seleccionar Plan
                            </button>
                        </div>
                    ))
                }
            </article>
        </>
    )
}

export default PlansList