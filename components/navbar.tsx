export const Navbar = () => {
  const menu = [
    { label: 'Main Site', href: 'https://conradtheprogrammer.com'},
    { label: 'Links', href: 'https://links.conradtheprogrammer.com'},
  ]
  return (
    <nav className=" py-2.5">
      <div className="container flex flex-wrap items-center justify-between mx-auto">

        <a href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap text-black dark:text-white">Conrad The Programmer</span>
        </a>


        <div className="w-full block w-auto">
          <ul className="flex flex-row space-x-8 mt-0 text-sm font-medium">
            {menu.map(link =>
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent focus:text-teal-300 md:p-0 dark:text-white" aria-current="page">
                  {link.label}
                </a>
              </li>
            )}
          </ul>
        </div>

      </div>
    </nav>
  )
}
        // <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        //   <span className="sr-only">Open main menu</span>
        //   <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        // </button>
        // <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        //   <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        //     {links.map(link =>
        //       <li key={link}>
        //         <a href="#" className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent focus:text-teal-300 md:p-0 dark:text-white" aria-current="page">Link</a>
        //       </li>
        //     )}
        //   </ul>
        // </div>
