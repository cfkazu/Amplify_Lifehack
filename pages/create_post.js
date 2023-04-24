import Layout from "@/components/layout";
import React, { useState } from "react";
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Authenticator } from "@aws-amplify/ui-react";
import { GetUser } from "@/components/returnUser"
import { RequireAuth } from "@/components/requireAuth";
import { Auth } from "aws-amplify";
import { createposts } from "./api";
import { useRouter } from 'next/router'
import TextField from '@mui/material/TextField';
 import SendIcon from '@mui/icons-material/Send';
import { Container, Row, Col } from '@nextui-org/react';
import Button from '@mui/material/Button';
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
    const [post_state, setPostState] = useState({genre: "", title: "", content: "",who:"",when:"",where:"",what:"",result:"",caution:""});

   const onClickSubmit = async () => {
     let res = await createposts(post_state)
     router.push(`/posts/${res.id}`)
   }
   return (
     <Layout>
       <Container>
         <h1>タイトル</h1>
         <TextField fullWidth
           id="title"
           placeholder="学割を使って旅行に行く話"
           value={post_state.title}
           onChange={(e) => setPostState({ ...post_state, title: e.target.value })} 
          />

         <h1>ジャンル</h1>
           <TextField fullWidth
           id="genre"
           placeholder="飯, 旅行,"
           value={post_state.genre}
           onChange={(e) => setPostState({ ...post_state, genre: e.target.value })}
         />
        <h1>誰が(条件)</h1>
         <TextField fullWidth
           id="who"
           placeholder="学生"
           value={post_state.who}
           onChange={(e) => setPostState({ ...post_state, who: e.target.value })}
          />

         <h1>いつ</h1>
         <TextField fullWidth
           id="when"
           placeholder="夏"
           value={post_state.when}
           onChange={(e) => setPostState({ ...post_state, when: e.target.value })}
          />

         <h1>どこで</h1>
         <TextField fullWidth
           id="where"
           placeholder="東京"
           value={post_state.where}
           onChange={(e) => setPostState({ ...post_state, where: e.target.value })} 
         />
         <h1>何をするとよい</h1>
         <TextField fullWidth
           id="what"
           placeholder="食べる"
           value={post_state.what}
           onChange={(e) => setPostState({ ...post_state, what: e.target.value })}
         /> 

         <h1>結果</h1>
         <TextField fullWidth multiline rows={3}
           id="result"
           placeholder="美味しかった"
           value={post_state.result}
           onChange={(e) => setPostState({ ...post_state, result: e.target.value })}
          />

         <h1>注意点</h1>
         <TextField fullWidth multiline rows={2}
           id="caution"
           placeholder="お金がかかる"
           value={post_state.caution}
           onChange={(e) => setPostState({ ...post_state, caution: e.target.value })}
          />  

         
        <h1>備考</h1>
         <TextField fullWidth multiline rows={2}
           id="content"
           placeholder="とりあえずおいてあります"
           value={post_state.content}
           onChange={(e) => setPostState({ ...post_state, content: e.target.value })}
          />  
       
         
         <Button flat color="primary" auto onClick={onClickSubmit}>投稿</Button>
       </Container>
       </Layout>
    )
}
