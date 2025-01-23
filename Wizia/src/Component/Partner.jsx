// import React from "react";

function Partner() {
  const partnerLogos = [
    "partnerLogo1.svg",
    "partnerLogo2.svg",
    "partnerLogo3.svg",
    "partnerLogo4.svg",
    "partnerLogo5.svg",
  ];

  return (
    <>
      <section className="py-5">
        <h1 className="text-2xl sm:text-3xl font-semibold sm:font-bold text-secondary text-center mb-8">
          Our Trusted Partners
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-5 w-[70%] justify-items-center items-center mx-auto gap-4">
          {partnerLogos.map((logo, index) => (
            <div
              key={index}
              className={`${
                index === 4 ? "col-span-2 sm:col-span-1 flex justify-center" : ""
              }`}
            >
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="w-full max-w-[100px]"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Partner;

