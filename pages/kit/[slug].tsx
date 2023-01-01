import Layout from "../../components/Layout";
import kits from "../../data.json";
import { ProductCard } from "../../components/product";
import { Product } from "../../scripts/generate-kits/src/types";

export async function getStaticPaths() {
  const paths = kits.map((kit) => ({
    params: { slug: kit.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const kit = kits.find((k) => k.slug === params.slug);

  return {
    props: { kit },
  };
}

const IndexPage = ({ kit }) => {
  return (
    <Layout title="Conrad The Programmer - Template">
      <h1 className="font-bold text-xl">{kit.name}</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {kit.products.map((product: Product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </Layout>
  );
};

export default IndexPage;
