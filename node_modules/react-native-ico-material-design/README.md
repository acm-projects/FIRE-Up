# Material Design Icons for React Native

### react-native-ico-material-design

423 Vector Icons for React Native

<img src="./static/add-label-button.png" alt="add-label-button" width="150" height="150"> <img src="./static/add-plus-button.png" alt="add-plus-button" width="150" height="150"> <img src="./static/add-to-queue-button.png" alt="add-to-queue-button" width="150" height="150">

## List of icons

- [List of Material Design Icons](http://ico.simpleness.org/pack/material-design)

## Usage

```
import Icon from 'react-native-ico-material-design';


// Inside some view component
render() {
    return (
        <>
          <Icon name="add-label-button" />
          <Icon name="add-plus-button" height="40" width="40" />
          <Icon name="add-to-queue-button" color="red" />
          <Icon name="add-plus-button" badge="10" />
          <Icon name="add-plus-button" badge={{value: 'A', fontSize: 25, radius: 22, position:'top_left', color:'orange', backgroundColor:'blue'}}/>
          <Icon name="add-label-button" background="circle" />
          <Icon name="add-label-button" background={{ type: "button", color: 'green' }} />
        </>
    );
}

```

## Installation

#### yarn

```bash
yarn add react-native-ico-material-design react-native-svg
```

#### npm

```bash
npm install --save react-native-ico-material-design react-native-svg
```

### Link react-native-svg

```bash
react-native link react-native-svg
```

### pod install ( for iOS )

```
cd ios && pod install && cd ..
```

## API

### <Icon name [color width height background badge ...rest] />

Returns a SvgXml icon by name and group.

 name | optional | default value | description | examples
------|----------|---------------|-------------|---------
name | no |  | name of icon | "add-label-button"
color | yes | | line color, css style | "#00ff00", "#0f0", "green"
width | yes | 20 | width of the icon | 40
height | yes | 20 | height of the icon | 40
background | no | | background type | "circle"
background | no | | background object | {type: "circle", color: 'yellow'}
badge | no | | badge string | "10"
badge | no | | badge object | {value: 'A', fontSize: 25, radius: 22, position:'top_left', color:'orange', backgroundColor:'blue'}
...rest | no | | other props | style={{backgroundColor: "#00f"}}

## Icons Made by

[Dave Gandy](https://www.flaticon.com/authors/dave-gandy)

## Created by

Dimitry Ivanov <2@ivanoff.org.ua> # curl -A cv ivanoff.org.ua
