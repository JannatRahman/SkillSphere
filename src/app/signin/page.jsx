"use client";
import { authClient } from "@/lib/auth-client";
import { Check, EyeClosed, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Fieldset,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { GrGoogle } from "react-icons/gr";

export default function SignInPage() {
  const onSubmit = async (e) => {
    e.preventDefault();

    
    const email = e.target.email.value;
    const password = e.target.password.value;

    const {data, error} = await authClient.signIn.email({
      
      email,
      password,
      callbackURL: '/'
    })
    
  };
  
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleGoogleSignin = async () => {
    await authClient.signIn.social({
      provider: 'google'
    })
  }

  return (
    <Card className="border mx-auto w-125 py-10 mt-5">
      <h1 className="text-center text-2xl font-bold">Login</h1>

      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
        
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          className="relative"
          minLength={8}
          name="password"
          type={isShowPassword ? "text" : "password"}
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}>
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <span className="absolute right-4 top-8 cursor-pointer" onClick={() => setIsShowPassword(!isShowPassword)}>
            {isShowPassword? <FaEye /> : <EyeClosed/>}
            </span>
          <Description className="font-semibold text-[15px]">
            Don't have an account? 
            <Link href={'/register'}>
            <span className="text-red-500 cursor-pointer"> Register
            </span>
            </Link>
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            Submit
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
      <p className="text-center">Or</p>
      <Button onClick={handleGoogleSignin} variant="outline" className={'w-full'}><GrGoogle className="text-blue-500"/> Sign in with Google</Button>
    </Card>
  );
}