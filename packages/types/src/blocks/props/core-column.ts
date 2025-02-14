import { PropsWithChildren } from 'react';
import { BlockAttributes, BlockProps } from '../base';

export interface CoreColumnAttributes extends BlockAttributes {
	style?: string;
	width?: string;
	cssClassName?: string;
}

export interface CoreColumnProps extends PropsWithChildren< BlockProps > {
	attributes?: CoreColumnAttributes;
}
