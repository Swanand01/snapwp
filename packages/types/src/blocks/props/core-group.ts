import { PropsWithChildren, CSSProperties, ReactNode } from 'react';
import { BlockAttributes, BlockProps } from '../base';

export interface CoreGroupAttributes extends BlockAttributes {
	style?: string;
	tagName?: string;
}

export interface CoreGroupProps extends PropsWithChildren< BlockProps > {
	attributes?: CoreGroupAttributes;
}

export interface TagProps {
	name?: string;
	className: string;
	style: CSSProperties;
	children: ReactNode;
}
