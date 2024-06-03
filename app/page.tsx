'use client'
import { useEffect } from "react";
const TwitterRedirect = () => {

  const handleClick = () => {
    const sentence =
      'Vlad is sooo hot'; // Replace with your own sentence or use a random sentence generator
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      sentence
    )}`;
    // navigate to https://shapeshift.com/rareevo
    window.location.href = 'https://shapeshift.com/rareevo';
    window.open(url, '_blank');
  };

  useEffect(() => {
    if (!window.location.hash) {
      window.location.hash = 'init';
      handleClick();
      // auto close the window immediately
      window.close();
    }
  }, []);

  return (
    <img src="https://assets.coingecko.com/coins/images/9988/large/FOX.png?1696510025" alt="background" className="bg-image" />
  );
};

export default TwitterRedirect;
