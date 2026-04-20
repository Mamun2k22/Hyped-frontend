import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

// video imports (replace with your actual paths)
import s1 from "../../assets/s1.mp4";
import s2 from "../../assets/s2.mp4";

const Hero = () => {
  // Refs for video elements to ensure they play properly
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);
  const videoRef4 = useRef(null);

  useEffect(() => {
    // Ensure all videos play after component mounts
    const videos = [videoRef1.current, videoRef2.current, videoRef3.current, videoRef4.current];
    videos.forEach(video => {
      if (video) {
        video.play().catch(e => console.log("Video autoplay prevented:", e));
      }
    });
  }, []);

  return (
    <section className="overflow-hidden bg-[#f3eee8] px-6 pb-10 pt-[96px] md:pt-[108px] lg:px-8 lg:pt-[116px]">
      <div className="mx-auto max-w-[1360px]">
        {/* Top copy */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[1240px]"
        >
          <h1 className="max-w-[980px] text-[56px] font-bold leading-[0.88] text-black md:text-[82px] lg:text-[91px] xl:text-[91px]">
            Get Hyped. Get
            <br />
            Noticed. Get Results.
          </h1>

          <p className="mt-7 max-w-[380px] text-[26px] font-semibold leading-[1.08] tracking-[-0.04em] text-black md:text-[23px]">
            Klaar met gokken op content die niets oplevert?
          </p>
        </motion.div>

        {/* Mobile layout */}
        <div className="mt-10 grid gap-4 lg:hidden">
          <div className="relative h-[250px] rounded-[30px] bg-[#148cf3] p-6">
            <h2 className="text-[54px] font-black leading-none tracking-[-0.055em] text-black">
              10M+
            </h2>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-[22px] font-semibold leading-none text-black">
                Organische views
              </h3>
              <div className="mt-3 h-px bg-black/65" />
              <p className="mt-2 text-[15px] leading-[1.2] text-black/85">
                Groei door slimme content
              </p>
            </div>
          </div>

          <div className="h-[300px] overflow-hidden rounded-[30px]">
            <video
              ref={videoRef1}
              src={s1}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />
          </div>

          <div className="relative h-[250px] rounded-[30px] bg-[#3ccc91] p-6">
            <h2 className="text-[54px] font-black leading-none tracking-[-0.055em] text-black">
              30+
            </h2>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-[22px] font-semibold leading-none text-black">
                Merken geholpen
              </h3>
              <div className="mt-3 h-px bg-black/65" />
              <p className="mt-2 text-[15px] leading-[1.2] text-black/85">
                Van start-up tot multinational
              </p>
            </div>
          </div>

          <div className="h-[300px] overflow-hidden rounded-[30px]">
            <video
              ref={videoRef2}
              src={s2}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Desktop layout */}
        <div className="relative mt-12 hidden h-[470px] lg:block xl:h-[500px]">
          {/* Card 1 */}
          <div className="hero-card-idle absolute bottom-0 left-0 z-[1] h-[410px] w-[340px] rounded-[34px] bg-[#148cf3] p-7 transition-all duration-300 hover:-translate-y-2">
            <h2 className="text-[64px] font-black leading-none tracking-[-0.06em] text-black">
              10M+
            </h2>
            <div className="absolute bottom-7 left-7 right-7">
              <h3 className="text-[24px] font-semibold leading-none text-black">
                Organische views
              </h3>
              <div className="mt-3 h-px bg-black/65" />
              <p className="mt-2 text-[16px] leading-[1.2] text-black/85">
                Groei door slimme content
              </p>
            </div>
          </div>

          {/* Card 2 - Video s1 */}
          <div className="hero-video-tilt absolute bottom-[2px] left-[250px] z-[3] h-[405px] w-[320px] overflow-hidden rounded-[34px] transition-all duration-300 hover:-translate-y-2">
            <video
              ref={videoRef3}
              src={s1}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />
          </div>

          {/* Card 3 */}
          <div className="absolute bottom-0 left-[640px] z-[2] h-[435px] w-[350px] rounded-[34px] bg-[#3ccc91] p-7 transition-all duration-300 hover:-translate-y-2">
            <h2 className="text-[64px] font-black leading-none tracking-[-0.06em] text-black">
              30+
            </h2>
            <div className="absolute bottom-7 left-7 right-7">
              <h3 className="text-[24px] font-semibold leading-none text-black">
                Merken geholpen
              </h3>
              <div className="mt-3 h-px bg-black/65" />
              <p className="mt-2 text-[16px] leading-[1.2] text-black/85">
                Van start-up tot multinational
              </p>
            </div>
          </div>

          {/* Card 4 - Video s2 */}
          <div className="absolute bottom-[10px] right-0 z-[1] h-[412px] w-[300px] overflow-hidden rounded-[34px] transition-all duration-300 hover:-translate-y-2">
            <video
              ref={videoRef4}
              src={s2}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Add custom styles for the component */}
      <style jsx>{`
        .hero-card-idle,
        .hero-video-tilt {
          box-shadow: 0 20px 35px -12px rgba(0, 0, 0, 0.2);
        }
        .hero-card-idle:hover,
        .hero-video-tilt:hover {
          box-shadow: 0 28px 40px -15px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
};

export default Hero;