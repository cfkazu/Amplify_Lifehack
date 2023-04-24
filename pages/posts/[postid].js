import Layout from "@/components/layout";
import OnePost from "@/components/OnePost";
import AddComment from "@/components/addcomment";
import { searchpost_by_id,getcomment} from "../api"
import styles from "../../styles/List.module.css"
import { useState } from "react";
import { Container, Row, Col } from '@nextui-org/react';
export default function Post(props) {
    const [comments, setComments] = useState(props.comments);
    return (
        <Layout>
            <Container>
            <OnePost {...props.post} />
            <AddComment postid={props.post.id} comments={comments} setComments ={setComments} />
                <main>
                    <li className={styles.list}>
                        {comments.map(({ id, content, author }) => {
                            return (
                                <div key={id}>
                                    <h2>{content}</h2>
                                    <p>{author}</p>
                                </div>
                            )
                        })}
                    </li>
                </main>
            </Container>
        </Layout>
    )
}

export async function getServerSideProps({ params }) {
    const result = await searchpost_by_id(params.postid)
    const comments = await getcomment(params.postid)
    if (!result) {
        return {
            notFound: true,
        }
    }
    return {
        props: {
            post: result,
            comments:comments
        }
     
    }
    
}