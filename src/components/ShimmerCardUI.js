const ShimmerCardUI = () => {
  return (
    <div className="w-[300px] h-[280px] p-2 m-2">
      <div className="w-full h-[180px] rounded-xl bg-gray-300"></div>
      <div className="mt-2 w-[90%] flex justify-between">
        <div className="rounded-full w-10 h-10 bg-gray-300"></div>
        <div className="flex flex-col item-start">
          <div className="bg-gray-300 h-4 w-[200px] rounded-sm m-1"></div>
          <div className="bg-gray-300 h-4 w-[180px] rounded-sm m-1"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerCardUI;
