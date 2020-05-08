import React from "react";
import classNames from "classnames";

interface LayoutContext {
	prefixCls: string;
}

export const LayoutContext = React.createContext<LayoutContext>({
	prefixCls: "rw-layout",
});

export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
	prefixCls?: string;
}

interface LayoutFC extends React.FC<LayoutProps> {
	Header: typeof Header;
	Content: typeof Content;
	Footer: typeof Footer;
	Sider: typeof Sider;
}

export const version = "%VERSION%";

export const Layout: LayoutFC = function (props) {
	const { className, prefixCls, children, ...restProps } = props;

	let hasSidebar = false;

	React.Children.forEach(children, item => {
		if (React.isValidElement(item) && (item.type as any).IS_LAYOUT_SIDER) {
			hasSidebar = true;
		}
	});

	const classString = classNames(
		{
			[prefixCls!]: true,
			[`${prefixCls}-has-sider`]: hasSidebar,
		},
		className
	);

	return (
		<LayoutContext.Provider
			value={{
				prefixCls: prefixCls!,
			}}
		>
			<div {...restProps} className={classString}>
				{children}
			</div>
		</LayoutContext.Provider>
	);
};

Layout.displayName = "Layout";
Layout.defaultProps = {
	prefixCls: "rw-layout",
};

export const Header: React.FC<React.HTMLAttributes<HTMLDivElement>> = function (props) {
	const context = React.useContext(LayoutContext);
	return (
		<div
			{...props}
			className={classNames(`${context.prefixCls}-header`, props.className)}
		></div>
	);
};
Header.displayName = "Header";

export const Content: React.FC<React.HTMLAttributes<HTMLDivElement>> = function (props) {
	const context = React.useContext(LayoutContext);
	return (
		<div
			{...props}
			className={classNames(`${context.prefixCls}-content`, props.className)}
		></div>
	);
};
Content.displayName = "Content";

export const Footer: React.FC<React.HTMLAttributes<HTMLDivElement>> = function (props) {
	const context = React.useContext(LayoutContext);
	return (
		<div
			{...props}
			className={classNames(`${context.prefixCls}-footer`, props.className)}
		></div>
	);
};
Footer.displayName = "Footer";

interface Sider extends React.FC<React.HTMLAttributes<HTMLDivElement>> {
	IS_LAYOUT_SIDER: boolean;
}
export const Sider: Sider = function (props) {
	const context = React.useContext(LayoutContext);
	return (
		<div {...props} className={classNames(`${context.prefixCls}-sider`, props.className)}></div>
	);
};
Sider.IS_LAYOUT_SIDER = true;
Sider.displayName = "Sider";

Layout.Header = Header;
Layout.Content = Content;
Layout.Footer = Footer;
Layout.Sider = Sider;

export default Layout;
