
import SignOutBtn from '@/components/sign-out-btn';
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation';
import React from 'react'

export default async function LogoutPage() {

    
    const user = await auth()
    // console.log(user?.user?.email?.split("@")[0]);

    if(!user){
        redirect("/")
    }

    return (
        <div className='flex flex-col gap-3'>
            <p className='text-2xl'>
                Logged in as <span className='capitalize underline '>{user?.user?.email?.split("@")[0]}</span>
            </p>
            
            <SignOutBtn/>
        </div>
    )
}
