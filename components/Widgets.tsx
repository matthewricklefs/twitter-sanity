import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'

function Widgets() {
  return (
    <div className="mt-2 px-2 ">
      {/* Searchbox */}
      <div className="bg-grey-100 mt-2 flex items-center space-x-2 rounded-full p-3 ">
        <SearchIcon className="h-5 w-5 text-gray-400" />
        <input
          className="flex-1 bg-transparent  outline-none "
          type="text"
          placeholder="Search Twitter"
        />
      </div>
      {/*  */}
    </div>
  )
}

export default Widgets
