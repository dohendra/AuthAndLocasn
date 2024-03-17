// import React from 'react';

export default function Home() {
  return (
    <div className='px-4 py-12 max-w-2xl mx-auto'>
      <h1 className='text-3xl font-bold mb-4 text-black-900'>
        Welcome to my AuthAndLocasn!
      </h1>
      <p className='mb-4 text-gray-800'>
        This is a full-stack web application built with the MERN (MongoDB,
        Express, React, Node.js) stack. It includes authentication features that
        allow users to sign up, log in, and log out, and provides access to
        protected routes only for authenticated users.
      </p>
      <p className='mb-4 text-gray-800'>
        The front-end of the application is built with React and uses React
        Router for client-side routing. The back-end is built with Node.js and
        Express, and uses MongoDB as the database. Authentication is implemented
        using JSON Web Tokens (JWT).
      </p>
      <div className="border-b-2 border-gray-200 mb-6"></div>
      <h2 className='text-xl font-bold mb-4 text-black'>
        Tasks:
      </h2>
      <ol className="list-decimal list-inside mb-4 text-gray-800">
        <li className="mb-2">
          Setup User Authentication:
          <ul className="list-disc list-inside">
            <li>Register screen with required fields: Name, Email, Password, Mobile, Zip Code, Profile Picture.</li>
            <li>Login screen with Email and Password.</li>
          </ul>
        </li>
        <li className="mb-2">
          Create User Collection:
          <ul className="list-disc list-inside">
            <li>Create a user collection in MongoDB and add 20 users to the collection.</li>
            <li>User Model: Name, Email, Password, Phone, Mobile, Zip Code, Profile Picture, Latitude, Longitude.</li>
          </ul>
        </li>
        <li className="mb-2">
          Users Profile Page:
          <ul className="list-disc list-inside">
            <li>Allow users to update their information (Name, Email, Password, Phone, Mobile, Address, Profile Picture) after login.</li>
          </ul>
        </li>
        <li className="mb-2">
          Find Nearest User Page:
          <ul className="list-disc list-inside">
            <li>List 5 users (with name, profile picture, email, phone) nearest to the logged-in user`&apos`s location.</li>
          </ul>
        </li>
      </ol>
    </div>
  );
}
