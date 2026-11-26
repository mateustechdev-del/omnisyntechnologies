import { Solution, solutionMetadata } from "../../../components/Solution";
import { products } from "../../../components/product-pages";

export const dynamicParams = false;
export function generateStaticParams() {
  return Object.keys(products).map(slug => ({ slug }));
}

export async function generateMetadata({ params }) {
  return solutionMetadata((await params).slug);
}

export default async function Page({ params }) {
  return <Solution slug={(await params).slug}/>;
}
