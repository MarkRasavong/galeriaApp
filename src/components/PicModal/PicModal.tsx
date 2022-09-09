import React from 'react'
import ReactDOM from 'react-dom'
import { UnsplashDataProps } from '../../features/feed'
import LrgCollectionCard from '../LrgCollectionCard/LrgCollectionCard'
import { ModalBkg, ModalContainer, ModalImgArea} from './PicModal.styled'

interface PicModalProps {
  onClose: () => void
  open: boolean
  restrict?: boolean
  item: UnsplashDataProps
}

const PicModal = ({onClose, open, item, restrict}: PicModalProps) => {

  if (!open) return null;

  return ReactDOM.createPortal(
    <>
    <ModalBkg onClick={onClose}/>
    <ModalContainer>
    <LrgCollectionCard item={item} download key={`modal_${item.id}`}>
      <ModalImgArea 
        src={item.urls.regular} 
        alt={item.description}
      />
    </LrgCollectionCard>
    </ModalContainer>
    </>,
    document.getElementById('modal') as Element
  )
}

export default PicModal