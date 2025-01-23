// import React from "react";
import { Button } from "@heroui/react";

function Bannar() {
  return (
    <>
      <section className="bg-[url('Img.svg')] bg-cover bg-no-repeat">
        <div className="space-y-6 p-10 sm:p-16">
          <h3 className="text-lg sm:text-xl text-secondary text-center sm:text-start">AI SDRs (aiDRs)</h3>
          <h1 className="text-2xl sm:text-3xl text-white text-center sm:text-start sm:w-3/12">
            More <span className="italic">leads</span>, less
            <span className="italic"> people</span>
          </h1>
          <p className="text-sm sm:text-lg text-whiteShades sm:w-1/2 text-center sm:text-start">
            Train an aiDR on your ICP and messaging matrix. Activate it on a
            patch. It will send personalized sequences to every target contact.
          </p>
          <div className="flex justify-center items-center sm:justify-start">
          <Button
            color="primary"
            className="bg-primary rounded-full"
            endContent={<img src="buttonIcon.svg" />}
          >
            Sign Up for the Beta
          </Button></div>
        </div>
      </section>
    </>
  );
}

export default Bannar;
