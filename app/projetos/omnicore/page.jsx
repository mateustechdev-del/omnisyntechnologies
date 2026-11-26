import { Solution, solutionMetadata } from "../../../components/Solution";
import { coreSlug } from "../../../components/product-pages";

export const metadata = {
  ...solutionMetadata(coreSlug),
  alternates: { canonical: "/pt-br/omnicore/" }
};

export default function OmniCorePage() {
  return <Solution slug={coreSlug}/>;
}
