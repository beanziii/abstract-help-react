import styles from './Categories.module.css';
import CategoryItem from './CategoryItem';

function Categories() {
  const categories = [
    {
      iconUrl:
        'https://theme.zdassets.com/theme_assets/2197739/aed6500f4da41c641f3de5d96247eb6654e9c386.png',
      title: 'Using Abstract',
      content:
        'Abstract lets you manage, version, and document your designs in one place.',
    },
    {
      iconUrl:
        'https://theme.zdassets.com/theme_assets/2197739/91588b3d042df901d9b941ccbb57af4f151401c7.png',
      title: 'Manage your account',
      content:
        'Configure your account settings, such as your email, profile details, and password.',
    },
    {
      iconUrl:
        'https://theme.zdassets.com/theme_assets/2197739/50d0db451c0e1e66e1caddd142986fcf6792ca05.png',
      title: 'Manage organizations, teams, and projects',
      content:
        'Use Abstract organizations, teams, and projects to organize your people and your work.',
    },
    {
      iconUrl:
        'https://theme.zdassets.com/theme_assets/2197739/3e82d0126e97d7b7c60a611d4e11b3c278d33743.png',
      title: 'Manage billing',
      content: 'Change subscriptions and payment details.',
    },
    {
      iconUrl:
        'https://theme.zdassets.com/theme_assets/2197739/7712592465ef5c7bf18f1c7cb16e19ab44eb81e3.png',
      title: 'Authenticate to Abstract',
      content: 'Set up and configure SSO, SCIM, and Just-in-Time provisioning.',
    },
    {
      iconUrl:
        'https://theme.zdassets.com/theme_assets/2197739/dcc25d18e224d12621d74e545cc8bdd1b5685ca8.png',
      title: 'Abstract support',
      content: 'Get in touch with a human.',
    },
  ];

  return (
    <div className={styles.container}>
      {categories.map((item) => (
        <CategoryItem
          iconUrl={item.iconUrl}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
}

export default Categories;
