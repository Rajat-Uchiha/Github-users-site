import React, { useEffect, useState } from "react";

const Usercard = () => {
  //To save that fetchedData we are going to use useState to save it;
  const [FetchedUsers, setFetchedUsers] = useState([]);

  //whenever we want to do something when the page is reloaded or we want to perform something whenever an event takes place, we use useEffect hook.
  const getUsers = async () => {
    try {
      setLoader(true);
      const response = await fetch("https://api.github.com/users");
      const fetchedData = await response.json();
      setFetchedUsers(fetchedData);
      setLoader(false);
    } catch (e) {
      setLoader(false);
      console.log("Something went wrong while fetching" + e);
    }
  };

  //*UseEffect
  useEffect(() => {
    //It just invokes a function getUsers()
    getUsers();
  }, []);

  //*Loader
  const [Loader, setLoader] = useState(true); //initially loading is going on

  if (Loader) {
    return (
      <div className="flex w-full min-h-screen bg-yellow-500 justify-center items-center">
        <h1 className="text-6xl text-center text-white">Loading...</h1>
      </div>
    );
  } else {
    return (
      <>
        {FetchedUsers.map((curElem) => {
          return (
            <div
              key={curElem.id}
              id="userCard"
              className="flex font-Nunito flex-col px-16 py-8 drop-shadow-xl rounded-lg bg-gray-200 m-10 flex-wrap justify-center items-center  "
            >
              <div>
                <img
                  src={curElem.avatar_url}
                  alt="avatar_img"
                  className="w-24 h-24 rounded-full"
                />
              </div>
              <div className="pt-4">
                <h3 className="text-gray-800 text-xl">{curElem.login}</h3>
              </div>
              <div>
                <h3 className="text-gray-800">Developer</h3>
              </div>
              <div className="flex justify-center items-center w-full mt-4 ">
                <div className="flex flex-col justify-center items-center mx-2">
                  <h1 className="text-gray-800 ">Articles</h1>
                  <h3 className="text-gray-800">39</h3>
                </div>
                <div className="flex flex-col justify-center items-center mx-2">
                  <h1 className="text-gray-800 ">Followers</h1>
                  <h3 className="text-gray-800">
                    {curElem.followers_url.length}
                  </h3>
                </div>
                <div className="flex flex-col justify-center items-center mx-2">
                  <h1 className="text-gray-800 ">Ratings</h1>
                  <h3 className="text-gray-800"> 7.9</h3>
                </div>
              </div>
              <div className="mt-6">
                <a href={curElem.html_url}>
                  <button className="border-2 bg-purple-700 border-white text-white rounded-lg px-3 py-2  hover:bg-purple-800 mx-4">
                    Github
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </>
    );
  }
};

export default Usercard;
