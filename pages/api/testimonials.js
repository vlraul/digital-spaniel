const data = [
  {
    name: "Paul Simon",
    position: "Founder, MegaCorp",
    image: "/images/testimonial_face03.png",
    quote: "Working with Digital Spaniel has been a breath of fresh air. Their approach and attitude kept me informed and included from the start. Super pleased with the end results too!"
  },
  {
    name: "Johnny B. Goode",
    position: "CEO, Getting Things Done",
    image: "/images/testimonial_face01.png",
    quote: "Advice and support from DigiSpan was second to none. Always willing to help and offer advice and solutions. A very good and rapid understanding of our requirements was key to this."
  },
  {
    name: "Mary Jane",
    position: "CEO, Design Matters",
    image: "/images/testimonial_face02.png",
    quote: "We needed a creative and unique brand which could compete against established products. Digital Spaniel delivered in spades and we’ve seen a huge response to the product launch."
  }
]

export default function handler(req, res) {
  res.status(200).json(data)
}