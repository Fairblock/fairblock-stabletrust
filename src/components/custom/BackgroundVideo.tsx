const BackgroundVideo = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 z-10 bg-linear-to-r from-white via-white/94 to-white/10 sm:via-white/76" />
      <video
        className="
          absolute
          -rotate-135
          opacity-55
          w-[620px]
          sm:w-[1080px]

          left-1/2 top-[38%] -translate-x-1/2

          sm:translate-x-44
          sm:left-auto
          sm:right-[-5rem]
          sm:top-[-8rem]
        "
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/s01-hero-animation.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
