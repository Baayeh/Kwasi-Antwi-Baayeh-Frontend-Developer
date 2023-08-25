import React from 'react';
import { CapsuleCard } from '../components';

const Capsules = () => {
  return (
    <section className="min-h-screen pt-[13rem] px-4 bg-main-img bg-cover bg-no-repeat">
      <h1>Capsules</h1>
      <div className="">
        <CapsuleCard />
      </div>
    </section>
  );
};

export default Capsules;
