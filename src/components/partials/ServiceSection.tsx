import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';
import SectionTitle from '@/components/shared/SectionTitle';
import { frontend , backend , database ,tools} from '@/data/services';

const bgClasses = [
  'bg-gray-200',
  'bg-yellow-400',
  'bg-pink-400',
  'bg-purple-500',
  'bg-green-500',
  'bg-blue-500',
  'bg-red-500',
  'bg-slate-500',
  'bg-teal-500',
];

const getBackgroundClass = (index: number) => {
  return bgClasses[index % bgClasses.length];
};

const ServiceSection = () => {
  return (
    <>
      <p id="skills"></p>
      <SectionTitle>Skills</SectionTitle>

      <h4 className="pt-10 p-3 text-2xl font-bold">Frontend</h4>
      <div className="grid gap-8  md:grid-cols-6">
        {frontend.map((frontend, index) => (
          <div key={index}
            className={classNames('rounded-2xl py-4  text-center shadow-md  md:px-8 bg-gray-200')} >
            <Image src={frontend.image} height={80} width={80} alt={frontend.name} />
          </div>
        ))}
      </div> 

      <h4 className="p-3 text-2xl font-bold">Backend</h4>
      <div className=" grid gap-8  md:grid-cols-6">
        {backend.map((backend, index) => (
          <div key={index}
            className={classNames('rounded-2xl py-4  text-center shadow-md  bg-gray-200')} >
            <Image src={backend.image} height={100} width={140} alt={backend.name} />
          </div>
        ))}
      </div> 

      <h4 className="pt-10 p-3 text-2xl font-bold">Database</h4>
      <div className="grid gap-8  md:grid-cols-6">
        {database.map((database, index) => (
          <div key={index}
            className={classNames('rounded-2xl py-4  text-center shadow-md  md:px-8 bg-gray-200')} >
            <Image src={database.image} height={80} width={80} alt={database.name} />
          </div>
        ))}
      </div> 

      <h4 className="pt-10 p-3 text-2xl font-bold">Tools &  Technologies</h4>
      <div className="grid gap-8  md:grid-cols-6">
        {tools.map((tools, index) => (
          <div key={index}
            className={classNames('rounded-2xl py-4  text-center shadow-md  md:px-8 bg-gray-200')} >
            <Image src={tools.image} height={100} width={160} alt={tools.name} />
          </div>
        ))}
      </div> 

 



    </>
  );
};

export default ServiceSection;
