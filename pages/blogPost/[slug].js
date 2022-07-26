import React, { useState } from 'react'
import styles from '../../styles/BlogPost.module.css'

const Slug = (props) => {
    const [blog, setBlog] = useState(props.myBlog)
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h2>Title of The Page {blog.title}</h2>
                <hr />
                <div>{blog.content}</div>
            </main>
        </div>
    )
}
export async function getServerSideProps(context) {
    const { slug } = context.query
    let data = await fetch(`http://localhost:3000/api/getBlog?slug=${slug}`)
    let myBlog = await data.json()
    return {
        props: { myBlog },
    }
}

export default Slug