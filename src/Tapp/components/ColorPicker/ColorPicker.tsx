import React, { Component, createRef } from 'react';

interface Props {}

interface State {}

export class ColorPicker extends Component<Props, State> {
  private canvasRef = createRef<HTMLCanvasElement>();
  private ctx: CanvasRenderingContext2D | null = null;

  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    if (this.canvasRef.current) {
      this.ctx = this.canvasRef.current.getContext('2d');
      this.draw();
    }
  }

  draw() {
    if (!this.ctx) return;
    for (let i = 0; i < 360; i++) {
      const grad = this.ctx.createLinearGradient(0, 0, 1, 200);
      grad.addColorStop(0, `hsl(${i}, 100%, 100%)`);
      grad.addColorStop(0.5, `hsl(${i}, 100%, 50%)`);
      grad.addColorStop(1, `hsl(${i}, 100%, 0%)`);
      this.ctx.fillStyle = grad;
      this.ctx.fillRect(i, 0, 1, 200);
    }
  }

  public render() {
    return <canvas ref={this.canvasRef} width={360} height={200} />;
  }
}
