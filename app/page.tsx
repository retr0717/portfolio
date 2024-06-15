import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div>
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            {/*text*/}
            <div className="text-center xl:text-left">
              <span className="text-xl">Full Stack Developer</span>
              <h1 className="h1 mb-6">
                Hola I'm <br />
                <span className="text-accent">Alwin Aji</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                I'm a Full Stack Developer based in India. Proficient in various
                programming languages and frameworks. I have a passion for
                developing and designing scalable web applications.
              </p>
            </div>
            {/*photo*/}
            <div>Photo</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
