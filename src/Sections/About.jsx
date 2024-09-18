import React from "react";
import Globe from "react-globe.gl";

const About = () => {
  return (
    <section className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Hi, I'm Vivek</p>
              <p className="grid-subtext">
                I’m a passionate full-stack web developer dedicated to crafting
                intuitive and responsive web applications. With a strong
                foundation in both front-end and back-end technologies, I enjoy
                transforming ideas into functional solutions. I’m eager to
                collaborate and bring innovative projects to life!
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/newGrid2.png"
              alt="grid-2"
              className="w-full sm:w-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Teck Stack</p>
              <p className="grid-subtext">
                I specialize in Javascript with focus on React and Python
                ecosystem.
              </p>
            </div>
          </div>
          <div className="col-span-1 xl:row-span-4 ">
            <div className="grid-container">
              <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                <Globe
                  height={326}
                  width={326}
                  backgroundColor="rgba(0,0,0,0)"
                  backgroundImageOpacity={0.5}
                  showAtmosphere
                  showGraticules
                  globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                  bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                />
              </div>
              <div>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
