import { PropsWithChildren } from 'react';
import { BlockAttributes, BlockProps } from '../base';

export interface CoreListAttributes extends BlockAttributes {
	cssClassName?: string;
	ordered?: boolean;
	reversed?: boolean;
	start?: number;
	style?: string;
	type?: string;
}

export interface CoreListProps extends PropsWithChildren< BlockProps > {
	attributes?: CoreListAttributes;
}
