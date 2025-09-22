
import { auth } from "@/lib/auth";
import { SignInView } from "@/modules/auth/ui/views/sign-in-view"
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const page =async () => {
  console.log("SignIn Page");
  const session = await auth.api.getSession({
    headers: await headers(),
  })
  if(!!session) {
    redirect("/sign-in");
  }
  return <SignInView/>
    
  
}

export default page;