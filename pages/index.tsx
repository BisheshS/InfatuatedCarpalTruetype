import type { NextPage } from 'next';
import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';


const Home: NextPage = () => {
  const [counter, setCounter] = useState<number>(12); // Initial counter value
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [isPhoneValid, setIsPhoneValid] = useState<boolean>(true);

  const handleFormSubmit = () => {
    // Validate email and phone
    const isEmailValid = validateEmail(email);
    const isPhoneValid = validatePhone(phone);

    setIsEmailValid(isEmailValid);
    setIsPhoneValid(isPhoneValid);

    // If email and phone are valid, proceed with form submission
    if (isEmailValid && isPhoneValid) {
      // Simulate form submission logic here
      // For demonstration purposes, let's simply increment the counter
      setCounter(prevCounter => prevCounter + 1);

      // Perform the actual form submission to the external URL
      const formElement = document.getElementById("registration-form") as HTMLFormElement;
      formElement.submit();
    }
  };

  const validateEmail = (email: string): boolean => {
    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    // Basic phone number validation
    const phonePattern = /^[0-9]{10}$/;
    return phonePattern.test(phone);
  };

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-semibold mb-4 transition duration-300 transform hover:scale-105 hover:text-blue-500">
          thirty days no vices challenge
        </h1>

        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-2">about</h2>
          <p className="text-gray-700">
            embark on a journey of self-discovery and growth<br></br>join our 30-day challenge designed to help you know yourself better and become independent of your vices.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-2">Program Rules</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>No indulgence or vices for 30 days</li>
            <li>Work on daily goals like 100 pushups, writing a book, creating music, or running 3 miles</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4"></h2>
          <form id="registration-form" action="https://submit-form.com/81BG540J" className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 text-gray-700 placeholder-gray-500" />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required className={`w-full px-4 py-2 rounded-md border ${isEmailValid ? 'border-gray-300' : 'border-red-500'} focus:outline-none focus:border-blue-500 text-gray-700 placeholder-gray-500`} />
              {!isEmailValid && <p className="text-red-500 text-sm">Please enter a valid email address.</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700 mb-1">Phone Number</label>
              <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required className={`w-full px-4 py-2 rounded-md border ${isPhoneValid ? 'border-gray-300' : 'border-red-500'} focus:outline-none focus:border-blue-500 text-gray-700 placeholder-gray-500`} />
              {!isPhoneValid && <p className="text-red-500 text-sm">Please enter a valid 10-digit phone number.</p>}
            </div>

            <div>
              <label htmlFor="instagram" className="block text-gray-700">Instagram ID</label>
              <input type="text" id="instagram" name="instagram" placeholder="Your Instagram ID" required className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 text-gray-700 placeholder-gray-500" />
            </div>

            <div>
              <label htmlFor="vices" className="block text-gray-700">Vices (eg: alcohol, binging, retail therapy, addiction and etc)</label>
              <input type="text" id="vices" name="vices" placeholder="Enter other vices" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 text-gray-700" />
            </div>

            <div>
              <label htmlFor="goals" className="block text-gray-700">Goals (eg: learn backflip, build abs, build an app, create a song, write something..etc)</label>
              <textarea id="goals" name="goals" placeholder="Enter your other goals here" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 text-gray-700 placeholder-gray-500"></textarea>
            </div>

            <button type="button" onClick={handleFormSubmit} className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 font-semibold text-lg transition duration-300 transform hover:scale-105">
              Register
            </button>
          </form>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-700">Join the {counter} people who have already registered!</p>
        </div>
      </div>
    </div>
  );
}

export default Home;