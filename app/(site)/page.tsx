import Banner from "../components/Banner";
import Products from "../components/Products/Products";

export default function Home() {
  return (
    <main className="container mx-auto">
      <Banner />
      <Products />
    </main>
  );
}
