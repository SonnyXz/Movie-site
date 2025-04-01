export const MyImage = ({ imge }) => {
  return (
    <div className="relative">
      <img className="w-full h-[600px]  object-cover" src={imge} alt="" />
    </div>
  );
};
