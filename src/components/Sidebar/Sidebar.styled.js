import styled from "styled-components";

export const SidebarContainer = styled.div`
	width: 260px;
	height: 100vh;

	top: 0;
	left: 0;

	z-index: 1;
	transition: 0.5s;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	padding: 24px;

	background-color: var(--primary-background-sidebar-color);

	@media screen and (max-width: 1439.9px) {
		position: absolute;

		left: -100%;
	}

	@media screen and (max-width: 767px) {
		width: 225px;

		padding: 14px 14px 24px 14px;
	}

	&.active {
		left: 0;
	}
`;

export const WrapperContent = styled.div`
	
width: 260px;
margin-left: -24px;
margin-bottom: auto;

padding: 0 24px;
overflow-x: hidden;
overflow-y: auto;


scroll-snap-type: y mandatory;



	@media screen and (max-width: 767px) {
		width: 225px;
		padding: 0 14px;

		margin: 0 -14px
	}



	&::-webkit-scrollbar {
		width:3px;
	}

	&::-webkit-scrollbar-track {
	
		background: var(--tracking-area-color);
		border-radius: 12px;
	}

		&::-webkit-scrollbar-thumb {
		
		background-color: var(--scroll-bar-color);
		border-radius: 12px;
		border: 12px solid var(--scroll-bar-color);




`;

export const Wrapper = styled.div`
	margin-top: 40px;
`;
