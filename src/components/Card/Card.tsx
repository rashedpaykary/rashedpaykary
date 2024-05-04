// pay attention : Our components are functions and must be capitalized
import image from "../../assets/node.png";

type CardProps = {
  title: string;
  discription: string;
  info: string;
  action: () => void;
  ctaText?: string;
  image: string;
  isOpen?: boolean;
};

// method 1
// Card({}=> destructuring )
// Card({ title, discription, info, action }: CardProps)
// <h2>{title}</h2>

function Card({
  title,
  discription,
  info,
  action,
  ctaText = "اطلاعات بیشتر",
  image,
  isOpen = false,
}: CardProps) {
  // method 2
  // Card(props:CardPrps)
  // <h2>{props.title}</h2>

  return (
    <div className="border-2 border-solid border-white p-3 rounded-md shadow-[0_2px_10px_0_#999999] flex flex-col justify-between items-center m-2 basis-64 grow relative overflow-hidden">
      {isOpen ? (
        <div className="bg-red-500 text-white px-2 py-2 absolute left-[-20px] top-[20px] rotate-[-45deg]  z-[-10] text-sm">
          درحال ثبت نام
        </div>
      ) : (
        <div className="bg-blue-700 text-white px-2 py-2 absolute left-[-20px] top-[20px] rotate-[-45deg]  z-[-10] text-sm">
          اتمام ثبت نام
        </div>
      )}
      <h2 className="font-bold text-2xl">{title}</h2>
      <input type="text" className="bg-gray-200" disabled={false} />
      <img src={image} alt="" width={"25%"} />
      <p className="font-normal text-md text-justify leading-loose">
        {discription}
      </p>
      <div className="text-xl font-medium px-2 py-3 my-3 mx-0 border-t-2 border- border-[#e5e5e5] border-b-2 text-center w-full">
        {info}
      </div>
      <button
        className="rounded-md px-3 py-3 font-normal text-white bg-purple-700 text-md w-full"
        onClick={action}
      >
        {ctaText}
      </button>
    </div>
  );
}

export default Card;

// <div
// method1
// style={{ display: isOpen ? "block" : "none" }}
// method2
// className={
// isOpen
//   ? "bg-red-500 text-white px-2 py-2 absolute left-[-20px] top-[20px] rotate-[-45deg]  z-[-10] text-sm"
//   : "hidden"
// }
// //   method3
// >
// در حال ثبت نام
// </div>
