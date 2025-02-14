import { BlockAttributes, BlockProps } from '../base';

export interface CoreHeadingAttributes extends BlockAttributes {
	content?: string;
	cssClassName?: string;
	level: number;
	style?: string;
}

export interface CoreHeadingProps extends BlockProps {
	attributes?: CoreHeadingAttributes;
}
