export interface FlexBoxStyleProps {
  width : string
	alignContent:
		| 'flex-start'
		| 'flex-end'
		| 'center'
		| 'space-between'
		| 'space-around'
		| 'stretch'
	alignItems: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline'
	display: 'inline-flex' | 'flex'
	flexDirection: 'row' | 'row-reverse' | 'column' | 'column-reverse'
	flexFlow: 'string' | null | undefined
	flexWrap: 'nowrap' | 'wrap' | 'wrap-reverse'
	justifyContent:
		| 'flex-start'
		| 'flex-end'
		| 'center'
		| 'space-between'
		| 'space-around'
		| 'space-evenly'
}
