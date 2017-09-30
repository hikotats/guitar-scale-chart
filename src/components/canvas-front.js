import React, { Component } from 'react'
import { Const } from '../..'

const { Mode, Key, Size, Style } = Const

export default class CanvasFront extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { width, height } = this.refs.canvas
    const { tonality, mode } = this.props
    const scale = Mode[mode]
    this.ctx = this.refs.canvas.getContext('2d')
    this.ctx.clearRect(0, 0, width, height)

    drawPosition(this.ctx, scale, mode, tonality);
    drawPosName(this.ctx, scale);
  }

  componentDidUpdate() {
    const { width, height } = this.refs.canvas
    const { tonality, mode } = this.props
    const scale = Mode[mode]
    this.ctx.clearRect(0, 0, width, height)
    drawPosition(this.ctx, scale, mode, tonality);
    drawPosName(this.ctx, scale);
  }

  render() {
    return <canvas className="fingerPosition" ref="canvas" width='1024px' height='256px'></canvas>
  }
}

function drawPosition(ctx, scale, mode, key) {
  const b_flg = 0;
  let startY = Size.TOP_OFFSET;
  const min_pos = getFirstFlet(scale);
  let pos_data = "";
  let pos = [];

  for (let i = 0; i < 6; i++) {
    let startX = Size.RIGHT_OFFSET - (Size.FLET_OFFSET/2);
    pos = scale.split('|').concat(scale.split('|'))

    let NORMAL_TUNING = {
      0: Key[key] + 4,
      1: Key[key] - 1,
      2: Key[key] + 7,
      3: Key[key] + 2,
      4: Key[key] + 9,
      5: Key[key] + 4
    }[i]

    pos = pos.slice(NORMAL_TUNING).concat(pos.slice(0,NORMAL_TUNING))

    for( var j = 0 ; j < pos.length ; j++) {
      pos_data = pos[j];

      let textWidth = ctx.measureText(pos_data).width;
      ctx.font         = Style.FILL.FONT;
      ctx.textAlign    = Style.TEXT_ALIGN;
      ctx.textBaseline = Style.TEXT_BASELINE;
      ctx.fillStyle    = Style.COLOR.WHITE;
      ctx.fillRect(startX - (textWidth*1.2/2), startY - 8 , textWidth*1.2 , parseInt("12px 'ＭＳ ゴシック'", 14));

      if( pos_data.charAt(0).toUpperCase() == 'R') {
        ctx.fillStyle = Style.COLOR.BLUE;
        ctx.beginPath();
        ctx.arc(startX, startY, 8, 0, Math.PI*2, true);
        ctx.fill();

        ctx.fillStyle = Style.COLOR.WHITE;
        ctx.fillText('R', startX - (textWidth/2), startY)
      } else {
        ctx.fillStyle = Style.COLOR.DARK_GRAY;
        ctx.fillText(pos_data, startX - (textWidth/2), startY);
      }

      startX += Size.FLET_OFFSET;
    }
    startY += Size.LINE_OFFSET
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

function drawPosName(ctx, scale) {
  let startX = (Size.FLET_OFFSET/2) + Size.RIGHT_OFFSET;
  let startY = Size.TOP_OFFSET;
  const pos = scale.split("|");
  let min_pos = getFirstFlet(scale);

  if( min_pos === 1 ) return;
  ctx.fillStyle = Style.COLOR.DARK_GRAY;
  ctx.font = Style.FILL.FONT;
  ctx.textAlign = Style.TEXT_ALIGN;
  ctx.textBaseline = Style.TEXT_BASELINE;
  ctx.beginPath();

  for(let i= 0 ; i < 4 ; i++ ) {
    ctx.fillText(
      min_pos,
      startX + ( FLET_OFFSET * i ),
      (FLET_OFFSET*5) +FLET_OFFSET,
      128
    );
    startY += LINE_OFFSET;
    min_pos++;
  }
  ctx.stroke();
  ctx.closePath();
}
