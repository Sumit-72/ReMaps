import { FaLinkedin } from 'react-icons/fa'
import React from 'react'

const Developer = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-blue-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Our Team</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            ReMaps is developed and maintained by a dedicated team of students who are passionate about improving campus accessibility.
            </p>
          </div>
          
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Sumit Shekhar",
              // role: "Project Lead",
              image: "/sumit.jpg",
              linkedin: "https://www.linkedin.com/in/sumit-shekhar72",
            },
            {
              name: "Aditya Pandit",
              // role: "Student Ambassador",
              image: "/aditya.png",
              linkedin: "https://www.linkedin.com/in/aditya-pandit-54161028a",
            },
            {
              name: "Pranav",
              // role: "Student Ambassador",
              image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              linkedin: "https://www.linkedin.com/in/pranav",
            }
          ].map((member, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
              <div 
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${member.image})` }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{member.name}</h3>
                {/* <p className="text-blue-500 dark:text-blue-300 mb-3">{member.role}</p> */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
                  aria-label={`LinkedIn profile of ${member.name}`}
                >
                  <FaLinkedin className="mr-2" size={20} />
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>

        </div>
      </div>
    </>
  )
}

export default Developer
