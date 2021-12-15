const data = [
  {
    url: '/images/office01.png'
  },
  {
    url: '/images/office01.png'
  },
  {
    url: '/images/office02.png'
  },
  {
    url: '/images/office04.png'
  },
  {
    url: '/images/office03.png'
  },
  {
    url: '/images/office03.png'
  },
  {
    url: '/images/office04.png'
  },
  {
    url: '/images/office02.png'
  },
  {
    url: '/images/office03.png'
  },
  {
    url: '/images/office02.png'
  },
  {
    url: '/images/office04.png'
  },
  {
    url: '/images/office01.png'
  },
  {
    url: '/images/office02.png'
  },
  {
    url: '/images/office03.png'
  },
]

export default function handler(req, res) {
  res.status(200).json(data)
}
