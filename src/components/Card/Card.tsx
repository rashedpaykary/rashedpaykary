// pay attention : Our components are functions and must be capitalized
import image from "../../assets/node.png";

type CardProps = {
  title: string;
  discription: string;
  info: string;
  action: () => void;
  ctaText?: string;
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
}: CardProps) {
  // method 2
  // Card(props:CardPrps)
  // <h2>{props.title}</h2>

  return (
    <div className="border-2 border-solid border-white p-3 rounded-md shadow-[0_2px_10px_0_#999999] flex flex-col justify-between items-center m-2 basis-64 grow">
      <h2 className="font-bold text-2xl">{title}</h2>
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
// Node.js از بهترین انتخاب‌ها برای سرمایه‌گذاری روی مهارت‌هاست. اگه به
//         دنبال یادگیری یه مهارت ‌آینده‌دار هستی، تا رسیدن به اون فقط یه بوت‌کمپ
//         فاصله داری!

// 28 هفته | 300 ساعت آموزش
