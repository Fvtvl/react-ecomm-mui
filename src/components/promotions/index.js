import { Slide } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useRef, useState } from 'react';
import { MessageText, PromotionsContainer } from '../../styles/promotions';

const Promotions = React.memo(({ message }) => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [show, setShow] = useState(true);
  const containerRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);

    const intervalId = setInterval(() => {
      setMessageIndex((i) => (i + 1) % message.length);
      setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 3000);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [0]);

  return (
    <PromotionsContainer ref={containerRef}>
      <Slide
        direction={show ? 'left' : 'right'}
        in={show}
        container={containerRef.current}
        timeout={{
          enter: 500,
          exit: 200,
        }}
      >
        <Box display={'flex'} justifyContent="center" textAlign={'center'}>
          <MessageText>{message[messageIndex]}</MessageText>
        </Box>
      </Slide>
    </PromotionsContainer>
  );
});

export default Promotions;
