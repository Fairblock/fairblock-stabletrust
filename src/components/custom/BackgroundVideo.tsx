const BackgroundVideo = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <video
        className="
          absolute
          -rotate-140
          w-[500px]
          sm:w-[1000px]

          /* mobile center*/
          left-1/2 top-2/5 -translate-x-1/2 -translate-y-full

          /* desktop position */
          sm:translate-x-52
          sm:translate-y-0
          sm:left-auto
          sm:right-0
          sm:top-10
        "
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/s01-hero-animation-new.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
