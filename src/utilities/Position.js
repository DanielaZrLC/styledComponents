import { css } from 'styled-components'


//CSS Helper
/*
export const fixedTop = css`
  position: fixed;
  top: ${({top}) => top + "px"};
  left: 0;
`;
*/
/*const fixedTop =`
position: fixed;
top: ${({top}) => top + "px"};
left: 0;
`*/

export const fixed = ({ x= 0,y= 0, yProp= "left", xProp = "top" } = {} ) => {
  return css `
  position: fixed;
  ${yProp}: ${y};
  ${xProp}: ${x};
  `
}

export const absolute = ({ x= 0,y= 0 } = {} ) => css`
  position: absolute;
  top: ${y};
  left: ${x};
  `