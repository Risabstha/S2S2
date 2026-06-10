const AboutMissionAndCollabrator = () => {
  return (
    <section className="w-full max-w-400 md:mt-50  mt-30 mx-auto bg-[#ebe9e3] px-4 sm:px-6 md:px-8 py-2 md:py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-30 md:gap-12">
        <div>
          <h2 className="text-[1.75rem] text-[#c18374] leading-[1.2] tracking-[-0.02em] font-semibold playfairDisplayDiv mb-4">
            About the
            <br />
            Mission
          </h2>
          <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#2f5064]/60 mb-4">
            Antarikchya Pratisthan Nepal
          </p>
          <p className="text-[15px] leading-[1.85] text-[#555]">
            Slippers2Sat-2 (S2S-2) is a 1U CubeSat initiated by Antarikchya
            Pratisthan Nepal (APN). Seven APN engineers are designing the
            satellite.
          </p>
        </div>

        <div>
          <h2 className="text-[1.75rem] text-[#c18374] leading-[1.2] tracking-[-0.02em] font-semibold playfairDisplayDiv mb-4">
            Mission
            <br />
            Partners
          </h2>
          <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#2f5064]/60 mb-4">
            UNOOSA · Exolaunch
          </p>
          <p className="text-[15px] leading-[1.85] text-[#555]">
            The United Nations Office for Outer Space Affairs promotes
            international cooperation in space and helps developing countries
            access space technology. Through its initiatives, it partners with{" "}
            <span className="text-black font-medium">Exolaunch</span> to
            support CubeSat missions — providing launch and deployment services
            that allow small satellites to reach orbit affordably, enabling
            emerging space nations worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMissionAndCollabrator;
