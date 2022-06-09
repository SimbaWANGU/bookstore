import styled from 'styled-components';

const CompletionPercentageCircle = styled.div({
  background: ({ completion }) => {
    const angle = 360 * completion;

    return `radial-gradient(white 50%, transparent 51%), 
    conic-gradient(transparent 0deg ${angle}deg, gainsboro ${angle}deg 360deg),
    conic-gradient(rgba(0, 0, 255, 0.7) 0deg, rgba(0, 0, 255, 0.7) 90deg, rgba(0, 0, 255, 0.7) 180deg, rgba(0, 0, 255, 0.7))`;
  },
  borderRadius: '50%',
  width: '10%',
  height: '30%',
});

export default CompletionPercentageCircle;
