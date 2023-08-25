import type {
  BADGE_ICON_NAMES,
  COLOR_ICONS,
  COMMUNICATION_ICON_NAMES,
  COMMUNITY_ICON_NAMES,
  CONTENT_ICON_NAMES,
  CONTROL_ICON_NAMES,
  FILL_ICONS,
  HARDWARE_ICON_NAMES,
  LINE_ICONS,
  LOGO_ICON_NAMES,
  MEDIA_AV_ICON_NAMES,
  MEDIA_IMAGE_ICON_NAMES,
  NAVIGATION_ICON_NAMES,
  OBJECT_ICON_NAMES,
  STATE_ICON_NAMES,
} from './constants';

export type LineIcons = (typeof LINE_ICONS)[number];

export type FillIcons = (typeof FILL_ICONS)[number];

export type ColorIcons = (typeof COLOR_ICONS)[number];

export type FontIcons = LineIcons | FillIcons;

export type SvgIcons = ColorIcons;

export type AllIcons = LineIcons | FillIcons | ColorIcons;

export interface IconVariants {
  line?: LineIcons;
  fill?: FillIcons;
  color?: ColorIcons;
}

export type NavigationIconName = (typeof NAVIGATION_ICON_NAMES)[number];

export type ControlIconName = (typeof CONTROL_ICON_NAMES)[number];

export type CommunityIconName = (typeof COMMUNITY_ICON_NAMES)[number];

export type ObjectIconName = (typeof OBJECT_ICON_NAMES)[number];

export type MediaAvIconName = (typeof MEDIA_AV_ICON_NAMES)[number];

export type MediaImageIconName = (typeof MEDIA_IMAGE_ICON_NAMES)[number];

export type StateIconName = (typeof STATE_ICON_NAMES)[number];

export type HardwareIconName = (typeof HARDWARE_ICON_NAMES)[number];

export type LogoIconName = (typeof LOGO_ICON_NAMES)[number];

export type BadgeIconName = (typeof BADGE_ICON_NAMES)[number];

export type CommunicationIconName = (typeof COMMUNICATION_ICON_NAMES)[number];

export type ContentIconName = (typeof CONTENT_ICON_NAMES)[number];
