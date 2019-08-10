import styled, { css } from 'styled-components';

const BORDER_SIZE = 5;

export const ResizableBlockWrapper = styled.div`
  position: absolute;
  padding: ${BORDER_SIZE}px;
  box-sizing: border-box;

  ${(props: { left: number, top: number, width: number, height: number }) => css`
    top: ${props.top}px;
    left: ${props.left}px;
    width: ${props.width}px;
    height: ${props.height}px;
  `}
`;

export const Border = styled.div`
  position: absolute;
  background: black;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  ${(props: { orientation: string }) => {
    switch (props.orientation) {
      case 'top':
        return css`
          bottom: initial;
          height: ${BORDER_SIZE}px;
          cursor: row-resize;
        `;
      case 'bottom':
        return css`
          top: initial;
          height: ${BORDER_SIZE}px;
          cursor: row-resize;
        `;
      case 'left':
        return css`
          right: initial;
          width: ${BORDER_SIZE}px;
          cursor: col-resize;
        `;
      case 'right':
        return css`
          left: initial;
          width: ${BORDER_SIZE}px;
          cursor: col-resize;
        `;
      default:
        return css``;
    }
  }}
`;
