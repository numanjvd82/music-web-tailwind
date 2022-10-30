function ImageSection() {
  return (
    <section className="bg-promotion-img h-[800px] relative my-6 bg-cover bg-no-repeat text-white object-cover before:w-full before:h-full before:absolute before:bg-black/50 before:top-0 before:left-0 before:z-0">
      <section className="flex flex-col justify-center items-center h-full md:w-1/2 mx-auto">
        <article className="z-10 text-center">
          <h1 className="text-2xl md:text-3xl font-semibold mb-4">
            A world of entertainment. Available Wherever you are.{' '}
          </h1>
          <p className="font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            aliquid eum ea beatae iusto praesentium placeat aperiam. Nobis nam
            officia rerum quasi, minima fugiat quis cumque velit corrupti natus,
            sunt error, iusto eveniet quas. Iure inventore delectus dolores
            impedit placeat, sed quos porro aliquid est modi tempora expedita
            harum quibusdam vel cum doloremque non, dolorem nisi repellendus
            quisquam assumenda neque.
          </p>
        </article>
      </section>
    </section>
  );
}

export default ImageSection;
