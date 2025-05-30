import BackButton from '@components/BackButton'
import { Paths } from 'src/router/routes'
import useUserStore from 'src/shared/store/useUserStore'
import usePlanStore from 'src/shared/store/usePlanStore'

import familyIcon from '@assets/icons/family.png'
import './summary.scss'

const Summary = () => {
    const profile = useUserStore((state) => state.profile)
    const selectedPlan = usePlanStore((state) => state.planSeleccionado)

    return (
        <main className='summary'>
            <div className="summary__container">
                <BackButton to={Paths.plans} />

                <h1>Resumen del seguro</h1>

                <div className="summary__container__description">
                    <div className="summary__container__description__header">
                        <p>Precios calculados para: </p>

                        <div id="user">
                            <img src={familyIcon} alt="Icono de familia" />
                            <h3>{profile?.data.name} {profile?.data.lastName}</h3>
                        </div>
                    </div>

                    <hr />

                    <div className="summary__container__description__content">
                        <div className="summary__container__description__content__block">
                            <b>Responsable de pago</b>
                            <p>DNI: {profile?.dni}</p>
                            <p>Celular: {profile?.phone}</p>
                        </div>

                        <div className="summary__container__description__content__block">
                            <b>Plan Elegido</b>
                            <p>{selectedPlan?.title}</p>
                            <p>Costo del plan: ${selectedPlan?.price} al mes</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Summary