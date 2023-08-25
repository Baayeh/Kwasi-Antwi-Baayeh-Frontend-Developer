import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineMinusCircle,
  AiOutlineQuestionCircle,
} from 'react-icons/ai';
import { FaRegCircleDot } from 'react-icons/fa6';

interface CapsuleCardProps {
  capsule: Capsule;
}

const CapsuleCard: React.FC<CapsuleCardProps> = ({ capsule }) => {
  return (
    <div className="border border-gray-700 rounded-md p-5 grid place-content-between min-h-[10rem]">
      <div>
        <h2 className="font-bold">{capsule.serial}</h2>
        <p className="text-gray-400 text-sm">
          {capsule.last_update ? capsule.last_update : 'Not available'}
        </p>
      </div>

      <div className="mt-3 flex items-center gap-x-5">
        <div
          className="flex items-center gap-x-1 text-sm cursor-default"
          title="Status"
        >
          <span
            className={`${
              capsule.status === 'active'
                ? 'text-green-500'
                : capsule.status === 'retired'
                ? 'text-orange-400'
                : capsule.status === 'unknown'
                ? 'text-indigo-500'
                : 'text-red-500'
            }`}
          >
            {capsule.status === 'active' ? (
              <AiOutlineCheckCircle />
            ) : capsule.status === 'retired' ? (
              <AiOutlineMinusCircle />
            ) : capsule.status === 'unknown' ? (
              <AiOutlineQuestionCircle />
            ) : (
              <AiOutlineCloseCircle />
            )}
          </span>
          <span className="capitalize text-gray-400">{capsule.status}</span>
        </div>
        <div className="flex items-center gap-x-1 text-sm cursor-default">
          <span>
            <FaRegCircleDot />
          </span>
          <span className="capitalize text-gray-400">{capsule.type}</span>
        </div>
      </div>
    </div>
  );
};

export default CapsuleCard;

// active, retired, unknown, destroyed;
