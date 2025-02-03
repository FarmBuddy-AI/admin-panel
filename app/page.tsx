"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <section className="h-[100vh] bg-gradient-to-b from-white to-[#E6F8FC] py-16 md:py-24 text-gray-800 flex justify-end items-center">
      <div className="container mx-auto px-4 text-center flex justify-end items-center flex-col">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold my-6 text-gray-800 leading-tight">
          YAWA ENTERPRISE SOLUTION (YES)
        </h2>
        <p className="text-xl md:text-2xl font-semibold mb-8 text-gray-700">
          For National Emergency Response, Situational Awareness, and Citizen-Driven Reporting in Nigeria
        </p>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8 mb-12">
          <ul className="text-left text-lg mb-8 space-y-4">
            <li className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-[#03BDE9]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Rapid Emergency Response Coordination
            </li>
            <li className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-[#03BDE9]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Real-time Situational Awareness
            </li>
            <li className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-[#03BDE9]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Citizen-Driven Incident Reporting
            </li>
            <li className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-[#03BDE9]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Integrated Data Analytics for Informed Decision-Making
            </li>
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button 
            onClick={() => router.push('/auth/login')}
            className="bg-[#03BDE9] hover:bg-[#029BC1] text-white font-bold py-3 px-6 rounded-none text-lg transition-colors duration-300"
          >
            Login
          </Button>
          <Button 
            variant="outline"
            onClick={() => router.push('/auth/verify')}
            className="border-[#03BDE9] text-[#03BDE9] hover:bg-[#03BDE9] hover:text-white font-bold py-3 px-6 rounded-none text-lg transition-colors duration-300"
          >
            Verify Your Account
          </Button>
        </div>
      </div>
    </section>
  );
}
