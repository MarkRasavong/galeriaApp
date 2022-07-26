import React, { useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Masonry from 'react-masonry-css'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { MosaicContainer, MosaicGrid } from './components/Mosaic/Mosaic.styled'
import MosaicTile from './components/Mosaic/MosaicTile'
import { fetchFotos, nextPage, UnsplashDataProps } from './features/feed'
import LoadingBar, { LoadingBarRef } from 'react-top-loading-bar'

const App = () => {
  const ref = React.createRef<LoadingBarRef>()
  const dispatch = useAppDispatch()
  const {data, page, isLoading} = useAppSelector(state => state.feed)

  useEffect(() => {
    if(page !== 1){
      dispatch(fetchFotos(page))
    }
  }, [page])

  useEffect(() => {
    dispatch(fetchFotos(1))
  }, [])

  useEffect(() => {
    const loadingBar = ref.current
    if(loadingBar) {
      isLoading ? loadingBar.continuousStart() : loadingBar.complete()
    }

    return () => {
      (loadingBar as LoadingBarRef ).complete()
    }
  }, [isLoading])

  const nextFn = () => {
    dispatch(nextPage())
  };

  const breakpointColumnsObj = {
    default: 3,
    700: 2,
  };

  return (
    <>
      <LoadingBar color='#f11946' ref={ref} shadow={true} />
      <MosaicContainer>
      <InfiniteScroll dataLength={(data as UnsplashDataProps[])?.length} next={nextFn} hasMore={true} loader={<></>} >
        <MosaicGrid>
          <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
            {
              (data as UnsplashDataProps[]).map((img) => (
                  <MosaicTile image={img.urls.small as string} alt={img?.description} key={`${img.id}_home_${Math.random()}`} item={img}/>
              ))
            }
          </Masonry>
        </MosaicGrid>
      </InfiniteScroll>
      </MosaicContainer>
    </>
  )
}

export default App