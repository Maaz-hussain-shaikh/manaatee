import React from 'react'

const FooterForm = () => {
  return (
    <>
       <div className="mt-8 mx-4">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
              <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">Get in touch</h1>
              <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">Fill in the form to submit any query</p>
    
              <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">Dhaka, Street, State, Postal Code</div>
              </div>
    
              <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">+880 1234567890</div>
              </div>
    
              <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">info@demo.com</div>
              </div>
            </div>
            <form className="p-6 flex flex-col justify-center">
              <div className="flex flex-col">
                <label htmlFor="name" className="hidden">Full Name</label>
                <input type="name" name="name" id="name" placeholder="Full Name" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none" />
              </div>
    
              <div className="flex flex-col mt-2">
                <label htmlFor="email" className="hidden">Email</label>
                <input type="email" name="email" id="email" placeholder="Email" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none" />
              </div>
    
              <div className="flex flex-col mt-2">
                <label htmlFor="tel" className="hidden">Number</label>
                <input type="tel" name="tel" id="tel" placeholder="Telephone Number" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none" />
              </div>
    
              <button type="submit" className="md:w-32 bg-blue-600 dark:bg-gray-100 text-white dark:text-gray-800 font-bold py-3 px-6 rounded-lg mt-4 hover:bg-blue-500 dark:hover:bg-gray-200 transition ease-in-out duration-300">Submit</button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 mx-4">
          <div className="p-4 bg-blue-50 dark:bg-gray-800 dark:text-gray-50 border border-blue-500 dark:border-gray-500 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold">Have taken ideas & reused components from the following resources:</h4>
            <ul>
              <li className="mt-3">
                <a className="flex items-center text-blue-700 dark:text-gray-100" href="https://tailwindcomponents.com/component/sidebar-navigation-1" target="_blank" rel="noreferrer">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="transform transition-transform duration-500 ease-in-out"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span className="inline-flex pl-2">Sidebar Navigation</span>
                </a>
              </li>
              <li className="mt-2">
                <a className="flex items-center text-blue-700 dark:text-gray-100" href="https://tailwindcomponents.com/component/contact-form-1" target="_blank" rel="noreferrer">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="transform transition-transform duration-500 ease-in-out"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span className="inline-flex pl-2">Contact Form</span>
                </a>
              </li>
              <li className="mt-2">
                <a className="flex items-center text-blue-700 dark:text-gray-100" href="https://tailwindcomponents.com/component/trello-panel-clone" target="_blank" rel="noreferrer">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="transform transition-transform duration-500 ease-in-out"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span className="inline-flex pl-2">Section: Task Summaries</span>
                </a>
              </li>
              <li className="mt-2">
                <a className="flex items-center text-blue-700 dark:text-gray-100" href="https://windmill-dashboard.vercel.app/" target="_blank" rel="noreferrer">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="transform transition-transform duration-500 ease-in-out"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span className="inline-flex pl-2">Section: Client Table</span>
                </a>
              </li>
              <li className="mt-2">
                <a className="flex items-center text-blue-700 dark:text-gray-100" href="https://demos.creative-tim.com/notus-js/pages/admin/dashboard.html" target="_blank" rel="noreferrer">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="transform transition-transform duration-500 ease-in-out"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span className="inline-flex pl-2">Section: Social Traffic</span>
                </a>
              </li>
              <li className="mt-2">
                <a className="flex items-center text-blue-700 dark:text-gray-100" href="https://mosaic.cruip.com" target="_blank" rel="noreferrer">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="transform transition-transform duration-500 ease-in-out"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span className="inline-flex pl-2">Section: Recent Activities</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
    </>
  )
}

export default FooterForm
