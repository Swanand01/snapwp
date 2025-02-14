import { BlockAttributes, BlockProps } from '../base';

export interface CoreParagraphAttributes extends BlockAttributes {
	backgroundColor?: string;
	content?: string;
	cssClassName?: string;
	direction?: string;
	fontFamily?: string;
	fontSize?: string;
	style?: string;
	textColor?: string;
}

export interface CoreParagraphProps extends BlockProps {
	attributes?: CoreParagraphAttributes;
}
