import Layout from "@/components/layout";
import List from "@/components/List";
import {searchposts_by_author} from "../api"
export default function Post(props) {
    return (
        <Layout>
           <List {...props} />
        </Layout>
    )
}

export async function getServerSideProps({ params }) {
    const results = await searchposts_by_author(params.author)
  
    return {
        props: { results }
    }
    
}