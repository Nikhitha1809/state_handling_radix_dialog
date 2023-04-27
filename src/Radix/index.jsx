import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import './index.css';

const DialogDemo = (props) => {
    const {msg}= props;
  const {id, subject, view_href, body, device_id} =msg;
  return(
  <Dialog.Root >
    <div className='card-container'>
    <p>Id: {id} </p>
    <p>Subject: {subject}</p>
    <p>view_href: {view_href}</p>
    <Dialog.Trigger asChild>
      <button className="Button violet">View More</button>
    </Dialog.Trigger>
    </div>
    
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle">Details</Dialog.Title>
        <div>
            <p>Id: {id}</p>
            <p>Body: {body}</p>
            <p>Device id: {device_id}</p>
        </div>
        <Dialog.Close asChild>
          <button className="IconButton" aria-label="Close">
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
  )
};

export default DialogDemo;