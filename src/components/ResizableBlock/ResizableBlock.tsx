import * as React from 'react';
import { ResizableBlockWrapper, Border } from './style';

type Props = {
  x: number,
  y: number,
  width: number,
  height: number,
};

type State = {
  x: number,
  y: number,
  width: number,
  height: number,
  isResizing: boolean,
};

export default class ResizableBlock extends React.PureComponent<Props, State> {
  static defaultProps = {
    x: 0,
    y: 0,
    width: 100,
    height: 100,
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      x: props.x,
      y: props.y,
      width: props.width,
      height: props.height,
      isResizing: false,
    };
  }

  onResizeStart = () => {
    this.setState({ isResizing: true });
  };

  onResizeEnd = () => {
    this.setState({ isResizing: false });
  };

  onResize = (borderSide: string) => (event: React.MouseEvent) => {
    if (this.state.isResizing === true) {
      switch (borderSide) {
        case 'top':
          this.setState({
            y: this.state.y + event.movementY,
            height: this.state.height - event.movementY,
          });
          break;
        case 'right':
          this.setState({ width: this.state.width + event.movementX });
          break;
        case 'bottom':
          this.setState({ height: this.state.height + event.movementY });
          break;
        case 'left':
          this.setState({
            x: this.state.x + event.movementX,
            width: this.state.width - event.movementX,
          });
          break;
      }
    }
  };

  render() {
    const { x, y, width, height } = this.state;
    return (
      <ResizableBlockWrapper
        left={x}
        top={y}
        width={width}
        height={height}
      >
        <Border
          orientation="top"
          onMouseDown={this.onResizeStart}
          onMouseUp={this.onResizeEnd}
          onMouseOut={this.onResizeEnd}
          onMouseMove={this.onResize('top')}
        />
        <Border
          orientation="right"
          onMouseDown={this.onResizeStart}
          onMouseUp={this.onResizeEnd}
          onMouseOut={this.onResizeEnd}
          onMouseMove={this.onResize('right')}
        />
        <Border
          orientation="bottom"
          onMouseDown={this.onResizeStart}
          onMouseUp={this.onResizeEnd}
          onMouseOut={this.onResizeEnd}
          onMouseMove={this.onResize('bottom')}
        />
        <Border
          orientation="left"
          onMouseDown={this.onResizeStart}
          onMouseUp={this.onResizeEnd}
          onMouseOut={this.onResizeEnd}
          onMouseMove={this.onResize('left')}
        />
      </ResizableBlockWrapper>
    );
  }
}
