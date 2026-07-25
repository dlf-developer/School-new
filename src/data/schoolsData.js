// schoolsData.js - Static database containing all specific copy and configs for DLF Group Schools

export const schoolsData = {
  "dlf-sahibabad": {
    id: "dlf-sahibabad",
    name: "DLF School",
    shortLocation: "Sahibabad",
    cbseInfo: "CBSE Affiliation No. 2130384",
    phone: "+91-9871034444",
    theme: {
      primary: "brand-greenDeep",
      vibrant: "brand-greenVibrant",
      accent: "brand-gold",
      accentHex: "#C59B27",
    },
    hero: {
      image:
        "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=1920",
      legacy: "30+ Years of Educational Legacy",
      titleLine1: "Sculpting",
      italicWord1: "Minds",
      titleLine2: "Empowering",
      underlineWord: "Souls",
      titleLine3: "Creating",
      vibrantWord: "Pioneers",
      subtitle:
        "At DLF Public School, Sahibabad (Ghaziabad), we believe in cultivating a scientific temperament, social responsibility, and the courage to build an eco-friendly tomorrow.",
      stats: [
        { value: "Ranked #1", label: "In Ghaziabad" },
        { value: "100%", label: "Board Success" },
      ],
    },
    campus: {
      description:
        "Our Sahibabad campus features state-of-the-art laboratories, a lush green zero-waste environment, modern classrooms, and high-performance athletic arenas.",
      images: [
        "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000",
      ],
    },
    admissions: {
      guide:
        "Admissions open for 2026-27. Follow our simple, transparent, and completely digital enrollment guide.",
      steps: [
        {
          id: 1,
          title: "Online Enquiry Form",
          desc: "Complete the digital admission enquiry form with basic student details.",
        },
        {
          id: 2,
          title: "Registration & Interaction",
          desc: "Fill out the Registration Form so that you can visit our campuses with interact with mentors and explore our learning methodologies.",
        },
        {
          id: 3,
          title: "Admission Decision",
          desc: "Submit necessary academic transcripts, complete verification, and process fees digitally.",
        },
      ],
    },
    curriculum: {
      info: "Our child-centric developmental curriculum combines robust academics with progressive experiential modules.",
      stages: [
        {
          title: "Early Years",
          desc: "Sensory integration, play-way modules, and language discovery through theatre and arts.",
        },
        {
          title: "Primary Years",
          desc: "Experiential learning, foundational logic, and mathematics taught through hands-on projects.",
        },
        {
          title: "Middle Years",
          desc: "Robotics, coding, scientific experiments, and community stewardship programs.",
        },
        {
          title: "Senior Years",
          desc: "Rigorous academic preparation, board curricula, and comprehensive university/career guidance.",
        },
      ],
    },
    holistic: {
      performingArts:
        "Dedicated music, dance, and theatre wings to nurture creative expression.",
      sports:
        "State-of-the-art sports arena featuring football, basketball, and athletics.",
    },
  },
  "dlf-greater-noida": {
    id: "dlf-greater-noida",
    name: "DLF World School",
    shortLocation: "G. Noida",
    cbseInfo: "CBSE Affiliation No. 2131920",
    phone: "+91-9871034444",
    theme: {
      primary: "brand-purpleDeep",
      vibrant: "brand-purpleVibrant",
      accent: "brand-gold",
      accentHex: "#C59B27",
    },
    hero: {
      image: "/dlws.jpeg",
      legacy: "New Age Learning Environment",
      titleLine1: "Nurturing",
      italicWord1: "Thinkers",
      titleLine2: "Empowering",
      underlineWord: "Leaders",
      titleLine3: "Creating",
      vibrantWord: "Pioneers",
      subtitle:
        "At DLF World School, Greater Noida, we provide a futuristic, child-centric learning space designed to foster design thinking and digital-age readiness.",
      stats: [
        { value: "Ranked #1", label: "In G. Noida" },
        { value: "100%", label: "Board Success" },
      ],
    },
    campus: {
      description:
        "Our Greater Noida campus boasts modern laboratories, digital smart classrooms, creative design studios, and outstanding athletic facilities.",
      images: [
        "/dlws.jpeg",
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000",
      ],
    },
    admissions: {
      guide:
        "Admissions open for 2026-27. Secure your child's futuristic education pathway digitally.",
      steps: [
        {
          id: 1,
          title: "Digital Registration",
          desc: "Fill the online registration form to begin the enrollment process.",
        },
        {
          id: 2,
          title: "Orientation Session",
          desc: "Participate in an interactive campus visit and information session with our leadership team.",
        },
        {
          id: 3,
          title: "Verification & Admissions",
          desc: "Verify documentation, fulfill guidelines, and confirm enrollment.",
        },
      ],
    },
    curriculum: {
      info: "A progressive curriculum that combines academic excellence with creative exploration and design thinking.",
      stages: [
        {
          title: "Early Years",
          desc: "Play-way methodology and sensory discovery.",
        },
        {
          title: "Primary Years",
          desc: "Project-based learning and language skills.",
        },
        {
          title: "Middle Years",
          desc: "Coding, STEM integration, and social science projects.",
        },
        {
          title: "Senior Years",
          desc: "Advanced preparation, board curricula, and university guidance.",
        },
      ],
    },
    holistic: {
      performingArts:
        "Design, visual arts, music, and performance wings.",
      sports:
        "Multipurpose sports complex supporting basketball, cricket, and lawn tennis.",
    },
  },
};

export const commonData = {
  philosophy: {
    title: "Our Philosophy",
    subtitle: "A Thinking School with a Soul",
    vision:
      "To cultivate a scientific temperament, social responsibility, and the courage to build an eco-friendly tomorrow.",
    sections: [
      {
        id: "soul",
        title: "A Thinking School with a Soul",
        desc: "We focus on sculpting minds that are intellectually sharp, yet emotionally grounded, socially responsible, and deeply aware of their environment.",
      },
      {
        id: "vision-mission",
        title: "Vision & Mission",
        desc: "To provide child-centric experiential learning that fosters critical thinking, problem-solving, self-governance, and ecological stewardship.",
      },
      {
        id: "management",
        title: "Our Management",
        desc: "Led by visionaries and educationists committed to redefining school education through progressive pedagogies, modern infrastructure, and strong academic standards.",
      },
      {
        id: "recognition",
        title: "Institutional Recognition",
        desc: "Consistently recognized as a benchmark for educational innovation, community building, and ecological consciousness in the NCR region.",
      },
    ],
  },
  pedagogy: {
    title: "Our Pedagogy",
    subtitle:
      "Experiential & Developmental learning at every step",
    stages: [
      {
        id: "early",
        title: "Early Years",
        desc: "Sensory integration, play-way modules, and language discovery through storytelling, theatre, and interactive arts.",
      },
      {
        id: "primary",
        title: "Primary Years",
        desc: "Foundation of critical analysis, logic, and mathematics taught through hands-on project work and outdoor nature studies.",
      },
      {
        id: "middle",
        title: "Middle Years",
        desc: "Intellectual exploration, robotics, coding, scientific experiments, and community service projects.",
      },
      {
        id: "senior",
        title: "Senior Years",
        desc: "Advanced scholastic courses, deep stream selection, and dynamic preparation for competitive college admissions.",
      },
    ],
  },
};
