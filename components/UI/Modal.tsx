import React, { useEffect } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

interface IProps {
  size?: 'wide' | 'normal' | 'mobile';
  isOpen?: boolean;
  onClose: () => void;
  header?: string;
  children: React.ReactNode;
  classname?: string;
  mobileNavText?: React.ReactChild | string | undefined;
  closeOnOutsideClick?: boolean;
}

const Wrapper = styled.div`
  min-height: 30vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .fade {
    z-index: 9999999;
  }
  .body {
    z-index: 99999999;
  }
`;

export const PNSModalVariant = {
  hidden: {
    opacity: 0,
    transform: 'scale(0.5)',
    transition: {
      duration: 0.2,
    },
  },
  visible: {
    opacity: 1,
    transform: 'scale(1)',
    transition: {
      duration: 0.3,
      delayChildren: 0.5,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const PNSModal = React.forwardRef(
  (
    {
      isOpen,
      onClose,
      children,
      size = 'normal',
      closeOnOutsideClick = false,
    }: IProps,
    ref: any
  ) => {
    /** Custom modal sizes */
    const sizeProps = {
      wide: {
        maxWidth: '80vw',
      },
      normal: {
        maxWidth: '730px',
      },
      mobile: {
        maxWidth: '100%',
      },
    }[size];

    /** Allow modal to be dismissed with Esc key */
    const handleKeyEvent = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    useEffect(() => {
      document.addEventListener('keydown', handleKeyEvent);
      return () => document.removeEventListener('keydown', handleKeyEvent);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <AnimatePresence>
        {isOpen && (
          <div className="modal" ref={ref}>
            <section className="modal__desktop">
              <div
                onClick={() => closeOnOutsideClick && onClose()}
                className="modal__desktop-wrapper"
              />
              <motion.div
                exit="hidden"
                initial="hidden"
                animate="visible"
                variants={PNSModalVariant}
                className="modal__desktop-inner-wrapper">
                <Wrapper style={sizeProps}>
                  <div className="modal__desktop-inner">
                    <div
                      style={{ maxHeight: '88vh' }}
                      className="modal__desktop-child">
                      {children}
                    </div>
                  </div>
                </Wrapper>
              </motion.div>
            </section>
          </div>
        )}
      </AnimatePresence>
    );
  }
);

export default PNSModal;
