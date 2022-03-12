import React, { Fragment } from 'react'
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';
import { Dialog, Transition} from '@headlessui/react'

function Modal() {
    const [open, setOpen] = useRecoilState(modalState);
  return (
    <Transition.Root show={open} as={Fragment} >
            <Dialog as='div' className="fixed z-10 inset-0 overflow-y-auto" 
            onClose={setOpen}
            >
            <h1>Hello ali</h1>
            </Dialog>
    </Transition.Root>
  )
}

export default Modal