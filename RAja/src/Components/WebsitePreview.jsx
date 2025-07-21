import React from 'react'

function WebsitePreview({website = 'https://burger-raja.netlify.app/'}) {
  return (
     <div className=" overflow-hidden">
      <iframe
        src={website}
        title="Website Preview"
         sandbox="allow-scripts allow-same-origin allow-forms"
        className=" w-full h-screen "
        
      ></iframe>
    </div>
  )
}

export default WebsitePreview