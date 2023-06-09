'use client';
import { useCallback, useEffect, useState } from 'react';

import { IoMdClose } from 'react-icons/io';
import Button from '@/components/Button';

interface modalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secundaryActionLabel?: string;
}

const Modal: React.FC<modalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secundaryActionLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }
    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className='
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            overflow-y-auto
            overflow-x-hidden
            focus:outline-none'
      >
        <div
          className='
            fixed
            inset-0
            bg-neutral-800/70'
          onClick={handleClose}
        />
        <div
          className='
              relative
              mx-auto
              my-6
              h-full
              w-full
              md:h-auto
              md:w-4/6
              lg:h-auto
              lg:w-3/6
              xl:w-2/5
            '
        >
          {/* CONTENT */}
          <div
            className={`
              translate
              h-full
              duration-300
              ${showModal ? 'translate-y-0' : 'translate-y-full'}
              ${showModal ? 'opacity-100' : 'opacity-0'}
              `}
          >
            <div
              className='
                translate
                relative
                flex
                h-full
                w-full
                flex-col
                rounded-lg
                border-0
                bg-white
                shadow-lg
                outline-none
                focus:outline-none
                dark:bg-slate-700
                dark:shadow-sm
                dark:shadow-slate-600
                md:h-auto
                lg:h-auto
              '
            >
              {/* HEADER */}
              <div
                className='
                  relative
                  flex
                  items-center
                  justify-center
                  rounded-t
                  border-b-[1px]
                  p-6
                  '
              >
                <div className='text-lg font-semibold'>{title}</div>
                <button
                  onClick={handleClose}
                  className='
                    absolute
                    right-9
                    rounded-full
                    border-2
                    p-1
                    transition
                    hover:border-red-500
                    hover:text-red-500
                    hover:opacity-70

                  '
                >
                  <IoMdClose size={18} />
                </button>
              </div>
              {/* BODY */}
              <div className='relative flex-auto p-6'>{body}</div>
              {/* FOOTER */}
              <div className='flex flex-col gap-2 p-6'>
                <div
                  className='
                    flex
                    w-full
                    flex-row
                    items-center
                    gap-4
                  '
                >
                  {secondaryAction && secundaryActionLabel && (
                    <Button
                      outline
                      disabled={disabled}
                      label={secundaryActionLabel}
                      onClick={handleSecondaryAction}
                    />
                  )}
                  <Button
                    disabled={disabled}
                    label={actionLabel}
                    onClick={handleSubmit}
                  />
                </div>
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
