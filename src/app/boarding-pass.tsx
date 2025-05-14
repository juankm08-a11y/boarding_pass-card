"use client";
import Image from "next/image";
import React from "react";
export default function BoardingPass() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-orange-400 p-4">
      <div className="w-full max-w-3xl relative">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-row">
          <div className="w-1/4 p-6 flex flex-col items-center justify-center border-r border-dashed border-gray-200 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-orange-500 rounded-full"></div>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-orange-500 rounded-full"></div>

            <img
              src="/qr-code.png"
              alt="Boarding QR Code"
              width={120}
              height={120}
              className="mb-2"
            />
          </div>

          <div className="w-2/4 p-6 flex flex-col">
            <div className="flex justify-between mb-6">
              <div className="mr-4">
                <p className="text-gray-500 text-xs">Mumbai,</p>
                <p className="text-gray-500 text-xs">India</p>
                <h2 className="text-navy-800 text-3xl font-bold">BOM</h2>
                <p className="text-gray-500 text-xs">
                  Wed, July 27<sup>th</sup>
                </p>
                <p className="text-gray-500 text-xs">1:00 AM</p>
              </div>

              <div className="flex items-center self-center mx-4">
                <div className="border-t border-dotted border-gray-300 w-16"></div>
                <div className="mx-2">
                  <Image
                    src="/airplane-icon.png"
                    alt="Airplane"
                    width={16}
                    height={16}
                  />
                </div>
                <div className="border-t border-dotted border-gray-300 w-16"></div>
              </div>

              <div className="ml-4">
                <p className="text-gray-500 text-xs">Amsterdam,</p>
                <p className="text-gray-500 text-xs">Netherlands</p>
                <h2 className="text-navy-800 text-3xl font-bold">AMS</h2>
                <p className="text-gray-500 text-xs">
                  Thu, July 27<sup>th</sup>
                </p>
                <p className="text-gray-500 text-xs">8:30 AM</p>
              </div>
            </div>

            <div className="mt-auto grid grid-cols-5 gap-4 text-xs pt-4 border-t border-gray-100">
              <div>
                <p className="text-gray-400">Passenger</p>
                <p className="font-medium">Nikita Sharma</p>
              </div>
              <div>
                <p className="text-gray-400">Seat</p>
                <p className="font-medium">4A</p>
              </div>
              <div>
                <p className="text-gray-400">Terminal</p>
                <p className="font-medium">D</p>
              </div>
              <div>
                <p className="text-gray-400">Gate</p>
                <p className="font-medium">32</p>
              </div>
              <div>
                <p className="text-gray-400">Boarding</p>
                <p className="font-medium">12:40 PM</p>
              </div>
            </div>
          </div>

          <div className="w-1/4 bg-navy-900 text-white flex flex-col">
            <div className="h-full flex flex-col justify-between">
              <div className="p-4 flex items-center justify-center">
                <span className="text-xs font-medium tracking-wider">
                  Boarding Pass
                </span>
              </div>

              <div className="p-4 flex justify-center items-end h-full">
                <div className="text-yellow-400 font-bold text-sm">
                  JET AIRWAYS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
