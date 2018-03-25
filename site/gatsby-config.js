module.exports = {
  siteMetadata: {
    title: 'Team Mate',
    description: 'Fitness industry platform for connecting people',
    keywords: 'fitness, training, connecting, athlete, trainer, partner, buddy',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Lato`,
          `Muli`,
          `Catamaran\:100,200,300,400,500,600,700,800,900`
        ]
      }
    },
    'gatsby-plugin-react-helmet'
  ],
};
