import { useState } from 'react'
import './plans.scss'

import { Paths } from 'src/router/routes'
import PlanType from '@components/plans/PlanType'
import { getPlans } from 'src/services/planService'
import type { Plan } from '@declarations/Plans'

import toMe from '@assets/plans/to-me.png'
import toOther from '@assets/plans/to-other.png'
import PlansList from './PlansList'
import useUserStore from 'src/shared/store/useUserStore'
import { getAgeFromBirthDate } from 'src/shared/helpers/getAgeFromBirthdate'
import BackButton from '@components/BackButton'

const Plans = () => {
    const [selectedType, setSelectedType] = useState(0)

    const [plansData, setPlansData] = useState<Plan[] | null>()

    const profile = useUserStore((state) => state.profile)

    const handleChangeType = async (number: number) => {
        // evitar consumo de api al volver a dar
        // click en el que ya se dio
        if (selectedType == number) return

        setPlansData(null)

        setSelectedType(number)

        const data = await getPlans()

        const newData = data.list.filter(item => item.age >= getAgeFromBirthDate(profile?.data.birthDay))

        setPlansData(newData)
    }

    return (
        <main className='plans-main'>
            <div id="container">
                <BackButton to={Paths.home} />

                <div className="plans-main__container">
                    <div className="plans-main__container__question">
                        <h1>Rocío ¿Para quién deseas cotizar?</h1>
                        <p>Selecciona la opción que se ajuste más a tus necesidades.</p>
                    </div>

                    <section className="plans-main__container__types">
                        <PlanType onClick={() => handleChangeType(1)} active={selectedType == 1} icon={toMe} title='Para mi' description='Cotiza tu seguro de salud y agrega familiares si así lo deseas.' />
                        <PlanType onClick={() => handleChangeType(2)} active={selectedType == 2} icon={toOther} title='Para alguien más' description='Realiza una cotización para uno de tus familiares o cualquier persona.' />
                    </section>
                </div>

                <PlansList plans={plansData!} selectedType={selectedType} />
            </div>
        </main>
    )
}

export default Plans