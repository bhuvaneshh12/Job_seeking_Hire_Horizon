const jobData = [
  {
    title: 'EBS Techno Functional Lead',
    company: 'Birlasoft Limited',
    location: 'Pune',
    experience: '8-13 Years',
    salary: '₹23,00,000-30,00,000 INR',
    skills: ['Oracle E Suite', 'Oracle Ebs'],
    date: '4 days ago',
    description: 'Lead and manage the implementation of Oracle EBS solutions.',
    companyDescription: 'Birlasoft Limited is a leading global IT company providing services in consulting, system integration, and managed services.',
    icons: {
      location: 'fas fa-map-marker-alt',
      experience: 'fas fa-briefcase',
      salary: 'fas fa-dollar-sign',
      skills: 'fas fa-tools',
      date: 'fas fa-calendar-alt'
    }
  },
  {
    title: 'Oracle Cloud SCM/Manufacturing Architect',
    company: 'Birlasoft Limited',
    location: 'Noida, Pune',
    experience: '12-20 Years',
    salary: '₹25,00,000-38,00,000 INR',
    skills: ['Oracle Scm', 'Oracle Manufacturing', 'Solution Architect'],
    date: '4 days ago',
    description: 'Design and implement Oracle Cloud SCM and Manufacturing solutions.',
    companyDescription: 'Birlasoft Limited is a leading global IT company providing services in consulting, system integration, and managed services.',
    icons: {
      location: 'fas fa-map-marker-alt',
      experience: 'fas fa-briefcase',
      salary: 'fas fa-dollar-sign',
      skills: 'fas fa-tools',
      date: 'fas fa-calendar-alt'
    }
  },
  {
    title: 'Software Engineer',
    company: 'Tech Solutions',
    location: 'Bangalore',
    experience: '2-5 Years',
    salary: '₹15,00,000-20,00,000 INR',
    skills: ['JavaScript', 'React', 'Node.js'],
    date: '1 day ago',
    description: 'Develop and maintain web applications using JavaScript, React, and Node.js.',
    companyDescription: 'Tech Solutions is a top software development company providing cutting-edge technology solutions and services worldwide.',
    icons: {
      location: 'fas fa-map-marker-alt',
      experience: 'fas fa-briefcase',
      salary: 'fas fa-dollar-sign',
      skills: 'fas fa-tools',
      date: 'fas fa-calendar-alt'
    }
  },
  {
    title: 'Data Scientist',
    company: 'DataCorp',
    location: 'Hyderabad',
    experience: '3-6 Years',
    salary: '₹20,00,000-25,00,000 INR',
    skills: ['Python', 'Machine Learning', 'Data Analysis'],
    date: '2 days ago',
    description: 'Analyze data and develop machine learning models to support business decisions.',
    companyDescription: 'DataCorp specializes in data analytics and machine learning solutions, helping businesses leverage data for strategic decision-making.',
    icons: {
      location: 'fas fa-map-marker-alt',
      experience: 'fas fa-briefcase',
      salary: 'fas fa-dollar-sign',
      skills: 'fas fa-tools',
      date: 'fas fa-calendar-alt'
    }
  },
  {
    title: 'DevOps Engineer',
    company: 'CloudTech',
    location: 'Chennai',
    experience: '4-7 Years',
    salary: '₹18,00,000-22,00,000 INR',
    skills: ['AWS', 'Docker', 'Kubernetes'],
    date: '3 days ago',
    description: 'Implement and manage CI/CD pipelines and cloud infrastructure.',
    companyDescription: 'CloudTech is a premier cloud services provider, delivering innovative cloud solutions to streamline and enhance business operations.',
    icons: {
      location: 'fas fa-map-marker-alt',
      experience: 'fas fa-briefcase',
      salary: 'fas fa-dollar-sign',
      skills: 'fas fa-tools',
      date: 'fas fa-calendar-alt'
    }
  },
  {
    title: 'Frontend Developer',
    company: 'WebWorks',
    location: 'Mumbai',
    experience: '1-3 Years',
    salary: '₹12,00,000-16,00,000 INR',
    skills: ['HTML', 'CSS', 'JavaScript'],
    date: '5 days ago',
    description: 'Create responsive and visually appealing web pages using HTML, CSS, and JavaScript.',
    companyDescription: 'WebWorks specializes in creating high-quality, responsive websites and web applications for a wide range of clients.',
    icons: {
      location: 'fas fa-map-marker-alt',
      experience: 'fas fa-briefcase',
      salary: 'fas fa-dollar-sign',
      skills: 'fas fa-tools',
      date: 'fas fa-calendar-alt'
    }
  },
  {
    title: 'Backend Developer',
    company: 'ServerSide',
    location: 'Pune',
    experience: '3-5 Years',
    salary: '₹14,00,000-18,00,000 INR',
    skills: ['Java', 'Spring Boot', 'Microservices'],
    date: '4 days ago',
    description: 'Develop and maintain backend services using Java and Spring Boot.',
    companyDescription: 'ServerSide is a leading backend development company known for its expertise in building robust and scalable server-side applications.',
    icons: {
      location: 'fas fa-map-marker-alt',
      experience: 'fas fa-briefcase',
      salary: 'fas fa-dollar-sign',
      skills: 'fas fa-tools',
      date: 'fas fa-calendar-alt'
    }
  },
  {
    title: 'Product Manager',
    company: 'InnovateTech',
    location: 'Bangalore',
    experience: '5-8 Years',
    salary: '₹22,00,000-28,00,000 INR',
    skills: ['Agile', 'Product Management', 'Scrum'],
    date: '6 days ago',
    description: 'Lead product development efforts and ensure successful product launches.',
    companyDescription: 'InnovateTech is a forward-thinking technology company focused on developing innovative products that solve complex business challenges.',
    icons: {
      location: 'fas fa-map-marker-alt',
      experience: 'fas fa-briefcase',
      salary: 'fas fa-dollar-sign',
      skills: 'fas fa-tools',
      date: 'fas fa-calendar-alt'
    }
  },
  {
    title: 'UI/UX Designer',
    company: 'Creative Minds',
    location: 'Hyderabad',
    experience: '2-4 Years',
    salary: '₹10,00,000-14,00,000 INR',
    skills: ['Adobe XD', 'Sketch', 'Figma'],
    date: '1 week ago',
    description: 'Design user-friendly interfaces and enhance user experience for digital products.',
    companyDescription: 'Creative Minds is a design studio that excels in creating visually stunning and user-friendly interfaces for digital products.',
    icons: {
      location: 'fas fa-map-marker-alt',
      experience: 'fas fa-briefcase',
      salary: 'fas fa-dollar-sign',
      skills: 'fas fa-tools',
      date: 'fas fa-calendar-alt'
    }
  },
  {
    title: 'Network Engineer',
    company: 'NetSecure',
    location: 'Chennai',
    experience: '3-6 Years',
    salary: '₹16,00,000-20,00,000 INR',
    skills: ['Cisco', 'Networking', 'Security'],
    date: '2 weeks ago',
    description: 'Design, implement, and maintain network infrastructure to ensure security and reliability.',
    companyDescription: 'NetSecure provides top-notch network security solutions, ensuring the safety and reliability of business networks.',
    icons: {
      location: 'fas fa-map-marker-alt',
      experience: 'fas fa-briefcase',
      salary: 'fas fa-dollar-sign',
      skills: 'fas fa-tools',
      date: 'fas fa-calendar-alt'
    }
  },
  {
    title: 'System Administrator',
    company: 'SysAdmin Co.',
    location: 'Mumbai',
    experience: '4-7 Years',
    salary: '₹14,00,000-18,00,000 INR',
    skills: ['Linux', 'Windows Server', 'AWS'],
    date: '3 weeks ago',
    description: 'Manage and maintain IT infrastructure, ensuring optimal performance and security.',
    companyDescription: 'SysAdmin Co. offers comprehensive system administration services, ensuring smooth and efficient operation of IT infrastructures.',
    icons: {
      location: 'fas fa-map-marker-alt',
      experience: 'fas fa-briefcase',
      salary: 'fas fa-dollar-sign',
      skills: 'fas fa-tools',
      date: 'fas fa-calendar-alt'
    }
  }
];

export default jobData;
