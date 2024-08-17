import Link from 'next/link';
import React from 'react'

const Links = () => {

    const links = [
      {
        title: "Home",
        path: "/",
      },
      {
        title: "About",
        path: "/about",
      },
      {
        title: "Contact",
        path: "/contact",
      },
      {
        title: "Blog",
        path: "/blog",
      },

    ];
  return (
    <div  className="flex justify-between">{links.map((link,i)=>(
        <Link href={link.path} key={i}>{link.title}</Link>
    ))}</div>
  )
}

export default Links