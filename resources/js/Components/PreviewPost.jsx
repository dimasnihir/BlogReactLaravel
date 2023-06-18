export default function PreviewPost({title, content}) {
    if(content.length  > 200) {
        content = content.slice(0,200) + '...'
    }
    return(
        <>
            <div className="flex flex-col border-2 rounded mb-3 p-2">
                
                <div className="font-bold">{title}</div>
                <div className="text-sm">{content}</div>
                
            </div>
        </>
    )
}