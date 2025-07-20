import { Post } from "@/types/pages/post"


export async function GET() {
    
        const posts: Post[] = [
            {id:1, title:"Nextjs", content:"nextjs content"},
            {id:2, title:"react", content:"react content"},
            {id:3, title:"javascript", content:"javascript content"},
        ]

        return new Response(JSON.stringify(posts),{
            status:200,
            headers:{"Content-Type" : "application/json"},
        })
}