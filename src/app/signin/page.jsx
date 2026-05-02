"use client";

import { authClient } from "@/lib/auth-client";
import {
  Check,
  EyeClosed,
} from "@gravity-ui/icons";
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
import Link from "next/link";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { GrGoogle } from "react-icons/gr";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignInPage() {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      // removed callbackURL because it redirects too fast
      const result = await authClient.signIn.email({
        email,
        password,
      });

      if (result?.data || result) {
        toast.success("Login successful 🎉");

        // delay redirect so toast can be seen
        setTimeout(() => {
          window.location.href = "/";
        }, 1500);
      } else {
        toast.error("Login failed");
      }
    } catch (error) {
      toast.error("Login failed. Please try again.");
    }
  };

  const handleGoogleSignin = async () => {
    try {
      toast.success("Redirecting to Google...");

      setTimeout(async () => {
        await authClient.signIn.social({
          provider: "google",
        });
      }, 1000);
    } catch (error) {
      toast.error("Google sign in failed.");
    }
  };

  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center px-4 py-10">
      <Card className="w-full max-w-md sm:max-w-lg md:max-w-xl border shadow-xl rounded-2xl p-6 sm:p-8">

        {/* Title */}
        <h1 className="text-center text-2xl sm:text-3xl font-bold mb-6">
          Login
        </h1>

        <Form
          className="flex flex-col gap-5 w-full"
          onSubmit={onSubmit}
        >
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
            <Input
              placeholder="john@example.com"
              className="w-full"
            />
            <FieldError />
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            name="password"
            type={isShowPassword ? "text" : "password"}
            validate={(value) => {
              if (value.length < 8) {
                return "Minimum 8 characters required";
              }
              if (!/[A-Z]/.test(value)) {
                return "Must include uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Must include a number";
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
                onClick={() =>
                  setIsShowPassword(!isShowPassword)
                }
                className="absolute right-3 top-3 cursor-pointer text-gray-600"
              >
                {isShowPassword ? <FaEye /> : <EyeClosed />}
              </span>
            </div>

            <Description className="text-sm mt-2">
              Don’t have an account?{" "}
              <Link
                href="/register"
                className="text-red-500 font-medium"
              >
                Register
              </Link>
            </Description>

            <FieldError />
          </TextField>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              type="submit"
              className="w-full sm:w-auto"
            >
              <Check /> Submit
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

        {/* Divider */}
        <p className="text-center my-5 text-sm text-gray-500">
          Or
        </p>

        {/* Google */}
        <Button
          onClick={handleGoogleSignin}
          variant="outline"
          className="w-full flex items-center justify-center gap-2"
        >
          <GrGoogle className="text-blue-500" />
          Sign in with Google
        </Button>
      </Card>
    </div>
  );
}