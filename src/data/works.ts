import { Work } from '@/types';

export const works: Work[] = [
  {
    id: 1,
    title: ' Online Banking System',
    category: 'Web Development',
    thumbnailUrl: '/works/1/dashboard.png',
    description: `A secure digital banking platform allowing users to manage accounts, transfer funds, apply
    for cards, and pay bills.`,
    videos: ['/works/1/video1.mp4'],
    images: [
      '/works/1/dashboard.png',
      '/works/1/accounts.png',
      '/works/1/cards.png',
      '/works/1/accountdetails.png',
      '/works/1/accountapply.png',
      '/works/1/carddetails.png',
      '/works/1/cardapply.png',
      '/works/1/funds_transfer.png',
      '/works/1/profile.png',
      '/works/1/stataements.png',
    ],
    previewUrl: 'https://online-banking-system.netlify.app/',
    featureList: [
      'Secure Authentication:- Google OAuth2 login and protected routes.',
      'Account Management: Multiple account types and profile management.',
      'Fund Transfers: Transfer funds with validation.',
      `Card Management: Apply for various cards`,
      'Bill Payments: Pay bills across multiple categories Transaction',
      'History: View and export transaction details.',
    ],
    attributes: [
      {
        name: 'Start Date',
        value: '01 July 2022',
      },
      {
        name: 'End Date',
        value: '01 August  2022',
      },
      {
        name: 'Frontend',
        value: 'React , Tailwind CSS',
      },
      {
        name: 'Backend',
        value: 'Spring Boot',
      },
      {
        name: 'Database',
        value: 'Mysql',
      },
      {
        name: 'Security',
        value: ' Google OAuth2',
      },
      {
        name: 'Deployment',
        value: 'Hosted on Render (backend via Docker) and Netlify (frontend)',
      },
      {
        name: 'Github Link',
        value: 'https://github.com/Pradeeptaalla/online-banking-system',
      },
    ],
  },
  {
    id: 2,
    title: 'Stock Market Trading',
    category: 'Web Development',
    thumbnailUrl: '/works/2/login.png',
    description: `Developed a Stock Market Website enabling traders to efficiently manage multiple
brokerage accounts. Users can place, modify, or cancel orders, manage positions, holding and funds from a
unified interface.`,
    videos: ['/works/2/tradersmartindia.mp4', '/works/2/algo.mp4', '/works/2/orderplacing.mp4'],
    images: [
      '/works/2/login.png',
      '/works/2/profile.png',
      '/works/2/child_account.png',
      '/works/2/watchlist.png',
      '/works/2/orders.png',
      '/works/2/position_details.png',
      '/works/2/holdings.png',
      '/works/2/orderplace.png',
    ],
    previewUrl: '#',
    featureList: [
      'User-Friendly Interface: Designed a responsive and intuitive UI with React and Tailwind CSS for seamless navigation',
      'Robust Backend: Built a powerful backend using Flask to facilitate rapid order processing and data management.',
      'Secure Data Handling: Integrated MySQL for secure and efficient storage and retrieval of user and trading data',
      `OAuth2 Authentication: Incorporated Google OAuth2 for secure user authentication, enhancing user data protection and privacy.`,
      'Real-Time Data Streaming: Implemented WebSocket for real-time market updates, providing users with up-to-the-minute information on trades and prices.',
      'Performance Optimization: Leveraged Redis for caching frequently accessed data, significantly improving application performance and responsiveness.',
    ],
    attributes: [
      {
        name: 'Frontend',
        value: 'React , Tailwind CSS , Type Script',
      },
      {
        name: 'Backend',
        value: 'Flask',
      },
      {
        name: 'Database',
        value: 'Mysql, redis',
      },
      {
        name: 'Security',
        value: ' Google OAuth2',
      },
      {
        name: 'Deployment',
        value: 'Hosted on AWS EC2',
      },
      {
        name: 'Link',
        value: 'http://19.56.68.175',
      },
    ],
  },
  {
    id: 3,
    title: 'E-commerce Platform',
    category: 'Web Development',
    thumbnailUrl: '/works/3/homepage.jpg', 
    description: `Developed a comprehensive e-commerce platform allowing users to browse and purchase products securely. 
    The platform provides a user-friendly interface for customers to manage their accounts, view product categories, and place orders seamlessly.`,
    videos: [],
    images: [
      '/works/3/homepage.jpg',
    ],
    previewUrl: '#',
    featureList: [
      'Responsive Design: Created a mobile-first, responsive UI using React and Tailwind CSS to ensure seamless user experience on all devices.',
      'Secure Payment Integration: Integrated Stripe and PayPal for secure and reliable payment processing, ensuring user data safety.',
      'Product Management: Built an easy-to-use admin interface for product catalog management, including stock tracking, pricing, and product descriptions.',
      `User Authentication: Implemented secure user login and registration using Google OAuth2 and JWT for session management.`,
      'Real-Time Order Tracking: Integrated WebSocket for real-time updates on order status, from purchase to delivery.',
      'Performance Optimization: Utilized Redis for session and cache management, optimizing the platform’s loading times and responsiveness.',
    ],
    attributes: [
      {
        name: 'Frontend',
        value: 'React, Tailwind CSS',
      },
      {
        name: 'Backend',
        value: 'Fast API',
      },
      {
        name: 'Database',
        value: 'MySQL, Redis',
      },
      {
        name: 'Security',
        value: 'Google OAuth2, JWT Authentication',
      },
      {
        name: 'Deployment',
        value: 'Hosted on AWS EC2',
      },
      {
        name: 'Link',
        value: 'http://55.17.163.175',
      },
    ],
  },

 
];
