import Button from '@/components/form/Button';
import SectionTitle from '@/components/shared/SectionTitle';
import { FiCoffee } from 'react-icons/fi';
import { HiOutlineChartBar, HiOutlineFire, HiOutlineUsers } from 'react-icons/hi';
import ProgressBar from '@/components/shared/ProgressBar';

const AboutSection = () => {
  return (
    <>
      <p id="about"></p>
      <SectionTitle>About Me</SectionTitle>

      <div className="grid grid-cols-1 gap-6 py-6 md:grid-cols-2 lg:gap-8">
        {/* Bio */}
        <div className="">
          <p className="text-justify">
          I'm a versatile Full Stack Developer with expertise in both Java and Python stacks. I specialize 
          in building scalable web applications and APIs, focusing on backend technologies like Spring Boot,
          Flask, and FastAPI. On the frontend, I craft responsive and dynamic user interfaces using React, 
          Tailwind CSS, and Material UI. With a strong foundation in MySQL and Redis for database management,
           I aim to deliver high-quality software solutions that are both efficient and user-friendly.
          </p>
          <a href="/pradeep_resume.pdf" download>
            <Button className="mt-5">Download Resume</Button>
          </a>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-4">
          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">Backend</h6>
              <p>90%</p>
            </div>
            <ProgressBar color="blue" progress={90} />
          </div>
          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">Frontend</h6>
              <p>75%</p>
            </div>
            <ProgressBar color="amber" progress={75} />
          </div>

          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">Database</h6>
              <p>90%</p>
            </div>
            <ProgressBar color="rose" progress={90} />
          </div>
          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">Tools</h6>
              <p>85%</p>
            </div>
            <ProgressBar color="green" progress={85} />
          </div>
        </div>
      </div>

    </>
  );
};

export default AboutSection;
