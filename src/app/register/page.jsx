"use client";

import { authClient } from "@/lib/auth-client";
import { Check, EyeClosed } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { toast } from "sonner";

export default function RegisterPage() {
  const router = useRouter();
  const [isShowPassword, setIsShowPassword] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { error } = await authClient.signUp.email({
      name,
      image,
      email,
      password,
    });

    if (error) {
      toast.error("Registration failed! You need to register properly.");
      return;
    }

    toast.success("Registration successful!");

    setTimeout(() => {
      router.push("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center px-4 py-10">
      <Card className="w-full max-w-md sm:max-w-lg md:max-w-xl border shadow-xl rounded-2xl p-6 sm:p-8">
        
        {/* Title */}
        <h1 className="text-center text-2xl sm:text-3xl font-bold mb-6">
          Register Your Account
        </h1>

        <Form className="flex flex-col gap-5 w-full" onSubmit={onSubmit}>
          
          {/* Name */}
          <TextField isRequired name="name" type="text">
            <Label>Name</Label>
            <Input placeholder="Enter your name" className="w-full" />
            <FieldError />
          </TextField>

          {/* Image */}
          <TextField isRequired name="image" type="text">
            <Label>Image URL</Label>
            <Input placeholder="Paste image URL" className="w-full" />
            <FieldError />
          </TextField>

          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
              ) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" className="w-full" />
            <FieldError />
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            name="password"
            type={isShowPassword ? "text" : "password"}
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Must include 1 uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Must include 1 number";
              }
              return null;
            }}
          >
            <Label>Password</Label>

            <div className="relative">
              <Input
                placeholder="Enter your password"
                className="w-full pr-10"
              />

              <span
                className="absolute right-3 top-3 cursor-pointer text-gray-600"
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {isShowPassword ? <FaEye /> : <EyeClosed />}
              </span>
            </div>

            <Description className="text-sm mt-1">
              Must be 8+ chars with 1 uppercase & 1 number
            </Description>

            <FieldError />
          </TextField>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button type="submit" className="w-full sm:w-auto">
              <Check />
              Submit
            </Button>

            <Button
              type="reset"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              Reset
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
}