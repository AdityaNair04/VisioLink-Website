import AnimatedTitle from "./AnimatedTitle";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} alt="" />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/contact-1.webp"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="/img/contact-2.webp"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="/img/swordman.webp"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase"></p>

          <AnimatedTitle
            title="let&#39;s b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t<b>o</b>gether."
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          {/* Team Information Box */}
          <div className="mt-10 w-full max-w-md rounded-lg bg-white p-6 text-black shadow-lg">
            <p className="mb-4">
              Aditya Nair -{" "}
              <a
                href="mailto:nairaditya004@gmail.com"
                className="text-blue-600 hover:underline"
              >
                nairaditya004@gmail.com
              </a>
            </p>
            <p className="mb-4">
              Rishit Goel -{" "}
              <a
                href="mailto:rg1114@gmail.com"
                className="text-blue-600 hover:underline"
              >
                rg1114@gmail.com
              </a>
            </p>
            <p className="mb-4">
              Aayush Kumar Fabwani -{" "}
              <a
                href="mailto:aayushfabwani2@gmail.com"
                className="text-blue-600 hover:underline"
              >
                aayushfabwani2@gmail.com
              </a>
            </p>
            <p className="mb-4">
              Amitej Singh Datta -{" "}
              <a
                href="mailto:amitejsingh5@gmail.com"
                className="text-blue-600 hover:underline"
              >
                amitejsingh5@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
