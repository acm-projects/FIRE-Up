import React, { Component } from 'react';
import { SvgXml } from 'react-native-svg';

const question = require('./data/question');

export default class SvgMain extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(!this.iconsSet) this.iconsSet = {};

    const allGroups = Object.keys(this.iconsSet);
    const defaultSet = allGroups.length === 1 ? allGroups[0] : 'material-design';

    const { group: sourceGroup, name: sourceName, width = 20, height = 20, color, stroke, background, badge, ...rest } = this.props || {};

    const [, group, name] = sourceName.match(/(.*?)\/(.*)/) || [, sourceGroup || defaultSet, sourceName];

    // icon will be group/name or defaultGroup/name or name or question
    let icon = this.iconsSet[group] && this.iconsSet[group][name];
    if(!icon) icon = this.iconsSet[defaultSet] && this.iconsSet[defaultSet][name];
    if(!icon) icon = this.iconsSet[name];
    if(typeof icon !== 'string') icon = question;

    if(color) icon = icon.replace(/<path /g, `<path fill="${color}" `).replace(/<polygon /g, `<polygon fill="${color}" `)
    if(stroke) icon = icon.replace(/<path /g, `<path stroke="${stroke}" `).replace(/<polygon /g, `<polygon stroke="${stroke}" `)

    if(background) {
      const viewBox = icon.match(/viewBox="(\S+)\s+(\S+)\s+(\S+)\s+(\S+)"/);
      if(viewBox) {
        let [, xFrom, yFrom, xTo, yTo] = viewBox.map(item => +item);

        const dr = parseInt( (xTo-xFrom)/2 );
        xFrom -= dr;
        yFrom -= dr;
        xTo += dr*2;
        yTo += dr*2;
        icon = icon.replace(/viewBox=".*?"/, `viewBox="${xFrom} ${yFrom} ${xTo} ${yTo}"`);
        icon = icon.replace(/height=".*?"/, `height="${xTo-xFrom}"`);
        icon = icon.replace(/width=".*?"/, `width="${yTo-yFrom}"`);

        const r = parseInt( dr + dr/1.3 );
        const cx = parseInt( r - dr/1.3 );
        const cy = cx;

        const {
          type = 'circle',
          color = 'lightblue',
          radius = r,
          borderRadius,
        } = typeof background === 'object' ? background : { type: background };

        const rx = type === 'button' && typeof borderRadius === 'undefined' ? dr : ( borderRadius || 0 );

        const circle = type === 'circle' ? `<circle cx="${cx}" cy="${cy}" r="${radius}" fill="${color}" />`
          : `<rect x="${xFrom}" y="${yFrom}" width="${xTo}" height="${yTo}" rx="${rx}" fill="${color}" />`;
        icon = icon.includes('<g>') ? icon.replace(/^(.*?)<g>/im,`$1<g>${circle}</g><g>`) : icon.replace(/(<svg[\s\S]*?>)/im,`$1${circle}`);
      }
    }

    if(badge) {
      const viewBox = icon.match(/viewBox="(\S+)\s+(\S+)\s+(\S+)\s+(\S+)"/);
      if(viewBox) {
        const [, xFrom, yFrom, xTo, yTo] = viewBox.map(item => +item);
        const [xMax, yMax] = [ xTo, yTo ];
        const r = parseInt( xMax/4 );
        const {
          value = '',
          fontSize = `${r}px`,
          position = 'bottom_right',
          color = 'white',
          backgroundColor = 'red',
          radius = r
        } = typeof badge === 'object' ? badge : { value: badge };
        const cx = position.includes('left') ? radius : parseInt( xTo - radius + xFrom );
        const cy = position.includes('top') ? radius : parseInt( yTo - radius + yFrom );
        const cyText = parseInt( cy + radius/2 - 2 );
        icon = icon.replace(/<\/svg>/, `<g><circle cx="${cx}" cy="${cy}" r="${radius}" fill="${backgroundColor}" /><text x="${cx}" y="${cyText}" fill="${color}" font-weight="bold" text-anchor="middle" font-size="${fontSize}">${value}</text></g></svg>`)
      }
    }

    return <SvgXml xml={icon} width={width} height={height} {...rest} />
  }
}

