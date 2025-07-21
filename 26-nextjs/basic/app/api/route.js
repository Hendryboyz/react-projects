export async function GET() {
  console.log("this is hello world API rotue");
  return Response.json({
    message: 'Hello World!',
  });
}