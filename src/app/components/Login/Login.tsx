"use-client";

import { Avatar, Button } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";

import React from "react";

const Login = () => {
  const { data: session } = useSession();
  const avatarUrl = session?.user?.image as string;

  if (session) {
    return (
      <>
        <Button variant={"contained"} color={"error"} onClick={() => signOut()}>
          Sign Out
        </Button>
      </>
    );
  }
  return (
    <>
      <h2>Please Login</h2>
      <Button variant={"contained"} color={"success"} onClick={() => signIn()}>
        Sign In
      </Button>
    </>
  );

  return <div>Login</div>;
};

export default Login;
