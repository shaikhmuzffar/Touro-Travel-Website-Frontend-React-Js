import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbarlink({name,active,path}) {
    return (
        <li className='navlink'>
            <Link className={`navlinkItem ${active}`} to={`/${path}`} >{name}</Link>
        </li>
    )
}
