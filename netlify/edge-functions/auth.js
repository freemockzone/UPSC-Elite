// netlify/edge-functions/auth.js

export default async (request, context) => {
  // 1. Check for the cookie
  const cookies = context.cookies;
  const session = cookies.get("upsc_session");

  // 2. If cookie is missing, redirect to Login (Home)
  if (!session) {
    const url = new URL("/", request.url);
    return Response.redirect(url);
  }

  // 3. If authorized, proceed
  return context.next();
};
