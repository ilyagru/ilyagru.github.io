import React from 'react';
import PT from 'prop-types';

import Navbar from './Navbar';
import MenuButton from './MenuButton';
import { LayoutContainer, HeaderContainer, Title, TitleSecondary, TitleLink } from './Layout.components';

class Layout extends React.Component {
  static propTypes = {
    title: PT.string.isRequired,
    children: PT.oneOfType([PT.node, PT.arrayOf(PT.node)]).isRequired,
    location: PT.shape({
      pathname: PT.string.isRequired,
    }),
  };

  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false,
    };
  }

  HeaderContent = () => <TitleLink title={this.props.title} />;

  onHandleMenuOpen = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen,
    });
  };

  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    const isHome = location.pathname === rootPath;
    let header;

    if (isHome) {
      header = (
        <Title>
          <this.HeaderContent />
        </Title>
      );
    } else {
      header = (
        <TitleSecondary>
          <this.HeaderContent />
        </TitleSecondary>
      );
    }

    return (
      <LayoutContainer>
        <header>
          <HeaderContainer isHome={isHome}>
            {header}
            <MenuButton isMenuOpen={this.state.isMenuOpen} onClick={this.onHandleMenuOpen} />
          </HeaderContainer>
          <Navbar isMenuOpen={this.state.isMenuOpen} />
        </header>
        <main>{children}</main>
        <footer>
          <TitleLink title={`${title} `} />
          &copy; {new Date().getFullYear()}, from Europe with
          {` `}
          🧡
        </footer>
      </LayoutContainer>
    );
  }
}

export default Layout;
