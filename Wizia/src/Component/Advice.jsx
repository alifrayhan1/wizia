import { useState } from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    author: "John Doe",
    title: "Chief Strategy Officer",
    company: "Company",
  },
  {
    id: 2,
    quote:
      "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
    author: "Jane Smith",
    title: "Marketing Manager",
    company: "Company",
  },
  {
    id: 3,
    quote:
      "Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
    author: "David Lee",
    title: "CEO",
    company: "Company",
  },
];

function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[activeIndex];

  return (
    <>
      <section className="flex justify-between">
        <div className="flex justify-start items-center">
          <button
            onClick={handlePrev}
            className="bg-[#114a55] rounded-xl ml-2 h-10 w-10 flex justify-center items-center"
          >
           <img src="leftArrow.svg" alt="" />
          </button>
        </div>
        <div className="flex flex-col justify-center items-center space-y-5 p-10 sm:p-16">
          <div className="bg-[#114a55] rounded-full h-12 w-12 flex items-center justify-center">
            <img src="quote.svg" alt="" className="h-[50%]" />
          </div>
          <p className="text-whiteShades w-2/3">{currentTestimonial.quote}</p>
          <div className="text-center">
            <h3 className="text-primary font-semibold text-lg">
              {currentTestimonial.author}
            </h3>
            <p className="text-whiteShades text-xs">
              {currentTestimonial.title} @ {currentTestimonial.company}
            </p>
          </div>
          
        </div>
        <div className="flex justify-end items-center">
        <button
              onClick={handleNext}
               className="bg-[#114a55] rounded-xl mr-2 h-10 w-10 flex justify-center items-center"
            >
              <img src="rightArrow.svg" alt="" />
            </button>
        </div>
      </section>
    </>
  );
}

export default TestimonialCarousel;
