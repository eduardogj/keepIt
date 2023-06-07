import styles from "./styles.module.css"

export default function Footer() {

    const currentYear = new Date().getFullYear();

        return(
        <>
            <footer className={`footer ${styles.footerPosition}`}>
                <div className="content has-text-centered">
                    <p> <strong>keepIt!</strong> Copyright {currentYear} eduardogjnrApps</p>
                </div>
            </footer>
        </>
    )
}