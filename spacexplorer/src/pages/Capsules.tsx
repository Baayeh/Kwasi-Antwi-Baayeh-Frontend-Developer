import { useEffect, useState } from 'react';
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';
import { selectCapsules, setCapsules } from '../app/capsuleSlice';
import {
  CapsuleCard,
  CapsuleDetails,
  Loader,
  Paginator,
} from '../components';
import { useAppSelector, useFetch } from '../hooks';

const Capsules = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [capsulesPerPage] = useState(6);

  // get single capsule
  const [singleCapsule, setSingleCapsule] = useState<Capsule | null>(null);
  const [visible, setVisible] = useState(false);
  const showCapsuleDialog = (item: Capsule) => {
    setVisible(true);
    setSingleCapsule(item);
  };

  // Fetching capsules
  const { capsules } = useAppSelector(selectCapsules);
  const { loading, fetchData, error } = useFetch(`/capsules`, setCapsules);

  // Get current capsules per page
  const getCurrentCapsules = (data: Capsule[]) => {
    const indexOfLastCapsule = currentPage * capsulesPerPage;
    const indexOfFirstCapsule = indexOfLastCapsule - capsulesPerPage;
    const currentCapsules = data.slice(indexOfFirstCapsule, indexOfLastCapsule);

    return currentCapsules;
  };

  // calculate total pages
  const totalPages = capsules
    ? Math.ceil(capsules.length / capsulesPerPage)
    : 0;

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
            getCurrentCapsules(capsules).map((capsule) => (
              <CapsuleCard key={capsule.capsule_serial} capsule={capsule} />
            ))}
        </>
      );
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="min-h-screen pt-[8rem] px-4 bg-main-img bg-cover bg-no-repeat bg-fixed pb-10">
      <div className="wrapper lg:w-[60rem] mx-auto">
        <Paginator
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {getContent()}
        </div>
      </div>

      {visible && (
        <CapsuleDetails
          visible={visible}
          setVisible={setVisible}
          capsule={singleCapsule}
        />
      )}
    </section>
  );
};

export default Capsules;
