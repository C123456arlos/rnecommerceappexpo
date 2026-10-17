import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react'

function App() {
  return (
  <div>
      
   <p>home</p>   
        
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