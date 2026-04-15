const About = () => {
  return (
    <section>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center mb-12">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl ">
          We love
        </h1>
        <div className="bg-primary shadow-lg rounded-2xl px-4 py-2 sm:px-8 sm:py-4">
          <h2 className="text-primary-foreground text-4xl font-bold tracking-widest">
            Store
          </h2>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto text-muted-foreground text-center">
        Our journey began with a simple idea: that furniture should be more than just functional—it should be a reflection of one's personality and a testament to quality craftsmanship. Over the years, we have curated a selection of pieces that blend avant-garde aesthetics with practical comfort, ensuring that every corner of your home tells a story of elegance.
      </p>
    </section>
  );
};

export default About;
