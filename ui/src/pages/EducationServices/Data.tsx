// Gig data for Gig ID 1 (Education Solutions)

import { GigData, GigPricing } from './../../types/gigTypes';

export const gigData1: GigData = {
  gigId: 1,
  topLine: 'Become a Proficient Developer',
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  headline: 'FULL STACK WEB DEVELOPMENT TUTORING',
  description:
    'Do you want to become a proficient MERN Stack Developer, Web Application Developer, or a JavaScript Expert? Learn the core building blocks of web development with HTML, CSS, and JavaScript. Build a strong foundation in the MERN (MongoDB, Express.js, ReactJS, Node.js) Stack in just 30-60 engaging sessions.',
  details: [
    '🚀 Learn the core building blocks of web development with HTML, CSS, and JavaScript.',
    '🌐 Build a strong foundation in the MERN (MongoDB, Express.js, ReactJS, Node.js) Stack.',
    '💼 Develop skills in MERN Stack development, blending entrepreneurship and coding expertise.',
  ],
  buttonLabel: 'Choose Gig',
  externalLink: true,

  img: 'gig/mern_tutoring.png',
  alt: 'Gig Image',
  imgStart: false,
  start: false,
  gigUrl: 'https://www.fiverr.com/s/mo504b',
};

// Gig Pricing for Gig ID 1 (Education Solutions)
export const gigPricing1: GigPricing = {
  gigId: 1,
  title: 'Education Solutions Pricing',
  packages: {
    basic: {
      id: 1,
      package: 'Fundamentals',
      price: '$10/hr',
      gigName: 'MERN FUNDAMENTALS',
      description: 'Fundamentals - $10/hr. Will take almost 25 - 30 sessions',
      details: [
        '🚀 HTML, CSS, JS Intro',
        '🌐 Express.js Basics',
        '📦 Node.js Server',
        '🏬 MongoDB Introduction',
        '⚛️ ReactJS Fundamentals',
        '🧩 React Components',
        '🔗 React-Express Connection',
        '💄 CSS Styling',
      ],
      gigUrl: 'https://www.fiverr.com/s/mo504b',
    },
    standard: {
      id: 2,
      package: 'Advance',
      price: '$15/hr',
      gigName: 'MERN ADVANCE',
      description: 'Advance- $15/hr. Will take almost 30 - 45 sessions',
      details: [
        '🔍 Adv. MongoDB Concepts',
        '🛠 Express.js Middleware',
        '🌐 API Handling with Express',
        '🔌 React-Express Integration',
        '🌟 Advanced React Patterns',
        '📊 React State Management',
        '🖋 User Input Handling',
        '🚀 TypeScript Intro',
        '🎨 UI/UX Best Practices',
      ],
      gigUrl: 'https://www.fiverr.com/s/mo504b',
    },
    premium: {
      id: 3,
      package: 'Specialized',
      price: '$20/hr',
      gigName: 'MERN SPECIALIZED',
      description: 'Specialized - $20/hr. Will take almost 45 - 60 sessions',
      details: [
        '💡 Advanced MongoDB Queries',
        '🌐 RESTful APIs in Express',
        '🔒 Node Auth & Auth',
        '🚀 Advanced React State',
        '🚅 Server-Side Rendering (SSR)',
        '📈 Real-time Data with WebSockets',
        '🚀 Performance Optimization',
        '🛠 Error Handling in MERN',
        '🚀 Deploying MERN Apps',
      ],
      gigUrl: 'https://www.fiverr.com/s/mo504b',
    },
  },
};

// Gig data for Gig ID 2 (Math and Physics Tutoring)
export const gigData2: GigData = {
  gigId: 2,
  topLine: 'Math and Physics Tutoring Services',
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  headline: 'MATH AND PHYSICS TUTORING',
  description:
    'I am a Certified Math and Physics Tutor with over 7 years of experience. Whether you need help with elementary school, middle school, high school, or college/university-level math and physics, I can provide you with expert tutoring services.',
  details: [
    '✏️ Tutoring for all levels of Math and Physics',
    '📚 Subjects covered: Algebra, Trigonometry, Calculus, Probability, Statistics, Geometry, Number Theory, Applied Mathematics',
    '🌟 Physics Expertise: Mechanics, Fluid Mechanics, Thermodynamics, Vibration and Waves, Light and Optics, Gravitation Field, Electric Field, Magnetic Field, Electricity, Electronics, Properties of Matter, Modern Physics',
  ],
  buttonLabel: 'Choose Gig',
  externalLink: true,

  img: 'gig/math_physics_tutoring.png',
  alt: 'Gig Image',
  imgStart: false,
  start: false,
  gigUrl: 'https://www.fiverr.com/s/6oYmlL',
};

