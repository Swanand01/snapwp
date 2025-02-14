import { BlockAttributes, BlockProps } from '../base';

export interface CorePullquoteAttributes extends BlockAttributes {
	citation?: string;
	style?: string;
	textAlign?: string;
	pullquoteValue?: string;
}

export interface CorePullquoteProps extends BlockProps {
	attributes?: CorePullquoteAttributes;
}
