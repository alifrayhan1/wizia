import React from "react";

function Features() {
  const info = [
    {
      img: "/infoLogo.svg",
      heading: "You’re in Control",
      text: "aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.",
    },
    {
      img: "/infoLogo1.svg",
      heading: "Infinitely Scalable",
      text: "Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.",
    },
    {
      img: "/infoLogo2.svg",
      heading: "Incredibly Flexible",
      text: "Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.",
    },
  ];

  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-10 sm:p-16 bg-[#002228]">
        {info.map((data, index) => (
          <div
            key={index}
            className=" rounded-lg p-4 flex flex-col"
          >
            <img
              src={data.img}
              alt={data.heading}
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
              {data.heading}
            </h3>
            <p className="text-sm sm:text-lg text-whiteShades">{data.text}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export default Features;

