import satelliteImg1 from "../../assets/client/AmateurRadio/Img/1.webp";
import satelliteImg2 from "../../assets/client/AmateurRadio/Img/3.webp";
import satelliteImg3 from "../../assets/client/AmateurRadio/Img/4.webp";
import satelliteImg4 from "../../assets/client/AmateurRadio/Img/5.webp";


const Satellite = () => {
  const collageImages = [
    satelliteImg1,
    satelliteImg2,
    satelliteImg3,
    satelliteImg4,
  ];
  const isImageVisible = true;

  return (
    <div className="w-full max-w-400 mx-auto mt-30 md:mt-49 grid  grid-cols-1 md:grid-cols-2 items-stretch gap-4 lg:gap-6 md:gap-4 xl:gap-8 px-3 sm:px-4 md:px-6 py-4 bg-[#ebe9e3]">
      <div className="w-full p-2 md:p-4 lg:p-8 xl:p-12 flex flex-col justify-center min-h-auto xl:min-h-128 ">
        <h2 className="text-[clamp(2rem,4vw,3.2rem)] leading-[1.1] m-0 playfairDisplayDiv max-w-137.5 text-[#C18374]">
          Slippers2Sat-2
          <br />
          <em className="text-[#2f5064] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-italic">
            &amp; Educational Project
          </em>
        </h2>
        <p className="mt-4 sm:mt-5 text-[15px] xl:text-[18px] lg:text-[16px] md:text-[14px] leading-relaxed text-black/55 max-w-full lg:max-w-[65ch]">
          S2S-2 aims to uplift, encourage, and educate marginalized,
          impoverished, and aboriginal communities of Nepal. It specifically
          focuses on middle school students (grades 7 and 8), providing them
          with scholarships for one to three years while they receive both
          school education and satellite training. In early 2024, the Senior
          S2S-2 Team from APN conducted an "Amateur Radio and Satellite
          Bootcamp" in Bardibas, and Surkhet.
        </p>
      </div>

      <div
      // size of the collage container is determined by the size of the images, so it is not necessary to set a fixed height. The aspect ratio of the images will ensure that they fit within the container without distortion.
        className="w-full lg:max-w-lg md:max-w-md mx-auto bg-[#dedad3] 
        rounded-br-3xl sm:rounded-br-4xl md:rounded-br-[44px] xl:rounded-br-[56px]
        rounded-tl-3xl sm:rounded-tl-4xl md:rounded-tl-[44px] xl:rounded-tl-[56px]
        rounded-tr-3xl sm:rounded-tr-4xl md:rounded-tr-[44px] xl:rounded-tr-[56px]
        p-1.5 sm:p-2"
      >
        <div className="grid grid-cols-2 auto-rows-fr w-full xl:p-1 md:p-0.5 p-0 overflow-hidden xl:gap-2 lg:gap-1.5 md:gap-1 gap-0.5 rounded-2xl">
          {collageImages.map((image, imageIndex) => (
            <div
              key={`${image}-${imageIndex}`}
              className={`relative w-full aspect-square min-w-0 rounded-sm p-0.5 pb-0.5 shadow-[0_3px_10px_rgba(0,0,0,0.1)]
                rounded-br-3xl sm:rounded-br-4xl md:rounded-br-[44px] xl:rounded-br-[56px]
                rounded-tl-3xl sm:rounded-tl-4xl md:rounded-tl-[44px] xl:rounded-tl-[56px]
                ${imageIndex === 1 ? "rounded-tr-3xl sm:rounded-tr-4xl md:rounded-tr-[44px] xl:rounded-tr-[56px]" : ""}
                overflow-hidden`}
            >
              <img
                src={image}
                alt={`Satellite collage ${imageIndex + 1}`}
                className={`absolute inset-0 w-full h-full object-cover rounded-xs transition-all duration-500 ease-out ${
                  isImageVisible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-2 scale-95"
                } ${
                  imageIndex === 0
                    ? "delay-0"
                    : imageIndex === 1
                      ? "delay-75"
                      : imageIndex === 2
                        ? "delay-150"
                        : "delay-200"
                }`}
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Satellite;
