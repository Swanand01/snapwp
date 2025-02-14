import { BlockAttributes, BlockProps } from '../base';

export interface CorePreformattedAttributes extends BlockAttributes {
	content?: string;
	style?: string;
}

export interface CorePreformattedProps extends BlockProps {
	attributes?: CorePreformattedAttributes;
}
