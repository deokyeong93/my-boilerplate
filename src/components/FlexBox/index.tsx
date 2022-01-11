import styled, { css } from 'styled-components'
import { FlexBoxStyleProps } from './FlexBox.type'

const FlexBox = styled.div<FlexBoxStyleProps>`
	align-content: ${({ alignContent }) => alignContent};
	align-items: ${({ alignItems }) => alignItems};
	display: ${({ display }) => display};
	${({ flexFlow }) =>
		flexFlow &&
		css`
			flex-flow: ${flexFlow};
		`}
	${({ flexFlow, flexDirection, flexWrap }) =>
		!flexFlow &&
		css`
			flex-direction: ${flexDirection};
			flex-wrap: ${flexWrap};
		`}
	justify-content: ${({ justifyContent }) => justifyContent};
	width: ${({ width }) => width};
`

FlexBox.defaultProps = {
	alignContent: 'stretch',
	alignItems: 'stretch',
	display: 'flex',
	flexDirection: 'row',
	flexFlow: null,
	flexWrap: 'wrap',
	justifyContent: 'flex-start',
	width: 'auto',
}

export default FlexBox
