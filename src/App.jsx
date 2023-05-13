import React, { useState } from "react";
import "./App.css";

function App() {
  //Array of image objects , each containing an id and a value and URL of the image( these images are from one of my website )
  const imgSlides = [
    { id: 0, value: "https://sanilkumarassociates.com/images/bg/s2.jpg" },
    { id: 1, value: "https://sanilkumarassociates.com/images/bg/s3.jpg" },
    { id: 2, value: "https://sanilkumarassociates.com/images/bg/s4.jpg" },
    { id: 3, value: "https://sanilkumarassociates.com/images/bg/s5.jpg" },
    { id: 4, value: "https://sanilkumarassociates.com/images/bg/s6.jpg" },
  ];
  
  //State variable used for which image to display
  const [imageData, setImageData] = useState(imgSlides[0]);
  //Function used to handle when a thumbnail is clicked 
  const handleClick = (index) => {
    const imgSlider = imgSlides[index];
    setImageData(imgSlider);
  };
  //Event handler used to go to previous image
  const handlePrevious = () => {
    // Find the index of the current image slide in the imgSlides array
    const currentIndex = imgSlides.findIndex((img) => img.id === imageData.id);
    if (currentIndex > 0) {
      // If the current slide is not the first one, show the previous slide
      const previousIndex = currentIndex - 1;
      const previousImg = imgSlides[previousIndex];
      setImageData(previousImg);
    } else {
      // If the current slide is the first one, show the last slide
      const lastImg = imgSlides[imgSlides.length - 1];
      setImageData(lastImg);
    }
  };
  //Event hadler used to go to next image
  const handleNext = () => {
    // Find the index of the current image slide in the imgSlides array
    const currentIndex = imgSlides.findIndex((img) => img.id === imageData.id);
    if (currentIndex < imgSlides.length - 1) {
      // If the current slide is not the last one, show the next slide
      const nextIndex = currentIndex + 1;
      const nextImg = imgSlides[nextIndex];
      setImageData(nextImg);
    } else {
      // If the current slide is the last one, show the first slide
      const firstImg = imgSlides[0];
      setImageData(firstImg);
    }
  };
  return (
    <div className="h-screen flex items-center text-center bg-[#ddd]">
      <div className="mx-auto">
        <img
          className="shadow-2xl w-[100%] h-[500px]"
          src={imageData.value}
          alt="Selected wallpaper"
        />
        <div className="flex justify-center pt-5">
          {imgSlides.map((data, i) => (
            <div className=" h-10" key={i}>
              <img
                style={{ height: "70px", width: "100px", margin: "2px" }}
                className={imageData.id === i ? "border-4 border-gray-700" : ""}
                src={data.value}
                onClick={() => handleClick(i)}
                width="100"
                alt="Thumbnail"
              />
            </div>
          ))}
        </div>
        <div className="buttons">
          <button
            className="text-white absolute left-[100px] w-[100px] top-1/2  px-4 py-2 bg-gray-700 rounded-xl"
            onClick={handlePrevious}
          >
            Previous
          </button>
          <button
            className="text-white absolute right-[100px] w-[100px] top-1/2 px-4 py-2 bg-gray-700 rounded-xl"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
