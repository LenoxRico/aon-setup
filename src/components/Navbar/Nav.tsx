import { useOktaAuth } from "@okta/okta-react";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
	const { oktaAuth, authState } = useOktaAuth();

	const loggingIn = async () => oktaAuth.signInWithRedirect({ originalUri: "/" });

	const loggingOut = async () => oktaAuth.signOut();

	return (
		<Section>
			<Link to="/">
				<h2>AON Okta Test</h2>
			</Link>
			<ul>
				<li>
					<Link to="/profile">Profile</Link>
				</li>
				<li>
					{
						authState?.isAuthenticated ? (
							<button onClick={loggingOut}>Logout</button>
						) : (
							<button onClick={loggingIn}>Login</button>
						)
					}
				</li>
			</ul>
		</Section>
	);
};

const Section = styled.nav`
	width: 90%;
	margin: 1rem auto;
	display: flex;
	align-items: center;
	justify-content: space-between;

	h2 {
		color: black;
	}

	a {
		text-decoration: none;
	}

	& ul {
		display: flex;
		justify-content: space-between;
		align-items: center;
	

		& li {
			list-style-type: none;

			&:hover {
				text-decoration: underline;
			}

			&:nth-last-child(1) {
				margin-left: 1rem;
			}

			a {
				color: #333;
				font-weight: 500;
				font-size: 1rem;
				text-decoration: none;

			}

			& button {
				font-size: 1rem;
				color: #333;
				font-weight: 500;
				cursor: pointer;
				outline: none;
				border: none;
				background: transparent;
			}
		}
	}
`;

export default Nav;
