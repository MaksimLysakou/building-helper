import styled, { css } from 'styled-components';

export const ResizableBlockWrapper = styled.div`
  position: relative;
  padding: 1px;
  box-sizing: border-box;

  ${(props: { width: number, height: number }) => css`
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
          height: 2px;
          cursor: row-resize;
        `;
      case 'bottom':
        return css`
          top: initial;
          height: 2px;
          cursor: row-resize;
        `;
      case 'left':
        return css`
          right: initial;
          width: 2px;
          cursor: col-resize;
        `;
      case 'right':
        return css`
          left: initial;
          width: 2px;
          cursor: col-resize;
        `;
      default:
        return css``;
    }
  }}
`;
