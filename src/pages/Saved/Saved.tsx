import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import CollectionCard from '../../components/Collection/CollectionCards'
import ExploreImage from '../../components/ExploreImage'
import { Container } from '../../components/ExploreImage/ExploreImage.styled'
import { Grid } from '../../components/LrgCollectionCard/LrgCollectionCard.styled'
import { fetchSavedCollections } from '../../features/clientSaved'
import { UnsplashDataProps } from '../../features/feed'
import { CollectionCardProps } from '../../features/showcaseFeed'
import { LinksContainer, LinkItem, SavedControls, LinkBtn } from './Saved.styled'

const filterOptions = ['Photos', 'Collections']

const Saved = () => {
  const dispatch = useAppDispatch()
  const { selectedCollections, selectedPhotos } = useAppSelector(state => state.clientSaved)
  const [checked, setChecked] = useState('photos')

  useEffect(() => {
    dispatch(fetchSavedCollections())
  }, [checked, dispatch])

  const filteredCollections = (Object.values(selectedCollections) as CollectionCardProps[]).map(option => (
    <CollectionCard catName={option.title as string} imgUrl={option.preview_photos[0].urls.regular} id={option.id} />
  ))

  const filteredPhotos = (Object.values(selectedPhotos) as UnsplashDataProps[]).map(foto => (
    <ExploreImage
      key={`${foto.id}_gridSavedCollection`}
      item={foto}
      grid
    />
  ))

  const handleLinkBtnClick = (value: string) => {
    setChecked(value);
  };

  return (
    <>
    <Container>
      <SavedControls>
        <div>
          <h5>Saved photos & collections</h5>
        </div>
        <LinksContainer>
          {
            filterOptions.map(option => (
              <LinkItem key={`filterSaved_${option}`}>
                <input 
                type='radio' 
                name='toggle_nav_pages' 
                value={option.toLowerCase()} 
                id={option.toLowerCase()} 
                checked={checked === option.toLowerCase() && true}
                />
                <LinkBtn onClick={() => handleLinkBtnClick(option.toLowerCase())}>
                {option}
                </LinkBtn>
              </LinkItem>
            ))
          }
        </LinksContainer>
      </SavedControls>
      <Container>
        <Grid>
          {
            checked === 'photos' ? filteredPhotos : filteredCollections
          }
        </Grid>
      </Container>
    </Container>
    </>
  )
}

export default Saved