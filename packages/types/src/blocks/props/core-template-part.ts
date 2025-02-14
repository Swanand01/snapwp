import { PropsWithChildren } from 'react';
import { BlockAttributes, BlockProps } from '../base';

export interface CoreTemplatePartAttributes extends BlockAttributes {
	templatePartTagName?: string;
}

export interface CoreTemplatePartProps extends PropsWithChildren< BlockProps > {
	attributes?: CoreTemplatePartAttributes;
}
