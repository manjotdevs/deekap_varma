'client'
import React from 'react'
import Image from 'next/image';
import { Button } from "@/components/ui/button"

export default function Header() {
  return(
    <div className='flex'>
      <Image src="/logo.png" alt="Logo" width={80} height={80} />
      <p>Deepak Verma</p>

      <Button>Click me</Button>
    </div>
  );
  
}
