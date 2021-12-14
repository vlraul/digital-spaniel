const data = {
  tags: "BRAND, DEV, ECOM, MARKETING",
  heading: "",
  description: "We create brand experiences " +
    "which are memorable and distinct. " +
    "Our experienced team create and develop " +
    "brands with personality and resonance.",
  link: "/",
  image: "/images/spaniel.png"
}

export default function handler(req, res) {
  res.status(200).json(data);

}