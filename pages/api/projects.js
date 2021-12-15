const data = {
  all: {
    categoryName: "All",
    data: [
      {
        title: "Make Ideas Happen",
        description: "A local paper with big ideas needed A sharp new brand to inspire readers.",
        imageURL: '/images/newspaper02.png',
        url: "/",
        isDouble: false
      },
      {
        title: "Make Ideas Happen",
        description: "A local paper with big ideas needed A sharp new brand to inspire readers.",
        imageURL: '/images/whellies01.png',
        url: "/",
        isDouble: false
      },
      {
        title: "Make Ideas Happen",
        description: "A local paper with big ideas needed A sharp new brand to inspire readers.",
        imageURL: '/images/makerek.png',
        url: "/",
        isDouble: true
      },
      {
        title: "Make Ideas Happen",
        description: "A local paper with big ideas needed A sharp new brand to inspire readers.",
        imageURL: '/images/rider01.png',
        url: "/",
        isDouble: false
      },
      {
        title: "Make Ideas Happen",
        description: "A local paper with big ideas needed A sharp new brand to inspire readers.",
        imageURL: '/images/newspaper.png',
        url: "/",
        isDouble: false
      },
    ]
  },
  branding: {
    categoryName: "Branding",
    data: [
      {
        title: "Make Ideas Happen",
        description: "A local paper with big ideas needed A sharp new brand to inspire readers.",
        imageURL: '/images/whellies01.png',
        url: "/",
        isDouble: false
      },
      {
        title: "Make Ideas Happen",
        description: "A local paper with big ideas needed A sharp new brand to inspire readers.",
        imageURL: '/images/newspaper02.png',
        url: "/",
        isDouble: false
      },
      {
        title: "Make Ideas Happen",
        description: "A local paper with big ideas needed A sharp new brand to inspire readers.",
        imageURL: '/images/makerek.png',
        url: "/",
        isDouble: false
      },
      {
        title: "Make Ideas Happen",
        description: "A local paper with big ideas needed A sharp new brand to inspire readers.",
        imageURL: '/images/newspaper.png',
        url: "/",
        isDouble: true
      },
      {
        title: "Make Ideas Happen",
        description: "A local paper with big ideas needed A sharp new brand to inspire readers.",
        imageURL: '/images/rider01.png',
        url: "/",
        isDouble: false
      }
    ]
  },
  webDesign: {
    categoryName: "Web Design",
    data: [
      {
        title: "Make Ideas Happen",
        description: "A local paper with big ideas needed A sharp new brand to inspire readers.",
        imageURL: '/images/makerek.png',
        url: "/",
        isDouble: false
      },
      {
        title: "Make Ideas Happen",
        description: "A local paper with big ideas needed A sharp new brand to inspire readers.",
        imageURL: '/images/newspaper.png',
        url: "/",
        isDouble: true
      },
      {
        title: "Make Ideas Happen",
        description: "A local paper with big ideas needed A sharp new brand to inspire readers.",
        imageURL: '/images/rider01.png',
        url: "/",
        isDouble: false
      },
      {
        title: "Make Ideas Happen",
        description: "A local paper with big ideas needed A sharp new brand to inspire readers.",
        imageURL: '/images/whellies01.png',
        url: "/",
        isDouble: false
      },
      {
        title: "Make Ideas Happen",
        description: "A local paper with big ideas needed A sharp new brand to inspire readers.",
        imageURL: '/images/newspaper02.png',
        url: "/",
        isDouble: false
      },
    ]
  },
  digitalMarketing: {
    categoryName: "Digital Marketing",
    data: [
      {
        title: "Make Ideas Happen",
        description: "A local paper with big ideas needed A sharp new brand to inspire readers.",
        imageURL: '/images/whellies01.png',
        url: "/",
        isDouble: true
      },
      {
        title: "Make Ideas Happen",
        description: "A local paper with big ideas needed A sharp new brand to inspire readers.",
        imageURL: '/images/newspaper02.png',
        url: "/",
        isDouble: false
      },
      {
        title: "Make Ideas Happen",
        description: "A local paper with big ideas needed A sharp new brand to inspire readers.",
        imageURL: '/images/makerek.png',
        url: "/",
        isDouble: false
      },
      {
        title: "Make Ideas Happen",
        description: "A local paper with big ideas needed A sharp new brand to inspire readers.",
        imageURL: '/images/rider01.png',
        url: "/",
        isDouble: true
      }
    ]
  }
}







export default function handler(req, res) {
  res.status(200).json(data)

}