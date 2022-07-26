import React, { useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'

const Blog = (props) => {
    const [blogs, setBlogs] = useState(props.allBlogs)

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                {blogs.map((blog, index) => {
                    return <div key={index} className={styles.blogItem}>
                        <Link href={`/blogpost/${blog.slug}`}>
                            <h3>{blog.title}</h3></Link>
                        <p>{blog.content.substr(0, 140)}....</p>
                    </div>
                })}
            </main>
        </div>
    )
}
export async function getServerSideProps(context) {
    let data = await fetch('http://localhost:3000/api/blogs')
    let allBlogs = await data.json()

    return {
        props: { allBlogs },
    }
}
export default Blog