import { features } from "../../data/features";
import FeaturesItem from "../../components/FeaturesItem/";
import "./features.scss";

function Features() {
  const dataFeatures = features;

  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {dataFeatures.map((item, index) => (
        <FeaturesItem
          key={`${item}-${index}`}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </section>
  );
}
export default Features;
