import React from 'react';
import { BlockAttributesMap } from './map';
import { BlockAttributes, BlockData } from './base';

export type BlockDefinitions = Partial<
	{
		[ K in keyof BlockAttributesMap ]: React.FC<
			BlockData & BlockAttributes< BlockAttributesMap[ K ] >
		> | null;
	} & {
		[ key: string ]: React.FC< BlockData & BlockAttributes< any > > | null;
	}
>;
