import styled, { css } from "styled-components";
import { theme } from '../../styles/theme';

interface DisplayImageProps {
  imageCSS?: {}
}
interface LarImgContainerProp {
  imageContainerCSS: {}
}

interface DefaultImgContainerCssProps {
  minHeight?: string
}

export const CollectionCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.backgroundWhite};

  margin-left: auto;
  margin-right: auto;
  margin-top: 2em;

  border-radius: 8px;
  width: 870px;
  height: auto;

  .description {
    margin-top: 1em;
    width: 92%;

    p {
      font-weight: 500;
    }
  }
`

export const CollectionButtonBar = styled.div`
display: flex;
justify-content: space-between;
width: 780px;
margin-bottom: 2em;

.likesDiv {
  display: flex;

  p {
    margin-left: 8px;
    color: ${theme.colors.heartColor}
  }
}
`

export const ImgArea = styled.img<DisplayImageProps>`
  border-radius: 8px;
  min-width: 100%;
  object-fit: cover;
  ${(props) => props.imageCSS}
`;

export const defaultImageCSS = css`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;


export const restrictedImageCss = css`
  width: 265px;
  height: 265px;
  border-radius: 8px;
`;

export const portraitImageCSS = css`
  width: 100%;
  height: 100%;
  max-height: 800px;
`;

export const defaultImageContainerCSS = css<DefaultImgContainerCssProps>`
  max-width: 100%;
  min-height: ${(props) => `${props.minHeight}`};
`;

export const LrgImgContainer = styled.div<LarImgContainerProp & DefaultImgContainerCssProps>`
border-radius: 8px;
background-color: gray;
height: 100%;
width: 92%;

margin-top: 1em;
margin-bottom: 1.5em;

${(props) => props.imageContainerCSS};
${(props) => props.minHeight}

`

export const InfoBox = styled.div`
display: flex;
justify-content: space-between;


width: 90%;
margin-left: 2em;
margin-right: auto;

.detailsDiv {
  display: flex;
  align-items: center;
}
`

export const InfoUsrContainer = styled.div`
display: flex;
margin-top: 1.5em;

.usrInfo {
  margin-top: 0.5em;
  margin-left: 1em;

  p{
    font-size: 0.8rem;
  }
  
  p:first-child {
    font-weight: 600;
  }

  p:nth-child(2) {
    font-weight: 200;
  }
}
`

export const InfoUsrImg = styled.div`
background-color: gray;

border-radius: 8px;
width: 57px;
height: 57px;
`