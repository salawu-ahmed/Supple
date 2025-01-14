import styles  from './Navbar.module.css'

export default function Navbar() {
    return <header>
        <nav>
            <h1 className={styles.logo}>Supple<span className={styles.colored}>.</span></h1>
            <ul className={styles.navlinks}>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>REVIEWS</li>
                <li>VIDEO</li>
                <li>FEATURES</li>
                <li>PRODUCTS</li>
                <li>FAQS</li>
                <li>CONTACT</li>
            </ul>
        </nav>
    </header>
}