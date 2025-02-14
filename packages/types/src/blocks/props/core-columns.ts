import { PropsWithChildren } from 'react';
import { BlockAttributes, BlockProps } from '../base';

export interface CoreColumnsAttributes extends BlockAttributes {
	style?: string;
	cssClassName?: string;
}

export interface CoreColumnsProps extends PropsWithChildren< BlockProps > {
	attributes?: CoreColumnsAttributes;
}
