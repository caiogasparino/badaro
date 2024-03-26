import {
  ReactElement,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'

import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProps,
} from '@gorhom/bottom-sheet'

import { BottomSheetDefaultBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types'
import { JSX } from 'react/jsx-runtime'
import { Container } from './base-modal.styles'

export type BaseModalRef = {
  toggleModal(): void
}
type BaseModalProps = BottomSheetModalProps & {
  children: ReactElement
}

const BaseModal = forwardRef<BaseModalRef, BaseModalProps>(
  ({ children, ...rest }, refModalProps) => {
    const [hasOpenModal, setHasOpenModal] = useState(false)

    const refBottomSheetModal = useRef<BottomSheetModal>(null)

    const toggleModal = useCallback(() => {
      if (hasOpenModal) {
        refBottomSheetModal?.current?.dismiss()
      } else {
        refBottomSheetModal?.current?.present()
      }

      setHasOpenModal((oldValue) => !oldValue)
    }, [hasOpenModal])

    useImperativeHandle(refModalProps, () => ({
      toggleModal,
    }))

    const renderBackdrop = useCallback(
      (props: JSX.IntrinsicAttributes & BottomSheetDefaultBackdropProps) => (
        <BottomSheetBackdrop {...props} pressBehavior={'close'} />
      ),
      []
    )

    return (
      <BottomSheetModal
        ref={refBottomSheetModal}
        containerStyle={{
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
        snapPoints={['48%', '48%']}
        backdropComponent={renderBackdrop}
        index={1}
        {...rest}
      >
        <Container>{children}</Container>
      </BottomSheetModal>
    )
  }
)

export { BaseModal }
