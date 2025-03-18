import ImageAndContent from '@components/image-and-content';

function CashBack200() {
  const data = {
    backgroundColor: 'bg-green-alt-600',
    image: {
      isBackdrop: true,
      src: 'https://www.dropbox.com/scl/fi/2yj1wzo3zeyfuq5zlx28s/yellow-green-room.jpg?rlkey=hbfwk3c6rn5svgpjjibkafzmr&st=58oapy2f&dl=1'
    },
    content: {
      title: 'Get 5% Cash Back On $200',
      direction: 'right',
      description: 'Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.',
      buttonText: 'Learn More'
    }
  }

  return (
    <ImageAndContent {...data} />
  );
}

export default CashBack200;