// Gig Pricing for Gig ID 2 (Math and Physics Tutoring)
export const gigPricing2: GigPricing = {
  gigId: 2,
  title: 'Math and Physics Tutoring Pricing',
  packages: {
    basic: {
      id: 1,
      package: 'Basic',
      price: '$10/hr',
      gigName: 'HIGH SCHOOL / MIDDLE SCHOOL',
      description:
        'Basic - $10/hr. Suitable for high school and middle school students.',
      details: [
        '📖 Tutoring for High School / Middle School Math and Physics',
        '📝 Homework Assistance',
        '👩‍🏫 Expert Tutoring',
      ],
      gigUrl: 'https://www.fiverr.com/s/6oYmlL',
    },
    standard: {
      id: 2,
      package: 'Standard',
      price: '$25/hr',
      gigName: 'COLLEGE / UNIVERSITY',
      description:
        'Standard - $25/hr. Designed for college and university students.',
      details: [
        '📚 Tutoring for College / University-level Math and Physics',
        '📝 Assignment Help',
        '👩‍🏫 Expert Guidance',
      ],
      gigUrl: 'https://www.fiverr.com/s/6oYmlL',
    },
    premium: {
      id: 3,
      package: 'Premium',
      price: '$40/hr',
      gigName: 'ENGINEERING (COMPUTER SCIENCE)',
      description:
        'Premium - $40/hr. Tailored for engineering and computer science students.',
      details: [
        '💻 Tutoring for Engineering and Computer Science Math and Physics',
        '📝 Project Assistance',
        '👩‍🏫 Expert Support',
      ],
      gigUrl: 'https://www.fiverr.com/s/6oYmlL',
    },
  },
};

// Gig data for Engineering Tutoring
export const gigData3: GigData = {
  gigId: 3,
  topLine:
    'Online Tutoring in Computer Science, Electronics Engineering, and Engineering Mathematics',
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  headline: 'ENGINEERING TUTORING',
  description:
    'Enhance your knowledge in computer science, electronics engineering, and engineering mathematics with tailored online tutoring.',
  details: [
    '🖥️ Computer Science: Master programming, algorithms, and data structures.',
    '🔌 Electronics Engineering: Explore circuits, microcontrollers, and digital electronics.',
    '📊 Engineering Mathematics: Excel in calculus, linear algebra, and differential equations.',
  ],
  buttonLabel: 'Choose Gig',
  externalLink: true,

  img: 'gig/engineering_tutoring.png', // Replace with your gig image
  alt: 'Gig Image',
  imgStart: false,
  start: false,
  gigUrl: 'https://www.fiverr.com/s/KyeLr2',
};

// Gig Pricing for Engineering Tutoring
export const gigPricing3: GigPricing = {
  gigId: 3,
  title: 'Engineering Tutoring Pricing',
  packages: {
    basic: {
      id: 1,
      package: 'Basic',
      price: '$10 per session',
      gigName: 'Engineering Tutoring Pricing',

      description: 'BASIC PACKAGE: $10 PER SESSION',
      details: [
        '📖 1-on-1 tutoring in Computer Science, Electronics Engineering, or Engineering Mathematics.',
        '🎯 Customized sessions tailored to your learning needs.',
        '📚 Access to learning materials and resources.',
        '📆 Flexible scheduling to fit your availability.',
        '📈 Regular progress assessments to track your improvement.',
      ],
      gigUrl: 'https://www.fiverr.com/s/KyeLr2',
    },
    standard: {
      id: 2,
      package: 'Standard',
      price: '$15 per session',
      gigName: 'Engineering Tutoring Pricing',

      description: 'STANDARD PACKAGE: $15 PER SESSION',
      details: [
        '📖 Everything included in the Basic package, plus:',
        '📝 Assignment assistance and project guidance.',
        '🚀 In-depth exploration of advanced topics.',
      ],
      gigUrl: 'https://www.fiverr.com/s/KyeLr2',
    },
    premium: {
      id: 3,
      package: 'Premium',
      price: '$20 per session',
      gigName: 'Engineering Tutoring Pricing',

      description: 'PREMIUM PACKAGE: $20 PER SESSION',
      details: [
        '📖 Everything included in the Standard package, plus:',
        '💼 Career guidance and mentorship in the field of engineering.',
        '📜 Assistance with research projects and thesis work.',
      ],
      gigUrl: 'https://www.fiverr.com/s/KyeLr2',
    },
  },
};

