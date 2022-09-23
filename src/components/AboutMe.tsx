import Avatar from 'antd/lib/avatar';

const AbouteMe = () => {
  return (
    <div
      id="aboutme"
      style={{
        paddingTop: 100,
      }}
    >
      <div>
        <Avatar
          size={200}
          src="logo001.JPG"
        />
      </div>
      <br />
      <h3>哈喽，你好呀！🐰</h3>
      <h2 className="font-black uppercase pt-8 pb-8 text-3xl text-yellow-500">
        👋 我是叶子
      </h2>
      {[
        "很开心你点开了我的网站。",
        "我很喜欢写代码带来的成就感，希望你也是。",
        "未来就让我们一起愉快的写代码吧💕",
      ].map((item, index) => {
        return (
          <p
            key={index}
            className="w-full md:w-2/3 mr-auto ml-auto text-gray-500 text-base"
          >
            {item}
          </p>
        );
      })}
    </div>
  );
};

export default AbouteMe;