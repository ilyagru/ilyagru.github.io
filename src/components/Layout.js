import React, { Fragment } from 'react';

import Navbar from './Navbar';
import MenuButton from './MenuButton';
import { LayoutContainer, Title, TitleSecondary, TitleLink } from './Layout.components';

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false,
    };
  }

  HeaderContent = () => (
    <Fragment>
      <TitleLink title={this.props.title} />
      <MenuButton isMenuOpen={this.state.isMenuOpen} onClick={this.onHandleMenuOpen} />
    </Fragment>
  )

  onHandleMenuOpen = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen,
    });
  }

  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;

    if (location.pathname === rootPath) {
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
        {header}
        <Navbar isMenuOpen={this.state.isMenuOpen} />
        {children}
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
