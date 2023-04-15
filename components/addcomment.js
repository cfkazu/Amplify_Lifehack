import { Button } from "@aws-amplify/ui-react";
import React, { useState } from "react";
import { addcomment } from "../pages/api";
import Router,{useRouter} from "next/router"
const AddComment = (props) => {
    const router = useRouter()
    const [comment, setComment] = useState({ content: "" ,postid:props.postid});
    const onClickSubmit = () => {
        addcomment(comment)
        props.setComments([...props.comments, comment])
        setComment({ ...comment, content:"" })
    }

    return (
        <div>
            <h1>Add Comment</h1>
            <input value={comment.content} onChange={(e) => setComment({ ...comment, content: e.target.value })} />
            <button onClick={onClickSubmit}>投稿</button>
        </div>
    )
}
export default AddComment