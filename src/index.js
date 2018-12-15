import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class LayoutItem extends React.Component {
    render() {
        const { className, children, prefixCls, ...props } = this.props;
        const classString = classNames({
            [prefixCls]: true,
            [className]: className
        });
        return <div className={classString} {...props}>{children}</div>
    }
}

class Layout extends React.Component {

    static propTypes = {
        prefixCls: PropTypes.string,
    };

    static defaultProps = {
        prefixCls: 'rw-layout',
    };

    render() {
        const { className, children = [], prefixCls, ...props } = this.props;

        let hasSidebar = false;

        React.Children.forEach(children, item => {
            if (item.type && item.type.IS_LAYOUT_SIDER) {
                hasSidebar = true;
            }
        });

        const classString = classNames({
            [prefixCls]: true,
            [className]: className,
            [`${prefixCls}-has-sider`]: hasSidebar
        });

        return <div {...props} className={classString}>{children}</div>;
    }

}

function Header(props) {
    return <LayoutItem prefixCls='rw-layout-header' {...props} />
}

function Content(props) {
    return <LayoutItem prefixCls='rw-layout-content' {...props} />
}

function Footer(props) {
    return <LayoutItem prefixCls='rw-layout-footer' {...props} />
}

function Sider(props) {
    return <LayoutItem prefixCls='rw-layout-sider' {...props} />
}

Sider.IS_LAYOUT_SIDER = true;

Layout.Header = Header;
Layout.Content = Content;
Layout.Footer = Footer;
Layout.Sider = Sider;

export {
    Layout,
    Header,
    Content,
    Footer,
    Sider
}

export default Layout;