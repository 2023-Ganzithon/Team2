interface props {
  subTitle: string;
  data: {
    title: string;
    content: string;
  }[];
}

const SubTitleSection = ({ subTitle, data }: props) => {
  return (
    <section className={`flex flex-col px-20`}>
      <div
        className={`basic-border-bottom py-2 w-full flex justify-start font-bold text-xl text-my-green`}
      >
        {subTitle}
      </div>
      <div className={`flex justify-start w-full gap-8 px-16 py-12`}>
        {data.length > 1 ? (
          <>
            <div className={`w-[20%] border-r border-solid border-my-green`}>
              {data.map((_data) => (
                <div className={`p-5 text-my-green text-lg font-bold`}>
                  {_data.title}
                </div>
              ))}
            </div>
            <div className={`w-[80%]`}>
              {data.map((_data) => (
                <div className={`p-5 text-lg font-medium`}>{_data.content}</div>
              ))}
            </div>
          </>
        ) : (
          <div className="w-full border-[2px] border-solid border-my-green p-6 rounded-lg min-h-[13rem]">
            {data[0].content}
          </div>
        )}
      </div>
    </section>
  );
};

export default SubTitleSection;
