export default async function UserPage({
  params,
}: {
  params: Promise<{ user: string }>;
}) {
  const { user } = await params;
  //   TO DO: check if user with this id is authenticated - if not, redirect to home page.
  return <h1>{user}</h1>;
}
