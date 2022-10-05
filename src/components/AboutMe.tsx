import Avatar from 'antd/lib/avatar';
import { useTranslation } from 'react-i18next';

const AbouteMe = () => {
  const { t, i18n } = useTranslation();
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
          src="avatar.JPG"
        />
      </div>
      <br />
      <h3>{t('hello')}</h3>
      <h2>
        {(t('yang'))}
      </h2>
      {[
        "look_website",
        "like_coding",
        "future",
      ].map((item, index) => {
        return (
          <p
            key={index}
          >
            {t(item)}
          </p>
        );
      })}
    </div>
  );
};

export default AbouteMe;