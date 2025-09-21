"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";


export default function Home() {
  const {data: session} = authClient.useSession();

  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  const onSubmit = () => {
    authClient.signUp.email({
      email,
      name,
      password,

  },{
    onError: ()=>{
      window.alert("Error signing up");
    },
    onSuccess: ()=>{
      window.alert("Signed up successfully");
    }
  });
  }
const onLogin = () => {
    authClient.signIn.email({
      email,
      password,

  },{
    onError: ()=>{
      window.alert("Error signing up");
    },
    onSuccess: ()=>{
      window.alert("Signed up successfully");
    }
  });
  }
  if (session) {
    return(
      <div className="flex flex-col p-4 gap-y-4">
        <p>Logged in as{session.user.name}</p>
        <Button onClick={()=>authClient.signOut()}>Sign Out</Button>
      </div>
    )
  }
  return (
    <div className="flex flex-col p-4 gap-y-4">
  <div className="p-4 flex flex-col gap-y-4">
    <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
    <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
    <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    <Button onClick={onSubmit}>Submit</Button>
  </div>
    <div className="p-4 flex flex-col gap-y-4">
    <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
    <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    <Button onClick={onLogin}>Login</Button>
  </div>
  </div>
  );
};