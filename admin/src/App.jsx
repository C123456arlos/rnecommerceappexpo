import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react'
import Test from './test'

function App() {
  return (
  <div>
      
   <p>home</p>   
        <Test children={"test"}></Test>
      <SignedIn>
        <SignOutButton></SignOutButton>
      </SignedIn>
      <SignedOut>
        <SignInButton></SignInButton>
        <UserButton></UserButton>
      </SignedOut>
  </div>  
        
  )
   
  
}

export default App