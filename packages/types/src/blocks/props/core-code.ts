import { BlockAttributes, BlockProps } from '../base';

export interface CoreCodeAttributes extends BlockAttributes {
	style?: string;
	content?: string;
	cssClassName?: string;
}

export interface CoreCodeProps extends BlockProps {
	attributes?: CoreCodeAttributes;
}
