import { useSkeletonCount } from "../../hooks/useSkeletonCount";

const Skeleton = () => {
  const skeletonCount = useSkeletonCount();

  return (
    <div className="flex justify-center">
      <div className="max-w-[88rem] w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-2">
          {[...Array(skeletonCount)].map((_, index) => (
            <div key={index}>
              <div
                className={`h-[18rem] rounded-xl bg-gray-200
                }`}
              >
                <div
                  className={`h-[70%] rounded-t-xl bg-gray-300
                  }`}
                />
                <div className="p-4 space-y-2">
                  <div
                    className={`h-4 rounded bg-gray-300
                    } w-3/4`}
                  />
                  <div
                    className={`h-3 rounded bg-gray-300
                    } w-1/2`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
