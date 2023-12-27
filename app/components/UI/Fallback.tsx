import Link from "next/link";

type FallbackProps = {
  text: string;
  btnText: string;
  redirectUrl: string;
};

const Fallback = ({ text, btnText, redirectUrl }: FallbackProps) => {
  return (
    <div className="flex flex-col items-center gap-6 mx-auto my-24 w-max">
      <h1 className="text-xl font-semibold text-gray-500 ">{text}</h1>
      <Link href={redirectUrl} className="btn bg-primary w-max">
        {btnText}
      </Link>
    </div>
  );
};

export default Fallback;
