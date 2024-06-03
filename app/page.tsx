'use client'
import { useEffect } from "react";
const TwitterRedirect = () => {

  const handleClick = () => {
    const sentence =
      'Vlad is sooo hot'; // Replace with your own sentence or use a random sentence generator
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      sentence
    )}`;
    window.open(url, '_blank');
  };

  useEffect(() => {
    handleClick();
  }, []);


  return (
    <div>
      <h1>Twitter Redirect</h1>
      <button onClick={handleClick}>Tweet</button>
    </div>
  );
};

export default TwitterRedirect;