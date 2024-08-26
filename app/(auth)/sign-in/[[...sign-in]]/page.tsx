import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return <div className='min-h-screen flex items-center justify-center bg-gray-900'>
    <SignIn />
    </div>
}