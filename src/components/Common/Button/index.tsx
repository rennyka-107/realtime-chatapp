'use client';
import { signOut } from 'next-auth/react';
import React from 'react'

type Props = {}

const ButtonLogout = (props: Props) => {
  return (
    <div>
    <button className="bg-red px-[20px] py-[10px] rounded-md text-white hover:bg-green" onClick={() =>signOut()}>Sign out</button>
  </div>
  )
}

export default ButtonLogout