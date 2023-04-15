import { useAuthenticator } from '@aws-amplify/ui-react';
import Link from 'next/link';



export const RequireAuth = ({ children }) => {
  const { route } = useAuthenticator((context) => [context.route]);

  if (route !== 'authenticated') {
    return (
      <>
        <p>ログインしないと使えません</p>
        <Link href={"/"} >戻る</Link>
      </>
    );
  }
  return children;
}