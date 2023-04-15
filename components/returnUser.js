import { useAuthenticator } from '@aws-amplify/ui-react';
import Link from 'next/link';

export function GetUser(){
  const { route,user } = useAuthenticator((context) => [context.route,context.user]);

  if (route !== 'authenticated') {
    return (
      <>
        <p>ログインしないと使えません</p>
        <Link href={"/"} >戻る</Link>
      </>
    );
  }
  console.log(user)
  return user;
}