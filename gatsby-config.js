module.exports = {
  siteMetadata: {
    siteUrl: `https://5hughes.com`, // Corrected quotation mark for consistency
    name: 'Corey Hughes',
    title: 'Corey Hughes | Principal DevOps Engineer',
    description: 'Championing Data Automation & Scalability in Healthcare Technology',
    author: '@FamVertical', // Optional: Updated to your preference
    linkedin: 'https://www.linkedin.com/in/coreyhughes1/',
    resume: `https://rxresu.me/ogdevops/manager-of-devops`, // Assumed correct URL; replace if different
    about: `As a seasoned Principal DevOps Engineer with over 10 years in the healthcare sector, I specialize in leading a team of five Senior DevOps Engineers to improve our data platform's resilience, efficiency, and scalability. My role involves leveraging technologies like AKS, OpenAI, PowerBI, Azure Cloud, and Snowflake to drive innovation and foster a collaborative, continuous learning culture. I'm committed to servant leadership, focusing on my team's growth and empowering them to contribute to our mission of advancing real-time data solutions for patient support and financial optimization. I balance technical and managerial duties, ensuring project success and team development.`,
    projects: [
      // Placeholder for actual projects; replace with real projects and descriptions
      {
        name: 'Real-time Data Platform Enhancement',
        description: 'Led the team in enhancing data platform resilience and efficiency using AKS, OpenAI, Confluent Kafka, PowerBI, and Snowflake to support real-time patient and financial outcomes.',
        link: 'https://integraconnect.com', // Example link, replace with actual project URL
      },
      // Add more projects as needed
    ],
    experience: [
      {
        name: 'Integra Connect LLC',
        description: 'Principal Devops Engineer, March 2024 - Present',
        link: 'https://www.integraconnect.com',
      },

      {
        description: 'DevOps Infra Tech Lead, August 2023 - March 2024',
      },

      {
        description: 'Sr DevOps Platform Engineer (Contractor), January 2019 - October 2023',
      },

      {
        description: 'Devops Cloud Engineer, December 2016 - January 2019',
      },

      {
        name: 'InCare Technologies',
        description: 'Systems Consultant, August 2015 - April 2016',
        link: 'https://thrivenextgen.com/',
      },

      {
        name: 'Think Anew',
        description: 'Senior Systems Engineer Contract, March 2015 - August 2015',
        link: 'https://thinkanew.com',
      },

      {
        name: 'Pioneer Health Services',
        description: 'Operations Systems Administrator, June 2013 - January 2015',
        link: 'https://www.integraconnect.com',
      },
      // Add more experiences as needed
    ],
    skills: [
      {
        name: 'Cloud Platforms & Technologies',
        description:
          'Expertise in Azure, AWS, Kubernetes, and CI/CD pipelines. Proficient in automating cloud infrastructure with Terraform and end to end observability.',
        link: 'https://www.credly.com/badges/58f28958-1b1b-4c18-8baf-309d182304e8/public_url',
      },
      {
        name: 'Confluent Kafka & Snowflake',
        description:
          'Intermediate skills in Confluent Kafka and Snowflake, including data streaming, data warehousing, and real-time analytics.',
        link: 'https://www.credential.net/12baa7ab-034a-4065-b238-40c417d1bf66#gs.5m56ll',
        link: 'https://www.credly.com/badges/69703fd1-8bf5-4198-8651-73fd533c2597/public_url',
      },
      {
        name: 'Azure DevOps & DevSecOps',
        description:
          'Advanced skills in DevOps and DevSecOps practices, including infrastructure as code, security standards implementation, and incident response.',
        link: 'https://www.credly.com/badges/58f28958-1b1b-4c18-8baf-309d182304e8/public_url',
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