// Gig data for Programming Language Tutoring
export const gigData4: GigData = {
  gigId: 4,
  topLine: 'Unlock New Coding Skills for a Bright Future!',
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  headline: 'PROGRAMMING LANGUAGE TUTORING',
  description:
    'In the fast-evolving world of technology, programming is an indispensable skill. Finding the right mentor or tutor can be as crucial as consulting a skilled doctor.',
  details: [
    '🚀 Master programming in C, C++, Python, or Java.',
    '🔍 Choose your learning path: Fundamentals, Advance, or Specialized.',
    '🖥️ Personalized 1-on-1 guidance and hands-on practical exercises.',
  ],
  buttonLabel: 'Choose Gig',
  externalLink: true,

  img: 'gig/programming_tutoring.png', // Replace with your gig image
  alt: 'Gig Image',
  imgStart: false,
  start: false,
  gigUrl: 'https://www.fiverr.com/s/DqBXzX',
};

// Gig Pricing for Programming Language Tutoring
export const gigPricing4: GigPricing = {
  gigId: 4,
  title: 'Programming Language Tutoring Pricing',
  packages: {
    basic: {
      id: 1,
      package: 'Fundamentals',
      price: '$10 per session',
      gigName: 'Programming Language Tutoring Pricing',
      description: 'FUNDAMENTALS - $10 PER SESSION',
      details: [
        '📖 Master one programming language per session from C, C++, Python, or Java.',
        '🎯 Customized sessions tailored to your learning needs.',
        '🖥️ Access to coding materials and resources.',
        '📆 Flexible scheduling to fit your availability.',
        '📈 Regular progress assessments to track your improvement.',
      ],
      gigUrl: 'https://www.fiverr.com/s/DqBXzX',
    },
    standard: {
      id: 2,
      package: 'Advance',
      price: '$15 per session',
      gigName: 'Programming Language Tutoring Pricing',

      description: 'ADVANCE - $15 PER SESSION',
      details: [
        '📖 Everything included in the Fundamentals package, plus:',
        '📝 Assignment assistance and project guidance.',
        '🚀 In-depth exploration of advanced programming concepts.',
      ],
      gigUrl: 'https://www.fiverr.com/s/DqBXzX',
    },
    premium: {
      id: 3,
      package: 'Specialized',
      price: '$20 per session',
      gigName: 'Programming Language Tutoring Pricing',

      description: 'SPECIALIZED - $20 PER SESSION',
      details: [
        '📖 Everything included in the Advance package, plus:',
        '💼 Career guidance and mentorship in programming and development.',
        '📜 Assistance with coding challenges and real-world projects.',
      ],
      gigUrl: 'https://www.fiverr.com/s/DqBXzX',
    },
  },
};

// Math Tutoring Data
export const gigData5 = {
  gigId: 6,
  topLine: 'Online Math Tutoring Services',
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  headline: 'MATH TUTORING',
  description:
    'I am a certified Math Tutor with years of experience. Whether you need help with elementary school, middle school, high school, or college/university-level math, I can provide you with expert tutoring services.',
  details: [
    '✏️ Tutoring for all levels of Math',
    '📚 Subjects covered: Algebra, Trigonometry, Calculus, Probability, Statistics, Geometry, Number Theory, Applied Mathematics',
  ],
  buttonLabel: 'Choose Gig',
  externalLink: true,
  img: 'gig/math_tutoring.jpg',
  alt: 'Gig Image',
  imgStart: false,
  start: false,
  gigUrl: 'https://www.fiverr.com/s/NVywrQ',
};

