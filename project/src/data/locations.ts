import { Location } from '../types/types';

export const locations: Location[] = [
  {
    id: "main-library",
    name: "Main Library",
    category: "Academic",
    description: "The Main Library is the central library facility on campus, housing over 2 million books, journals, and digital resources. It offers quiet study spaces, group study rooms, computer labs, and specialized research assistance.",
    address: "100 Library Way, Campus City",
    hours: "Monday-Friday: 7:00 AM - 12:00 AM, Weekends: 9:00 AM - 10:00 PM",
    image: "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    position: { x: 35, y: 40 },
    phone: "(123) 456-7890",
    website: "https://library.university.edu",
    events: [
      {
        title: "Research Workshop",
        date: "June 15, 2025",
        time: "2:00 PM - 4:00 PM"
      },
      {
        title: "Author Talk: Dr. James Smith",
        date: "June 22, 2025",
        time: "6:00 PM - 8:00 PM"
      }
    ],
    highlights: [
      {
        title: "Special Collections",
        description: "Rare books, manuscripts, and archival materials dating back to the 15th century."
      },
      {
        title: "Digital Media Lab",
        description: "Access to advanced software for video editing, graphic design, and 3D modeling."
      },
      {
        title: "Research Assistance",
        description: "Specialized librarians available for research consultations and subject expertise."
      },
      {
        title: "Coffee Shop",
        description: "In-house café serving coffee, tea, and light snacks during library hours."
      }
    ],
    sections: [
      {
        title: "Study Spaces",
        content: "The library offers a variety of study environments to accommodate different learning styles and needs. These include silent reading rooms, collaborative study areas, private carrels, and technology-enabled group rooms that can be reserved in advance.",
        image: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        title: "Technology Resources",
        content: "Students and faculty have access to over 200 computers, high-speed Wi-Fi, printing and scanning services, and specialized software. The library also lends laptops, tablets, cameras, and other equipment for academic use.",
        image: "https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }
    ]
  },
  {
    id: "student-center",
    name: "Student Center",
    category: "Campus Life",
    description: "The hub of student life on campus, offering dining options, recreational facilities, study spaces, and offices for student organizations. The Student Center hosts various events and serves as a central gathering place for the campus community.",
    address: "200 Campus Drive, Campus City",
    hours: "Monday-Sunday: 7:00 AM - 11:00 PM",
    image: "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    position: { x: 60, y: 55 },
    phone: "(123) 456-7891",
    website: "https://studentcenter.university.edu",
    events: [
      {
        title: "Student Organization Fair",
        date: "June 10, 2025",
        time: "11:00 AM - 3:00 PM"
      },
      {
        title: "Open Mic Night",
        date: "June 18, 2025",
        time: "7:00 PM - 10:00 PM"
      }
    ],
    highlights: [
      {
        title: "Food Court",
        description: "Multiple dining options including national chains and local favorites."
      },
      {
        title: "Game Room",
        description: "Features pool tables, ping pong, video games, and board games."
      },
      {
        title: "Auditorium",
        description: "300-seat venue for lectures, performances, and movie screenings."
      },
      {
        title: "Student Government Offices",
        description: "Home to student government and over 50 student organizations."
      }
    ],
    sections: [
      {
        title: "Dining Options",
        content: "The Student Center houses a diverse range of dining establishments to satisfy every taste and dietary need. Options include a full-service food court with international cuisines, coffee shops, smoothie bars, and grab-and-go convenience stores. Meal plans are accepted at all locations.",
        image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        title: "Event Spaces",
        content: "The building features multiple event venues including a grand ballroom, meeting rooms, and an outdoor plaza. These spaces host a variety of events throughout the year, from formal dances and cultural celebrations to club meetings and academic conferences.",
        image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }
    ]
  },
  {
    id: "science-building",
    name: "Science Building",
    category: "Academic",
    description: "A state-of-the-art facility housing the departments of Biology, Chemistry, Physics, and Environmental Science. The building features modern laboratories, research facilities, lecture halls, and collaborative learning spaces.",
    address: "300 Science Avenue, Campus City",
    hours: "Monday-Friday: 7:00 AM - 10:00 PM, Saturday: 8:00 AM - 6:00 PM, Sunday: Closed",
    image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    position: { x: 25, y: 65 },
    phone: "(123) 456-7892",
    website: "https://science.university.edu",
    events: [
      {
        title: "Science Fair",
        date: "June 20, 2025",
        time: "10:00 AM - 4:00 PM"
      }
    ],
    highlights: [
      {
        title: "Research Laboratories",
        description: "Cutting-edge facilities for undergraduate and graduate research."
      },
      {
        title: "Greenhouse",
        description: "Rooftop facility for botanical research and plant cultivation."
      },
      {
        title: "Observatory",
        description: "Astronomical facility with telescopes and imaging equipment."
      },
      {
        title: "Science Learning Center",
        description: "Tutoring and academic support for science courses."
      }
    ],
    sections: [
      {
        title: "Research Facilities",
        content: "The Science Building houses over 50 specialized research laboratories equipped with the latest scientific instruments and technology. These facilities support groundbreaking research in areas such as molecular biology, quantum physics, analytical chemistry, and environmental science.",
        image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        title: "Lecture and Learning Spaces",
        content: "The building features tiered lecture halls with multimedia capabilities, interactive classrooms designed for active learning, and informal study spaces throughout the building where students can collaborate or study independently.",
        image: "https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }
    ]
  },
  {
    id: "recreation-center",
    name: "Recreation Center",
    category: "Recreation",
    description: "A comprehensive recreational facility offering fitness equipment, group exercise classes, indoor and outdoor sports courts, swimming pools, and wellness programs for students, faculty, and staff.",
    address: "400 Fitness Way, Campus City",
    hours: "Monday-Friday: 6:00 AM - 11:00 PM, Weekends: 8:00 AM - 10:00 PM",
    image: "https://images.pexels.com/photos/260352/pexels-photo-260352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    position: { x: 75, y: 30 },
    phone: "(123) 456-7893",
    website: "https://recreation.university.edu",
    events: [
      {
        title: "Fitness Challenge Kickoff",
        date: "June 5, 2025",
        time: "9:00 AM - 1:00 PM"
      },
      {
        title: "Intramural Basketball Tournament",
        date: "June 12-14, 2025",
        time: "Various Times"
      }
    ],
    highlights: [
      {
        title: "Fitness Center",
        description: "Comprehensive gym with cardio equipment, free weights, and training areas."
      },
      {
        title: "Aquatic Center",
        description: "Olympic-sized swimming pool and recreational pool with slides."
      },
      {
        title: "Indoor Track",
        description: "200-meter indoor running track with views of the campus."
      },
      {
        title: "Climbing Wall",
        description: "40-foot climbing wall with routes for beginners to advanced climbers."
      }
    ],
    sections: [
      {
        title: "Fitness Programs",
        content: "The Recreation Center offers over 100 group fitness classes each week, including yoga, cycling, HIIT, dance, martial arts, and aquatic fitness. Personal training and fitness assessments are available by appointment with certified fitness professionals.",
        image: "https://images.pexels.com/photos/703016/pexels-photo-703016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        title: "Outdoor Recreation",
        content: "In addition to indoor facilities, the Recreation Center manages outdoor tennis courts, basketball courts, playing fields, and an adventure program that offers equipment rentals and organized trips for hiking, camping, kayaking, and other outdoor activities.",
        image: "https://images.pexels.com/photos/1263426/pexels-photo-1263426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }
    ]
  },
  {
    id: "performing-arts-center",
    name: "Performing Arts Center",
    category: "Arts & Culture",
    description: "A premier venue for the performing arts, featuring multiple theaters, rehearsal spaces, and galleries. The center hosts student and professional performances in music, theater, dance, and film throughout the academic year.",
    address: "500 Arts Boulevard, Campus City",
    hours: "Monday-Sunday: 9:00 AM - 10:00 PM (or end of performances)",
    image: "https://images.pexels.com/photos/109669/pexels-photo-109669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    position: { x: 45, y: 20 },
    phone: "(123) 456-7894",
    website: "https://arts.university.edu",
    events: [
      {
        title: "Symphony Orchestra Concert",
        date: "June 8, 2025",
        time: "7:30 PM - 9:30 PM"
      },
      {
        title: "Student Theater Production",
        date: "June 25-27, 2025",
        time: "8:00 PM - 10:30 PM"
      }
    ],
    highlights: [
      {
        title: "Main Theater",
        description: "1,200-seat venue with state-of-the-art acoustics and technology."
      },
      {
        title: "Black Box Theater",
        description: "Flexible performance space for experimental and intimate productions."
      },
      {
        title: "Art Gallery",
        description: "Rotating exhibitions of student, faculty, and visiting artist works."
      },
      {
        title: "Recording Studio",
        description: "Professional-grade audio recording and production facility."
      }
    ],
    sections: [
      {
        title: "Performance Venues",
        content: "The Performing Arts Center houses multiple performance spaces designed for different types of artistic expression. The Main Theater hosts large-scale productions, while smaller venues accommodate more intimate performances. All theaters feature professional lighting, sound, and stage equipment.",
        image: "https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        title: "Academic Facilities",
        content: "The center serves as the home for academic departments in music, theater, and dance. It contains classrooms, practice rooms, scene and costume shops, design studios, and faculty offices. Students majoring in the performing arts spend much of their time in this building developing their artistic skills.",
        image: "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }
    ]
  },
  {
    id: "student-dining-hall",
    name: "Main Dining Hall",
    category: "Dining",
    description: "The largest dining facility on campus, offering a wide variety of cuisines and dietary options. The dining hall features multiple stations serving international dishes, comfort food, vegetarian and vegan options, and made-to-order specialties.",
    address: "600 University Drive, Campus City",
    hours: "Monday-Friday: 7:00 AM - 9:00 PM, Weekends: 9:00 AM - 8:00 PM",
    image: "https://images.pexels.com/photos/2819088/pexels-photo-2819088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    position: { x: 55, y: 70 },
    phone: "(123) 456-7895",
    website: "https://dining.university.edu",
    events: [
      {
        title: "International Food Festival",
        date: "June 15, 2025",
        time: "11:00 AM - 2:00 PM"
      }
    ],
    highlights: [
      {
        title: "Global Cuisine Station",
        description: "Rotating international dishes from around the world."
      },
      {
        title: "Plant-Forward Kitchen",
        description: "Dedicated to vegetarian, vegan, and plant-based options."
      },
      {
        title: "Allergen-Free Zone",
        description: "Separate preparation area for allergen-sensitive dining."
      },
      {
        title: "Teaching Kitchen",
        description: "Demonstration area for cooking classes and chef showcases."
      }
    ],
    sections: [
      {
        title: "Dining Options",
        content: "The Main Dining Hall operates on an all-you-care-to-eat basis with multiple food stations. These include a grill, deli, salad bar, pizza oven, international cuisine station, comfort food classics, and dessert bar. Each meal period features different menu items, with specials that change daily.",
        image: "https://images.pexels.com/photos/784633/pexels-photo-784633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        title: "Sustainability Initiatives",
        content: "The dining hall is committed to sustainable practices, including locally-sourced ingredients, composting, minimal food waste, and eco-friendly packaging. The facility has been recognized with Green Restaurant Certification for its environmental stewardship.",
        image: "https://images.pexels.com/photos/3735149/pexels-photo-3735149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }
    ]
  },
  {
    id: "business-school",
    name: "School of Business",
    category: "Academic",
    description: "Home to undergraduate and graduate business programs, featuring modern classrooms, a financial trading lab, case study rooms, and offices for faculty and administration.",
    address: "700 Commerce Avenue, Campus City",
    hours: "Monday-Friday: 7:00 AM - 9:00 PM, Saturday: 8:00 AM - 5:00 PM, Sunday: Closed",
    image: "https://images.pexels.com/photos/2224861/pexels-photo-2224861.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    position: { x: 15, y: 35 },
    phone: "(123) 456-7896",
    website: "https://business.university.edu",
    events: [
      {
        title: "Career Fair",
        date: "June 18, 2025",
        time: "10:00 AM - 3:00 PM"
      },
      {
        title: "Guest Speaker: CEO Panel",
        date: "June 24, 2025",
        time: "6:00 PM - 8:00 PM"
      }
    ],
    highlights: [
      {
        title: "Trading Floor Simulation",
        description: "Real-time market data and professional trading software."
      },
      {
        title: "Entrepreneur Center",
        description: "Incubator space for student startups and innovation."
      },
      {
        title: "Executive Lecture Hall",
        description: "Tiered seating with advanced presentation technology."
      },
      {
        title: "Business Research Library",
        description: "Specialized collection of business periodicals and databases."
      }
    ],
    sections: [
      {
        title: "Academic Programs",
        content: "The School of Business offers undergraduate degrees in various business disciplines, as well as MBA, specialized master's programs, and a Ph.D. in Business Administration. The curriculum emphasizes both theoretical knowledge and practical skills, with opportunities for internships and real-world projects.",
        image: "https://images.pexels.com/photos/1181371/pexels-photo-1181371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        title: "Corporate Partnerships",
        content: "The school maintains strong relationships with businesses and corporations, which provide guest speakers, internship opportunities, and recruitment events. The Corporate Partners Program also funds scholarships, research initiatives, and facility improvements.",
        image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }
    ]
  },
  {
    id: "campus-bookstore",
    name: "Campus Bookstore",
    category: "Services",
    description: "The official university bookstore, selling textbooks, course materials, school supplies, technology products, university apparel, and gifts. The store also offers textbook rental and buyback programs.",
    address: "800 University Avenue, Campus City",
    hours: "Monday-Friday: 9:00 AM - 6:00 PM, Saturday: 10:00 AM - 4:00 PM, Sunday: Closed",
    image: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    position: { x: 65, y: 45 },
    phone: "(123) 456-7897",
    website: "https://bookstore.university.edu",
    highlights: [
      {
        title: "Textbook Services",
        description: "New, used, rental, and digital textbook options for all courses."
      },
      {
        title: "Tech Shop",
        description: "Authorized retailer for computers, tablets, and accessories."
      },
      {
        title: "Spirit Shop",
        description: "University-branded clothing, gifts, and memorabilia."
      },
      {
        title: "Convenience Store",
        description: "Snacks, beverages, and everyday essentials."
      }
    ],
    sections: [
      {
        title: "Textbook Services",
        content: "The bookstore offers multiple options for course materials, including new and used textbooks, rental programs, and digital formats. Students can order materials online or in-store, with options to pick up in-store or have them delivered. The store works directly with faculty to ensure all required and recommended materials are available.",
        image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        title: "University Merchandise",
        content: "The Campus Bookstore is the official source for university-branded merchandise. The store carries a wide selection of apparel, gifts, accessories, and memorabilia featuring university logos and mascots. Special collections are available for alumni, families, and athletic events.",
        image: "https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }
    ]
  }
];