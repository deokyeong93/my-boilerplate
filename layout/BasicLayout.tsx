import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
/* The new CSS Reset - version 1.4.4 (last updated 22.12.2021)  */
  *:where(:not(iframe, canvas, img, svg, video):not(svg *, symbol *)) {
      all: unset;
      display: revert;
  }
  
  *,
  *::before,
  *::after {
      box-sizing: border-box;
  }

  ol, ul, menu {
      list-style: none;
  }

  img {
      max-width: 100%;
  }

  table {
      border-collapse: collapse;
  }

  textarea {
      white-space: revert;
  }

  :where([hidden]){
      display:none;
  }

  :where([contenteditable]){
      -moz-user-modify: read-write;
      -webkit-user-modify: read-write;
      overflow-wrap: break-word;
      -webkit-line-break: after-white-space;
  }

  :where([draggable="true"]) {
      -webkit-user-drag: element;
  }
`

const BasicLayout = ({ children }: { children: any }) => {
	return (
		<>
			<GlobalStyle />
			{children}
		</>
	)
}

export default BasicLayout
