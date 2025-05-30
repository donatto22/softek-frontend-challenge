import './nav.scss'


const Nav = () => {
    return (
        <nav className='nav'>
            <div className="nav__container">
                <img src="./logo.png" alt="Rimac logo" loading='lazy' />

                <div className="nav__container_phone">
                    <p>!Compra por este medio!</p>
                    <div className="nav__container_phone_number">
                        <img src='./src/assets/icons/phone.png' alt="phone icon" />
                        <p>(01) 411 6001</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav