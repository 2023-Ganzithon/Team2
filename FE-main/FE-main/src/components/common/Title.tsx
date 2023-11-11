import Divider from "../Divider";

interface props {
  title: string;
}

const Title = ({ title }: props) => {
  return (
    <section
      className={`flex flex-col w-full justify-center font-bold text-3xl pb-10 text-my-green gap-4`}
    >
      <div className={`flex w-full justify-center`}>{title}</div>
      <Divider color={"my-green"} />
    </section>
  );
};

export default Title;
