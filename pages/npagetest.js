import { Authenticator } from '@aws-amplify/ui-react';
import awsExports from '../src/aws-exports';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import Link from 'next/link';

Amplify.configure(awsExports);
export default function npagetest(){
    return (
        <Authenticator socialProviders={['google']}>{({ signOut, user }) => (
            <>
            <div>npagetest</div>
                <Link href={"/"}>Home</Link>
                <div>Your Name is { user.username}</div>
            </>
        )}</Authenticator>
    )
}