import { ReactNode } from 'react';
import Header from './header';
import { Authenticator } from "@aws-amplify/ui-react"


const Layout = ({ children }) => {
  return (
   <Authenticator.Provider>
    <div>
      <Header />
      
      <main>{children}</main>
    </div>
     </Authenticator.Provider>
  );
};

export default Layout;