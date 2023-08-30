import type {Ref} from 'vue';
import {computed} from 'vue';

import type {ResponsiveProp} from '../lib/map-responsive-classes';
import {parseResponsiveProp} from '../lib/map-responsive-classes';

import {objectEntries, objectFromEntries, objectKeys} from 'src/lib/utils';

export const useBackgroundImageStyle = (
	backgroundImageProp?: Ref<ResponsiveProp<string> | null>,
) => {
	const parsedProp = computed(() =>
		parseResponsiveProp(backgroundImageProp?.value),
	);

	const classes = computed(() =>
		objectKeys(parsedProp.value).map(
			(key) =>
				({
					xs: 'xs:bg-[image:var(--xs-image-url)]',
					sm: 'sm:bg-[image:var(--sm-image-url)]',
					md: 'md:bg-[image:var(--md-image-url)]',
					lg: 'lg:bg-[image:var(--lg-image-url)]',
					default: 'bg-[image:var(--default-image-url)]',
				}[key]),
		),
	);

	const styles = computed(() =>
		objectFromEntries(
			objectEntries(parsedProp.value).map(([key, value]) => [
				{
					xs: '--xs-image-url',
					sm: '--sm-image-url',
					md: '--md-image-url',
					lg: '--lg-image-url',
					default: '--default-image-url',
				}[key],
				`url('${value}')`,
			]),
		),
	);

	return {classes, styles};
};
