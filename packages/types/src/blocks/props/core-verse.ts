import { BlockAttributes, BlockProps } from '../base';

export interface CoreVerseAttributes extends BlockAttributes {
	content?: string;
	style?: string;
}

export interface CoreVerseProps extends BlockProps {
	attributes?: CoreVerseAttributes;
}
