module.exports = {
  siteMetadata: {
    siteUrl: `https://5hughes.com`, // Corrected quotation mark for consistency
    name: 'Corey Hughes',
    title: 'Corey Hughes | Principal Devops Engineer',
    description: 'Championing Data Automation & Scalability in Oncology',
    author: '@FamVertical', // Optional: Updated to your preference
    github: `https://github.com/coreyhughes`, // Assumed correct URL; replace if different
    linkedin: 'https://www.linkedin.com/in/coreyhughes1/',
    about: 'As a solutions-focused Principal DevOps Engineer with over 10 years in healthcare technology, I blend expert cloud and Atlassian tool knowledge with a servant leadership approach to empower teams and drive innovation. My expertise spans Azure and AWS infrastructure, systems documentation, and performance monitoring, all aimed at enhancing healthcare delivery. Passionate about leveraging technology to improve healthcare outcomes, I lead with empathy, foster collaboration, and am dedicated to advancing healthcare efficiency through DevOps excellence.',
    projects: [
      // Placeholder for actual projects; replace with real projects and descriptions
      {
        name: 'Real-time Data Platform Enhancement',
        description:
          'Led the team in enhancing data platform resilience and efficiency using AKS, OpenAI, PowerBI, Azure Cloud, and Snowflake to support real-time patient and financial outcomes.',
        link: 'https://5hughes.com/projects/real-time-data-platform', // Example link, replace with actual project URL
      },
      // Add more projects as needed
    ],
    experience: [
      {
        name: 'Integra Connect',
        description: 'Principal Devops Engineer, March 2024 - Present',
        link: 'https://www.integraconnect.com',
      },
      {
        name: 'Integra Connect',
        description: 'DevOps Tech Lead, August 2023 - March 2024',
        link: 'https://www.integraconnect.com',
      },
      {
        name: 'Integra Connect',
        description: 'Sr DevOps Platform Engineer, January 2019 - October 2023',
        link: 'https://www.integraconnect.com',
      },
      {
        name: 'Integra Connect',
        description: 'Devops Cloud Engineer, December 2016 - January 2019',
        link: 'https://www.integraconnect.com',
      },
      // Add more experiences as needed
    ],
    skills: [
      {
        name: 'Cloud Platforms & Technologies',
        description:
          'Expertise in Azure, AWS, Kubernetes, and CI/CD pipelines. Proficient in automating cloud infrastructure with Terraform and end to end observability.',
      },
      {
        name: 'DevOps & DevSecOps',
        description:
          'Advanced skills in DevOps and DevSecOps practices, including infrastructure as code, security standards implementation, and incident response.',
      },
      {
        name: 'Leadership & Collaboration',
        description:
          'Proven servant leadership approach, excelling in team empowerment, agile methodologies, and cross-functional collaboration.',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
