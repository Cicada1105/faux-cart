import { useInView } from 'react-intersection-observer';

function SectionHeader({ children }) {
  const BASE_STYLE = 'transition duration-700 text-[1.75rem] text-left font-bold mb-8';

  const { ref, inView } = useInView({
    triggerOnce: true
  });

  return (
    <h2 ref={ ref } className={ inView ? 'translate-0 '.concat(BASE_STYLE) : 'translate-y-full '.concat(BASE_STYLE)}>
      { children }
    </h2>
  )
}

export default SectionHeader;