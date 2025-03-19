const reactRouterDom = jest.genMockFromModule('react-router-dom');

reactRouterDom.Link = ({ children, to }) => <a href={to}>{children}</a>;

module.exports = reactRouterDom;