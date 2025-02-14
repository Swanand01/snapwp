import { PropsWithChildren } from 'react';
import { BlockAttributes, BlockProps } from '../base';

export interface CoreListItemAttributes extends BlockAttributes {
	content?: string;
	style?: string;
}

export interface CoreListItemProps extends PropsWithChildren< BlockProps > {
	attributes?: CoreListItemAttributes;
}
