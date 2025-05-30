import './home.scss'

import homeImage from '../../assets/home-image.png'
import QuoteForm from '@components/home/QuoteForm'

const Home = () => {
    return (
        <main className='main'>
            <div id='purple-blush' className='blush' />
            <div id='green-blush' className='blush' />

            <div className="main__container">
                <div className="main__container__image">
                    <img src={homeImage} alt="home image" />
                </div>

                <div className="main__container__description">
                    <div className="main__container__description__tag">
                        Seguro Salud Flexible
                    </div>

                    <div className="main__container__description__title">
                        <h1>Creado para ti y tu familia</h1>
                    </div>

                    <div className="main__container__description__subtitle">
                        Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.
                    </div>
                </div>

                <QuoteForm />
            </div>
        </main>
    )
}

export default Home