import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export default function WistiaEmbed (props) {
  const [handle, setHandle] = useState(null)

  const { hashedId, fullscreenButton = true, ...embedOptions } = props

  if (typeof window !== 'undefined') {
    window._wq = window._wq || []
    window._wq.push({
      id: hashedId,
      options: { ...embedOptions, fullscreenButton }
    })
  }

  useEffect(() => {
    if (!document.getElementById('wistia_script')) {
      setTimeout(() => {
        const wistiaScriptPre = document.createElement('script')
        wistiaScriptPre.id = 'wistia_script_pre'
        wistiaScriptPre.type = 'text/javascript'
        wistiaScriptPre.src = `https://fast.wistia.com/embed/medias/${hashedId}.jsonp`
        wistiaScriptPre.async = true
        document.body.appendChild(wistiaScriptPre)
        const wistiaScript = document.createElement('script')
        wistiaScript.id = 'wistia_script'
        wistiaScript.type = 'text/javascript'
        wistiaScript.src = 'https://fast.wistia.com/assets/external/E-v1.js'
        wistiaScript.async = true
        document.body.appendChild(wistiaScript)
      }, 0)
    }

    if (typeof window !== 'undefined') {
      window._wq = window._wq || []
      window._wq.push({
        id: props.hashedId,
        onEmbedded: (video) => {
          setHandle(video)
        }
      })
    }

    return () => {
      handle && handle.remove()
    }
  }, [])

  return (
    <div className='wistia_responsive_padding' style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
      <div className='wistia_responsive_wrapper' style={{ height: '100%', left: '0', position: 'absolute', top: '0', width: '100%' }}>
        <div className={`wistia_embed wistia_async_${props.hashedId} videoFoam=true`} style={{ height: '100%', width: '100%', position: 'relative' }}>
          <div className='wistia_swatch' style={{ height: '100%', left: 0, opacity: 0, overflow: 'hidden', position: 'absolute', top: 0, transition: 'opacity 200ms', width: '100%' }}>
            <img src={`https://fast.wistia.com/embed/medias/${props.hashedId}/swatch`} style={{ filter: 'blur(5px)', height: '100%', objectFit: 'contain', width: '100%' }} alt='Wistia Poster Image' aria-hidden='true' />
          </div>
        </div>
      </div>
    </div>
  )
}

WistiaEmbed.propTypes = {
  hashedId: PropTypes.string,
  fullscreenButton: PropTypes.bool
}
