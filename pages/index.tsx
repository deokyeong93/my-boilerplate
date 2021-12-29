import type { NextPage } from 'next'
import styled from 'styled-components'
import BasicLayout from '@layout/BasicLayout'

const Title = styled.h1`
	color: red;
	background-color: black;
`

const Home: NextPage = () => {
	return (
		<BasicLayout>
			<Title>나만의 보일러 플레이트</Title>
		</BasicLayout>
	)
}

export default Home
