function Hero() {
  return (
    <section className="bg-hero-img bg-no-repeat bg-cover relative h-screen text-white before:w-full before:h-full before:absolute before:bg-black/50 before:top-0 before:left-0 before:z-0">
      <div className="flex flex-col justify-center items-center h-full">
        <article className="text-center w-full md:w-1/2 z-10">
          <h1 className="text-5xl md:text-7xl my-5 font-bold">myTunes</h1>
          <p className="my-5 font-semibold text-xl">
            Your music, movies, and TV shows take center stage.
          </p>
          <p>
            myTunes is the best way to organize and enjoy the music, movies, and
            TV shows you already have — and shop for the ones you want. Enjoy
            all the entertainment myTunes has to offer on your Mac and PC.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Hero;