// Math Tutoring Pricing
export const gigPricing5 = {
  gigId: 6,
  title: 'Math Tutoring Pricing',
  packages: {
    basic: {
      id: 1,
      package: 'Basic',
      price: '$10/hr',
      gigName: 'HIGH SCHOOL / MIDDLE SCHOOL',
      description:
        'Basic - $10/hr. Suitable for high school and middle school students.',
      details: [
        '📖 Tutoring for High School / Middle School Math',
        '📝 Homework Assistance',
        '👩‍🏫 Expert Tutoring',
      ],
      gigUrl: 'https://www.fiverr.com/s/NVywrQ',
    },
    standard: {
      id: 2,
      package: 'Standard',
      price: '$15/hr',
      gigName: 'COLLEGE / UNIVERSITY',
      description:
        'Standard - $15/hr. Designed for college and university students.',
      details: [
        '📚 Tutoring for College / University-level Math',
        '📝 Assignment Help',
        '👩‍🏫 Expert Guidance',
      ],
      gigUrl: 'https://www.fiverr.com/s/NVywrQ',
    },
    premium: {
      id: 3,
      package: 'Premium',
      price: '$20/hr',
      gigName: 'ADVANCED MATH',
      description: 'Premium - $20/hr. Tailored for advanced math learners.',
      details: [
        '💻 Tutoring for Advanced Mathematics',
        '📝 Project Assistance',
        '👩‍🏫 Expert Support',
      ],
      gigUrl: 'https://www.fiverr.com/s/NVywrQ',
    },
  },
};

// Physics Tutoring Data
export const gigData6 = {
  gigId: 6,
  topLine: 'Online Physics Tutoring Services',
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  headline: 'PHYSICS TUTORING',
  description:
    'I am a certified Physics Tutor with years of experience. Whether you need help with elementary physics, high school physics, or college/university-level physics, I can provide you with expert tutoring services.',
  details: [
    '🌟 Tutoring for all levels of Physics',
    '📚 Subjects covered: Mechanics, Thermodynamics, Electricity, Magnetism, Optics, Modern Physics, and more.',
  ],
  buttonLabel: 'Choose Gig',
  externalLink: true,
  img: 'gig/physics_tutoring.jpg',
  alt: 'Gig Image',
  imgStart: false,
  start: false,
  gigUrl: 'https://www.fiverr.com/s/7ogWra',
};

// Physics Tutoring Pricing
export const gigPricing6 = {
  gigId: 6,
  title: 'Physics Tutoring Pricing',
  packages: {
    basic: {
      id: 1,
      package: 'Basic',
      price: '$10/hr',
      gigName: 'HIGH SCHOOL / MIDDLE SCHOOL',
      description:
        'Basic - $10/hr. Suitable for high school and middle school students.',
      details: [
        '📖 Tutoring for High School / Middle School Physics',
        '📝 Homework Assistance',
        '👩‍🏫 Expert Tutoring',
      ],
      gigUrl: 'https://www.fiverr.com/s/7ogWra',
    },
    standard: {
      id: 2,
      package: 'Standard',
      price: '$15/hr',
      gigName: 'COLLEGE / UNIVERSITY',
      description:
        'Standard - $15/hr. Designed for college and university students.',
      details: [
        '📚 Tutoring for College / University-level Physics',
        '📝 Assignment Help',
        '👩‍🏫 Expert Guidance',
      ],
      gigUrl: 'https://www.fiverr.com/s/7ogWra',
    },
    premium: {
      id: 3,
      package: 'Premium',
      price: '$20/hr',
      gigName: 'ADVANCED PHYSICS',
      description: 'Premium - $20/hr. Tailored for advanced physics learners.',
      details: [
        '💡 Tutoring for Advanced Physics Concepts',
        '📝 Project Assistance',
        '👩‍🏫 Expert Support',
      ],
      gigUrl: 'https://www.fiverr.com/s/7ogWra',
    },
  },
};
