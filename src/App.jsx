import React, { useState } from "react";
import "./App.css";

function App() {
  const imgSlides = [
    { id: 0, value: "https://sanilkumarassociates.com/images/bg/s2.jpg" },
    { id: 1, value: "https://sanilkumarassociates.com/images/bg/s3.jpg" },
    { id: 2, value: "https://sanilkumarassociates.com/images/bg/s4.jpg" },
    { id: 3, value: "https://sanilkumarassociates.com/images/bg/s5.jpg" },
    { id: 4, value: "https://sanilkumarassociates.com/images/bg/s6.jpg" },
  ];
  const [imageData, setImageData] = useState(imgSlides[0]);
  const handleClick = (index) => {
    const imgSlider = imgSlides[index];
    setImageData(imgSlider);
  };
  const handlePrevious = () => {
    const currentIndex = imgSlides.findIndex((img) => img.id === imageData.id);
    if (currentIndex > 0) {
      const previousIndex = currentIndex - 1;
      const previousImg = imgSlides[previousIndex];
      setImageData(previousImg);
    } else {
      const lastImg = imgSlides[imgSlides.length - 1];
      setImageData(lastImg);
    }
  };
  const handleNext = () => {
    const currentIndex = imgSlides.findIndex((img) => img.id === imageData.id);
    if (currentIndex < imgSlides.length - 1) {
      const nextIndex = currentIndex + 1;
      const nextImg = imgSlides[nextIndex];
      setImageData(nextImg);
    } else {
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