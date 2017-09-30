import React, { Component } from 'react';
import { Const } from '../..'

const { Mode, Key, Size, Style } = Const

export default class CanvasBack extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount() {
    this.ctx = this.refs.canvas.getContext('2d')
    const { tonality, mode } = this.props
    const scale = Mode[mode]
    drawStrings(this.ctx);
    drawFlet(this.ctx, scale);
    // drawChordName(this.ctx, tonality)
  }

  render() {
    return <canvas className='fingerBoard' ref='canvas' width='1024px' height='256px'></canvas>
  }
}

function drawFlet(ctx, scale) {
  let startX = Size.RIGHT_OFFSET;
  let startY = Size.TOP_OFFSET;
  let endX = Size.RIGHT_OFFSET;
  let endY = Size.FLET_LEN + Size.TOP_OFFSET;
  const min_pos = getFirstFlet(scale);

  for(let i = 0 ; i < 24 ; i++) {
    if( i === 0 && min_pos === 1){
      drawLine(4)
    } else {
      drawLine(2)
    }

    if (
      i === 2 || i === 4 || i === 6 ||
      i === 8 || i === 11 || i === 14 ||
      i === 16 || i === 18 || i === 20
    ) {
      ctx.beginPath();
      ctx.fillStyle  = 'rgb(192,192,192)';
      if (i === 11) {
        ctx.arc(startX + (Size.FLET_OFFSET/2), startY + Size.LINE_OFFSET * 1.5, 8, 0, Math.PI*2, true);
        ctx.arc(startX + (Size.FLET_OFFSET/2), startY + Size.LINE_OFFSET * 3.5, 8, 0, Math.PI*2, true);
      } else {
        ctx.arc(startX + (Size.FLET_OFFSET/2), startY + (Size.FLET_LEN/2), 8, 0, Math.PI*2, true);
      }
      ctx.fill();
    }

    startX += Size.FLET_OFFSET;
    endX += Size.FLET_OFFSET;
    startY = Size.TOP_OFFSET;
    endY = Size.FLET_LEN + Size.TOP_OFFSET;
  }

  function drawLine (lineWidth) {
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
    ctx.closePath();
  }
}

function  getFirstFlet(scale) {
  let ret = 100 ;
  const pos = scale.split("|");

  for(let i = 0 ; i < pos.length ; i++ ){
    if( ret > pos[i] ){
      ret = Number(pos[i]) ;
    }
  }
  if( ret == 0 ){
    ret = 1 ;
  }
  return ret ;
}

// function drawChordName(ctx, scale) {
//   ctx.fillStyle = Style.FILL.STYLE;
//   ctx.font = Style.FILL.FONT;
//   ctx.textAlign = "center";
//   ctx.textBaseline = "baseline";
//   ctx.fillText(scale, 10, 10, 128);
//   ctx.fillStyle = "black";
// }

function drawStrings (ctx) {
  let startX = Size.RIGHT_OFFSET;
  let startY = Size.TOP_OFFSET;
  let endX = Size.RIGHT_OFFSET + Size.LINE_LEN;
  let endY = Size.TOP_OFFSET;
  ctx.lineWidth = 2;
  ctx.beginPath();

  for (let i = 0 ; i < 6 ; i++) {
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    startY += Size.LINE_OFFSET;
    endY += Size.LINE_OFFSET;
  }
  ctx.stroke();
  ctx.closePath();
}
