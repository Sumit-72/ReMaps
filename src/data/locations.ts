import { Location } from '../types/types';

export const locations: Location[] = [
  {
    id: "central-library",
    map_id: 1,
    name: "Central Library",
    category: "Academic",
    description: "BIT Mesra’s Central Library is a modern, fully automated knowledge hub with an extensive collection of books, journals, and digital resources supporting diverse academic fields. Equipped with RFID, KOHA, and online access systems, it ensures seamless research, learning, and resource management for students and faculty alike.",
    address: "",
    hours: "Monday-Friday: 9:00 AM to 9:00 PM, Weekends: 10:00 AM to 6:00 PM",
    image: "https://bitmesra.ac.in/UploadedDocuments/adminlib/images/IMG_0018.JPG",
    position: { x: 35, y: 40 },
    phone: "0651-2276675",
    website: "https://bitmesra.ac.in/Visit-Other-Department/1/130",
    events: [],
    highlights: [
      {
        title: "Vast Collection",
        description: "113,000+ books, 10,000+ online journals, 100+ print journals, 4,000 project reports, and various multimedia resources."
      },
      {
        title: "Digital Access",
        description: "Provides internet access with networked computers, online databases, e-resources, and an OPAC system for easy search."
      },
      {
        title: "Automation and Technology",
        description: "Automated with RFID and KOHA systems for efficient cataloguing, circulation, and inventory management."
      },
      {
        title: "Additional Facilities",
        description: "Offers photocopying, dedicated reading and reference areas, plus user orientation and research support."
      }
    ],
    sections: [
      {
        title: "Study Spaces",
        content: "The library offers a variety of study environments to accommodate different learning styles and needs. These include silent reading rooms, collaborative study areas and technology-enabled group rooms.",
        image: "https://bitmesra.ac.in/UploadedDocuments/adminlib/images/IMG_0027.JPG"
      },
      {
        title: "Technology Resources",
        content: "Students and faculty have access to dedicated internet section with high speed Wi- Fi equipped with networked terminals, providing access to online journals, databases and reference resources.",
        image: "https://bitmesra.ac.in/UploadedDocuments/adminlib/images/IMG_0045.JPG"
      }
    ],
      lat: 23.41197229861886,
      lng: 85.43977163677691,
      detail: "Knowledge hub at the heart of BIT Mesra",
      img: "https://bitmesra.ac.in/UploadedDocuments/adminlib/images/IMG_0018.JPG",
      url1: `${window.location.origin}/location/central-library`,
      url2: "https://www.google.com/maps/place/Central+Library,+BIT+Mesra/@23.4121969,85.4397998,19.52z/data=!4m6!3m5!1s0x39f4fb557a1782b7:0x68d9059239c405bc!8m2!3d23.4119591!4d85.4397713!16s%2Fg%2F11c610jj6q?entry=ttu&g_ep=EgoyMDI1MDUyNi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: "cat-hall",
    map_id: 2,
    name: "CAT Hall",
    category: "Campus Life",
    description: "The CAT Hall (Closed Amphitheatre) at BIT Mesra is a premier venue for academic events, conferences, guest lectures, and cultural activities. Equipped with modern audio-visual systems, comfortable seating, and a large stage, it serves as the central hub for institute-level gatherings and showcases BIT Mesra's vibrant academic and cultural life.",
    address: "",
    hours: "Monday-Sunday: 7:00 AM - 11:00 PM",
    image: "https://files.yappe.in/place/full/cat-auditorium-bit-6938548.webp",
    position: { x: 60, y: 55 },
    phone: "",
    website: "",
    events: [],
    highlights: [
      {
        title: "Advanced Audio-Visual Systems",
        description: "Equipped with high-quality sound and projection technology for clear presentations and performances."
      },
      {
        title: "Spacious Seating",
        description: "Comfortable seating arrangements that accommodate a large audience for lectures, seminars, and events."
      },
      {
        title: "Versatile Stage Area",
        description: "A large stage suitable for academic talks, cultural programs, and official ceremonies."
      }
      
    ],
    sections: [
      {
        title: "Event Spaces",
        content: "The CAT Hall (Central Auditorium Theatre) at BIT Mesra serves as a premier venue for a diverse array of events, playing a pivotal role in the academic and cultural life of the institute. ",
        image: "https://dubeat.com/wp-content/uploads/2018/11/Hackabit-1024x683.jpg"
      }
    ],
    lat: 23.411685656865192,
    lng: 85.43921065726516,
    detail: "Vibrant venue for academics and culture",
    img: "https://files.yappe.in/place/full/cat-auditorium-bit-6938548.webp",
    url1: `${window.location.origin}/location/cat-hall`,
    url2: "https://www.google.com/maps/place/CAT+Auditorium,+BIT/@23.3975975,85.397522,13z/data=!4m6!3m5!1s0x39f4fb556408ac0f:0x73b97b001cf7c8fe!8m2!3d23.411675!4d85.439211!16s%2Fg%2F11g8p69bx6?entry=ttu&g_ep=EgoyMDI1MDUyNi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: "r&d-building",
    map_id: 3,
    name: "R&D Building",
    category: "Academic",
    description: "BIT Mesra's R&D Cell drives innovation and interdisciplinary research, securing major government and industry funding while fostering a culture of scientific excellence and real-world impact.",
    address: "",
    hours: "Monday-Friday: 8:00 AM - 5:30 PM",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/48/Bit_Mesra_5.JPG/1200px-Bit_Mesra_5.JPG?20070804213004",
    position: { x: 25, y: 65 },
    phone: "",
    website: "",
    events: [],
    highlights: [
      {
        title: "Research Laboratories",
        description: "Cutting-edge facilities for undergraduate and graduate research."
      },
      {
        title: "Funded Projects",
        description: "Secures grants from top agencies like DST, DRDO, ISRO, and AICTE for cutting-edge research."
      },
      {
        title: "Patents & Publications",
        description: "Encourages high-quality research output through patents and publications in reputed journals."
      },
      {
        title: "Industry Collaboration",
        description: "Partners with industries and institutions for real-world solutions and technology transfer."
      }
    ],
    sections: [
      {
        title: "Research Facilities",
        content: "BIT Mesra hosts cutting-edge labs in nanotech, biotech, robotics, and engineering, supported by a Central Instrumentation Facility, HPC resources, and specialized R&D infrastructure for interdisciplinary innovation.",
        image: "https://bitmesra.ac.in/UploadedDocuments/user_admincif/Gallery/large8c33d84830954987837a5acd174b416a_WhatsApp%20Image%202023-07-21%20at%2017.30.45.jpeg"
      },
      {
        title: "Lecture and Learning Spaces",
        content: "The R&D block features modern lecture halls, seminar rooms, and collaborative spaces equipped with smart boards, AV systems, and high-speed internet to facilitate research discussions, workshops, and academic exchange.",
        image: "https://bitmesra.ac.in/UploadedDocuments/user_jpradmincse/Gallery/_large_872020155342_IMG-20180317-WA00162dfb28fc-435d-4e32-9007-504dab417883.jpg"
      }
    ],
    lat: 23.413153776706586,
    lng: 85.44164296202976,
    detail: "Innovation hub driving cutting-edge research",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/4/48/Bit_Mesra_5.JPG/1200px-Bit_Mesra_5.JPG?20070804213004",
    url1: `${window.location.origin}/location/r&d-building`,
    url2: "https://www.google.com/maps/place/R+%26+D+Building/@23.4131507,85.4410455,19.45z/data=!4m6!3m5!1s0x39f4fb002cfa813d:0xff0fd72f1f591fb8!8m2!3d23.4130805!4d85.4416522!16s%2Fg%2F11m6b_jj8y?entry=ttu&g_ep=EgoyMDI1MDUyNi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: "main-building",
    map_id: 4,
    name: "Main Building",
    category: "Academic",
    description: "The Main Building of BIT Mesra is the historic core of the institute, established in 1955 by visionary industrialist B.M. Birla. Serving as the academic and administrative nucleus, it houses major departments, faculty offices, lecture halls, and the Central Library. Its iconic architecture reflects the legacy of excellence, fostering innovation, research, and transformative learning for decades.",
    address: "",
    hours: "Monday-Friday: 8:00 AM to 9:00 PM, Weekends: 10:00 AM to 6:00 PM",
    image: "https://bitmesra.ac.in/UploadedDocuments/user_pratyush_869/Header/Header295e75781b0f4b19b292cba095f2d310_Institute_Building.png",
    position: { x: 75, y: 30 },
    phone: "18003457057",
    website: "https://bitmesra.ac.in/",
    events: [],
    highlights: [
      {
        title: "Iconic Architecture",
        description: "A landmark structure symbolizing the institute’s legacy, blending functionality with timeless design."
      },
      {
        title: "Academic Hub",
        description: "Hosts major academic departments, faculty cabins, and lecture halls central to day-to-day learning and research."
      },
      {
        title: "Central Library",
        description: "Home to the fully automated, resource-rich Central Library, supporting vast academic and research needs."
      },
      {
        title: "Research and Innovation",
        description: "Facilitates advanced research through departmental labs and R&D support facilities."
      }
    ],
    sections: [
      {
        title: "Lecture Halls & Classrooms",
        content: "Spacious, tech-enabled halls with projectors and audio systems offer a dynamic and engaging learning environment.",
        image: "https://scontent.fixr3-1.fna.fbcdn.net/v/t39.30808-6/465284251_8889507911092508_7239527274807058042_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Zy4K0wwRQg4Q7kNvwEZw_7x&_nc_oc=AdmVdb8G-cupkIWotqfduAeL8QPnov5bxPhoSxfTxdh_rRjYohxgWBDAVK5E_ozRTwQHTlUKnZnehs6Ge7CgsgiU&_nc_zt=23&_nc_ht=scontent.fixr3-1.fna&_nc_gid=yLaZPBhqTlQGUTCO0x2PqA&oh=00_AfIdnTFg33p1tCTCWRx6ybBDwJTEvLfnHnPjFaN12_DVjA&oe=683CA236"
      },
      {
        title: "Academic Departments",
        content: "Major departments are housed here - Mechanical, Electronics, Electrical, Chemical, Physics etc.",
        image: "https://static.zollege.in/public/reviewPhotos/247795/inbound7229587131537346614.jpg"
      }
    ],
    lat: 23.412504921199393,
    lng: 85.4398811686807,
    detail: "Heart of academics and administration",
    img: "https://bitmesra.ac.in/UploadedDocuments/user_pratyush_869/Header/Header295e75781b0f4b19b292cba095f2d310_Institute_Building.png",
    url1: `${window.location.origin}/location/main-building`,
    url2: "https://www.google.com/maps/place/Main+Building/@23.412195,85.439545,21z/data=!4m6!3m5!1s0x39f4fb5576fb6b5b:0x3bd234cc551ac313!8m2!3d23.4122229!4d85.439826!16s%2Fg%2F11dxkbmbrm?entry=ttu&g_ep=EgoyMDI1MDUyNi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: "gp-birla",
    map_id: 5,
    name: "GP Birla Auditorium",
    category: "Arts & Culture",
    description: "The G.P. Birla Auditorium at BIT Mesra, Ranchi, is a premier venue for academic, cultural, and institutional events. Named after industrialist and philanthropist G.P. Birla, it stands as a testament to his contributions to education and society.",
    address: "",
    hours: "Monday-Sunday: 9:00 AM - 10:00 PM (or end of performances)",
    image: "https://content3.jdmagicbox.com/v2/comp/ranchi/g8/0651px651.x651.190801174816.d9g8/catalogue/g-p-birla-auditorium-mesra-ranchi-auditoriums-8wmu7ibi19.jpg",
    position: { x: 45, y: 20 },
    phone: "",
    website: "",
    events: [],
    highlights: [
      {
        title: "Seating Capacity",
        description: "Accommodates up to 2,500 attendees, making it one of the largest auditoriums among Indian engineering institutes."
      },
      {
        title: "Versatile Usage",
        description: "Hosts a variety of events, including convocation ceremonies, national and international conferences, seminars, and cultural programs organized by and for the academic community. "
      },
      {
        title: "State-of-the-Art Facilities",
        description: "Equipped with modern audio-visual systems, stage lighting, and acoustics suitable for conferences, seminars, and cultural performances."
      }
    ],
    sections: [
      {
        title: "Performance Venues",
        content: "The auditorium is a vibrant space for dance, music, acting, and other cultural performances, hosting a wide variety of artistic events throughout the year.",
        image: "https://files.yappe.in/place/full/g-p-birla-auditorium-6902906.webp"
      },
      {
        title: "Academic Facilities",
        content: "This prestigious venue is used for convocations, student induction programs, guest lectures, and important academic ceremonies, fostering a strong sense of community and tradition.",
        image: "https://bitmesra.ac.in/UploadedDocuments/user_pratyush_869/Header/Header149740baaba14242a778e865aa3a78c9_Platinum%20Jubilee%20Web%20banner%204.jpg"
      }
    ],
      lat: 23.422514190356182,
      lng: 85.43860608099662,
      img: "https://content3.jdmagicbox.com/v2/comp/ranchi/g8/0651px651.x651.190801174816.d9g8/catalogue/g-p-birla-auditorium-mesra-ranchi-auditoriums-8wmu7ibi19.jpg",
      detail: "Hub for cultural and convocation events",
      url1: `${window.location.origin}/location/gp-birla`,
      url2: "https://www.google.com/maps/place/G+P+Birla+Auditorium/@23.4225548,85.4384713,20z/data=!4m6!3m5!1s0x39f4fb52a36aaaab:0xb3fa978999903553!8m2!3d23.4224946!4d85.4386051!16s%2Fg%2F11cjg8t3jr?entry=ttu&g_ep=EgoyMDI1MDUyNi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: "rocketry",
    map_id: 6,
    name: "Department of Space Engineering & Rocketry",
    category: "Academic",
    description: "Established in 1964, BIT Mesra's Department of Space Engineering and Rocketry was the first of its kind in India. It aims to provide state-of-the-art education and training to support India's national missions in space and defense .",
    address: "",
    hours: "",
    image: "https://content3.jdmagicbox.com/comp/ranchi/z3/0651px651.x651.100608154302.k5z3/catalogue/birla-institute-of-technology-mesra-ranchi-institutes-for-aeronautical-engineering-4e2p27tu0e.jpg",
    position: { x: 55, y: 70 },
    phone: "",
    website: "https://bitmesra.ac.in/edudepartment/1/167",
    events: [],
    highlights: [
      {
        title: "Advanced Equipment",
        description: "Instruments like STA, TGA, DSC, rheometers, calorimeters, and more for research."
      },
      {
        title: "Rocket Propulsion Labs",
        description: "Static test setups with computer-controlled firing and data acquisition for solid, liquid, and hybrid rockets."
      },
      {
        title: "Propellant Technology",
        description: "Facilities for processing and characterizing rocket propellants and igniters."
      },
      {
        title: "Wind Tunnels",
        description: "Four wind tunnels for aerodynamic studies."
      }
    ],
    sections: [
      {
        title: "Hands-On Learning",
        content: "Practical experience through simulations, static rocket motor testing, and experimental setups, preparing students for careers in aerospace and defense.",
        image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhIVFRUVFRYVFRYVFRUVFxUVFRUWFhcVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQFysaFR0rKy0tKystLS0rLS0tLSstLSstLS0rLSstNy0rNzctLS03LTctKy03KysrKysrLSsrK//AABEIAN8A4gMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAAEEBQYDBwj/xABJEAABAwIDAwgGBggEBQUAAAABAAIRAwQSITEFQVEGEyJhcYGRoQcyUrHB0RQjQmJykhUWY4KywuHwU6Kj8SQzQ1TSNESDk7P/xAAYAQEBAQEBAAAAAAAAAAAAAAABAAIDBP/EAB4RAQEBAAIDAQEBAAAAAAAAAAABEQISMUFRIRMD/9oADAMBAAIRAxEAPwD0koSjIQryvVAJkRCaFUhcmROQwsoxQo0JUgymTwlC0NCknSKDoHJFIhCQoaElMiTEqkQCE0IihStMQmKIoShQLkxROQlOnQBM5EhKkUoSihChkkyRKFC08pIYTqDTBMihNC2glCiKUIWgIQoyhSglCiKUIOhITIyghSMQhK6FAUYgoSjKAqxBQlGUJCkEpiiKBJhkydNClQlMURQlQCUyIoVLQkoSERCYowBKRSKZCOmShJaTUFCUSEhKMUk8JQg4CEJCMhNCQGExCIpoUglBKKFyqyRlxUhlCUTW5JiFEJQuRSmKE5pijKAqQSULkRTKIVzLs11K5O1UDuQo4SJUnOEKNwQuUgoSEUIVIKRTwkQrABJEkpNShKJwKYJQUinKY6KQSmTkpKQCkmcUlIxQs60ZQpRFCjcgKEGEJRhC5R1zTEIkyk5kIQjlMUIKBzV0IQpDmkURTFCAmRFCQlBlCURCGUIpQORoCVAySUJLRbd1uuT7dXOFBUpSt9GZ/r9UJCZzVZVdnmZBXOrbkI60yxXEIQV1qtzXIBGI0IYRkIUIJTwmnNPKcWlCAooXG6rNptxPcGjSSYzWSJQ7vadGm7A+o1roBIJzzSdtWhE86w65BwkwJgDivM9qF1SpUql2b3uI6hOQ8IXTjx0WvSbXaFKoSKdRriM4Bzjj7lIXklntSrQqCpTAPrsbLoBwnC6eIWs2Nyoua1ZrDSo4SRiLaglrJzME7kXgOzWhIpjVbxHiE4cDoR4rONShKFcr2+pUgDUe1kzEnWOCrv1ltP8AHZ5/JWJaFCQolDbNu84WVmEnQTr47021r11KkajKZqmWgNac3SY16te5GLXSvdU2GHva0xMOcBlxzSZdUzo9h7HA/Fef7er1Lh/OFpEBzABwa4mDnrmgtNnV8TgGmQM+oD/ddf53HO85HoZqgmAQewhIheeWNR9C7DqmIBk4hEmSyBlPEjuleiELHLjeLU5SmQBM6uwOwF4xezOeaLRZwgLetJCW9qSS9RSSSXoeckL2ynXOpUhRiJcWoUKpbKfUuVHN0Fm43lQTQPBC6ieCmG6HWjZfje1c7HT0rhQd7J8E7rd3snwKtRtRvAoxtJh4pkn1neXxUCg7gfBZPl1Snm2OBjN3DPIDyleji9Zx8lkPSFeUy1jZ6U4tPs5j3hMkh47bljzh1JgiGmZ48FDqUch1Z68FYVHgzB0a73f1VZtUwRByw/Nb7DMrLlziNZ1IBOkmTHajtC6c8kdzauaQA5phrTw13ZpqQO/KUQVYtAg9JxXLERMOcjZBGRBjzQPdG46nQLWjCrPO9xOY17FGcV3dUkHIjMDMEbiolQo1JFCrhziSDlnGoO9HeXzwIxlwnTEYgaZKJihhPX7gowrYjkJz3dag0Tn1CxjiScQJ8XFWGxK1QF5a9wyjXdnkqQXTg2mMxDY/zO1VvsSpIf3D3q7U9UPbN28PqFxJzEyTn6uqiO2vcA/+oec/bdHvyQbacS6rGfSAjXQj5KnDk7vkZjQOvXFrHvqvxHFLg6XdHDGufYt/yd22LqkXaFjsDtwJgEETnEFeRtfr+E/D5K95L3Bpl45yMTWOOca4jHXuWeXHstsen852eKSxpvj/AIg/OmR0W8n0JKZzoUOpdqDWuid6e0XS+1jVuQoFa4UZzlyJReTUjo+oVylKUxCxWjymlDiS3qGilBjToSEHacvKxnpDsq7jRqUWOqQHMeGjERnia6Bu9YeC2Epp1UZa8ZNpdB0uoVgN5NNwAG8kxkFBq3GmeoXub4LS06EEHsIgrwLaVpVpPNJ7XYmEsPROZaYxDqOvet8brNVIxuMTJ08FKu7fDhwySciDmZJ3R3ZK42Vs6KT6j25zAyIOeeYIy4I9l0uc2hb0vZrUyY/ZxUMfl8ityqqy2ZWpkl9N7Msi9rm9KW6SNYlHSvX4s3ZQfGF6H6VKh5iiJ1rEnuY75rzMZO13LM+hJ+kFzTJmCPioriujR0SfvD3FcQUrBOqkYc+Kg1LtzamIGNPIypdXQTxQ2VBzqwLaQqZO6JGIRgdJw7yBJHWAlOguy6HHU6+JV7sW9AY7rd8As1bWjiSAHBrZzMA5cRuKGhdluXWrEs7q/wAL3PG8uB/eBCpJdhxRlx/qrPYFk25uadF/qvf0oMGIJyPgrmls6m5lK0jFVNVjagaOmxvODnN25oOemiNiZi1fId+H4rZM5C1i1lSlUaQ+nTdFQkODi2S3Jvq55LPbSsGUKlZjCSGktBOpgnVeyW4hjRwa0eDQEW/E8+/Ui69uj4v/APFJeip1nasa3FkuUrza62xXqmXvPYMm+ChUwcRcXOz+8QO4Kxp6qQmwleZtuHDRzvEoadeqC55uKkHcXkNHYJy1V1D0xMQV5z+ka+6o/tDjHvT/AKVrjWrU/MVYnokISsA3bVcf9Z3kUjyhupH1uW8YR71LHoAQvlYb9ZLj/E/yt+Sd3Ke4H2h+QITakpFYwcp6+/B+X+qL9aa3Cn4H5qwtc47kmnOVkjyqqgTzTHHtI95XRnKx2+k3rhxUom8rdlCqKJLjL3hkDc0ENLuv1x+UdaxvInZs7SfUaOjSpl2eZBqNDGkTvyJ71ttqXJLbd8QRb1KxHDHTqOaPE0/ELF8ktqihUuX4C7E5rNYgMxdX3vJdL+cWN2rH0pP+poD9q4/6ZXmnFbHl/tkV+YAYWgc4TJmT0AN3ase1s96zPDWDaegfxD3H5rgu9cZZcfOFwWlSru6PetDyJcG3Vu7fiz7g5Zu5PRH4lM2RfmnUaQMxIHa5pGXeVBLt2Q173GC+XHf67pPvKteTvIandUOfdVewl72w1rSOiQJzz4qqeytmIbhECS0jSVvOSe0qFK0p031AHdMmZ1dUcfkrlsUjtyU5I0rJz3B5qF4aAXNaCzDi9UjjPkrtjRimBO8wJjt1VLbcrrd78BLmmTBcOiQN8hTTty1GZr0/zBYqeYbbo4qlSNXVY73Ex7l6y4RpuMLya9uwHtcM/rQY4gGVeXvpBqYiGUGjrcS7PsEZJ8pus0l51+v9z7DPyO+aSOtLuOU3GkPzH5IBt1sl3NmTr0yR3BZdtYuIB0Tl8HPRdMi3WsG3mR6h/MPkuZ280/Zd5LMUqpJENEAg55gwZgjeF7TsDYtncW9K5qW1EvrUabnw2GYsOZYzRpknMQTlwWbkTAM5QU94f4D5p37bpkRJB62z5Ar0l3JOx/7Wn3Aj3FcK3IvZx/8Abx2PqD+ZGwfrztm1qQAlxJ44SO+JyRja9H2vIq35R8hXYx9DoE08ILprZ45OQFQ6Rh371XbO9H1zVqAVW8xTEYjiY9zupgaT4mI605Frj+kaR+2PNOy9p+2M+tat3o3tNBUrD95h97V5zX2VVa9zTTrdFzmg8y+DhMTMb4nvRDq9+kNP2m+IRufpAmeBGXWc1nrDYVetVFOm04ne21zWtaCJcSRpnK159GdTUXTD203CfByrFqESeKemN0qLt7kfVt2F/PUqkEYmg4XAEEzDj1Kp2VT6RBe2XNEAOB6JhxM6DcJPgVSDW/5ScorU1qlNtVpikykwicMtNEnpcPq3DvWR2U3oF0Zue7PsMfArM7UeRVe1pBDXOGUxkSP6dyVvz7mk03OAYOkA4iNc47iVvkItOVB/5f7/APKqijWaATv3fP8AviuFe5e6Mbi6NJJPggo0i4wASRnoVnDqbiyXOF0bRLRmCO1ClVyujAb2/BWfJLZ/0i8o0QYzLy4jQMBef4VVX3qj8S0Xo+o/XueNWUn+DoHzTBV1c2sNmdXPGm5rWGfF8dyqKTgGSCQ0NLsgMg2ZV3tIkUm5/YqP/M8t9zViaW1ugWEZEmR1EAZeaeU/WduOTtoPJxBsMmYOcnj1HsVnaup1mEgEOBGIZZcHDqVdWvWOaG4SB1QgsrsU3YmzEQQjDbQvecWE/ZMHXVTqdOc4VXcVMTi4/aMpU7hw0JVhlWXMBOoX6TqcfL+iSsR+xE2nlJzKTz0u9E2fPyURtqHoiO1e58i3f8BbDhTA8CR8F4e1e1cg3zs+h1B48Kr1mpfEpiliTFZR2uySlCkpHlMXnihKEqQiVGv75tCk+s/1WNLj1xoB1kwO9d5WL9Ity6s+32fTPSrVGl8ZwwGRPg53/wAQTIoxW0bK7umVdpOgNc9zeBLQIlo9kTh11BWZNXhu0X0Pa0GU2Mp0xhYxoa0cABGiwXpH5Kswm7pFrIwtdTDAAS4huORvzE5J0PN3EnMo23b2tIa6AZkQM8o4Iri36fQa4N3YiCfEIHUd3BNqhW0uMEq3tGOaCGub2luvgVU0qcKfSeOO5ZrR75pyJIM8NPNQQp1w/ox94e4qGqKuV1SxNAmM9613o/tHNp3VTg1jZ3dJyy7zl3qXVuCKbsM4AQHAZAnSSN61BfDVcomkUhG6hTHVL5fH+cLzt1s4blIZenMSQDw07wpNFoOcBPKieC5N7Edc1TSkNIY54mYOEtESPxKdcclazbltqCwvdTNUZnCWicpiZ6J3K29HjP8Ai3nhRd5vZ8j4LS3Fm/8AStKrgdzYtnNc+OiDLjBOg1Czqx5htDZz6Ti14EtJBgyJGsdSaw2dVrOLaNN1RwGIhsZDiScgpm36BFWo8vxguMOJkmXOI8grz0Z03/SKjxOBtItdnHTc5pZlvya9a9C+VAeT15/2tb8v9Ul7UK3WUlnS8NrAYp4FIk4k9x6x7UDnAZpKTvXsXo5fOz6XU+sP9Vx+K8ZonfxXr/o0fNiOqtVHjB/mRU1ZKElCXJLAEChlMSmlJFKFyRKYqQ8tTosFyTP0raFzeH1aY5ul2vBaCBuOBp/+xaflPec1aV3b8BA7XdEe9Vfo6swywY6IdVe+oTxGIsafy02+K1E0pKyPpPqkWrGgwH1gHDiGscQPEA9y17jksd6T2za0z7NZs9hZUHvhZ9p5jhHEriafWV1KArRDg+8Ums4ORAoXBQ1OtaWJnrSZnTqgIjs98YsJwzAdBAJOUT5LvsW3e/EGNxQBMxllkMzrnorJt3UfTFuADoBuOTpg57iNdwCZBrPV7cyGnIyFN2oMNFrRvcPHOSld0i2oMfRjpHfLRvEa5qBe3r6xLabejTGI6TGQLjK1BqIWhdrOqcTWADpOa2T94gT5qI2sultVAe13sua7wcD8EVR6tyV5PutTUL3te5+EDCCIDZOh4k+Sn7b2ULmmKZqPpwSQWGMyCOkPtDPQqc4yZnrB6iom1L9tCkarw4tBAOESczGnDNYaeUbStHU2sZMhrnMnScJyPn5rYeja2w0atXEPrHBpbHqmmTnPWHArG7V2gKp6MgYpB4yOC1/o2qDmK7ZMisD3Fgj3HwWruD22WJJcsSS5l41WGZXKoJBXW59Y9yALqnWiIAC9R9Gt4G2r2ndWd5spryoHet1yHqfVVB+0nxYM/JSr0cXrUQuG8VmeeK6mu4RnwPcc1gtFzwS51Zv6W5G29O8q/B+tCaiYvCz42gfkibtMpxYi+ke5w2JE+s9oPYMTvgFdbBpc3aW7PYoUgfxc2J+KxPpFucdqB9+f8pWxp7RbhA6grFixD1W7f2aLmg6iXQSQ5pjRzTInq3d5XUXoKP6QFYHmlzyNu2/9EP62Pb5SQfJVtTk1djW2q9zcXuXrwrhCK3YqRWvGa2zKrfWpVG9tN494URzc4OXbkvdWPnRI56gHulS15Bsqu5jnFhM79Du3hdzUiHCQ7UHfMzPirjly6kyyt3MpsbUc4NxtaA7oMIeCfxNAWEdcPwhzXOkYp1MBucmN0b0nFtevc7MnpuBA8CY+PcqESFb7BHPucKkdFsiZGZyk+fitRYcmrSq0O+skzIDh0c8hBG4QE7gxgOblPToOJgDFkSQATk3M6dS9Iqci7bc+q3jDmmfFqsdi8n7eg4uaHOcQWy8zkYkDIawJWdOH5IbTZXoS05sOFwiIMCI6irms6Gu/C73Fef7CBsdpuoHKnW6I4Q6XUj3GWd63V86Kbz9x/wDCUWJ5byiptB6IAx5mN8QtZ6PKIFqXwJfUdJ4hkNHx8VluUurI4H3rY8gxFkzrfVP+o5avhL5JJJcy8ara/wB8SgldLn1iuWJdsZE3gtfyMucAqiJlzPc4LHzvWs5FsxGt1Cmf/wBEYWmNwJkyE/0tp+0fBJttuXP6Is4td+daftJxUB0hRTQhAaMJ6rU6UJUGDxKdpduJVg1W8tBNv2O+BV/QqyxrhvY0/mbKouUQc+g4EDIh3w+K67FvSballMMDSR+z6H8pRjS8FUru26IGSqfpm+F1p3LeKgsDcHek6sVFNfr4e5PzvX5p0YktunDQrsdoO6lXl8psYRpUvLLZ9S4wGmwkNxlzWkAS6CXQezcsXd2VWicLsVMuaY+805OEjcRIXqNJ8T+F3fIj4ql2zbF9e2dgLmhxDoEjCfa6lrcTBVKtSiCIcwl0Elpact0FafYF88jHpOo3ZDOEW2tlGvVMdENdOYJmRuUuhYCmxoHAlFuqLmjtEE57vepdO7GoPms0WRmNdfFd6VYrMpxE9IFMkUrhuTmOwz4vYe5w81pztNta250fbpAx1uGfnKoNuMNS2qN4DF3sOL4KJyYvJsnM1LKhZ+6SHj+IjuWvMCl2844mdg963fJRwbZUd2Tj4vcVgdvnptHAD4rZbEunCzoAEAmm0+JzVfCaPEkq36YP7JSWcOPM78dN3U53kYUWVP2y2K1QcH1P4ioDWrpWILVa/wBHo+sqj9m0+Dz81kGha30eVPrqnXR9z2fNRbYgZpubXZrgMyfJHjaR3cFKIIptBhPWocIKa46lFGKYBQtdRREZ5FNzCbm3nf7k7qT+KRoLqzD6bme00jxHzhZ/kXUxUqlM606kx91/9Q7xWlbSfxWYsSaG0XU91YOGW4xzjf5h3pWtE+lG5C63B1aJ7FJDCc0WBZwq91s3gR2Epjbbg5w7TPvUyp1Lk2tKkjPtnbnjduScHj2epS2wUFWmooX0lzRDgBJyMj+5yXRl6IOo4SOpciJqkey0a8XH5ALthadw8FWDUf6ZJXcuGA55R8R80zrdnWhfbtgwXDj3IwotQjy/2QsCKlRJac9HOE5Z4TrkmLCNCs4XekyQWneDPZCyvJqoWOr0jvwnva4t+S0tOs4AgwcgPBZXGW3r/vzIGmYxfBagrlt7/m/uj3LT7MBFCk0bqbP4QshtkzVd/f2R81rbKu3CwTo0DTqATyEqRJ60lJbSYRMuzz3JljWn/9k="
      }
    ],
    lat: 23.410507871236113,
    lng: 85.44559666513976,
    detail: "Pioneering aerospace innovation and student-led projects",
    img: "https://content3.jdmagicbox.com/comp/ranchi/z3/0651px651.x651.100608154302.k5z3/catalogue/birla-institute-of-technology-mesra-ranchi-institutes-for-aeronautical-engineering-4e2p27tu0e.jpg",
    url1: `${window.location.origin}/location/rocketry`,
    url2: "https://www.google.com/maps/place/Department+of+Space+Engineering+%26+Rocketry/@23.4106974,85.444619,19z/data=!4m6!3m5!1s0x39f4fca833dc3375:0x3a5d0a3717fbb75b!8m2!3d23.4104586!4d85.4455927!16s%2Fg%2F11fx8c582q?entry=ttu&g_ep=EgoyMDI1MDUyNi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: "production",
    map_id: 7,
    name: "Department of Production & Industrial Engineering",
    category: "Academic",
    description: "The Department of Production and Industrial Engineering at BIT Mesra, established in 1964, is a pioneer in integrating engineering with management to meet the evolving demands of the manufacturing sector.",
    address: "",
    hours: "",
    image: "/img/locations/production_1.jpeg",
    position: { x: 15, y: 35 },
    phone: "",
    website: "https://bitmesra.ac.in/edudepartment/1/76",
    events: [],
    highlights: [
      {
        title: "Industry 4.0 Integration",
        description: "Focus on cutting-edge domains like automation, smart production, and IoT-driven manufacturing systems."
      },
      {
        title: "Advanced Labs",
        description: "Equipped with modern CNC machines, robotics kits, CAD/CAM tools, and industrial automation setups."
      },
      {
        title: "Research & Innovation",
        description: "Active research in areas like additive manufacturing, ergonomics, sustainable production, and operations optimization."
      }
    ],
    sections: [
      {
        title: "Research & Facilities",
        content: "The department boasts advanced laboratories and a central workshop equipped with sophisticated instruments, supporting both academic training and research initiatives.",
        image: "/img/locations/production.jpeg"
      }
    ],
    lat: 23.41167111016487,
    lng: 85.44007506564225,
    detail: "Driving advanced manufacturing and smart industry solutions",
    img: "/img/locations/production_1.jpeg",
    url1: `${window.location.origin}/location/production`,
    url2: "https://www.google.com/maps/place/Production+and+Industrial+Engineering+Department,+BIT,+Mesra/@23.4115825,85.4400925,19z/data=!4m6!3m5!1s0x39f4fb557f6810c9:0x431ec62e642042bf!8m2!3d23.411572!4d85.4400959!16s%2Fg%2F11c1r1htk5?entry=ttu&g_ep=EgoyMDI1MDUyNi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: "pharma-dept",
    map_id: 8,
    name: "Department of Pharmaceutical Sciences & Technology",
    category: "Academic",
    description: "Established in 1972, the department is a recognized hub for quality pharmaceutical education and research. Backed by experienced faculty, global collaborations, and cutting-edge labs, it prepares students for innovation and leadership in the pharma sector.",
    address: "",
    hours: "",
    image: "https://scontent.fixr3-3.fna.fbcdn.net/v/t39.30808-6/241068177_112330291166637_3219342692061970471_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=101&ccb=1-7&_nc_sid=2285d6&_nc_ohc=aTs9ali-8YkQ7kNvwEAQHtc&_nc_oc=Adk592plD9q0Hhu47ISbKLvHzzmJ26Mrh9h_1_6syd1UBL2NnVFiK3kRuNBCgUbTrxyQUFkQCJ_sJTCm2kM_QPBi&_nc_zt=23&_nc_ht=scontent.fixr3-3.fna&_nc_gid=_04VRvDSV2KEU1eeVYB6jw&oh=00_AfL13anwmaDs_ljUqJIzGsl_BgqmGMwi175Gaz9w37OetQ&oe=683CF357",
    position: { x: 65, y: 45 },
    phone: "",
    website: "https://bitmesra.ac.in/edudepartment/1/77",
    events: [],
    highlights: [
      {
        title: "Diverse Programs",
        description: "B.Pharm, M.Pharm with specializations like Pharmaceutics, Chemistry, Pharmacology, and more."
      },
      {
        title: "Modern Labs",
        description: "Equipped with advanced instrumentation and facilities."
      }
      
    ],
    sections: [
      {
        title: "Pharmaceutical Biotechnology",
        content: "Integrates biotechnological approaches in drug development, including recombinant DNA technology and biopharmaceutical production.",
        image: "https://www.adlittle.in/sites/default/files/reports/ADL_Advancing%20Bio%20and%20Gen_header_image_1605x662.jpg"
      },
      {
        title: "Pharmacology & Toxicology",
        content: "Investigates the effects of drugs on biological systems, conducting preclinical and clinical studies to assess drug safety and efficacy.",
        image: "https://insidetelecom.com/wp-content/uploads/2021/11/What-is-the-difference-between-Biotech-and-Pharma.jpg"
      },
      {
        title: "Pharmacognosy & Phytochemistry",
        content: "Studies medicinal plants and natural products, isolating bioactive compounds for potential therapeutic applications.",
        image: "https://images.deepai.org/chat-style-image/abf6d79edde94813bfb3a354e0f78d7b/output.jpg"
      }
    ],
    lat: 23.41052092771194,
    lng: 85.44090589202888,
    detail: "Innovating healthcare through cutting-edge pharmaceutical sciences",
    img: "https://scontent.fixr3-3.fna.fbcdn.net/v/t39.30808-6/241068177_112330291166637_3219342692061970471_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=101&ccb=1-7&_nc_sid=2285d6&_nc_ohc=aTs9ali-8YkQ7kNvwEAQHtc&_nc_oc=Adk592plD9q0Hhu47ISbKLvHzzmJ26Mrh9h_1_6syd1UBL2NnVFiK3kRuNBCgUbTrxyQUFkQCJ_sJTCm2kM_QPBi&_nc_zt=23&_nc_ht=scontent.fixr3-3.fna&_nc_gid=_04VRvDSV2KEU1eeVYB6jw&oh=00_AfL13anwmaDs_ljUqJIzGsl_BgqmGMwi175Gaz9w37OetQ&oe=683CF357",
    url1: `${window.location.origin}/location/pharma-dept`,
    url2: "https://www.google.com/maps/place/Department+of+Pharmaceutical+Sciences+%26+Technology/@23.410612,85.440867,19z/data=!4m6!3m5!1s0x39f4fcaa702221f5:0xaa611d87d69c6d99!8m2!3d23.410612!4d85.440867!16s%2Fg%2F11g_zz3w1?entry=ttu&g_ep=EgoyMDI1MDUyNi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: "biotech-dept",
    map_id: 9,
    name: "Department of Bioengineering & Biotechnology",
    category: "Academic",
    description: "The Department of Bioengineering & Biotechnology at BIT Mesra bridges biology and engineering to solve real-world problems in healthcare, agriculture, and industry. It fosters innovation in fields such as genetic engineering, bioprocessing, and biomaterials through rigorous academics and impactful research.",
    address: "",
    hours: "",
    image: "data:image/jpeg;base64,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",
    position: { x: 15, y: 35 },
    phone: "",
    website: "https://bitmesra.ac.in/edudepartment/1/51",
    events: [],
    highlights: [
      {
        title: "Cutting-Edge Labs",
        description: "Equipped for genomics, proteomics, cell culture, and bioinformatics research."
      },
      {
        title: "Interdisciplinary Research",
        description: "Focus on synthetic biology, tissue engineering, and environmental biotech."
      },
      {
        title: "Innovation in Focus",
        description: "Encourages patents, product development, and translational research."
      }
    ],
    sections: [
      {
        title: "Research & Innovation",
        content: "Ongoing projects span drug discovery, biofuels, and microbial engineering, with students contributing to national and international publications.",
        image: "https://images.deepai.org/art-image/afca7e3a6d774eadb6bb047c77bf1eb8/microbial-4c8f4f.jpg"
      },
      {
        title: "Infrastructure & Labs",
        content: "Includes Molecular Biology Lab, Fermentation Lab, Bioprocess Lab, and Computational Biology Suite with high-end analytical instruments.",
        image: "https://images.deepai.org/art-image/814d42e0f8f745fa878b0bb5314b1f6a/includes-molecular-biology-lab-fermentation-lab-biopr.jpg"
      }
    ],
    lat: 23.410070348431766,
    lng: 85.44059496287217,
    detail: "Advancing life sciences with interdisciplinary biotechnology research",
    img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhAQEhIVFRUQFRUSFRUVEBAVFRUWFRYWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFw8QFS0dFR0tLSsrLSstLS0rKy0tLS0tLSstLSsrLSsrKy0tLSstLSstLTcrLSs3Kzc3Kzc3Ny03Lf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBQYHBAj/xABMEAABAwEDBQ0BDAgFBQAAAAABAAIDEQQSIQUGMVGRBxMiQVJhcYGSobHB0cIVIzJCU2JjcoKisvAUJDNDg5PS4RY0c6PxRFSUpMP/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAHhEBAQEAAwEBAQEBAAAAAAAAAAERAhIxIUEiUQP/2gAMAwEAAhEDEQA/AGkKoqoqqaoykOCUSklQNmEaUuqBRIDqiQRFUGhVEgoBVCqJE4oDqiJSC5JJRSyUVUi8ivIDkfQE1pTHHQkMlcRUjHVp70q8heQGHupzoQTFwqRTmRXkG0Gig49ulA+HI6pmqOqIdqjTQclhyoXVGCkVRopdUdU2jqgXVHVN1TLoSScUR1go6ptgolVQKR1SQjQKBSgm0sFApGkgo6oOK+jvoi1CiyDvot8RUQQAvQvoqIUTQd9AORUQomhVUKpKFE0GSkOKRaPglMs0Jqg+Ya+9I31UHKjzv0uOAe8jrcSVz7+7X4LUiNF31DfVnLZCNBSzan8o+Hgr1GiCRHvizttskHx3Yc6nrEySUAmQ1IBwdcHCrQAN6NKlmLJqzb6hvqo1qtUrHUEr6EBwq91aHXimxlWb5R3ad6piX4vu+o9+VEGWZx8c+PijGWp/lO5vomVF9bKnWlZ+MuT8v7rPRXXJ85McZOJLW1OippiadKWYqQCUmon1CXVTQpBFVCqapQQCQSUKlVDqNNBxR3kU8gmr6MSIhwI01viG+IHgUoFcrpqcSAlP5CmqcLUV1Vz/ABY3UdjfVSWRsri0OeGg8AAmoHGaDQeYq4ykC1JITxCItUU1RFRN26W4wuGkU085UGM6otBIww+BJ6JgsFESgxnRDym7HjyS25yQ8tu0jxCYJlCiiBnFDy4/5gXRZcrxSODGvYSeISNJ16FMHVaNCZaNC6LQMOtMsCyqjCwCZ8jrxBMlBgDhwK4108JIfkjglwecA80IbjdJFKhxGkd6m5MhzRtc5szQK3yA3TSmsHUObBcLIH1JE0YJF3C6MKl1KBuirir/AF+U+ON2RwHXd9xq0fsz8YuHK+aTsRHIzqfCx1XMKhl+la9S7nWSQm9vrCcOMcReR8X57u5OOs0xxvxVqSDTEVFDQ0/NE/r/AFfiHfYAHNbvgxvEm44XQwkHpxaQuuzwSsc2IObi0nFjyBQgUB49Kf8Acqa8H34yRewLXUIeXFwI1VcUoZPtAeJC5jnUu4h1KdFRirdJ8Rs1jeaPLmm8WDjwD6UOjQCaJRyQ/lNpUipDxSgJOBFeJSQsdo5TBiDUA1oAG3dOg0x6Uv8AR58cGUJqQA4a60N6o0lN5J8RDckyHRd6bxp8Xm+d3FD3Kk1s0V+EdGPNzFTG92jTdYa4nGlalp5XNTrSRHMAQIxiC0++1wNaaXc+njTeS/EPJkyRoJIFACfhDiANBXj4XcVcchvrBGeY/iNO5RQZaXH9k00rhvgwqAPI9NSpTIdndHCxj2lpbUUJBNK4HAkJt/USsJToKZiSy8DAkbQkDiCb30axtCPfBrG0KoWgk3xrG1GCgMI0SCKNEgjARARhqU1ifiiQcr2Igu6aHAqPBRWbWqzvjcWuGPMQQecEaVcdz6D3ueTW9rOy2vtqqWqcOAugAACowGPGWivMFouY9kLbHESP2he/qLiG/dDVvGEg6NIMakDEkb0pgrecbrsQ+t4AlZcK4LS8/HUjp8yQ7QAPNZxE2rikahN060Lp1p8RpxsKrUcoaVMZpRk2uHmvu+44ea5TAKHBWDMqxfrF7ksd5DzUwq02puA6U3E1deUGUDelIgj0LOM64M4BSzWg/Ru8FmV1alnWylktB+ZTaQFmIGJWoG7nRsQ3vo2J6iFFQzvfRsQDOhPURUQJDnDj7yj3x/KPaclURUQDfn8o9tyUbXIPjv8A5j/VJokuHEhq3ZnSlzZLxJIdpJJ4m6+tWGQKs5iGrpW6rp2h39Kt07NCxYpiEaVVM67bLFPdY4gFjXUo041cDpHMrlBHiqrn3Z6PhdrY4dkg+0kgr4yzP8oexH6I/dufl/cZ6LnfDTjSLi0Ov3cm5X3Geis2a9pLwHONXG809RqMOiipMjVacy34uGp7T2gB7KWIuF1C6uoRJQhWcNUW35WmZNJEADdeWgUJJri0UGk0IXc2O3UDt7Zj9IyvXwsEjOeBkc5fdIc4Mkv46RwcDWgPBGPMNadsdqkoOE2rqGh4Tg3ENrSmo1GC6SIjLRli0MeY3hrSKVpU6QDga6irjm9IXX2k10EY15j5Kh5ee50oe4AEtpQVrwScSDorVW7NSXhRHlNLD+eloUsFqMeChJ2UcQrKI1HWqy1dVLBkZsjhQ8E8ZF+MdWlbNkuyCOGGOlLkbG01UaKrG8kNc+aGJp/aSMYacYc9oNepbwWKo5DGi3tdZYkliDN90h9Kj5rG7XknuVAi0lXTdHkrK4fSNHZZQ96pUGtZajqjcNRT7HDUe71XMCE4x/P3K63jpOIoAcehW7MWKs0h1Rnve1U9slFedzRl51pdqDBtLv6VpmxOZVjxYOlFZocQuzKkfCYOb1S7NFiFjGUDnsylitHQ38QWUDSVr2f7aWGbnLB94LHZdJVhD1UAVzEoVVHVVCq5aoVQdVURK5qoIOhJccQmao26UVb9z8e/SjW1h/EPNXu1Q6FQdz1/60G8png9o8ytMtcWA6fIqYVHWePFV/P6GkcLtT3M7Ta+wrXDHioXdDs9bJe+TlY7beZ7akSM5kcPyE0gZOlIvI3gpRgpzM1/vkg4yxrh9hxHtKDfoUrmi+loYOUHs7r3sqpY1hsdcdeKVvSdsIrGw8wGzDyXRvaYyoW6HDd/R5QSKX2VBOnguA7nbFV7Leab7cTTB2ONTU0vDDTo/wCVoefllLrI5wxMT2P4tBNw6frrP43OoOERzYYKq5rSTQNoRdJ0kkknEk8WxWbNWbgtPIcDs/uCq3aJaVBNScfgjSpjNKSr3t1iuw/3KI1drUl8SGTDeijPzadnDyXSWK4jGNzyzl+ULMOJpe93Q1jiPvXVttxZXuQWS9ap5fk4bvXI8U7o3bVrNEhTJYiuJ8hNzOutc7kgnYKpgxLPqWs1dbpn7XCirMIwUznU732nJjaOslxPkomILDpxhxicCDervS9neo2Jxw2eIWj7lUXvVpfrcxvZDz7QWbOK1Tcqi/VZTrmPdGw+a1xZ5eJvKDPfG9Cfs7EVsb750D0XRA1VyVfdKwsL+d8Y+8scl0rYt1L/ACJ55Y/ErHJDiVP1qeEoIqoqqg0EEKIAgjDUC1ASNmlEUbSgtmZ4uW1gGi64e35BazaY+D0EeNFjeZ7qWmD6z29RjNO8ra521aeo96Q5OCOPFR+e9nvWG0/Na1/Ye13gCphjcU1l+z37LamcqGUddw0RGFoXUTXI7yy6kvGC6shy3JoXapGDqcbp7iuZyRE4gkjSMR0g4IN3yNjHTkkjz8133FHZvSBzSRocGvHQR/wpa6txxqOyzZN8gnjpi6NwHTSre8BZCXYV5qrcAFiOVWCKWaLRvcj2U5muIHcpyahkRBxBcu3N99ydo1m75DxKj99AFUqKbhtcNYI68FkrZc33VY5vJdXqI9QVK3VBZuy1cNUjaj8Q7qqw0XSMqPuSQsMVplZHcvSNj+E81uNvaXE/KK+0VV3L7NcyfESMZXSSbXlo7mhWslCkELiyy+7BMfo3DaKDxXeFEZ0vpZ3DlFrfvA+yrUYbnG6s8vMWjY1vnVcDE9lSS9LIdcjtl40TWpcXficDjzbAjvHm2BJCUjQVP5AWx7mkdLCw8p7zsut9lY4Ftu59HdsFn5zIeoyvp3UWuHrHPx22ge+FdUDVzO+G788ZXXGMFrPrkpu6uf1No1ys7qrHZdJWu7rZ/V4OeX2VkU+kqX1qeG0EEVVQaUEmqK8oHQUKpAcivIgygEVUGlFT2a76Wmzn6Vo7VGrdBiwc7Qe5YLkg3ZIXapInbH/2C3qBvvY6E4rz/DDV0mK8C3lAjbgmGhdbFrGHnQsLeCdLeCekYFJqdakMuQXbTamcmeYdW+Op3LiuH8kLm7kgpLTwk5c6NoTTsD1qDZMxJ70MB1xXOtnBP4CrZRZ/uaz+9AfJyub2gHe2VoYC68fHHl6TRZJn3EY7dNQNpIGSD3tlcWgHEjHhNcteos53VbLSSzS0+Ex8ZP1CHD8bkpFGltDxShFP9OP0RukcT4cFo8AkltaJ1jQB1rDTR80p/e4HV+CbvVWn4SFeKLNMypaxvZqIO3DwAWlQPvNa7WAVuMOXNmx71ZLJEdLIYwfrXQXd5KkS1KASXKgrqrme0t2Jn1i/stPqrIqRulzUiIroikPb4I8FL4RjLjUjan4yUz8bqTocRoK5Ox5rzyjtSt8Os7Smd8OsoB51opUhJ0rd80GUsVkH0YPaqfNYQDiKr0BkCO7ZbK3kwxD7jVvgzz8Mj4biu6IYLgiPCKkI9C1HJQt18+8WfnlP4VkMxxWsbsTve7IPpHn7iyiY9yzfWp4aKJGUVFQqqSjRUUCmokAhRARKDUpjap5lnqaAEqWkjqsspbR3Jo7Yar0NY/gN6/ErztGMOor0JkqSsTDrAO0A+avFefhIC62aFy6+krpjOAW2GJZ9RXcoWsaKva7txsd7SgwRr7neite6hFS3uPykUT/xM9hVQBcr67TwDTX3FNShOpEgUVedzaf9uzVvcg6eED4NWstxxWKbnc1LTd4nxPHWHNcO4FbNY3VYw81NmHkunHxy5+nlT91OzXrG2T5GZhPQ8GPxc1XFcWW8nNtMEsD/AIMgHUQQ4HaAtMsCv8570uKQVodVONac3c4s3LdX7X9SUNzay6b0naPqsrqtZkzUmun44I8/ZG1ark6TgAE6Kjz81VbLmZDDIyRkklWEHioaGtCrE1pGASImUCjRLSEuWabqU2Eg5omfevnuqtLcVkG6dNV555iOw0tWeXjXH1QW/CKXRIh0ldLZCONc3UgBHdS98drO0ob47lHtFFJC9DwcFjRyWtGxoXn6yR3pGN5TgNpovQc+h/Wt8GP+n4j4dJXezQuCAaeldwOC1HNne68eBZfrv/Csqk0rUd113+WGok7Q70WWzHErP63+CREokStqDRIIUUB1RgpNEYBQORaVO5PiBY2oHHxDWVBRDEKSitTmigI2Aqb9anhDGUPRh+di3XNiW9ZbO7XFGessbVYSx5Jx4zU962DNTKrG2aFlHG7GzEBtDhxVISXKcvE+7SelPxOwCiJcqipIY7HXdCEeWKfuz2h6LXaOeKTutxUtFmk5cRb2Hk//AEVJBbrd2R6q+7pMgmjhloW7y5zcTWokujuLRtVBDVi+uvHwZLefYPVNvpxJy6kOao0ksz5btrs5+ku9tpZ5hbnk13ApqJ9fNYBkiS5PE46GSRu7LwVseT8sE3roGFNNefnWuNxz5xaQicoX3Uk+bsPqkOynJrHZWu8YxLxpagxlN4JxHZCUcqSawPshTtFxJzBAFQ02UX8ruao92Xy0kXm9dPVS8ouLL7pP+bsPqknKL9Y7KjTXWkmusp9RIut7+N3cFkGdlvdLvd7Tw3k6yaf3Wj2gEtcMcRTSfJVifN8H4serGN7zte8plq7jPoNC6G01jaFcxm/TR3Rtb4JYyF893UQE6r3Uo01jaEQYeIK5yZLjb8KVw+2O4UquGbehg10jzzuAHr3J1XujcgwO/SIKtwvXq00U0V1YjjWlPyi46ZHY/PPqs8eRXEgV1u9SkGSMaXM7TUzEvLV+NqYNLm9pqadlGLRvrMPnt9VR2yx8tvUR5JYc3iqehrj5KYmuvPaUSmIRkPu4m64EfG4+tVUZLccTQfab5KxtHFckPRDKfAJbGO+Rl/8AHm/pVw1XW5H+cNqcGR28sbD6Kw7xIdEMv8t48UYscvyMnZVRAjI7OX9x/oljI8fKPZKnW2OfRvL/APbHiUQydP8AIO7cX9SCE9yotbuyg3JsWt2weqnRke0H90OuRvlVF7g2niYwH/VPkxBDDJ0fztjfVL/QGanfdCnf8P2jXGet47qFLbm5aD8aMfZkPooarrsmtrUXh1ghTuTcqmFjWBgcGta0VfQ8EU1LpbmvaPlGfynH2k6zNSXjmA6IKeL0xdNHOJ/ybe2T5Iv8RSchm1y6v8KnjtB/lxjxqiObLeO1uHVZx4hMTUTlXKLp4zE9rQ0kHC9XAgjGvMottiaOIbX+qtLs24eO1uH2rMPZSRm/ZhptZP8AGgHg1F1Wf0RvJbtk/qQ/Q28lv+56qzOyRYxptG20+iScnZPGmf8A9mXyKuJqvMsLK/EB+q/0U5k/fWkltqiF7SCQe40onW2bJfHNX+Paj3VSxHknlNP25j4lMhqShZaDplicOZkniJF2MiOFdP2vMqOsWULBBXemlt6lS2F+NK0qePSdq6TnJZuJsx6LO8p8R1bwNQR7wNQ2BcLs44fkbRh9ER5pBy80/Bs8x/ljxU+L9SO9DUEW9KMiy8XCrbM89MsY0bUsZXk/7U/za+ynwWExIb2NYHS4BEgqEvDBpkZ2x5rme6EaZWD+IxGgpoYdPZuOZnXIEwbdYvl4+0UEE7VZNcsxya43nGJxOsFx2FJY7Jo0QsPRZmnyRoLN5VesOi3WJuiA9VlA8k63K0HxbO8/wHD2UEE7VnChlkcVnk+6PFNPy87R+jSH7bEEE7VZCvdSUiosruuZnkFzy5UnP/TAdMxPgEEE7UIFstRGEEWrGSX0Sd+thH7KAfakKCCdqBDJbHcUTcMCWE9xKANtqBvkY10gB9pBBXaDDLXoM46RCzBBsdqoK2ggk0wazV0IIKbQuSyz1/zcv3B5JpuTZjptU3aHkEEFNBDI5dUumlJ+ufJJiyBHgXOecOOR+najQVC25ChBBLSelzinJcjwH923YEEECYsjwY+9N04cEaE4zJEA/dM7IQQQHHk2EHCNnZCcFjjBBDGinzQjQQONiYK4DHmCY/RmVvXRXoCCCo6KDUhcFCKYFEgoE3WjHAdJSN/jGl7etzUEEHLY5Y21F9mkkG83jNV1C1s1+KNBB//Z",
    url1: `${window.location.origin}/location/biotech-dept`,
    url2: "https://www.google.com/maps/place/Department+of+Bioengineering+and+Biotechnology/@23.4116602,85.4396876,18z/data=!4m6!3m5!1s0x39f4fcaa66fa39f9:0x8925d4e6ed8b25db!8m2!3d23.4100605!4d85.440596!16s%2Fg%2F11g9vp_np7?entry=ttu&g_ep=EgoyMDI1MDUyNi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: "maths-dept",
    map_id: 10,
    name: "Department of Mathematics",
    category: "Academic",
    description: "The Department of Mathematics at BIT Mesra provides a strong foundation in mathematical theory and its applications in science, technology, and engineering. With a focus on both pure and applied mathematics, it supports cutting-edge research and fosters analytical thinking across disciplines.",
    address: "",
    hours: "",
    image: "https://nsmiia.bitmesra.ac.in/images/branding/maths2.jpg",
    position: { x: 65, y: 45 },
    phone: "",
    website: "https://bitmesra.ac.in/edudepartment/1/168",
    events: [],
    highlights: [
      {
        title: "Academic Integration",
        description: "Supports core curriculum across engineering and science departments."
      },
      {
        title: "Advanced Computing Tools",
        description: "Equipped with software like MATLAB, Mathematica, and R for simulation and analysis."
      }
      
    ],
    sections: [
      {
        title: "Lecture Halls",
        content: "The Department of Mathematics features spacious, well-ventilated lecture halls that provide a conducive environment for interactive learning, seminars, and advanced mathematical discussions.",
        image: "https://files.yappe.in/place/full/lecture-hall-1-2-6902981.webp"
      },
      {
        title: "Computational Lab",
        content: "Modern lab with mathematical software for numerical computing, simulations, and algorithm development.",
        image: "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1709221439/catalog/1644992837384241152/awd7bhcpos7qiyxxt9zz.webp"
      }
    ],
    lat: 23.41159154466892,
    lng: 85.43957134969997,
    detail: "Fostering analytical thinking through rigorous mathematical research and education",
    img: "https://nsmiia.bitmesra.ac.in/images/branding/maths2.jpg",
    url1: `${window.location.origin}/location/maths-dept`,
    url2: "https://www.google.com/maps/place/Department+of+Mathematics/@23.4110205,85.439511,19z/data=!4m6!3m5!1s0x39f4fb557d0c157b:0xc85c544c2b01b8bc!8m2!3d23.411501!4d85.4395916!16s%2Fg%2F1262j05h1?entry=ttu&g_ep=EgoyMDI1MDUyNi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: "ncc-ground",
    map_id: 11,
    name: "NCC Ground",
    category: "Fitness",
    description: "The NCC Ground at BIT Mesra is a dedicated space for training cadets of the National Cadet Corps under the 3 Jharkhand Composite Technical Company (CTC). It plays a key role in nurturing discipline, leadership, and national service among students through various drills, parades, and national-level events.",
    address: "",
    hours: "",
    image: "/img/locations/ncc_ground.jpeg",
    position: { x: 65, y: 45 },
    phone: "",
    website: "",
    events: [],
    highlights: [
      {
        title: "Dedicated Training Area",
        description: "Purpose-built ground for NCC training activities including marching drills, obstacle training, and ceremonial parades."
      },
      {
        title: "National Integration Camp Host",
        description: "Hosted over 700 cadets and 25 officers during national camps, promoting unity and cultural exchange."
      }
      
    ],
    sections: [
      {
        title: "Training and Parades",
        content: "Regular training sessions including drills, physical fitness, and leadership tasks are conducted throughout the year to develop discipline and teamwork.",
        image: "https://www.kluniversity.in/ncc/assets/img/hero/slide-03.jpg"
      },
      {
        title: "Technology Meets Defense",
        content: "BIT Mesra cadets integrate academic knowledge with NCC values—demonstrated by national-level exhibitions of technological innovations for defense.",
        image: ""
      }
    ],
    lat: 23.41086807877285,
    lng: 85.44145168230644,
    detail: "A vibrant space for discipline, training, and leadership development",
    img: "/img/locations/ncc_ground.jpeg",
    url1: `${window.location.origin}/location/ncc-ground`,
    url2: "https://www.google.com/maps/place/NCC+Ground/@23.4110453,85.4405746,18z/data=!4m6!3m5!1s0x39f4fcaa0cd7ad95:0xba2d92761f79099d!8m2!3d23.4107992!4d85.441457!16s%2Fg%2F1v2pnmkm?entry=ttu&g_ep=EgoyMDI1MDUyNy4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: "sports-complex",
    map_id: 12,
    name: "Sports Complex",
    category: "Fitness",
    description: "Spanning approximately 24 acres, the Sports Complex at BIT Mesra is a cornerstone of campus life, promoting physical fitness, mental well-being, and community engagement. It offers state-of-the-art facilities that cater to a wide range of athletic and recreational activities, accommodating both casual enthusiasts and competitive athletes.",
    address: "",
    hours: "",
    image: "https://files.yappe.in/place/full/sports-complex-bit-mesra-9545032.webp",
    position: { x: 65, y: 45 },
    phone: "",
    website: "",
    events: [],
    highlights: [
      {
        title: "Multi-Gym Facility",
        description: "A 1,400 sq. ft. area housing 'A' class fitness equipment, supporting strength training and overall physical development."
      },
      {
        title: "Indoor Sports Amenities",
        description: "Features indoor badminton courts, table tennis areas, chess rooms, and a multi-purpose gymnasium equipped with modern fitness equipment."
      },
      {
        title: "Comprehensive Outdoor Facilities",
        description: "Includes a 400-meter athletic track, cricket ground, football and hockey fields, basketball and volleyball courts, lawn tennis courts, and dedicated spaces for kabaddi, kho-kho, handball, and throwball."
      },
      {
        title: "Gymnasium Hall",
        description: "An 80 ft x 50 ft hall utilized for physical training and games classes, especially during monsoon and spring sessions."
      }
      
    ],
    sections: [
      {
        title: "Outdoor Sports Grounds",
        content: "Dedicated spaces for major sports like cricket, football, hockey, and athletics, facilitating inter-college tournaments and regular practice sessions.",
        image: "https://bitmesra.ac.in/UploadedDocuments/admindeoghar/images/s1(1).jpg"
      },
      {
        title: "Physical Education Programs",
        content: "Structured physical training classes and recreational activities are integrated into the student curriculum, promoting a balanced lifestyle.",
        image: "https://images.careerindia.com/college-photos/1121/indoor-stadium_1496734447.jpg"
      }
    ],
    lat: 23.424649811514,
    lng: 85.43399494357773,
    detail: "State-of-the-art facilities for fitness, games, and athletics",
    img: "https://files.yappe.in/place/full/sports-complex-bit-mesra-9545032.webp",
    url1: `${window.location.origin}/location/sports-complex`,
    url2: "https://www.google.com/maps/place/Sports+Complex,+BIT+Mesra/@23.4246252,85.4338206,18z/data=!4m14!1m7!3m6!1s0x39f4fb002cfa813d:0xff0fd72f1f591fb8!2sR+%26+D+Building!8m2!3d23.4130805!4d85.4416522!16s%2Fg%2F11m6b_jj8y!3m5!1s0x39f4e4b243f24739:0x9f1754928bf21ded!8m2!3d23.4245839!4d85.4339948!16s%2Fg%2F11clwdjgf6?entry=ttu&g_ep=EgoyMDI1MDUyNi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: "management-dept",
    map_id: 13,
    name: "Department Of Hotel Management & Catering Technology",
    category: "Academic",
    description: "Established in 2003, the Department of Hotel Management at BIT Mesra offers a 4-year BHMCT program blending hotel operations with management, ensuring industry-relevant, balanced training.",
    address: "",
    hours: "",
    image: "https://bitmesra.ac.in/UploadedDocuments/user_adminhmct/Gallery/_large_16320238300_Food%20Festival848fbbb3-0d34-4bc2-91d1-de8728562ab4.jpg",
    position: { x: 65, y: 45 },
    phone: "",
    website: "",
    events: [],
    highlights: [
      {
        title: "Experienced Faculty",
        description: "A blend of academicians and industry professionals guide students, bringing real-world insights into the classroom."
      },
      {
        title: "Industry-Aligned Curriculum",
        description: "The BHMCT program is approved by AICTE and follows a choice-based credit system (CBCS), emphasizing both theoretical knowledge and practical skills."
      }
      
    ],
    sections: [
      {
        title: "State-of-the-Art Facilities",
        content: "The department is equipped with modern training kitchens, a housekeeping laboratory, front office laboratory, computer laboratory, and an internet center. These facilities ensure practical training in a professional hotel environment.",
        image: "https://bitmesra.ac.in/UploadedDocuments/user_adminhmct/Gallery/_large_1632023105036_100_138121d1747e-9da7-431e-9c49-16a2abfce503.jpg"
      }
    ],
    lat: 23.41661371224998,
    lng: 85.43572552213766,
    detail: "Industry-focused hospitality education blending management and practical skills",
    img: "https://bitmesra.ac.in/UploadedDocuments/user_adminhmct/Gallery/_large_16320238300_Food%20Festival848fbbb3-0d34-4bc2-91d1-de8728562ab4.jpg",
    url1: `${window.location.origin}/location/management-dept`,
    url2: "https://www.google.com/maps/place/Department+Of+Hotel+Management,+BIT,+Mesra/@23.4161756,85.4352615,18z/data=!4m14!1m7!3m6!1s0x39f4fb002cfa813d:0xff0fd72f1f591fb8!2sR+%26+D+Building!8m2!3d23.4130805!4d85.4416522!16s%2Fg%2F11m6b_jj8y!3m5!1s0x39f4e4ab6519555f:0x74fdcf32553b37c0!8m2!3d23.41654!4d85.4357238!16s%2Fg%2F11ckr5fr2z?entry=ttu&g_ep=EgoyMDI1MDUyNi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: "dispensary",
    map_id: 14,
    name: "Dispensary",
    category: "Medical",
    description: "The BIT Mesra Dispensary is a fully functional 24×7 health care center catering to students, faculty, staff, their families, and residents of nearby villages. It operates round-the-clock, including Sundays and holidays, ensuring comprehensive medical support on campus.",
    address: "",
    hours: "24×7",
    image: "/img/locations/dispensary.jpeg",
    position: { x: 65, y: 45 },
    phone: "0651 227 6009",
    website: "",
    events: [],
    highlights: [
      {
        title: "24×7 Medical Services",
        description: "Open all year, including Sundays and holidays, providing continuous OPD, IPD, and emergency care."
      },
      {
        title: "Specialist Consultations",
        description: "Weekly visits by specialists in dentistry, physiotherapy, ophthalmology, dermatology, and gynecology."
      },
      {
        title: "Ambulance Services",
        description: "Equipped with 4 ambulances available in all three shifts, each fitted with oxygen cylinders and first aid kits."
      }
      
    ],
    sections: [
      {
        title: "Inpatient & Outpatient Care",
        content: "The dispensary offers both inpatient and outpatient services, handling minor ailments and emergencies on-site.",
        image: "https://content.jdmagicbox.com/v2/comp/ranchi/p9/0651px651.x651.211008190517.e3p9/catalogue/rh-ambulance-services-station-road-ranchi-ambulance-services-ticubuod2u.jpg"
      },
      {
        title: "Referral Services",
        content: "For specialized treatment or hospitalization, patients are referred to multi-specialty hospitals like Rajendra Institute of Medical Sciences and Apollo Hospital in Ranchi.",
        image: "/img/locations/dispensary_referral.jpg"
      }
    ],
    lat: 23.415496026871597,
    lng: 85.43537125522221,
    detail: "Comprehensive healthcare and medical support center for campus community",
    img: "/img/locations/dispensary.jpeg",
    url1: `${window.location.origin}/location/dispensary`,
    url2: "https://www.google.com/maps/place/BIT+Dispensary/@23.4151859,85.4353042,18z/data=!4m14!1m7!3m6!1s0x39f4fb002cfa813d:0xff0fd72f1f591fb8!2sR+%26+D+Building!8m2!3d23.4130805!4d85.4416522!16s%2Fg%2F11m6b_jj8y!3m5!1s0x39f4e4ab0c3f3ccf:0x53fafe7d6f0af59d!8m2!3d23.4153981!4d85.4353781!16s%2Fg%2F11bw673h_x?entry=ttu&g_ep=EgoyMDI1MDUyNi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: "h1",
    map_id: 15,
    name: "Hostel 1",
    category: "Accommodation",
    description: "Boys Hostel",
    address: "",
    hours: "",
    image: "/img/locations/h1.jpeg",
    position: { x: 65, y: 45 },
    phone: "",
    website: "",
    events: [],
    highlights: [
      {
        title: "Houses first-year UG boys.",
        description: ""
      },
      {
        title: "Spacious rooms with basic furnishings.",
        description: ""
      },
      {
        title: "Common room, mess, and indoor games facilities.",
        description: ""
      },
      {
        title: "Wi-Fi, study area, and recreation facilities.",
        description: ""
      },
      {
        title: "Proximity to academic blocks.",
        description: ""
      }
    ],
    sections: [],
    lat: 23.41431350472118,
    lng: 85.44017628365283,
    detail: "Boys Hostel",
    img: "/img/locations/h1.jpeg",
    url1: `${window.location.origin}/location/h1`,
    url2: "https://www.google.com/maps/place/Hostel+1/@23.4133585,85.438229,17.45z/data=!4m14!1m7!3m6!1s0x39f4fb002cfa813d:0xff0fd72f1f591fb8!2sR+%26+D+Building!8m2!3d23.4130805!4d85.4416522!16s%2Fg%2F11m6b_jj8y!3m5!1s0x39f4fb00707791bf:0x76946b88d1ef25d2!8m2!3d23.4141519!4d85.4402082!16s%2Fg%2F11m5yhgktw?entry=ttu&g_ep=EgoyMDI1MDUyNi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: "h2",
    map_id: 16,
    name: "Hostel 2",
    category: "Accommodation",
    description: "Boys Hostel",
    address: "",
    hours: "",
    image: "https://akm-img-a-in.tosshub.com/sites/resources/campus/prod/img/hostel/2023/7/hostel15871c7c9ecd511647591549.jpg",
    position: { x: 65, y: 45 },
    phone: "",
    website: "",
    events: [],
    highlights: [
      {
        title: "Houses first-year UG boys.",
        description: ""
      },
      {
        title: "Spacious rooms with basic furnishings.",
        description: ""
      },
      {
        title: "Common room, mess, and indoor games facilities.",
        description: ""
      },
      {
        title: "Wi-Fi, study area, and recreation facilities.",
        description: ""
      },
      {
        title: "Proximity to academic blocks.",
        description: ""
      }
    ],
    sections: [],
    lat: 23.4137916353681,
    lng: 85.43855622543049,
    detail: "Boys Hostel",
    img: "https://akm-img-a-in.tosshub.com/sites/resources/campus/prod/img/hostel/2023/7/hostel15871c7c9ecd511647591549.jpg",
    url1: `${window.location.origin}/location/h2`,
    url2: "https://www.google.com/maps/place/Hostel+2/@23.413004,85.4360725,17z/data=!4m14!1m7!3m6!1s0x39f4fb002cfa813d:0xff0fd72f1f591fb8!2sR+%26+D+Building!8m2!3d23.4130805!4d85.4416522!16s%2Fg%2F11m6b_jj8y!3m5!1s0x39f4fb005df49383:0xa26b770e85bb2c36!8m2!3d23.413608!4d85.438507!16s%2Fg%2F11x7qjr4sw?entry=ttu&g_ep=EgoyMDI1MDUyNi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: "h3",
    map_id: 17,
    name: "Hostel 3",
    category: "Accommodation",
    description: "Boys Hostel",
    address: "",
    hours: "",
    image: "",
    position: { x: 65, y: 45 },
    phone: "",
    website: "",
    events: [],
    highlights: [
      {
        title: "Houses first-year UG boys.",
        description: ""
      },
      {
        title: "Spacious rooms with basic furnishings.",
        description: ""
      },
      {
        title: "Common room, mess, and indoor games facilities.",
        description: ""
      },
      {
        title: "Wi-Fi, study area, and recreation facilities.",
        description: ""
      },
      {
        title: "Proximity to academic blocks.",
        description: ""
      }
    ],
    sections: [],
    lat: 23.416081932883333,
    lng: 85.43953292833308,
    detail: "Boys Hostel",    
    img: "",
    url1: `${window.location.origin}/location/h3`,
    url2: "https://www.google.com/maps/place/Hostel+3/@23.4154223,85.4385271,18.33z/data=!4m6!3m5!1s0x39f4fbf4f55de955:0x23c2777ce82ebcba!8m2!3d23.4160016!4d85.4395134!16s%2Fg%2F11tg095x0_?entry=ttu&g_ep=EgoyMDI1MDUyNi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: "h4",
    map_id: 18,
    name: "Hostel 4",
    category: "Accommodation",
    description: "Boys Hostel",
    address: "",
    hours: "",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npk-Pat8fa8l2DVaTN1gRdvS2RlU8t5k2YTOWBFx6-vsAh51U_rcI4e5Bn-IU8_xnGyvqxrIBxq3oawx_6xbsqMxsvnVYuH_aG4MIdLlNxETLyU3ayCztQ5703Ivl2B2KQHWgHq=s1360-w1360-h1020-rw",
    position: { x: 65, y: 45 },
    phone: "",
    website: "",
    events: [],
    highlights: [
      {
        title: "Houses first-year UG boys.",
        description: ""
      },
      {
        title: "Spacious rooms with basic furnishings.",
        description: ""
      },
      {
        title: "Common room, mess, and indoor games facilities.",
        description: ""
      },
      {
        title: "Wi-Fi, study area, and recreation facilities.",
        description: ""
      },
      {
        title: "Proximity to academic blocks.",
        description: ""
      }
    ],
    sections: [],
    lat: 23.415685253583035,
    lng: 85.43799612028879,
    detail: "Boys Hostel",    
    img: "",
    url1: `${window.location.origin}/location/h4`,
    url2: "https://www.google.com/maps/place/Hostel-4+BIT+MESRA/@23.415065,85.4376072,18.33z/data=!4m6!3m5!1s0x39f4fb3ce16ada83:0x2c2b4a4b4d1def6a!8m2!3d23.4155867!4d85.4379342!16s%2Fg%2F11k50j7hln?entry=ttu&g_ep=EgoyMDI1MDUyNi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: "h5",
    map_id: 19,
    name: "Hostel 5",
    category: "Accommodation",
    description: "Boys Hostel",
    address: "",
    hours: "",
    image: "/img/locations/h5.jpeg",
    position: { x: 65, y: 45 },
    phone: "",
    website: "",
    events: [],
    highlights: [
      {
        title: "Houses PG and Ph.D. boys.",
        description: ""
      },
      {
        title: "Single rooms with fully furnished essential amenities.",
        description: ""
      },
      {
        title: "High-speed internet available in all rooms.",
        description: ""
      },
      {
        title: "Student-run mess serving 4 meals daily.",
        description: ""
      },
      {
        title: "Common room with indoor games and reading space.",
        description: ""
      }
    ],
    sections: [],
    lat: 23.420764285760665,
    lng: 85.43443262888432,
    detail: "Boys Hostel",    
    img: "/img/locations/h5.jpeg",
    url1: `${window.location.origin}/location/h5`,
    url2: "https://www.google.com/maps/place/Hostel+5/@23.4208332,85.4339847,18z/data=!4m6!3m5!1s0x39f4e5006146a5a1:0xb35585406b0226b8!8m2!3d23.4206779!4d85.4344294!16s%2Fg%2F11x7qk4_z1?entry=ttu&g_ep=EgoyMDI1MDUyNy4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: "h6",
    map_id: 20,
    name: "Hostel 6",
    category: "Accommodation",
    description: "Boys Hostel",
    address: "",
    hours: "",
    image: "/img/locations/h6.jpeg",
    position: { x: 65, y: 45 },
    phone: "",
    website: "",
    events: [],
    highlights: [
      {
        title: "Houses second-year UG boys.",
        description: ""
      },
      {
        title: "Modern infrastructure with well-ventilated single rooms.",
        description: ""
      },
      {
        title: "Facilities include a common room, reading area, and indoor games.",
        description: ""
      },
      {
        title: "Spacious rooms with LAN connectivity and Wi-Fi facility",
        description: ""
      },
      {
        title: "Dedicated mess hall serving diverse and nutritious meals.",
        description: ""
      }
    ],
    sections: [],
    lat: 23.422904102641308,
    lng: 85.43328503018198,
    detail: "Boys Hostel",    
    img: "/img/locations/h6.jpeg",
    url1: `${window.location.origin}/location/h6`,
    url2: "https://www.google.com/maps/place/Hostel+6/@23.4228155,85.4322041,18z/data=!4m6!3m5!1s0x39f4e50048d061bd:0xe8cc2bdfd2c5686!8m2!3d23.4227972!4d85.4332346!16s%2Fg%2F11m6b_r8k7?entry=ttu&g_ep=EgoyMDI1MDUyNy4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: "h7",
    map_id: 21,
    name: "Hostel 7",
    category: "Accommodation",
    description: "Boys Hostel",
    address: "",
    hours: "",
    image: "/img/locations/h7.jpeg",
    position: { x: 65, y: 45 },
    phone: "",
    website: "",
    events: [],
    highlights: [
      {
        title: "Houses second-year UG boys.",
        description: ""
      },
      {
        title: "Modern infrastructure with well-ventilated single rooms.",
        description: ""
      },
      {
        title: "Facilities include a common room, reading area, and indoor games.",
        description: ""
      },
      {
        title: "Spacious rooms with LAN connectivity and Wi-Fi facility",
        description: ""
      },
      {
        title: "Dedicated mess hall serving diverse and nutritious meals.",
        description: ""
      }
    ],
    sections: [],
    lat: 23.424591170619692,
    lng: 85.43235473049994,
    detail: "Boys Hostel",    
    img: "/img/locations/h7.jpeg",
    url1: `${window.location.origin}/location/h7`,
    url2: "https://maps.app.goo.gl/MATmr2q6AucHN1i58"
  },
  {
    id: "h8",
    map_id: 22,
    name: "Hostel 8",
    category: "Accommodation",
    description: "Girls Hostel",
    address: "",
    hours: "",
    image: "",
    position: { x: 65, y: 45 },
    phone: "",
    website: "",
    events: [],
    highlights: [
      {
        title: "Double-sharing rooms with essential furnishings",
        description: ""
      },
      {
        title: "LAN and Wi-Fi access in rooms",
        description: ""
      },
      {
        title: "Student-managed mess with 4 meals/day",
        description: ""
      },
      {
        title: "Common areas: Reading rooms, indoor games, TV lounges",
        description: ""
      },
      {
        title: "24×7 security with curfew protocols",
        description: ""
      }
    ],
    sections: [],
    lat: 23.415623306596213, 
    lng: 85.44114,
    detail: "Girls Hostel",    
    img: "",
    url1: `${window.location.origin}/location/h8`,
    url2: "https://maps.app.goo.gl/bDgqebC5dCSmtRkn9"
  },
  {
    id: "h9",
    map_id: 23,
    name: "Hostel 9",
    category: "Accommodation",
    description: "Girls Hostel",
    address: "",
    hours: "",
    image: "",
    position: { x: 65, y: 45 },
    phone: "",
    website: "",
    events: [],
    highlights: [
      {
        title: "Double-sharing rooms with essential furnishings",
        description: ""
      },
      {
        title: "LAN and Wi-Fi access in rooms",
        description: ""
      },
      {
        title: "Student-managed mess with 4 meals/day",
        description: ""
      },
      {
        title: "Common areas: Reading rooms, indoor games, TV lounges",
        description: ""
      },
      {
        title: "24×7 security with curfew protocols",
        description: ""
      }
    ],
    sections: [],
    lat: 23.416736987130452, 
    lng: 85.44307426945687,
    detail: "Girls Hostel",    
    img: "",
    url1: `${window.location.origin}/location/h9`,
    url2: "https://www.google.com/maps/place/Hostel+9/@23.41647,85.4431003,18.97z/data=!4m6!3m5!1s0x39f4fb003117b77d:0x25676aaacdb1f103!8m2!3d23.4166875!4d85.4430757!16s%2Fg%2F11w1f2hr2n?entry=ttu&g_ep=EgoyMDI1MDUyNy4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: "h10",
    map_id: 24,
    name: "Hostel 10",
    category: "Accommodation",
    description: "Boys Hostel",
    address: "",
    hours: "",
    image: "/img/locations/h10.jpeg",
    position: { x: 65, y: 45 },
    phone: "",
    website: "",
    events: [],
    highlights: [
      {
        title: "Houses third or fourth year UG boys",
        description: ""
      },
      {
        title: "Single occupancy rooms with essential furnishings.",
        description: ""
      },
      {
        title: "High-speed LAN access and Wi-Fi facility.",
        description: ""
      },
      {
        title: "Student-managed mess offering four nutritious meals daily.",
        description: ""
      },
      {
        title: "Common rooms equipped with indoor games and reading materials.",
        description: ""
      }
    ],
    sections: [],
    lat: 23.41917417817953, 
    lng: 85.43532134863915,
    detail: "Boys Hostel",    
    img: "/img/locations/h10.jpeg",
    url1: `${window.location.origin}/location/h10`,
    url2: "https://maps.app.goo.gl/MudCPUUfCk5h7825A"
  },
  {
    id: "h11",
    map_id: 25,
    name: "Hostel 11",
    category: "Accommodation",
    description: "Boys Hostel",
    address: "",
    hours: "",
    image: "/img/locations/h11.jpeg",
    position: { x: 65, y: 45 },
    phone: "",
    website: "",
    events: [],
    highlights: [
      {
        title: "Houses third or fourth year UG boys",
        description: ""
      },
      {
        title: "Single occupancy rooms with essential furnishings.",
        description: ""
      },
      {
        title: "High-speed LAN access and Wi-Fi facility.",
        description: ""
      },
      {
        title: "Student-managed mess offering four nutritious meals daily.",
        description: ""
      },
      {
        title: "Common rooms equipped with indoor games and reading materials.",
        description: ""
      }
    ],
    sections: [],
    lat: 23.41815721409701, 
    lng: 85.43570745827114,
    detail: "Boys Hostel",    
    img: "/img/locations/h11.jpeg",
    url1: `${window.location.origin}/location/h11`,
    url2: "https://www.google.com/maps/place/Hostel+11/@23.4186347,85.4358067,18.14z/data=!4m6!3m5!1s0x39f4e500441f8dbb:0x721d36359a3fca06!8m2!3d23.4180565!4d85.4356584!16s%2Fg%2F11m6b_r7ht?entry=ttu&g_ep=EgoyMDI1MDUyNy4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: "h12",
    map_id: 26,
    name: "Hostel 12",
    category: "Accommodation",
    description: "Boys Hostel",
    address: "",
    hours: "",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4no0w29J4USIKdR-5AkFk7cZ_es_x3GCildG7f0iRagLaFa4-cei19GA4C8RqTuaae9I2frLThnSZ_GUiBdYoLFKdjxwY6eqM6z9V125-JzQldFwbzWznf9eOsNuYtpZplHSxoEKwg=s1360-w1360-h1020-rw",
    position: { x: 65, y: 45 },
    phone: "",
    website: "",
    events: [],
    highlights: [
      {
        title: "Houses third or fourth year UG boys",
        description: ""
      },
      {
        title: "Single occupancy rooms with essential furnishings.",
        description: ""
      },
      {
        title: "High-speed LAN access and Wi-Fi facility.",
        description: ""
      },
      {
        title: "Student-managed mess offering four nutritious meals daily.",
        description: ""
      },
      {
        title: "Common rooms equipped with indoor games and reading materials.",
        description: ""
      }
    ],
    sections: [],
    lat: 23.4189555088666, 
    lng: 85.43425638516025,
    detail: "Boys Hostel",    
    img: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4no0w29J4USIKdR-5AkFk7cZ_es_x3GCildG7f0iRagLaFa4-cei19GA4C8RqTuaae9I2frLThnSZ_GUiBdYoLFKdjxwY6eqM6z9V125-JzQldFwbzWznf9eOsNuYtpZplHSxoEKwg=s1360-w1360-h1020-rw",
    url1: `${window.location.origin}/location/h12`,
    url2: "https://www.google.com/maps/place/Hostel+12/@23.4186257,85.4352944,18.14z/data=!4m6!3m5!1s0x39f4e51709627275:0xfe32afb20bc2edf5!8m2!3d23.4188788!4d85.4342553!16s%2Fg%2F11s8fzwz_3?entry=ttu&g_ep=EgoyMDI1MDUyNy4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: "h13",
    map_id: 27,
    name: "Hostel 13",
    category: "Accommodation",
    description: "Boys Hostel",
    address: "",
    hours: "",
    image: "",
    position: { x: 65, y: 45 },
    phone: "",
    website: "",
    events: [],
    highlights: [
      {
        title: "Houses third or fourth year UG boys",
        description: ""
      },
      {
        title: "Single occupancy rooms with essential furnishings.",
        description: ""
      },
      {
        title: "High-speed LAN access and Wi-Fi facility.",
        description: ""
      },
      {
        title: "Student-managed mess offering four nutritious meals daily.",
        description: ""
      },
      {
        title: "Common rooms equipped with indoor games and reading materials.",
        description: ""
      }
    ],
    sections: [],
    lat: 23.417868376535374,
    lng: 85.43462895207571,
    detail: "Boys Hostel",    
    img: "",
    url1: `${window.location.origin}/location/h13`,
    url2: "https://www.google.com/maps/place/Hostel+13/@23.4182228,85.43527,18.14z/data=!4m6!3m5!1s0x39f4e5006145900d:0x487fc55c1b16a1bf!8m2!3d23.417788!4d85.4346!16s%2Fg%2F11x199_tzz?entry=ttu&g_ep=EgoyMDI1MDUyNy4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: "apni-rasoi",
    map_id: 28,
    name: "Apni Rasoi Canteen",
    category: "Dining & Food",
    description: "Apni Rasoi Canteen offers affordable, home-style vegetarian and non-vegetarian meals to students and staff. Known for its hygienic preparation and thali-based meals, it provides a comforting food option close to academic blocks.",
    address: "",
    hours: "",
    image: "/img/locations/apni_rasoi.jpeg",
    position: { x: 65, y: 45 },
    phone: "",
    website: "",
    events: [],
    highlights: [
      {
        title: "Nutritious Meals",
        description: "Serves freshly prepared thalis and snacks."
      },
      {
        title: "Budget Friendly",
        description: "Economical prices ideal for students."
      },
      {
        title: "Student Favorite",
        description: "Popular for its simple, tasty home-cooked flavors."
      }
    ],
    sections: [
      {
        title: "Menu Variety",
        content: "Apni Rasoi offers a wide variety of vegetarian and non-vegetarian dishes, including North and South Indian meals, snacks, and beverages. The diverse menu ensures there's something to satisfy every palate, whether you're looking for a quick bite or a wholesome meal.",
        image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/07/paneer-butter-masala-recipe.jpg"
      }
    ],
    lat: 23.41238890521783,
    lng: 85.44151119400777,
    detail: "Home-style, hygienic veg and non-veg meals.",
    img: "/img/locations/apni_rasoi.jpeg",
    url1: `${window.location.origin}/location/apni-rasoi`,
    url2: "https://www.google.com/maps/place/Apni+Rasoi/@23.4124314,85.4413607,21z/data=!4m14!1m7!3m6!1s0x39f4e5006145900d:0x487fc55c1b16a1bf!2sHostel+13!8m2!3d23.417788!4d85.4346!16s%2Fg%2F11x199_tzz!3m5!1s0x39f4fb55ec956a51:0x16c453fb3e48f182!8m2!3d23.412376!4d85.4415107!16s%2Fg%2F11f2wmfx4d?entry=ttu&g_ep=EgoyMDI1MDUyNy4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: "ic",
    map_id: 29,
    name: "Inner Cooperative (IC)",
    category: "Campus Life",
    description: "The Inner Cooperative (IC) at BIT Mesra is a central campus hub that blends essential student services with casual dining.",
    address: "",
    hours: "",
    image: "/img/locations/ic_2.jpeg",
    position: { x: 65, y: 45 },
    phone: "",
    website: "",
    events: [],
    highlights: [
      {
        title: "Essential Services",
        description: "Houses a grocery store, bookshop, medical store, ATM, and a post office—making it a one-stop convenience center for students and staff."
      },
      {
        title: "Community Events",
        description: "Occasionally hosts small student-driven events and activities, contributing to campus engagement."
      }
    ],
    sections: [
      {
        title: "Dining Options",
        content: "A variety of meals and snacks including, sandwiches, fresh juices, and tea, served fresh and affordably.",
        image: "/img/locations/ic_3.jpeg"
      },
      {
        title: "Student Activities",
        content: "Hosts occasional student events and gatherings that foster campus community and engagement.",
        image: "/img/locations/ic_1.jpeg"
      }
    ],
    lat: 23.4119385597484,
    lng: 85.44116752979565,
    detail: "Campus hub for essentials & eats",
    img: "/img/locations/ic_2.jpeg",
    url1: `${window.location.origin}/location/ic`,
    url2: "https://maps.app.goo.gl/6qkEBJzfXLnPfCcm7"
  },
  {
    id: "techno",
    map_id: 30,
    name: "Techno Cafeteria",
    category: "Dining & Food",
    description: "Techno Cafeteria is a lively hangout spot on campus, offering a range of quick bites, snacks, and beverages. Popular among students, it's a go-to place for group discussions, casual meetings, or simply unwinding between classes.",
    address: "",
    hours: "",
    image: "/img/locations/techno.jpeg",
    position: { x: 65, y: 45 },
    phone: "",
    website: "",
    events: [],
    highlights: [
      {
        title: "Student Hub",
        description: "A central spot for socializing and relaxing."
      },
      {
        title: "Popular Snacks",
        description: "Offers samosas, sandwiches, rolls, beverages, and more."
      },
      {
        title: "Essential Store",
        description: "Offers xerox, stationery and other essentials."
      }
    ],
    sections: [],
    lat: 23.417868376535374,
    lng: 85.43462895207571,
    detail: "Student favorite for snacks & chats",
    img: "/img/locations/techno.jpeg",
    url1: `${window.location.origin}/location/techno`,
    url2: "https://maps.app.goo.gl/YTxtsGUv6LjN463p9"
  },
  {
    id: "down-south",
    map_id: 31,
    name: "Down South",
    category: "Dining & Food",
    description: "Down South is a casual, student-friendly cafeteria at BIT Mesra, known for its relaxed vibe and quick-service meals",
    address: "",
    hours: "",
    image: "/img/locations/down_south.jpeg",
    position: { x: 65, y: 45 },
    phone: "",
    website: "",
    events: [],
    highlights: [
      {
        title: "Fast Service",
        description: "Known for serving food quickly, perfect for students on a tight schedule."
      },
      {
        title: "Clean & Comfortable",
        description: "Maintains good hygiene and seating."
      }
    ],
    sections: [],
    lat: 23.42127484485628,
    lng: 85.43351132944775,
    detail: "Quick bites, relaxed vibes.",
    img: "/img/locations/down_south.jpeg",
    url1: `${window.location.origin}/location/down-south`,
    url2: "https://maps.app.goo.gl/Tn5R3bgKK6AXc1N56"
  },
  {
    id: "oc",
    map_id: 32,
    name: "Outer Cooperative (OC)",
    category: "Campus Life",
    description: "The Outer Cooperative (OC) at BIT Mesra is a multi-purpose campus facility that caters to the daily needs of students and staff.",
    address: "",
    hours: "",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrX4YqjUPW_7css60F8a3LC6wbjgQ9AyoY6Mg4ynICTyOTuWKmwEP2MmRDg8P1chJt0fL1t7FKWERQTf1x0axnRZZepM9q6Fz_5aASIp9VjG1tcWU3yFOwW0ec_KDGo9E3bYHs=w426-h240-k-no",
    position: { x: 65, y: 45 },
    phone: "",
    website: "",
    events: [],
    highlights: [
      {
        title: "Essential Services",
        description: "Offers a range of services such as grocery items, stationery, tailoring, and a cooperative bookstore."
      },
      {
        title: "Convenient Location",
        description: "Strategically located on campus, providing easy access to students and staff for their daily needs."
      }
    ],
    sections: [],
    lat: 23.42376838770518,
    lng: 85.43961304247624,
    detail: "Campus essentials under one roof",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrX4YqjUPW_7css60F8a3LC6wbjgQ9AyoY6Mg4ynICTyOTuWKmwEP2MmRDg8P1chJt0fL1t7FKWERQTf1x0axnRZZepM9q6Fz_5aASIp9VjG1tcWU3yFOwW0ec_KDGo9E3bYHs=w426-h240-k-no",
    url1: `${window.location.origin}/location/oc`,
    url2: "https://www.google.com/maps/place/OC+(Outer+Co-operative)/@23.4240034,85.4388231,18z/data=!4m14!1m7!3m6!1s0x39f4e5006145900d:0x487fc55c1b16a1bf!2sHostel+13!8m2!3d23.417788!4d85.4346!16s%2Fg%2F11x199_tzz!3m5!1s0x39f4fb4d705a0541:0xdbb8590e6a92f7ae!8m2!3d23.423758!4d85.4396138!16s%2Fg%2F1hdzmn55z?entry=ttu&g_ep=EgoyMDI1MDUyNy4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: "Pahan",
    map_id: 33,
    name: "Pahan Tea Shop",
    category: "Dining & Food",
    description: "The Pahan Tea Shop offers a variety of snacks and drinks, making it a convenient stop for students seeking a quick bite or refreshment.",
    address: "",
    hours: "",
    image: "",
    position: { x: 65, y: 45 },
    phone: "",
    website: "",
    events: [],
    highlights: [
      {
        title: "Quick Bites",
        description: "Serves a range of snacks like kachori and other light eats."
      },
      {
        title: "Beverages",
        description: "Offers tea and other drinks to refresh students during their breaks."
      }
    ],
    sections: [],
    lat: 23.41764234310873,
    lng: 85.43414868412995,
    detail: "Quick bites and chai breaks.",
    img: "",
    url1: `${window.location.origin}/location/pahan`,
    url2: "https://www.google.com/maps/place/Pahan+Tea+Shop/@23.41763,85.43385,21z/data=!4m10!1m2!2m1!1spahan!3m6!1s0x39f4e4ac710c45dd:0x98755fcfe2504f1c!8m2!3d23.4176113!4d85.4341246!15sCgVwYWhhbloHIgVwYWhhbpIBBWRoYWJhqgE4EAEqCSIFcGFoYW4oADIeEAEiGpMaI0CAIsi-7chcOXsc_g3WTbrGAkf0WjznMgkQAiIFcGFoYW7gAQA!16s%2Fg%2F11cmt94jpx?entry=ttu&g_ep=EgoyMDI1MDUyNy4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: "shorbagh-1",
    map_id: 34,
    name: "Shorbagh 1",
    category: "Campus Life",
    description: "Shorbagh 1 is a green, open area on the BIT Mesra campus, often used as a meeting point for events and outdoor activities. Its proximity to academic zones makes it a convenient and accessible spot for gatherings.",
    address: "",
    hours: "",
    image: "https://files.yappe.in/place/full/shorbagh-1-1646173.webp",
    position: { x: 65, y: 45 },
    phone: "",
    website: "",
    events: [],
    highlights: [
      {
        title: "Event Hub",
        description: "Frequently serves as a starting location for campus-wide games, club events, and outdoor activities."
      },
      {
        title: "Green Surroundings",
        description: "Offers an open, shaded space surrounded by greenery, making it ideal for informal meetups."
      },
      {
        title: "Central Location",
        description: "Located close to major departments and buildings, enhancing its usability for students and organizers."
      }
    ],
    sections: [
      {
        title: "Outdoor Events",
        content: "Shorbagh 1 is popularly used by student clubs for hosting interactive and creative activities, such as treasure hunts and orientation games.",
        image: "https://files.yappe.in/place/full/shorbagh-1-1646175.webp"
      }
    ],
    lat: 23.413061338168532,
    lng: 85.44079957510178,
    detail: "Lush gathering spot for campus buzz.",
    img: "https://files.yappe.in/place/full/shorbagh-1-1646173.webp",
    url1: `${window.location.origin}/location/shorbagh-1`,
    url2: "https://www.google.com/maps/place/Shorbagh-1/@23.4120971,85.4396326,17.93z/data=!4m14!1m7!3m6!1s0x39f4e5006145900d:0x487fc55c1b16a1bf!2sHostel+13!8m2!3d23.417788!4d85.4346!16s%2Fg%2F11x199_tzz!3m5!1s0x39f4fb55bccde2a1:0xe882a784a7a8ab61!8m2!3d23.4130483!4d85.4408012!16s%2Fg%2F11g6bllpyy?entry=ttu&g_ep=EgoyMDI1MDUyNy4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: "shorbagh-2",
    map_id: 35,
    name: "Shorbagh 2",
    category: "Campus Life",
    description: "Shorbagh 2 is a serene open space within the BIT Mesra campus, often used for informal gatherings, recreation, and occasional campus events and fests.",
    address: "",
    hours: "",
    image: "/img/locations/shorbagh_2.png",
    position: { x: 65, y: 45 },
    phone: "",
    website: "",
    events: [],
    highlights: [
      {
        title: "Open Green Space",
        description: "A calm, spacious area perfect for relaxation and leisure."
      },
      {
        title: "Student Hangout",
        description: "Commonly used for casual meetups and recreation."
      }
    ],
    sections: [
      {
        title: "Event & Fest Venue",
        content: "Occasionally transforms into a vibrant space during student fests, cultural evenings, and campus-wide celebrations.",
        image: ""
      }
    ],
    lat: 23.412453742714554,
    lng: 85.43874721434513,
    detail: "A green oasis hosting vibrant campus events",
    img: "/img/locations/shorbagh_2.png",
    url1: `${window.location.origin}/location/shorbagh-2`,
    url2: "https://www.google.com/maps/place/Shorbagh-2/@23.4124982,85.4385578,20.03z/data=!4m14!1m7!3m6!1s0x39f4e5006145900d:0x487fc55c1b16a1bf!2sHostel+13!8m2!3d23.417788!4d85.4346!16s%2Fg%2F11x199_tzz!3m5!1s0x39f4fb13b07bbe6b:0x62b9b2cb6999e1db!8m2!3d23.4124259!4d85.4387446!16s%2Fg%2F11sk1hh8f8?entry=ttu&g_ep=EgoyMDI1MDUyNy4wIKXMDSoASAFQAw%3D%3D"
  }
];