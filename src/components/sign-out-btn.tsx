"use client"

import { Button } from './ui/button'
import { signOutAction } from '@/actions/auth.action'


export default function SignOutBtn() {

    const handleClick = ()=> {

        signOutAction()
        
    }


    return (
        <Button variant={"destructive"} onClick={handleClick}>Log Out</Button>
    )
}
