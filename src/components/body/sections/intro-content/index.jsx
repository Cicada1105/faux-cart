import ImageAndContent from '@components/image-and-content';

import Stage from './stage.jsx';

function IntroContent() {
  const data = {
    backgroundColor: 'bg-transparent-400',
    image: {
      src: Stage,
      isBackdrop: true
    },
    content: {
      title: 'Shopping and Department Store.',
      description: 'The faux store for your everyday needs.',
      buttonText: 'Learn More'
    }
  }

  return (
    <ImageAndContent {...data} />
  );
}

export default IntroContent;