export default function BlogPostPage({ params }) {
  const { slug } = params;
  return (
    <main>
      <h1>The Blog Post</h1>
      <p>{slug}</p>
    </main>
  );
}