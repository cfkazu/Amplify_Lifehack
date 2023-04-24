import { Authenticator } from "@aws-amplify/ui-react";
import awsExports from '../src/aws-exports';

import { Amplify } from 'aws-amplify';
import Layout from "@/components/layout";
import '@aws-amplify/ui-react/styles.css';
import Router,{ useRouter } from 'next/router'
Amplify.configure(awsExports);
export default function my_Login() {
    return (

        <Authenticator.Provider>
            <Layout>
                <Authenticator socialProviders={['google']}>
                    <Login />
                </Authenticator>
            </Layout>
        </Authenticator.Provider>
    )
}

const Login = () => {
    const router = useRouter();

    router.back();
}

