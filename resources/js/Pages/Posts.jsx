
import { Head, Link } from "@inertiajs/react";
import GuestLayout from '@/Layouts/GuestLayout';
import PreviewPost from "@/Components/PreviewPost";
import { Button } from "@mui/material";
import Layout from '@/Layouts/Layout';



export default function Posts({posts, auth}) {
    return(
        <>
            <Head title="Посты"/>
            <Layout
            >
                <div className="max-w-4xl mx-auto pt-12">
                {posts.data.map((post) =><Link key={post.id} href={"post/" + post.id}><PreviewPost title={post.title} content={post.content}/></Link>)}
                    
                    <div className="flex justify-center">
                        <Link href={posts.prev_page_url} className="mr-3"><div>back</div></Link>
                        <Link href={posts.next_page_url}><div>next</div></Link>
                    </div>
                </div>
            </Layout>
            
        </>
    );
}