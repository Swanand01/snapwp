import { PropsWithChildren } from 'react';
import { BlockAttributes, BlockProps } from '../base';

export interface CoreQuoteAttributes extends BlockAttributes {
	citation?: string;
	cssClassName?: string;
	style?: string;
}

export interface CoreQuoteProps extends PropsWithChildren< BlockProps > {
	attributes?: CoreQuoteAttributes;
}
