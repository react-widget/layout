# react-widget-layout

## 安装

```
npm install --save react-widget-layout
```

## 使用

[![Edit react-widget-layout](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/elegant-sutherland-3lthx?fontsize=14&hidenavigation=1&theme=dark)

```js
import {Layout, Header, Content, Footer} from 'react-widget-layout';
import 'react-widget-layout/style'

export default () => {
    return (
        <Layout>
			<Header>Header</Header>
			<Content>Content</Content>
			<Footer>Footer</Footer>
		</Layout>
    );
}
```

## Interface

```ts
interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    /** 默认为：rw-layout */
    prefixCls?: string;
}
```

## 基本样式

```css
.rw-layout {
	display: flex;
	flex-direction: column;
	flex: auto;
}
.rw-layout-has-sider {
	flex-direction: row;
}

.rw-layout-sider,
.rw-layout-header,
.rw-layout-footer {
	flex: 0 0 auto;
}

.rw-layout-content {
	flex: auto;
}

```
