import Image from "next/image"
import styles from "../styles/List.module.css"
export default function List({ results,title}) {
    return (
        <main>
            <h1>{title}</h1>
            <li className={styles.list}>
                {results.map(({ title, id, date }) => {
                    return (
                        <div key={id}>
                            <h2>{title}</h2>
                            <p>{date}</p>
                        </div>
                    )
                })}
            </li>
        </main>
    )
}