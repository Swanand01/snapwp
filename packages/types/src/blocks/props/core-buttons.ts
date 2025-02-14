import { PropsWithChildren } from 'react';
import { BlockAttributes, BlockProps } from '../base';

export interface CoreButtonsAttributes extends BlockAttributes {
	cssClassName?: string;
	style?: string;
}

export interface CoreButtonsProps extends PropsWithChildren< BlockProps > {
	attributes?: CoreButtonsAttributes;
}
