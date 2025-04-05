import backdrop from './backdrop.svg';
import stage from './stage.png';

import style from './index.module.css';

function Stage() {
  return (
    <>
      <img className='w-full h-full object-cover' src={ backdrop } alt='stage backdrop' />
      <img className={ style.item.concat(' max-lg:hidden top-[50%] right-[40%]') } src='https://www.dropbox.com/scl/fi/nr1s5wigag8644rzdtkv1/snacks.png?rlkey=8tz2ff52hq2eghysc0ppt6f1d&st=wt4jbg5r&dl=1' alt='Snacks' />
      <img className={ style.item.concat(' max-lg:hidden top-[22%] right-[30%]') } src='https://www.dropbox.com/scl/fi/109vsxh1ks6x1fel3h93z/travel-items.png?rlkey=tdxku8dx39wtcr1uuyhqo851c&st=teinqcjx&dl=1' alt='Travel items' />
      <img className={ style.item.concat(' max-lg:hidden top-[44%] right-[14%]') } src='https://www.dropbox.com/scl/fi/e1hdiezbi5x0au88qkrlz/electronics.png?rlkey=mm5etiwvyxd9y49dkmeigwikl&st=i99sxckc&dl=1' alt='Electronics' />
      <img className={ style.item.concat(' max-lg:hidden top-[8%] right-[8%]') } src='https://www.dropbox.com/scl/fi/mgmx8m7qv88qyxjsjn5tv/bags-and-shoes.png?rlkey=u7rlyfu290vu4kqpu30duqiob&st=m4xk046w&dl=1' alt='Bags and Shoes' />
      <img className={ style.stage.concat(' max-lg:hidden') } src={ stage } alt='stage' />
    </>
  );
}

export default Stage;