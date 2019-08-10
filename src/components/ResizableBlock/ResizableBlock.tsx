import * as React from 'react';
import { ResizableBlockWrapper, Border } from './style';

type Props = {
  width: number,
  height: number,
};

type State = {
  width: number,
  height: number,
  isResizing: boolean,
};

export default class ResizableBlock extends React.PureComponent<Props, State> {
  static defaultProps = {
    width: 100,
    height: 100,
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      width: props.width,
      height: props.height,
      isResizing: false,
    };
  }

  onResizeStart = () => {
    this.setState({ isResizing: true });
  }

  onResizeEnd = () => {
    this.setState({ isResizing: false });
  }

  render() {
    const { width, height } = this.state;
    return (
      <ResizableBlockWrapper width={width} height={height}>
        <Border
          orientation="top"
          onMouseDown={this.onResizeStart}
          onMouseUp={this.onResizeEnd}
        />
        <Border
          orientation="right"
          onMouseDown={this.onResizeStart}
          onMouseUp={this.onResizeEnd}
        />
        <Border
          orientation="bottom"
          onMouseDown={this.onResizeStart}
          onMouseUp={this.onResizeEnd}
        />
        <Border
          orientation="left"
          onMouseDown={this.onResizeStart}
          onMouseUp={this.onResizeEnd}
        />
      </ResizableBlockWrapper>
    );
  }
}
