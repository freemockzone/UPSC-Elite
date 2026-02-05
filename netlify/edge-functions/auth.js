// netlify/edge-functions/auth.js

export default async (request, context) => {
  // 1. Check for the cookie we set in index.html
  const cookies = context.cookies;
  const session = cookies.get("upsc_session");

  // 2. If the cookie is missing, they are NOT logged in
  if (!session) {
    // Redirect them back to the login page
    const url = new URL("/", request.url);
    return Response.redirect(url);
  }

  // 3. If cookie exists, allow the download
  return context.next();
};
