import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Posts({post, auth}) {
    return(
        <>
        
        <AuthenticatedLayout
                user={auth.user}
            >
                <div className="flex flex-col justify-center max-w-4xl mx-auto pt-12">
                    <div className='text-center font-bold text-2xl mb-5'>{post.title}</div>
                    <div className="text-justify">{post.content}</div>
                    
                </div>
            </AuthenticatedLayout>
        </>
    )
}