import React, { FC } from 'react'
import logo from '../../../../../../img/logo.jpg'
import './logo.css'

const Logo: FC = () => {
    return (
        <div className="d-flex logo">
            <img src={logo} alt="logo" height="50" />
        </div>
    )
}
export { Logo }