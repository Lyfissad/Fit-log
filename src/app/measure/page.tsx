"use client";

import { useUser } from "@/context/userContext";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useNav } from "@/context/NavContext";
import { headings, secText, secTextBold } from "@/lib/font";
import { IoMdClose } from "react-icons/io";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"


export default function Measure() {
  const { globalUser, setGlobalUser } = useUser();
  const [newEntry, setNewEntry] = useState({
    user: globalUser?.id,
    type: "",
    value: [0],
    unit: "",
    note: "",
    date: null
  })
  
  const unitOps = newEntry.type === "body_fat"? ["%"] : newEntry.type === "weight"? ["kg", "lb"] : ["in", "cm"]

  function findRange(){
    switch(newEntry.unit){
      case "%":
        return [3, 50]
      case "kg":
        return [30, 200]
      case "lb":
        return [66, 440]
      case "in":
        return [20, 70]
      case "cm":
        return [50, 180]
      default:
        return [0, 100]
    }
  }


  useEffect(() => {
    const loggedIn = localStorage.getItem("user");
    const sessionLoggedIn = sessionStorage.getItem("user");
    if (sessionLoggedIn) {
      try {
        setGlobalUser(JSON.parse(sessionLoggedIn));
      } catch (err) {
        console.error("sessionStorage issue for user profile", err);
      }
    }
    if (loggedIn) {
      try {
        setGlobalUser(JSON.parse(loggedIn));
      } catch (err) {
        console.error("localStorage issue for user profile", err);
      }
    }
  }, []);

    const { setGlobalNav } = useNav();

  if (!globalUser) {
    return (
      <div className="animate-fadeIn">
        <Image
          src={"/fitlog_logo_green.png"}
          alt="logo"
          width={250}
          height={160}
          className="mx-auto my-10"
        />
        <h1 className="text-bold text-4xl p-8">Login to access this feature</h1>
        <div className="flex items-center mt-40 justify-center h-8/12">
          <Link onClick={() => setGlobalNav("profile")} href={"/auth"}>
            <button className="py-4 px-10 rounded-lg text-lg cursor-pointer bg-priAccent">
              Login
            </button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-grayBlack h-screen w-full pt-5 text-text-pri">
      <div>
        <h1 className={`text-4xl m-5 ${headings.className}`}>
          Your Measurements
        </h1>
        <div>
          <div className="bg-cards p-3 mt-5 border-1 rounded-2xl border-[#2C2C2E] w-[20rem] mx-auto">
            <h3 className={`text-text-color ${secTextBold.className}`}>
              Weight
            </h3>
            <div className={`flex gap-x-35 mt-3 ${secText.className}`}>
              <h4>Last weight</h4>
              <h4>date</h4>
            </div>
          </div>
          <div className="bg-cards p-3 mt-5 border-1 rounded-2xl border-[#2C2C2E] w-[20rem] mx-auto">
            <h3 className={`text-text-color ${secTextBold.className}`}>
              waist
            </h3>
            <div className={`flex gap-x-35 mt-3 ${secText.className}`}>
              <h4>Last waist</h4>
              <h4>date</h4>
            </div>
          </div>
          <div className="bg-cards p-3 mt-5 border-1 rounded-2xl border-[#2C2C2E] w-[20rem] mx-auto">
            <h3 className={`text-text-color ${secTextBold.className}`}>
              Body Fat %
            </h3>
            <div className={`flex gap-x-35 mt-3 ${secText.className}`}>
              <h4>Last Fat</h4>
              <h4>date</h4>
            </div>
          </div>
          <Drawer>
            <div className="flex items-center justify-center">
            <DrawerTrigger asChild>
                <div
                className={`py-2 px-6 mt-20 rounded-sm text-lg cursor-pointer bg-priAccent ${secText.className}`}
              >
                Add Measurements
              </div>
            </DrawerTrigger>
            </div>
            <DrawerHeader>
              <DrawerContent className="bg-grayBlack gap-y-4 border-t-grayBlack [&>div:first-child]:bg-text-color">
                <DrawerClose>
                  <button className="flex bg-priAccent ml-85 items-center justify-center size-8 rounded-3xl cursor-pointer" >
                    <IoMdClose className="size-7"/>
                  </button>
                </DrawerClose>
                <DrawerTitle className={`${secTextBold.className} ml-2 text-lg text-text-color`}>Add New Entry</DrawerTitle>
                <div className="">
                    <h3 className={`ml-3 mb-3 ${secText.className} text-text-pri `}>Type</h3>
                    <Select value={newEntry.type} onValueChange={(val) => setNewEntry({ ...newEntry, type: val })}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent className={`w-full bg-grayBlack text-text-pri ${secText.className}`}>
                        <SelectItem className="hover:bg-priAccent focus:bg-text-color" value="weight">Weight</SelectItem>
                        <SelectItem className="hover:bg-priAccent focus:bg-text-color" value="waist">Waist</SelectItem>
                        <SelectItem className="hover:bg-priAccent focus:bg-text-color" value="body_fat">Body Fat %</SelectItem>
                      </SelectContent>
                    </Select>
                    <h3 className={`ml-3 my-3 ${secText.className} text-text-pri `}>Unit</h3>
                    <Select value={newEntry.unit} onValueChange={(val) => setNewEntry({ ...newEntry, unit: val })}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent className={`w-full bg-grayBlack text-text-pri ${secText.className}`}>
                        <SelectItem className="hover:bg-priAccent focus:bg-text-color" value={unitOps[0]}>{unitOps[0]}</SelectItem>
                        {unitOps[1]? <SelectItem className="hover:bg-priAccent focus:bg-text-color" value={unitOps[1]}>{unitOps[1]}</SelectItem> : null}
                      </SelectContent>
                    </Select>
                    <h3 className={`ml-3 my-3 ${secText.className} text-text-pri `}>value</h3>
                    <Slider
                        className="w-[98%] mx-auto"
                        defaultValue={[0]}
                        onValueChange={(val) => setNewEntry({...newEntry, value: val})}
                        min={findRange()[0]}
                        max={findRange()[1]}
                        step={0.1}
                      />
                      <div className="flex bg-priAccent w-12 my-5 py-2 rounded-xl items-center justify-center mx-auto">
                        <h3 className={`text-text-pri  ${secText.className}`}>{newEntry.value}</h3>
                      </div>
                    <h3 className={`ml-3 my-3 ${secText.className} text-text-pri `}>Note</h3>
                    <textarea value={newEntry.note} className={`w-[95%] border-1 mx-2 border-text-sec rounded-xs ${secText.className}`} placeholder="Add a note" onChange={(e) => setNewEntry({...newEntry, note: e.target.value})}></textarea>
                  </div>
              </DrawerContent>
            </DrawerHeader>
          </Drawer>
        </div>
      </div>
    </div>
  );
}
