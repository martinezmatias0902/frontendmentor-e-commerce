import React from "react"
import { Link, Stack, Image, Avatar } from "@chakra-ui/react"

import logo from "../assets/logo.svg"
import cart from "../assets/icon-cart.svg"
import avatar from "../assets/image-avatar.png"

const Nav: React.VFC = () => {
  return (
    <Stack paddingY={8} direction="row" justifyContent="space-between" alignItems="center">
      {/* Left side */}
      <Stack direction="row" spacing={12} alignItems="center">
        <Image src={logo}/>
        {/* Links on Nav */}
        <Stack direction="row" color="gray.500" fontSize="sm" spacing={6}>
          <Link>Collections</Link>
          <Link>Men</Link>
          <Link>Women</Link>
          <Link>About</Link>
          <Link>Contact</Link>
        </Stack>
      </Stack>
      {/* Right side */}
      <Stack direction="row" spacing={6} alignItems="center">
        <Image width={6} height={6} src={cart} />
        <Avatar width={10} height={10} src={avatar}/>
      </Stack>
    </Stack>
  )
}

export default Nav