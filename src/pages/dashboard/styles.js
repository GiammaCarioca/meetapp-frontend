import styled from 'styled-components';

export const Main = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 30px;
	margin-left: 20px;
	margin-right: 20px;
`;

export const Section = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 910px;
	margin-bottom: 30px;

	h3 {
		margin-bottom: 20px;
		font-weight: bold;
		color: #ffffff;
	}
`;

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`;
