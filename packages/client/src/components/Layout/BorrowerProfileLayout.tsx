import React from 'react';
import { Route } from 'react-router-dom';
import Footer from '../Footer';
import { HeroLayout, ContentBorrower, Wrapper } from './Layout.styles';

interface IDefaultProps {
	component: any;
	path?: string;
	exact?: boolean;
}

const Layout: React.SFC<IDefaultProps> = ({ component: Component, ...rest }: any) => (
	<Route
		{...rest}
		render={
			matchProps => (
				<HeroLayout>
					<Wrapper>
						<ContentBorrower>
							<Component {...rest} />
						</ContentBorrower>
					</Wrapper>
					< Footer />
				</HeroLayout>
			)}
	/>
);

export default Layout;