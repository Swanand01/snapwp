import { PropsWithChildren } from 'react';
import { BlockAttributes, BlockProps } from '../base';

export interface CoreDetailsAttributes extends BlockAttributes {
	style?: string;
	showContent: boolean;
	summary?: string;
}

export interface CoreDetailsProps extends PropsWithChildren< BlockProps > {
	attributes?: CoreDetailsAttributes;
}
