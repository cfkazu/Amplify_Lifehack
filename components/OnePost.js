import Image from "next/image"
import styles from "../styles/Home.module.css"
export default function OnePost({ id, postid, author, content, date, genre, title }) {
    return (
        <>
            <h1 className={styles.h1}>{title}</h1>
            <h2>{author}</h2>
            <p>{content}</p>

            <p>{genre}</p>
            <p>{date}</p>
        </>
    )
}