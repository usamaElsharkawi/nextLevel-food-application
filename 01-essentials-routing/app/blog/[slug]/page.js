export default async function BlogPost({ params }) {
    const {slug} = await params;
    return (
        <main>
            <h1>Blog Post</h1>
            <p>{slug}</p>
        </main>
    );
}
