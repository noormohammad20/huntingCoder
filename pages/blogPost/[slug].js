import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'
const Slug = () => {
    const router = useRouter()
    const { slug } = router.query
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h2>Title of The Page {slug}</h2>
                <hr />
                <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt beatae perferendis incidunt modi veritatis mollitia voluptates laudantium accusamus quae saepe.</div>
            </main>
        </div>
    )
}

export default Slug