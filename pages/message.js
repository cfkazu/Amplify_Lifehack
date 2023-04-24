import { Heading } from "@aws-amplify/ui-react"
import { RequireAuth } from "components/requireAuth"
import { Authenticator } from "@aws-amplify/ui-react"
import Layout from "@/components/layout"
const Message = () => {
  return (
    <Authenticator.Provider>
      <RequireAuth>
        <Heading>メッセージを表示</Heading>      
      </RequireAuth>        
    </Authenticator.Provider>
  )
}

export default Message