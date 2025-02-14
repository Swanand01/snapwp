import { BlockAttributes, BlockProps } from '../base';

export interface CoreAudioAttributes extends BlockAttributes {
	autoplay?: boolean;
	caption?: string;
	loop?: boolean;
	preload?: string;
	src?: string;
	style?: string;
}

export interface CoreAudioProps extends BlockProps {
	attributes?: CoreAudioAttributes;
}
