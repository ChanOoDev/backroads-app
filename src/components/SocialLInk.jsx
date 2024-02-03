import React from 'react'

const SocialLink = ({href,text,socialClass}) => {
  return (
    <li>
      <a href={href} className={socialClass}>
        {text}
      </a>
    </li>
  )
}

export default SocialLink