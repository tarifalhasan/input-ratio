import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto px-10">
        <div className="grid-8">
          <ul>
            <li>
              <label className="inline-flex items-center cursor-pointer">
                <input type="radio" className="hidden" name="radio" />
                <div className="relative w-[24.5px] h-[24.5px] mr-2">
                  <div className="absolute inset-0 rounded-full bg-transparent border-2 border-gray-400 transition-colors duration-300 hover:border-black check-hover"></div>
                  <div className="absolute inset-[3px] rounded-full bg-blue-500 opacity-0 transition-opacity checked"></div>
                </div>
                <span className="text-gray-700 font-medium">
                  Circle Input Ratio Button
                </span>
              </label>
            </li>
            <li>
              <label className="inline-flex items-center cursor-pointer">
                <input type="radio" className="hidden" name="radio" />
                <div className="relative w-[24.5px] h-[24.5px]   mr-2">
                  <div className="absolute inset-0 rounded-full bg-transparent border-2 border-gray-400 transition-colors duration-300 hover:border-black check-hover"></div>
                  <div className="absolute inset-[3px] hover:border-black rounded-full bg-blue-500 opacity-0 transition-opacity checked"></div>
                </div>
                <span className="text-gray-700 font-medium">
                  Circle Input Ratio Button
                </span>
              </label>
            </li>
            <li>
              <label className="inline-flex items-center cursor-pointer">
                <input type="radio" className="hidden" name="radio" />
                <div className="relative w-[24.5px] h-[24.5px] mr-2">
                  <div className="absolute inset-0 rounded-full bg-transparent border-2 border-gray-400 transition-colors duration-300 hover:border-black check-hover"></div>
                  <div className="absolute inset-[3px] rounded-full bg-blue-500 opacity-0 transition-opacity checked"></div>
                </div>
                <span className="text-gray-700 font-medium">
                  Circle Input Ratio Button
                </span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
