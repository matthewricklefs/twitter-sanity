import { SearchIcon } from '@heroicons/react/outline'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import React from 'react'

function Widgets() {
  return (
    <div className="col-span-2 mt-2 hidden px-2 lg:inline">
      <div className="bg-grey-100 mt-2 flex items-center space-x-2 rounded-full p-3 ">
        <SearchIcon className="h-5 w-5 text-gray-400" />

        <input
          className="flex-1 bg-transparent outline-none"
          type="text"
          placeholder="Search Twitter"
        />
      </div>

      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="MatthewRicklef1"
        options={{ height: 1000 }}
      />
    </div>
  )
}

export default Widgets
