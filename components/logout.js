import { Auth } from "aws-amplify"

const Logout = () => {
  return <li><a onClick={() => Auth.signOut()} >ログアウト</a></li>
}


export default Logout