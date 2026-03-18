// import ardc from "../../assets/client/partner/Ardc.jpeg"
import unoosa from "../../assets/client/partner/UNOOSA.webp";
import antarikc from "../../assets/client/partner/antarikchya.webp";
import s2s2 from "../../assets/client/s2s2logo.webp";

const Collabration = () => {
  return (
    <div className="flex-col  ">
      
      <p className="text-[12px] mb-5 md:mb-10 mt-8 md:mt-20 flex justify-center uppercase tracking-[0.14em] text-black/45">
        In Collabration with
      </p>
      <div className="flex justify-center m-auto items-center flex-wrap gap-x-6 gap-y-4 max-w-full md:max-w-none md:flex-nowrap md:gap-x-10">
        {/* <img src={ardc} alt="ARDC Logo" width={110}  /> */}
        <img src={antarikc} alt="Antarikc Logo" className="basis-[45%] max-w-25 md:basis-auto lg:w-27.5 md:w-25 w-20" />
        <img src={s2s2} alt="S2S2 Logo" className="basis-[45%] max-w-25 md:basis-auto lg:w-27.5 md:w-25 w-20" />
        <img src={unoosa} alt="UNOOSA Logo" className="basis-[45%] max-w-30 md:basis-auto lg:w-32.5 md:w-30 w-25" />
      </div>


    </div>
  );
};

export default Collabration;
