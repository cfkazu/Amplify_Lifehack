import Layout from "@/components/layout";
import React, { useState } from "react";
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Authenticator } from "@aws-amplify/ui-react";
import { GetUser } from "@/components/returnUser"
import { RequireAuth } from "@/components/requireAuth";
import { Auth } from "aws-amplify";
import { createposts } from "./api";
import { useRouter } from 'next/router'
export default function my_post() {
  return(
    <Authenticator.Provider>
      <RequireAuth>
        <Post />
      </RequireAuth>
  </Authenticator.Provider>
  );
}
 const Post =  () => { 
  const [ todoText, setTodoText ] = useState("");
   const [todos, setTodos] = useState([]);
    const router = useRouter()

  
    const { route,user } = useAuthenticator((context) => [context.route,context.user]);
    const [post_state, setPostState] = useState({genre: "", title: "", content: ""});

   const onClickSubmit = async () => {
     let res = await createposts(post_state)
     console.log("受信側")
      console.log(res)
     router.push(`/posts/${res.id}`)
   }
    return (
        <Layout>

        <h1>タイトル</h1>
            <input
                value={post_state.title}
                // onChange={(e) => setTitle(e.target.value)}
                onChange={(e) => setPostState({ ...post_state, title: e.target.value })}
        />

        <h1>本文</h1>
            <div>
                {/* <textarea value={content} onChange={(e) => setContent(e.target.value)} /> */}
                <textarea value={post_state.content} onChange={(e) => setPostState({ ...post_state, content: e.target.value })} />
            </div>
            <h1>ジャンル</h1>
        <input value={post_state.genre} onChange={(e) => setPostState({ ...post_state, genre: e.target.value })} />
        <button onClick={onClickSubmit}>投稿</button>
        </Layout>
    )
}
