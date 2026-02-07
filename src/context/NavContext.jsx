import { useEffect, useState, createContext } from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'

// CREATE CONTEXTS
export const NavbarContext = createContext();
export const NavbarColorContext = createContext();

const NavContext = ({ children }) => {

    const [navColor, setNavColor] = useState('white')
    const [navOpen, setNavOpen] = useState(false)

    const locate = useLocation().pathname

    useEffect(() => {
        if (locate === '/projects' || locate === '/agence') {
            setNavColor('black')
        } else {
            setNavColor('white')
        }
    }, [locate])

    return (
        <NavbarContext.Provider value={[navOpen, setNavOpen]}>
            <NavbarColorContext.Provider value={[navColor, setNavColor]}>
                {children}
            </NavbarColorContext.Provider>
        </NavbarContext.Provider>
    )
}

NavContext.propTypes = {
    children: PropTypes.node.isRequired
}

export default NavContext
