import { useNavigate } from 'react-router-dom'
import './form.scss'
import type { FormEvent } from 'react'
import { onlyNumbers } from '../../helpers/regex'
import { Paths } from 'src/router/routes'

import { toast, Toaster } from 'sonner'
import useUserStore from 'src/shared/store/useUserStore'

const QuoteForm = () => {
    const navigate = useNavigate()
    const getUserData = useUserStore((state) => state.getUserData)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = e.currentTarget

        const formdata = new FormData(form)
        const entries = Object.fromEntries(formdata) as {
            documentID: string
            privacy: string
            communication: string
            phone: string
        }

        if (entries.phone.length < 9) {
            toast.error('Telefono incompleto')
            return
        }

        if (entries.privacy && entries.communication) {
            if (entries.phone != '5130216147' || entries.documentID != '30216147') {
                toast.error('Este usuario no existe')
                return
            } else {
                await getUserData(entries.documentID, entries.phone)
                navigate(Paths.plans)
            }

        } else {
            toast.error('Debes acceptar las politicas')
        }
    }

    return (
        <div className="main__container__form">
            <Toaster richColors />

            <form onSubmit={handleSubmit}>
                <div className="main__container__form__inputs">
                    <div id="identificationDocument">
                        <select name="document" id="documentInput">
                            <option value="1">DNI</option>
                            <option value="2">RUC</option>
                            <option value="2">CE</option>
                        </select>

                        <input minLength={8} maxLength={8} required type="text" name="documentID" id="documentID" placeholder='Nro. de documento' onChange={(e) => {
                            e.target.value = onlyNumbers(e.target.value)
                        }} />
                    </div>


                    <div id='phoneNumberDiv'>
                        <input minLength={9} required type="text" name="phone" id="phone" placeholder='Celular' onChange={(e) => {
                            e.target.value = onlyNumbers(e.target.value)
                        }} />
                    </div>
                </div>

                <div className="main__container__form__policy">
                    <div className='main__container__form__policy__input'>
                        <input type="checkbox" name="privacy" id="privacy" />
                        <label htmlFor="privacy">Acepto la Política de Privacidad</label>
                    </div>

                    <div className='main__container__form__policy__input'>
                        <input type="checkbox" name="communication" id="communication" />
                        <label htmlFor="communication">Acepto la Política Comunicaciones Comerciales</label>
                    </div>

                    <a href="#">Aplican Términos y Condiciones</a>
                </div>

                <button className='main__container__form__button' type='submit'>Cotiza aquí</button>
            </form>
        </div>
    )
}

export default QuoteForm