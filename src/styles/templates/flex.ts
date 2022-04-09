export const flex = (
  flexGrow = 1,
  flexShrink = 1,
  flexBasis = 'auto',
) => {
  return {
    flexGrow,
    flexShrink,
    flexBasis,
  };
};

export const flexbox = (
  justifyContent = 'stretch',
  alignItems = 'stretch',
  flexDirection = 'row',
) => {
  return {
    display: 'flex',
    justifyContent,
    alignItems,
    flexDirection,
  };
};
