import React, { useEffect } from 'react'

export default function HubspotMeetingEmbed () {
  useEffect(() => {
    setTimeout(() => {
      const script = document.createElement('script')
      script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js'
      script.defer = true
      document.body.appendChild(script)
    }, 200)
  }, [])

  return (
    <div className='meetings-iframe-container' data-src='https://info.auctm.com/meetings/michael-bennett/auctm-demo?embed=true' />
  )
}
