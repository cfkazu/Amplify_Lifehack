import  {Amplify, API, Auth } from 'aws-amplify';
import awsExports from '../../src/aws-exports';
import { useAuthenticator } from '@aws-amplify/ui-react';
import Link from 'next/link';
Amplify.configure(awsExports);

//const API_URL = `https://l6yobvv4dg.execute-api.ap-northeast-1.amazonaws.com/demo/items?`
export async function searchpost_by_id(postid) {
   // const url = `${API_URL}postid=${postid}&genre=&author=`
  //  const res = await fetch(url)
   // const jsondata = await res.json()
    
    const jsondata = await API.get('post', '/items', { queryStringParameters: { postid: postid, genre: "", author: "" } })
    //console.log(res2)
    //const jsondata = await res.json()
      return {
        id: jsondata[0].id,
        title:jsondata[0].title,
        author: jsondata[0].author,
        content: jsondata[0].content,
        date: jsondata[0].date,
        genre: jsondata[0].genre,
      }
}
export async function searchposts_by_author(author) {
    //const url = `${API_URL}postid=&genre=&author=${author}`
   // const res = await fetch(url)
   // const jsondata = await res.json()
    const jsondata = await API.get('post', '/items', { queryStringParameters: { postid: "", genre: "", author: author } })
    return jsondata.map((post) => {
        return {
            id: post.id,
            title: post.title,
            author: post.author,
            content: post.content,
            date: post.date,
            genre: post.genre,
        }
    }
    )
}

export async function searchposts_by_genre(genre) {
    /* const url = `${API_URL}postid=&genre=${genre}&author=`
    const res = await fetch(url)
    const jsondata = await res.json() */
    const jsondata = await API.get('post', '/items', { queryStringParameters: { postid: "", genre: genre, author: "" } })
    return jsondata.map((post) => {
        return {
            id: post.id,
            title: post.title,
            author: post.author,
            content: post.content,
            date: post.date,
            genre: post.genre,
        }
    }
    )
}

export async function createposts(post) {    
    //ユーザが認証できてないと多分エラー出ますよ。
    const token = (await Auth.currentSession()).getIdToken().getJwtToken();

    const myInit = {
        body:post,
        headers: {
            "Content-Type":"text/plain",
            "Authorization": token
        }
    };
    const res = await API.post('post', '/items', myInit)
    return {
        id: res.id,
        title: res.title,
        author: res.author,
        content: res.content,
        date: res.date,
        genre: res.genre,
    }
}

export async function addcomment(comment) {
    
    const token = (await Auth.currentSession()).getIdToken().getJwtToken();
    console.log(token)
    const myInit = {
        body:comment,
        headers: {
            "Content-Type":"text/plain",
            "Authorization": token
        }
    };
    console.log(myInit)
    const res = await API.post('post', '/comment', myInit)
}

export async function getcomment(postid) {
    const jsondata = await API.get('post', '/comment', { queryStringParameters: { postid: postid,author:""} })
    return jsondata.map((comment) => {
        return {
            id: comment.id,
            postid: comment.postid,
            content: comment.content,
            author: comment.author,
        }
    }
    )
}

export async function Like(like) {
    const token = (await Auth.currentSession()).getIdToken().getJwtToken();
    const myInit = {
        body:like,
        headers: {
            "Content-Type":"text/plain",
            "Authorization": token        }
    };
    const res = await API.post('post', '/like', myInit)
}