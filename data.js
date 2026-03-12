// Mock nonprofit data for the WVR platform
const nonprofits = [
  {
    id: "hope-harvest",
    name: "Hope Harvest Food Bank",
    logo: "https://ui-avatars.com/api/?name=HH&background=10B981&color=fff&size=128&bold=true",
    photo: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop",
    category: "Food Security",
    hopeScore: 94,
    location: "Austin, TX",
    tagline: "Ending hunger one community at a time",
    description: "Hope Harvest Food Bank has been serving Central Texas since 2012, distributing over 2 million meals annually to families facing food insecurity. Our network of 45 partner agencies ensures that nutritious food reaches every corner of the community, from urban food deserts to rural areas with limited access to grocery stores.",
    website: "https://hopeharvest.org",
    phone: "(512) 555-0142",
    address: "4200 Riverside Dr, Austin, TX 78741",
    ein: "47-1234567",
    founded: 2012,
    annualBudget: "$4.2M",
    peopleServed: "85,000+",
    programs: ["Community Food Pantries", "Mobile Food Distribution", "Nutrition Education", "School Backpack Program"],
    leadership: [
      { name: "Maria Gonzales", title: "Executive Director", photo: "https://ui-avatars.com/api/?name=MG&background=3B82F6&color=fff&size=128", linkedin: "#" },
      { name: "David Chen", title: "Chief Operating Officer", photo: "https://ui-avatars.com/api/?name=DC&background=10B981&color=fff&size=128", linkedin: "#" },
      { name: "Sarah Williams", title: "Chief Financial Officer", photo: "https://ui-avatars.com/api/?name=SW&background=6366F1&color=fff&size=128", linkedin: "#" }
    ],
    financials: {
      programExpenseRatio: "87%",
      adminExpenseRatio: "8%",
      fundraisingExpenseRatio: "5%"
    }
  },
  {
    id: "bright-futures",
    name: "Bright Futures Academy",
    logo: "https://ui-avatars.com/api/?name=BF&background=3B82F6&color=fff&size=128&bold=true",
    photo: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop",
    category: "Education",
    hopeScore: 91,
    location: "Dallas, TX",
    tagline: "Unlocking potential through education",
    description: "Bright Futures Academy provides after-school tutoring, mentorship, and college preparation programs for underserved youth in the Dallas-Fort Worth metroplex. Since our founding, we have helped over 3,000 students improve their grades, and 92% of our program graduates have gone on to attend college.",
    website: "https://brightfuturesacademy.org",
    phone: "(214) 555-0198",
    address: "1500 Commerce St, Dallas, TX 75201",
    ein: "26-7654321",
    founded: 2015,
    annualBudget: "$2.8M",
    peopleServed: "1,200 students",
    programs: ["After-School Tutoring", "College Prep Workshops", "Mentorship Program", "STEM Summer Camp"],
    leadership: [
      { name: "James Robinson", title: "Founder & CEO", photo: "https://ui-avatars.com/api/?name=JR&background=3B82F6&color=fff&size=128", linkedin: "#" },
      { name: "Angela Torres", title: "Director of Programs", photo: "https://ui-avatars.com/api/?name=AT&background=10B981&color=fff&size=128", linkedin: "#" },
      { name: "Michael Park", title: "Chief Financial Officer", photo: "https://ui-avatars.com/api/?name=MP&background=6366F1&color=fff&size=128", linkedin: "#" }
    ],
    financials: {
      programExpenseRatio: "82%",
      adminExpenseRatio: "10%",
      fundraisingExpenseRatio: "8%"
    }
  },
  {
    id: "clean-water-initiative",
    name: "Clean Water Initiative",
    logo: "https://ui-avatars.com/api/?name=CW&background=0EA5E9&color=fff&size=128&bold=true",
    photo: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=600&h=400&fit=crop",
    category: "Water & Sanitation",
    hopeScore: 88,
    location: "Houston, TX",
    tagline: "Clean water for every community",
    description: "The Clean Water Initiative works to provide safe, accessible drinking water to underserved communities across Texas and Central America. Through well-drilling programs, water filtration installations, and community education, we have brought clean water access to over 50,000 people since 2018.",
    website: "https://cleanwaterinitiative.org",
    phone: "(713) 555-0267",
    address: "800 Main St, Houston, TX 77002",
    ein: "83-9876543",
    founded: 2018,
    annualBudget: "$3.5M",
    peopleServed: "50,000+",
    programs: ["Well Drilling", "Water Filtration Systems", "Community Health Education", "Sanitation Infrastructure"],
    leadership: [
      { name: "Robert Nguyen", title: "Executive Director", photo: "https://ui-avatars.com/api/?name=RN&background=0EA5E9&color=fff&size=128", linkedin: "#" },
      { name: "Lisa Okafor", title: "Director of Operations", photo: "https://ui-avatars.com/api/?name=LO&background=10B981&color=fff&size=128", linkedin: "#" },
      { name: "Thomas Reed", title: "CFO", photo: "https://ui-avatars.com/api/?name=TR&background=6366F1&color=fff&size=128", linkedin: "#" }
    ],
    financials: {
      programExpenseRatio: "85%",
      adminExpenseRatio: "9%",
      fundraisingExpenseRatio: "6%"
    }
  },
  {
    id: "shelter-of-grace",
    name: "Shelter of Grace",
    logo: "https://ui-avatars.com/api/?name=SG&background=8B5CF6&color=fff&size=128&bold=true",
    photo: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&h=400&fit=crop",
    category: "Housing",
    hopeScore: 86,
    location: "San Antonio, TX",
    tagline: "A safe place to call home",
    description: "Shelter of Grace provides emergency housing, transitional shelter, and permanent supportive housing for individuals and families experiencing homelessness in the San Antonio area. Our holistic approach includes case management, job training, mental health support, and financial literacy programs.",
    website: "https://shelterofgrace.org",
    phone: "(210) 555-0334",
    address: "300 Alamo Plaza, San Antonio, TX 78205",
    ein: "74-1122334",
    founded: 2010,
    annualBudget: "$5.1M",
    peopleServed: "2,400 annually",
    programs: ["Emergency Shelter", "Transitional Housing", "Job Training & Placement", "Mental Health Services"],
    leadership: [
      { name: "Patricia Evans", title: "CEO", photo: "https://ui-avatars.com/api/?name=PE&background=8B5CF6&color=fff&size=128", linkedin: "#" },
      { name: "Marcus Johnson", title: "COO", photo: "https://ui-avatars.com/api/?name=MJ&background=3B82F6&color=fff&size=128", linkedin: "#" },
      { name: "Diana Morales", title: "CFO", photo: "https://ui-avatars.com/api/?name=DM&background=10B981&color=fff&size=128", linkedin: "#" }
    ],
    financials: {
      programExpenseRatio: "84%",
      adminExpenseRatio: "9%",
      fundraisingExpenseRatio: "7%"
    }
  },
  {
    id: "verde-health",
    name: "Verde Health Clinic",
    logo: "https://ui-avatars.com/api/?name=VH&background=10B981&color=fff&size=128&bold=true",
    photo: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop",
    category: "Healthcare",
    hopeScore: 92,
    location: "El Paso, TX",
    tagline: "Healthcare without barriers",
    description: "Verde Health Clinic provides free and low-cost primary care, dental services, and mental health counseling to uninsured and underinsured residents of the El Paso border region. Our bilingual staff serves over 15,000 patients annually, ensuring that language and income are never barriers to quality healthcare.",
    website: "https://verdehealth.org",
    phone: "(915) 555-0421",
    address: "600 N Mesa St, El Paso, TX 79901",
    ein: "58-4455667",
    founded: 2014,
    annualBudget: "$6.3M",
    peopleServed: "15,000+ patients",
    programs: ["Primary Care", "Dental Services", "Mental Health Counseling", "Community Health Workers"],
    leadership: [
      { name: "Dr. Carmen Reyes", title: "Medical Director & CEO", photo: "https://ui-avatars.com/api/?name=CR&background=10B981&color=fff&size=128", linkedin: "#" },
      { name: "Eduardo Silva", title: "COO", photo: "https://ui-avatars.com/api/?name=ES&background=3B82F6&color=fff&size=128", linkedin: "#" },
      { name: "Karen Mitchell", title: "CFO", photo: "https://ui-avatars.com/api/?name=KM&background=6366F1&color=fff&size=128", linkedin: "#" }
    ],
    financials: {
      programExpenseRatio: "89%",
      adminExpenseRatio: "7%",
      fundraisingExpenseRatio: "4%"
    }
  },
  {
    id: "second-chance-workforce",
    name: "Second Chance Workforce",
    logo: "https://ui-avatars.com/api/?name=SC&background=F59E0B&color=fff&size=128&bold=true",
    photo: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop",
    category: "Workforce Development",
    hopeScore: 83,
    location: "Fort Worth, TX",
    tagline: "Rebuilding lives through employment",
    description: "Second Chance Workforce helps formerly incarcerated individuals and those with employment barriers build sustainable careers through skills training, certification programs, employer partnerships, and ongoing support services. Over 70% of our graduates secure full-time employment within 90 days of completing the program.",
    website: "https://secondchanceworkforce.org",
    phone: "(817) 555-0589",
    address: "200 W 7th St, Fort Worth, TX 76102",
    ein: "31-6677889",
    founded: 2017,
    annualBudget: "$1.9M",
    peopleServed: "600 annually",
    programs: ["Skills Training", "Certification Programs", "Employer Partnerships", "Reentry Support Services"],
    leadership: [
      { name: "Andre Williams", title: "Founder & Executive Director", photo: "https://ui-avatars.com/api/?name=AW&background=F59E0B&color=fff&size=128", linkedin: "#" },
      { name: "Jennifer Liu", title: "Director of Programs", photo: "https://ui-avatars.com/api/?name=JL&background=10B981&color=fff&size=128", linkedin: "#" },
      { name: "Brian Taylor", title: "CFO", photo: "https://ui-avatars.com/api/?name=BT&background=3B82F6&color=fff&size=128", linkedin: "#" }
    ],
    financials: {
      programExpenseRatio: "80%",
      adminExpenseRatio: "12%",
      fundraisingExpenseRatio: "8%"
    }
  },
  {
    id: "youth-arts-collective",
    name: "Youth Arts Collective",
    logo: "https://ui-avatars.com/api/?name=YA&background=EC4899&color=fff&size=128&bold=true",
    photo: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&h=400&fit=crop",
    category: "Arts & Culture",
    hopeScore: 79,
    location: "Austin, TX",
    tagline: "Creativity as a catalyst for change",
    description: "Youth Arts Collective provides free arts programming — including visual arts, music, theater, and digital media — to underserved youth ages 10–18 in Austin. Our programs build confidence, creative thinking, and community connection, serving as a safe space for over 800 young people each year.",
    website: "https://youthartscollective.org",
    phone: "(512) 555-0733",
    address: "1100 E 6th St, Austin, TX 78702",
    ein: "62-8899001",
    founded: 2019,
    annualBudget: "$1.2M",
    peopleServed: "800+ youth",
    programs: ["Visual Arts Studio", "Music & Theater", "Digital Media Lab", "Youth Exhibition Program"],
    leadership: [
      { name: "Sophia Grant", title: "Executive Director", photo: "https://ui-avatars.com/api/?name=SG2&background=EC4899&color=fff&size=128", linkedin: "#" },
      { name: "Malik Brown", title: "Creative Director", photo: "https://ui-avatars.com/api/?name=MB&background=3B82F6&color=fff&size=128", linkedin: "#" },
      { name: "Rachel Kim", title: "Operations Manager", photo: "https://ui-avatars.com/api/?name=RK&background=10B981&color=fff&size=128", linkedin: "#" }
    ],
    financials: {
      programExpenseRatio: "78%",
      adminExpenseRatio: "13%",
      fundraisingExpenseRatio: "9%"
    }
  },
  {
    id: "green-roots-environment",
    name: "Green Roots Environmental",
    logo: "https://ui-avatars.com/api/?name=GR&background=059669&color=fff&size=128&bold=true",
    photo: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop",
    category: "Environment",
    hopeScore: 87,
    location: "Austin, TX",
    tagline: "Restoring ecosystems, empowering communities",
    description: "Green Roots Environmental leads community-driven conservation efforts across Central Texas, including urban reforestation, watershed restoration, and environmental education programs. Since 2016, we have planted over 100,000 native trees and engaged 25,000 volunteers in hands-on stewardship.",
    website: "https://greenrootsenvironmental.org",
    phone: "(512) 555-0856",
    address: "2300 Barton Springs Rd, Austin, TX 78704",
    ein: "45-2233445",
    founded: 2016,
    annualBudget: "$2.1M",
    peopleServed: "25,000 volunteers engaged",
    programs: ["Urban Reforestation", "Watershed Restoration", "Environmental Education", "Community Gardens"],
    leadership: [
      { name: "Emma Richardson", title: "Executive Director", photo: "https://ui-avatars.com/api/?name=ER&background=059669&color=fff&size=128", linkedin: "#" },
      { name: "Carlos Mendez", title: "Director of Conservation", photo: "https://ui-avatars.com/api/?name=CM&background=3B82F6&color=fff&size=128", linkedin: "#" },
      { name: "Naomi Peters", title: "CFO", photo: "https://ui-avatars.com/api/?name=NP&background=6366F1&color=fff&size=128", linkedin: "#" }
    ],
    financials: {
      programExpenseRatio: "83%",
      adminExpenseRatio: "10%",
      fundraisingExpenseRatio: "7%"
    }
  },
  {
    id: "veterans-rising",
    name: "Veterans Rising",
    logo: "https://ui-avatars.com/api/?name=VR&background=1E40AF&color=fff&size=128&bold=true",
    photo: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
    category: "Veterans Services",
    hopeScore: 90,
    location: "Killeen, TX",
    tagline: "Honoring service through support",
    description: "Veterans Rising provides comprehensive transition support for military veterans in the Central Texas corridor, including career coaching, mental health resources, family support services, and housing assistance. Located near Fort Cavazos, we serve over 3,000 veterans and their families annually.",
    website: "https://veteransrising.org",
    phone: "(254) 555-0912",
    address: "500 Veterans Memorial Blvd, Killeen, TX 76541",
    ein: "73-5566778",
    founded: 2013,
    annualBudget: "$3.8M",
    peopleServed: "3,000+ veterans & families",
    programs: ["Career Transition Coaching", "Mental Health & PTSD Support", "Family Services", "Housing Assistance"],
    leadership: [
      { name: "Col. (Ret.) Frank Daniels", title: "Executive Director", photo: "https://ui-avatars.com/api/?name=FD&background=1E40AF&color=fff&size=128", linkedin: "#" },
      { name: "Tamara Woods", title: "Director of Programs", photo: "https://ui-avatars.com/api/?name=TW&background=10B981&color=fff&size=128", linkedin: "#" },
      { name: "Steven Carpenter", title: "CFO", photo: "https://ui-avatars.com/api/?name=SC2&background=6366F1&color=fff&size=128", linkedin: "#" }
    ],
    financials: {
      programExpenseRatio: "86%",
      adminExpenseRatio: "8%",
      fundraisingExpenseRatio: "6%"
    }
  }
];

// Get all unique categories
function getCategories() {
  return [...new Set(nonprofits.map(np => np.category))].sort();
}

// Get all unique locations
function getLocations() {
  return [...new Set(nonprofits.map(np => np.location))].sort();
}
