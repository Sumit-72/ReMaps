import React from 'react'

const Developer = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-blue-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Our Team</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              Campus Navigator is developed and maintained by a dedicated team of students and faculty members who are passionate about improving campus accessibility.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "Project Lead",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                bio: "Computer Science major with a passion for creating useful applications that solve real problems on campus."
              },
              {
                name: "Sarah Williams",
                role: "UI/UX Designer",
                image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                bio: "Design student focused on creating beautiful, intuitive interfaces that make navigation simple and enjoyable."
              },
              {
                name: "Michael Chen",
                role: "Developer",
                image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                bio: "Web development enthusiast who loves building interactive maps and location-based applications."
              },
              {
                name: "Jessica Patel",
                role: "Content Manager",
                image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                bio: "Communications major who ensures all campus location information is accurate and up-to-date."
              },
              {
                name: "David Kim",
                role: "Faculty Advisor",
                image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                bio: "Professor of Computer Science who provides guidance and support for the Campus Navigator project."
              },
              {
                name: "Emma Rodriguez",
                role: "Student Ambassador",
                image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                bio: "Student government representative who gathers feedback and feature requests from the campus community."
              }
            ].map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
                <div 
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${member.image})` }}
                ></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{member.name}</h3>
                  <p className="text-blue-500 dark:text-blue-300 mb-3">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
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
