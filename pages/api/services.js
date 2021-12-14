const data = {
   brand: [
    {
      title: "Brand Strategy",
      description: "By focusing on design as an enabler and putting " +
        "a huge emphasis on our clients as co-producers, " +
        "we create innovative, sustainable marketing that " +
        "enhances brand experience and user engagement.",
    },
    {
      title: "Logo & Name",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod " +
        "tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "Identity & Collateral",
      description: "Ut enim ad mini m veniam," +
        " quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea" +
        " commodo consequat.",
    },
  ],
    marketing: [
      {
        title: "Digital",
        description: "Amet nisl purus in mollis nunc. " +
          "Elit pellentesque habitant morbi tristique senectus et netus. " +
          "Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. ",
      },
      {
        title: "Marketing",
        description: "Nulla pharetra diam sit amet nisl suscipit. " +
          "Blandit aliquam etiam erat velit. A cras semper auctor neque. ",
      },
    ],
    development: [
    {
      title: "eCommerce",
      description: "Cursus in hac habitasse platea dictumst quisque. " +
        "Hendrerit dolor magna eget est lorem ipsum.",
    },
    {
      title: "Web Development",
      description: "Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras." +
        " Integer enim neque volutpat ac.",
    },
    {
      title: "Mobile Apps",
      description: "Mauris sit amet massa vitae tortor condimentum lacinia. " +
        "Tincidunt arcu non sodales neque sodales ut.",
    }
  ],
}

export default function handler(req, res) {
  res.status(200).json(data)

}