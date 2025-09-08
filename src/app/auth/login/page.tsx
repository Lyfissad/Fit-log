"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/userContext";
import { BiSolidShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Checkbox } from "@/components/ui/checkbox";

export default function Login() {
  const { globalUser, setGlobalUser } = useUser();
  const [remember, setRemember] = useState(false);
  const [showIcon, setShowIcon] = useState(true);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        "https://fitlog-back-production.up.railway.app/login",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(user),
          credentials: "include",
        },
      );
      if (response.ok) {
        toast.success("Login successful");
        const profile = await fetch(
          "https://fitlog-back-production.up.railway.app/profile", //once login succesful a secondary request made to protected route of profile
          {
            method: "GET",
            credentials: "include",
            headers: {
              "Cache-Control": "no-cache",
            },
          },
        );
        setLoading(false);
        if (profile.ok) {
          const profileData = await profile.json();
          setGlobalUser(profileData.user);
          if (remember) {
            localStorage.setItem("user", JSON.stringify(profileData.user));
          } else {
            sessionStorage.setItem("user", JSON.stringify(profileData.user));
          }
          router.push("/auth/profile");
        } else {
          toast.error("Profile blocked");
        }
      } else toast.error("Login failed");
    } catch (err) {
      console.log("server error", err);
    }
  };
  useEffect(() => {
    if (globalUser) {
      console.log(globalUser);
    }
  }, [globalUser]);

  function switchShow() {
    //password hide icon state
    setShowIcon(!showIcon);
  }

  const showType = showIcon ? "password" : "text"; //control password display state used in input type
  const buttonState = loading ? (
    <AiOutlineLoading3Quarters className="fill-text-pri relative z-50 items-center justify-center size-5 mx-auto animate-spin" />
  ) : (
    "Login"
  ); //button loading

  return (
    <div className="bg-grayBlack h-screen w-full pt-5 animate-fadeIn">
      <Image
        src={"/fitlog_logo_green.png"}
        alt="logo"
        width={240}
        height={140}
        className="mx-auto my-10"
      />
      <h1 className="text-bold text-text-pri text-4xl p-8">Login</h1>
      <div className="flex gap-3 px-8">
        <h2 className="text-text-sec">Don&apos;t have an account?</h2>
        <Link
          href={"/auth/signup"}
          className="text-text-color transition-all duration-75 active:-translate-y-1"
        >
          Signup
        </Link>
      </div>
      <form
        className="w-[20rem] mx-auto space-y-6 pt-8"
        onSubmit={handleSubmit}
      >
        <Input
          placeholder="Email"
          value={user.email}
          name="email"
          type="text"
          onChange={handleChange}
        />
        <Input
          placeholder="Password"
          value={user.password}
          name="password"
          type={showType}
          onChange={handleChange}
        />
        {showIcon ? (
          <BiSolidShow
            onClick={switchShow}
            className="absolute cursor-pointer fill-text-color right-10 size-5 top-99"
          />
        ) : (
          <BiSolidHide
            onClick={switchShow}
            className="absolute cursor-pointer fill-text-color right-10 size-5 top-99"
          />
        )}
        <div className="flex gap-x-2">
          <Checkbox
            className="cursor-pointer"
            id="remember"
            checked={remember}
            onCheckedChange={() => setRemember(!remember)}
          />
          <p className="bottom-1 relative">Keep me logged in</p>
        </div>
        <button className="w-[20rem] h-[3rem] cursor-pointer rounded-lg bg-priAccent mx-auto">
          {buttonState}
        </button>
      </form>
    </div>
  );
}
