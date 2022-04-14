export const transition = (
  property = 'all',
  duration = '0.2',
  animation = 'ease-in-out',
  delay = '0',
) => {
  return {
    transition: `${property} ${duration}s ${animation} ${delay}s`,
  };
};
