/**
 * Drawing grid in rectangular coordinates
 *
 * e.g. alignment of your chart?
 */
export default function Grid(props = {}) {
  return {
    top: 40,
    bottom: 40,
    // This should allow for sufficient space for Y-axis labels
    left: '3%',
    right: '3%',
    padding: 5,
    itemGap: 25,
    ...props,
  };
}
