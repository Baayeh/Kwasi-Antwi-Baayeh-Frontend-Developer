import React, { useEffect } from 'react';
import { selectCapsules, setCapsules } from '../app/capsuleSlice';
import { CapsuleCard, Loader } from '../components';
import { useAppSelector, useFetch } from '../hooks';

const Capsules = () => {
  const { capsules } = useAppSelector(selectCapsules);
  const { loading, fetchData, error } = useFetch('/capsules', setCapsules);

  const getContent = () => {
    if (loading) {
      return <Loader />;
    } else if (error) {
      return (
        <div className="col-span-1 md:col-span-2 lg:col-span-3 font-semibold text-red-500 text-xl text-center">
          {error}
        </div>
      );
    } else {
      return (
        <>
          {capsules &&
            capsules.map((capsule) => (
              <CapsuleCard key={capsule.id} capsule={capsule} />
            ))}
        </>
      );
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="min-h-screen pt-[8rem] px-4 bg-main-img bg-cover bg-no-repeat pb-10">
      <div className="wrapper lg:w-[60rem] mx-auto">
        <h1 className="text-white text-3xl mb-4">
          Search and Pagination goes here
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {getContent()}
        </div>
      </div>
    </section>
  );
};

export default Capsules;
