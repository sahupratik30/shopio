export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/orders", "/cart", "/wishlist", "/success"],
};
