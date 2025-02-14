import { BlockAttributes, BlockProps } from '../base';

export interface CoreSpacerAttributes extends BlockAttributes {
	height: string;
	style?: string;
	width?: string;
}

export interface CoreSpacerProps extends BlockProps {
	attributes?: CoreSpacerAttributes;
}
