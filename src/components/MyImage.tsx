export const MyImage = ({ imge }) => {
  return (
    <div className="  w-full h-[600px]">
      <img className="object-cover bg-center w-full " src={imge} alt="" />
    </div>
  );
};
