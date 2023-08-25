//import {objectKeys} from 'src/lib/utils';
import {objectKeys} from '../../../lib/utils';

export const LINE_ICONS = [
  'ic-sample',
  'ic-navigation-alarm-line',
  'ic-navigation-alarm-disabled-line',
  'ic-navigation-language-line',
  'ic-navigation-menu-line',
  'ic-navigation-search-line',
  'ic-navigation-home-line',
  'ic-navigation-setting-line',
  'ic-navigation-sub-menu-line',
  'ic-navigation-login-line',
  'ic-navigation-logout-line',
  'ic-navigation-coupon-line',
  'ic-navigation-message-line',
  'ic-navigation-security-line',
  'ic-navigation-cart-line',
  'ic-navigation-profile-line',
  'ic-navigation-board-timeline-line',
  'ic-navigation-authenticator-line',
  'ic-navigation-community-line',
  'ic-navigation-my-activity-line',
  'ic-navigation-cart-selected-line',
  'ic-navigation-toonspoon-line',
  'ic-control-refresh-line',
  'ic-control-update-line',
  'ic-control-close-line',
  'ic-control-close-circle-line',
  'ic-control-add-line',
  'ic-control-add-circle-line',
  'ic-control-minus-line',
  'ic-control-minus-circle-line',
  'ic-control-long-arrow-left-line',
  'ic-control-long-arrow-right-line',
  'ic-control-long-arrow-up-line',
  'ic-control-long-arrow-down-line',
  'ic-control-arrow-left-line',
  'ic-control-arrow-right-line',
  'ic-control-arrow-up-line',
  'ic-control-arrow-down-line',
  'ic-control-double-arrow-left-line',
  'ic-control-double-arrow-right-line',
  'ic-control-arrow-left-circle-line',
  'ic-control-arrow-right-circle-line',
  'ic-control-double-arrow-left-circle-line',
  'ic-control-double-arrow-right-circle-line',
  'ic-control-web-link-line',
  'ic-control-minimize-line',
  'ic-control-maximize-line',
  'ic-control-enlarge-line',
  'ic-control-preview-line',
  'ic-control-top-line',
  'ic-control-bottom-line',
  'ic-control-check-line',
  'ic-control-check-bold-line',
  'ic-control-check-circle-line',
  'ic-control-long-arrow-letf-circle-line',
  'ic-control-long-arrow-right-circle-line',
  'ic-control-long-arrow-up-circle-line',
  'ic-control-long-arrow-down-circle-line',
  'ic-control-undo-line',
  'ic-control-redo-line',
  'ic-control-recover-line',
  'ic-community-share-line',
  'ic-community-thumbs-up-line',
  'ic-community-thumbs-down-line',
  'ic-community-group-line',
  'ic-community-group-add-line',
  'ic-community-person-line',
  'ic-community-friend-add-line',
  'ic-community-friend-now-line',
  'ic-community-friend-cancel-line',
  'ic-community-friend-acceptance-line',
  'ic-community-star-line',
  'ic-community-star-half-line',
  'ic-community-bookmark-line',
  'ic-community-like-line',
  'ic-community-pin-line',
  'ic-community-write-line',
  'ic-community-number-of-view-line',
  'ic-community-view-list-line',
  'ic-community-view-card-line',
  'ic-community-view-webzine-line',
  'ic-community-view-photo-line',
  'ic-community-view-thread-line',
  'ic-community-filter-line',
  'ic-community-reply-line',
  'ic-community-link-line',
  'ic-community-link-unlink-line',
  'ic-community-send-line',
  'ic-community-calendar-line',
  'ic-community-calendar-fill',
  'ic-community-attach-file-line',
  'ic-community-approve-line',
  'ic-community-oppose-line',
  'ic-community-attach-video-line',
  'ic-community-attach-image-line',
  'ic-community-attach-emoji-line',
  'ic-community-attach-survey-line',
  'ic-community-attach-music-line',
  'ic-community-attach-quotation-line',
  'ic-community-thumbnail-video-line',
  'ic-community-thumbnail-survey-line',
  'ic-community-thumbnail-music-line',
  'ic-community-thumbnail-pin-line',
  'ic-community-thumbnail-lock-line',
  'ic-community-sort-ascending-line',
  'ic-community-sort-descending-line',
  'ic-community-forum-line',
  'ic-community-board-line',
  'ic-community-board-all-line',
  'ic-community-requotation-line',
  'ic-community-public-line',
  'ic-community-random-line',
  'ic-community-copy-line',
  'ic-object-cash-stove-line',
  'ic-object-game-line',
  'ic-object-download-line',
  'ic-object-payment-line',
  'ic-object-delete-line',
  'ic-object-trophy-line',
  'ic-object-coin-line',
  'ic-object-cash-circle-line',
  'ic-object-notice-line',
  'ic-object-lock-line',
  'ic-object-unlock-line',
  'ic-object-lock-check-line',
  'ic-object-clock-line',
  'ic-object-cabinet-line',
  'ic-object-help-center-line',
  'ic-object-report-line',
  'ic-object-tag-line',
  'ic-object-crown-line',
  'ic-object-indi-game-line',
  'ic-object-collection-line',
  'ic-object-early-line',
  'ic-object-vr-line',
  'ic-object-widget-line',
  'ic-object-fire-line',
  'ic-object-pen-line',
  'ic-media-av-fast-forward-line',
  'ic-media-av-fast-rewind-line',
  'ic-media-av-10-forward-line',
  'ic-media-av-10-rewind-line',
  'ic-media-av-5-forward-line',
  'ic-media-av-5-rewind-line',
  'ic-media-av-replay-line',
  'ic-media-av-play-line',
  'ic-media-av-pause-line',
  'ic-media-av-sound-line',
  'ic-media-av-sound-off-line',
  'ic-media-av-mic-line',
  'ic-media-av-mic-off-line',
  'ic-media-av-volume-line',
  'ic-media-av-volume-off-line',
  'ic-media-av-volume-down-line',
  'ic-media-av-volume-auto-line',
  'ic-media-av-video-line',
  'ic-media-av-video-off-line',
  'ic-media-av-video-file-line',
  'ic-media-av-video-add-line',
  'ic-media-av-fullscreen-line',
  'ic-media-av-fullscreen-exit-line',
  'ic-media-av-pip-on-line',
  'ic-media-av-pip-off-line',
  'ic-media-av-closed-caption-line',
  'ic-media-image-image-line',
  'ic-media-image-image-miss-line',
  'ic-media-image-image-library-line',
  'ic-media-image-crop-line',
  'ic-media-image-camera-line',
  'ic-media-image-camera-switch-line',
  'ic-media-image-gif-line',
  'ic-media-image-jpg-line',
  'ic-media-image-png-line',
  'ic-media-image-pdf-line',
  'ic-media-image-flash-on-line',
  'ic-media-image-flash-off-line',
  'ic-media-image-flash-auto-line',
  'ic-state-warning-circle-line',
  'ic-state-help-circle-line',
  'ic-state-block-line',
  'ic-state-info-circle-line',
  'ic-hardware-desktop-line',
  'ic-hardware-smartphone-line',
  'ic-hardware-desktop-smartphone-line',
  'ic-hardware-inspection-line',
  'ic-hardware-qr-code-line',
  'ic-hardware-print-line',
  'ic-hardware-mouse-line',
  'ic-hardware-power-line',
  'ic-logo-window-line',
  'ic-logo-apple-line',
  'ic-logo-facebook-line',
  'ic-logo-twitter-line',
  'ic-logo-google-playstore-line',
  'ic-logo-google-line',
  'ic-logo-instagram-line',
  'ic-logo-youtube-line',
  'ic-logo-kakaotalk-line',
  'ic-logo-stove-symbol-line',
  'ic-logo-naver-line',
  'ic-logo-discord-line',
  'ic-logo-onestore-line',
  'ic-badge-stove-official-line',
  'ic-badge-gm-line',
  'ic-badge-cm-line',
  'ic-communication-emoji-line',
  'ic-communication-ar-effect-line',
  'ic-communication-hand-up-line',
  'ic-communication-phone-line',
  'ic-communication-phone-disabled-line',
  'ic-communication-phone-off-line',
  'ic-communication-stage-up-line',
  'ic-communication-stage-down-line',
  'ic-communication-stage-line',
  'ic-communication-lounge-line',
  'ic-communication-sound-sense-line',
  'ic-communication-profile-sense-line',
  'ic-communication-screen-share-line',
  'ic-communication-screen-share-stop-line',
  'ic-communication-translate-line',
  'ic-content-file-line',
  'ic-content-storage-line',
  'ic-content-inbox-line',
  'ic-content-folder-line',
  'ic-content-folder-add-line',
  'ic-content-mail-line',
  'ic-content-powerpoint-line',
  'ic-content-word-line',
  'ic-content-excel-line',
  'ic-squarestyle-share-line',
  'ic-squarestyle-like-line',
  'ic-squarestyle-home-line',
  'ic-squarestyle-fire-line',
  'ic-squarestyle-favorite-line',
  'ic-squarestyle-bookmark-line',
  'ic-squarestyle-setting-line',
  'ic-squarestyle-game-line',
  'ic-squarestyle-shopping-cart-line',
  'ic-squarestyle-pin-line',
  'ic-squarestyle-pen-nib-line',
  'ic-squarestyle-message-line',
  'ic-squarestyle-pencil-line',
  'ic-squarestyle-user-line',
  'ic-squarestyle-search-line',
  'ic-squarestyle-emoji-line',
  'ic-squarestyle-image-line',
  'ic-squarestyle-video-line',
  'ic-squarestyle-hashtag-line',
  'ic-squarestyle-star-line',
  'ic-squarestyle-reply-line',
  'ic-squarestyle-update-line',
  'ic-squarestyle-thumbs-up-line',
  'ic-squarestyle-thumbs-down-line',
  'ic-squarestyle-board-timeline-line',
  'ic-squarestyle-comment-line',
  'ic-squarestyle-group-line',
  'ic-squarestyle-friend-add-line',
  'ic-squarestyle-group-add-line',
  'ic-squarestyle-friend-now-line',
  'ic-squarestyle-friend-cancel-line',
  'ic-squarestyle-friend-acceptance-line',
  'ic-squarestyle-av-video-add-line',
  'ic-squarestyle-link-line',
  'ic-squarestyle-unlink-line',
  'ic-squarestyle-delete-line',
  'ic-squarestyle-number-of-view-line',
  'ic-squarestyle-info-circle-line',
  'ic-squarestyle-warning-circle-line',
  'ic-squarestyle-help-circle-line',
  'ic-squarestyle-alarm-line',
  'ic-squarestyle-alarm-disabled-line',
  'ic-squarestyle-refresh-line',
  'ic-squarestyle-top-line',
  'ic-squarestyle-check-line',
  'ic-squarestyle-play-line',
  'ic-squarestyle-thumbnail-video-line',
  'ic-squarestyle-cart-line',
  'ic-squarestyle-add-line',
  'ic-squarestyle-close-line',
  'ic-squarestyle-long-arrow-right-line',
  'ic-squarestyle-long-arrow-left-line',
  'ic-squarestyle-long-arrow-up-line',
  'ic-squarestyle-long-arrow-down-line',
  'ic-squarestyle-arrow-right-line',
  'ic-squarestyle-arrow-left-line',
  'ic-squarestyle-arrow-up-line',
  'ic-squarestyle-arrow-down-line',
  'ic-squarestyle-option-vertical-line',
  'ic-squarestyle-option-horizontal-line',
  'ic-squarestyle-code-line',
  'ic-squarestyle-attach-file-line',
  'ic-squarestyle-link-line',
  'ic-squarestyle-separator-line',
  'ic-squarestyle-list-unordered-line',
  'ic-squarestyle-list-ordered-line',
  'ic-squarestyle-align-line',
  'ic-squarestyle-table-line',
  'ic-squarestyle-quotation-line',
  'ic-squarestyle-font-color-line',
  'ic-squarestyle-font-size-line',
  'ic-squarestyle-strikethrough-line',
  'ic-squarestyle-underline-line',
  'ic-squarestyle-italic-line',
  'ic-squarestyle-bold-line',
] as const;

export const FILL_ICONS = [
  'ic-navigation-alarm-fill',
  'ic-navigation-alarm-disabled-fill',
  'ic-navigation-language-fill',
  'ic-navigation-apps-fill',
  'ic-navigation-option-vertical-fill',
  'ic-navigation-option-horizontal-fill',
  'ic-navigation-home-fill',
  'ic-navigation-setting-fill',
  'ic-navigation-coupon-fill',
  'ic-navigation-message-fill',
  'ic-navigation-security-fill',
  'ic-navigation-cart-fill',
  'ic-navigation-profile-fill',
  'ic-navigation-board-timeline-fill',
  'ic-navigation-authenticator-fill',
  'ic-navigation-community-fill',
  'ic-navigation-my-activity-fill',
  'ic-navigation-cart-selected-fill',
  'ic-navigation-toonspoon-fill',
  'ic-control-close-circle-fill',
  'ic-control-add-circle-fill',
  'ic-control-minus-circle-fill',
  'ic-control-arrow-left-circle-fill',
  'ic-control-arrow-right-circle-fill',
  'ic-control-double-arrow-left-circle-fill',
  'ic-control-double-arrow-right-circle-fill',
  'ic-control-check-circle-fill',
  'ic-control-select-arrow-up-fill',
  'ic-control-select-arrow-down-fill',
  'ic-control-sum-line',
  'ic-control-long-arrow-letf-circle-fill',
  'ic-control-long-arrow-right-circle-fill',
  'ic-control-long-arrow-up-circle-fill',
  'ic-control-long-arrow-down-circle-fill',
  'ic-community-share-fill',
  'ic-community-thumbs-up-fill',
  'ic-community-thumbs-down-fill',
  'ic-community-group-fill',
  'ic-community-group-add-fill',
  'ic-community-person-fill',
  'ic-community-friend-add-fill',
  'ic-community-friend-now-fill',
  'ic-community-friend-cancel-fill',
  'ic-community-friend-acceptance-fill',
  'ic-community-star-fill',
  'ic-community-bookmark-fill',
  'ic-community-like-fill',
  'ic-community-pin-fill',
  'ic-community-write-fill',
  'ic-community-number-of-view-fill',
  'ic-community-view-card-fill',
  'ic-community-view-webzine-fill',
  'ic-community-view-photo-fill',
  'ic-community-view-thread-fill',
  'ic-community-reply-fill',
  'ic-community-send-fill',
  'ic-community-approve-fill',
  'ic-community-oppose-fill',
  'ic-community-attach-video-fill',
  'ic-community-attach-image-fill',
  'ic-community-attach-emoji-fill',
  'ic-community-attach-survey-fill',
  'ic-community-attach-music-fill',
  'ic-community-attach-quotation-fill',
  'ic-community-forum-fill',
  'ic-community-board-fill',
  'ic-community-board-all-fill',
  'ic-community-quotation-fill',
  'ic-community-requotation-fill',
  'ic-community-public-fill',
  'ic-community-copy-fill',
  'ic-object-cash-stove-fill',
  'ic-object-game-fill',
  'ic-object-payment-fill',
  'ic-object-delete-fill',
  'ic-object-trophy-fill',
  'ic-object-coin-fill',
  'ic-object-cash-circle-fill',
  'ic-object-notice-fill',
  'ic-object-lock-fill',
  'ic-object-unlock-fill',
  'ic-object-lock-check-fill',
  'ic-object-clock-fill',
  'ic-object-cabinet-fill',
  'ic-object-help-center-fill',
  'ic-object-report-fill',
  'ic-object-tag-fill',
  'ic-object-crown-fill',
  'ic-object-indi-game-fill',
  'ic-object-collection-fill',
  'ic-object-vr-fill',
  'ic-object-widget-fill',
  'ic-object-fire-fill',
  'ic-object-pen-fill',
  'ic-media-av-fast-forward-fill',
  'ic-media-av-fast-rewind-fill',
  'ic-media-av-play-fill',
  'ic-media-av-pause-fill',
  'ic-media-av-sound-fill',
  'ic-media-av-sound-off-fill',
  'ic-media-av-mic-fill',
  'ic-media-av-mic-off-fill',
  'ic-media-av-volume-fill',
  'ic-media-av-volume-off-fill',
  'ic-media-av-volume-down-fill',
  'ic-media-av-volume-auto-fill',
  'ic-media-av-video-fill',
  'ic-media-av-video-off-fill',
  'ic-media-av-video-file-fill',
  'ic-media-av-video-add-fill',
  'ic-media-av-pip-on-fill',
  'ic-media-av-pip-off-fill',
  'ic-media-av-closed-caption-fill',
  'ic-media-image-image-fill',
  'ic-media-image-image-miss-fill',
  'ic-media-image-image-library-fill',
  'ic-media-image-camera-fill',
  'ic-media-image-camera-switch-fill',
  'ic-media-image-gif-fill',
  'ic-media-image-jpg-fill',
  'ic-media-image-png-fill',
  'ic-media-image-pdf-fill',
  'ic-media-image-flash-on-fill',
  'ic-media-image-flash-off-fill',
  'ic-media-image-flash-auto-fill',
  'ic-state-warning-circle-fill',
  'ic-state-help-circle-fill',
  'ic-state-block-fill',
  'ic-state-info-circle-fill',
  'ic-hardware-desktop-fill',
  'ic-hardware-smartphone-fill',
  'ic-hardware-desktop-smartphone-fill',
  'ic-hardware-inspection-fill',
  'ic-hardware-qr-code-fill',
  'ic-hardware-print-fill',
  'ic-hardware-mouse-fill',
  'ic-hardware-power-fill',
  'ic-logo-window-fill',
  'ic-logo-apple-fill',
  'ic-logo-facebook-fill',
  'ic-logo-twitter-fill',
  'ic-logo-google-playstore-fill',
  'ic-logo-google-fill',
  'ic-logo-instagram-fill',
  'ic-logo-youtube-fill',
  'ic-logo-kakaotalk-fill',
  'ic-logo-stove-symbol-fill',
  'ic-logo-naver-fill',
  'ic-logo-discord-fill',
  'ic-logo-onestore-fill',
  'ic-logo-stove-fill',
  'ic-badge-stove-official-fill',
  'ic-badge-gm-fill',
  'ic-badge-cm-fill',
  'ic-communication-emoji-fill',
  'ic-communication-ar-effect-fill',
  'ic-communication-hand-up-fill',
  'ic-communication-phone-fill',
  'ic-communication-phone-disabled-fill',
  'ic-communication-phone-off-fill',
  'ic-communication-stage-up-fill',
  'ic-communication-stage-down-fill',
  'ic-communication-stage-fill',
  'ic-communication-lounge-fill',
  'ic-communication-sound-sense-fill',
  'ic-communication-profile-sense-fill',
  'ic-communication-screen-share-fill',
  'ic-communication-screen-share-stop-fill',
  'ic-communication-translate-fill',
  'ic-content-file-fill',
  'ic-content-storage-fill',
  'ic-content-inbox-fill',
  'ic-content-folder-fill',
  'ic-content-folder-add-fill',
  'ic-content-mail-fill',
  'ic-content-powerpoint-fill',
  'ic-content-word-fill',
  'ic-content-excel-fill',
  'ic-squarestyle-share-fill',
  'ic-squarestyle-like-fill',
  'ic-squarestyle-home-fill',
  'ic-squarestyle-fire-fill',
  'ic-squarestyle-favorite-fill',
  'ic-squarestyle-bookmark-fill',
  'ic-squarestyle-setting-fill',
  'ic-squarestyle-game-fill',
  'ic-squarestyle-shopping-cart-fill',
  'ic-squarestyle-pin-fill',
  'ic-squarestyle-calendar-fill',
  'ic-squarestyle-pen-nib-fill',
  'ic-squarestyle-message-fill',
  'ic-squarestyle-pencil-fill',
  'ic-squarestyle-fullscreen-fill',
  'ic-squarestyle-fullscreen-exit-fill',
  'ic-squarestyle-compass-fill',
  'ic-squarestyle-user-fill',
  'ic-squarestyle-emoji-fill',
  'ic-squarestyle-image-fill',
  'ic-squarestyle-video-fill',
  'ic-squarestyle-star-fill',
  'ic-squarestyle-reply-fill',
  'ic-squarestyle-add-circle-fill',
  'ic-squarestyle-close-circle-fill',
  'ic-squarestyle-thumbs-up-fill',
  'ic-squarestyle-thumbs-down-fill',
  'ic-squarestyle-board-timeline-fill',
  'ic-squarestyle-comment-fill',
  'ic-squarestyle-group-fill',
  'ic-squarestyle-friend-add-fill',
  'ic-squarestyle-group-add-fill',
  'ic-squarestyle-friend-now-fill',
  'ic-squarestyle-friend-cancel-fill',
  'ic-squarestyle-friend-acceptance-fill',
  'ic-squarestyle-av-video-add-fill',
  'ic-squarestyle-delete-fill',
  'ic-squarestyle-number-of-view-fill',
  'ic-squarestyle-info-circle-fill',
  'ic-squarestyle-warning-circle-fill',
  'ic-squarestyle-help-circle-fill',
  'ic-squarestyle-alarm-fill',
  'ic-squarestyle-alarm-disabled-fill',
  'ic-squarestyle-play-fill',
  'ic-squarestyle-thumbnail-video-fill',
  'ic-squarestyle-cart-fill',
  'ic-squarestyle-survey-fill',
] as const;

export const COLOR_ICONS = [
  'ic-logo-apple-color',
  'ic-logo-discord-color',
  'ic-logo-facebook-color',
  'ic-logo-google-color',
  'ic-logo-google-playstore-color',
  'ic-logo-instagram-color',
  'ic-logo-kakaotalk-color',
  'ic-logo-naver-color',
  'ic-logo-onestore-color',
  'ic-logo-stove-color',
  'ic-logo-stove-symbol-color',
  'ic-logo-twitter-color',
  'ic-logo-window-color',
  'ic-logo-youtube-color',
] as const;

export const ALL_ICONS = [
  ...LINE_ICONS,
  ...FILL_ICONS,
  ...COLOR_ICONS,
] as const;

export const SAMPLE_ICON_VARIANTS_BY_NAME = {
  sample: {
    line: 'ic-sample',
  },
} as const;

export const SAMPLE_ICON_NAMES = objectKeys(SAMPLE_ICON_VARIANTS_BY_NAME);

export const NAVIGATION_ICON_VARIANTS_BY_NAME = {
  'alarm': {
    line: 'ic-navigation-alarm-line',
    fill: 'ic-navigation-alarm-fill',
  },
  'alarm-disabled': {
    line: 'ic-navigation-alarm-disabled-line',
    fill: 'ic-navigation-alarm-disabled-fill',
  },
  'language': {
    line: 'ic-navigation-language-line',
    fill: 'ic-navigation-language-fill',
  },
  'apps': {
    fill: 'ic-navigation-apps-fill',
  },
  'menu': {
    line: 'ic-navigation-menu-line',
  },
  'option-vertical': {
    fill: 'ic-navigation-option-vertical-fill',
  },
  'option-horizontal': {
    fill: 'ic-navigation-option-horizontal-fill',
  },
  'search': {
    line: 'ic-navigation-search-line',
  },
  'home': {
    line: 'ic-navigation-home-line',
    fill: 'ic-navigation-home-fill',
  },
  'setting': {
    line: 'ic-navigation-setting-line',
    fill: 'ic-navigation-setting-fill',
  },
  'sub-menu': {
    line: 'ic-navigation-sub-menu-line',
  },
  'login': {
    line: 'ic-navigation-login-line',
  },
  'logout': {
    line: 'ic-navigation-logout-line',
  },
  'coupon': {
    line: 'ic-navigation-coupon-line',
    fill: 'ic-navigation-coupon-fill',
  },
  'message': {
    line: 'ic-navigation-message-line',
    fill: 'ic-navigation-message-fill',
  },
  'security': {
    line: 'ic-navigation-security-line',
    fill: 'ic-navigation-security-fill',
  },
  'cart': {
    line: 'ic-navigation-cart-line',
    fill: 'ic-navigation-cart-fill',
  },
  'profile': {
    line: 'ic-navigation-profile-line',
    fill: 'ic-navigation-profile-fill',
  },
  'board-timeline': {
    line: 'ic-navigation-board-timeline-line',
    fill: 'ic-navigation-board-timeline-fill',
  },
  'authenticator': {
    line: 'ic-navigation-authenticator-line',
    fill: 'ic-navigation-authenticator-fill',
  },
  'community': {
    line: 'ic-navigation-community-line',
    fill: 'ic-navigation-community-fill',
  },
  'my-activity': {
    line: 'ic-navigation-my-activity-line',
    fill: 'ic-navigation-my-activity-fill',
  },
  'cart-selected': {
    line: 'ic-navigation-cart-selected-line',
    fill: 'ic-navigation-cart-selected-fill',
  },
  'toonspoon': {
    line: 'ic-navigation-toonspoon-line',
    fill: 'ic-navigation-toonspoon-fill',
  },
} as const;

export const NAVIGATION_ICON_NAMES = objectKeys(
  NAVIGATION_ICON_VARIANTS_BY_NAME,
);

export const CONTROL_ICON_VARIANTS_BY_NAME = {
  'refresh': {
    line: 'ic-control-refresh-line',
  },
  'update': {
    line: 'ic-control-update-line',
  },
  'close': {
    line: 'ic-control-close-line',
  },
  'close-circle': {
    line: 'ic-control-close-circle-line',
    fill: 'ic-control-close-circle-fill',
  },
  'add': {
    line: 'ic-control-add-line',
  },
  'add-circle': {
    line: 'ic-control-add-circle-line',
    fill: 'ic-control-add-circle-fill',
  },
  'minus': {
    line: 'ic-control-minus-line',
  },
  'minus-circle': {
    line: 'ic-control-minus-circle-line',
    fill: 'ic-control-minus-circle-fill',
  },
  'long-arrow-letf': {
    line: 'ic-control-long-arrow-left-line',
  },
  'long-arrow-right': {
    line: 'ic-control-long-arrow-right-line',
  },
  'long-arrow-up': {
    line: 'ic-control-long-arrow-up-line',
  },
  'long-arrow-down': {
    line: 'ic-control-long-arrow-down-line',
  },
  'arrow-left': {
    line: 'ic-control-arrow-left-line',
  },
  'arrow-right': {
    line: 'ic-control-arrow-right-line',
  },
  'arrow-up': {
    line: 'ic-control-arrow-up-line',
  },
  'arrow-down': {
    line: 'ic-control-arrow-down-line',
  },
  'double-arrow-left': {
    line: 'ic-control-double-arrow-left-line',
  },
  'double-arrow-right': {
    line: 'ic-control-double-arrow-right-line',
  },
  'arrow-left-circle': {
    line: 'ic-control-arrow-left-circle-line',
    fill: 'ic-control-arrow-left-circle-fill',
  },
  'arrow-right-circle': {
    line: 'ic-control-arrow-right-circle-line',
    fill: 'ic-control-arrow-right-circle-fill',
  },
  'double-arrow-left-circle': {
    line: 'ic-control-double-arrow-left-circle-line',
    fill: 'ic-control-double-arrow-left-circle-fill',
  },
  'double-arrow-right-circle': {
    line: 'ic-control-double-arrow-right-circle-line',
    fill: 'ic-control-double-arrow-right-circle-fill',
  },
  'web-link': {
    line: 'ic-control-web-link-line',
  },
  'minimize': {
    line: 'ic-control-minimize-line',
  },
  'maximize': {
    line: 'ic-control-maximize-line',
  },
  'enlarge': {
    line: 'ic-control-enlarge-line',
  },
  'preview': {
    line: 'ic-control-preview-line',
  },
  'top': {
    line: 'ic-control-top-line',
  },
  'bottom': {
    line: 'ic-control-bottom-line',
  },
  'check': {
    line: 'ic-control-check-line',
  },
  'check-bold': {
    line: 'ic-control-check-bold-line',
  },
  'check-circle': {
    line: 'ic-control-check-circle-line',
    fill: 'ic-control-check-circle-fill',
  },
  'select-arrow-up': {
    fill: 'ic-control-select-arrow-up-fill',
  },
  'select-arrow-down': {
    fill: 'ic-control-select-arrow-down-fill',
  },
  'sum': {
    line: 'ic-control-sum-line',
  },
  'long-arrow-letf-circle': {
    line: 'ic-control-long-arrow-letf-circle-line',
    fill: 'ic-control-long-arrow-letf-circle-fill',
  },
  'long-arrow-right-circle': {
    line: 'ic-control-long-arrow-right-circle-line',
    fill: 'ic-control-long-arrow-right-circle-fill',
  },
  'long-arrow-up-circle': {
    line: 'ic-control-long-arrow-up-circle-line',
    fill: 'ic-control-long-arrow-up-circle-fill',
  },
  'long-arrow-down-circle': {
    line: 'ic-control-long-arrow-down-circle-line',
    fill: 'ic-control-long-arrow-down-circle-fill',
  },
  'undo': {
    line: 'ic-control-undo-line',
  },
  'redo': {
    line: 'ic-control-redo-line',
  },
  'recover': {
    line: 'ic-control-recover-line',
  },
} as const;

export const CONTROL_ICON_NAMES = objectKeys(CONTROL_ICON_VARIANTS_BY_NAME);

export const COMMUNITY_ICON_VARIANTS_BY_NAME = {
  'share': {
    line: 'ic-community-share-line',
    fill: 'ic-community-share-fill',
  },
  'thumbs-up': {
    line: 'ic-community-thumbs-up-line',
    fill: 'ic-community-thumbs-up-fill',
  },
  'thumbs-down': {
    line: 'ic-community-thumbs-down-line',
    fill: 'ic-community-thumbs-down-fill',
  },
  'group': {
    line: 'ic-community-group-line',
    fill: 'ic-community-group-fill',
  },
  'group-add': {
    line: 'ic-community-group-add-line',
    fill: 'ic-community-group-add-fill',
  },
  'person': {
    line: 'ic-community-person-line',
    fill: 'ic-community-person-fill',
  },
  'friend-add': {
    line: 'ic-community-friend-add-line',
    fill: 'ic-community-friend-add-fill',
  },
  'friend-now': {
    line: 'ic-community-friend-now-line',
    fill: 'ic-community-friend-now-fill',
  },
  'friend-cancel': {
    line: 'ic-community-friend-cancel-line',
    fill: 'ic-community-friend-cancel-fill',
  },
  'friend-acceptance': {
    line: 'ic-community-friend-acceptance-line',
    fill: 'ic-community-friend-acceptance-fill',
  },
  'star': {
    line: 'ic-community-star-line',
    fill: 'ic-community-star-fill',
  },
  'star-half': {
    line: 'ic-community-star-half-line',
  },
  'bookmark': {
    line: 'ic-community-bookmark-line',
    fill: 'ic-community-bookmark-fill',
  },
  'like': {
    line: 'ic-community-like-line',
    fill: 'ic-community-like-fill',
  },
  'pin': {
    line: 'ic-community-pin-line',
    fill: 'ic-community-pin-fill',
  },
  'write': {
    line: 'ic-community-write-line',
    fill: 'ic-community-write-fill',
  },
  'number-of-view': {
    line: 'ic-community-number-of-view-line',
    fill: 'ic-community-number-of-view-fill',
  },
  'view-list': {
    line: 'ic-community-view-list-line',
  },
  'view-card': {
    line: 'ic-community-view-card-line',
    fill: 'ic-community-view-card-fill',
  },
  'view-webzine': {
    line: 'ic-community-view-webzine-line',
    fill: 'ic-community-view-webzine-fill',
  },
  'view-photo': {
    line: 'ic-community-view-photo-line',
    fill: 'ic-community-view-photo-fill',
  },
  'view-thread': {
    line: 'ic-community-view-thread-line',
    fill: 'ic-community-view-thread-fill',
  },
  'filter': {
    line: 'ic-community-filter-line',
  },
  'reply': {
    line: 'ic-community-reply-line',
    fill: 'ic-community-reply-fill',
  },
  'link': {
    line: 'ic-community-link-line',
  },
  'unlink': {
    line: 'ic-community-link-unlink-line',
  },
  'send': {
    line: 'ic-community-send-line',
    fill: 'ic-community-send-fill',
  },
  'calendar': {
    line: 'ic-community-calendar-line',
  },
  'attach-file': {
    line: 'ic-community-attach-file-line',
  },
  'approve': {
    line: 'ic-community-approve-line',
    fill: 'ic-community-approve-fill',
  },
  'oppose': {
    line: 'ic-community-oppose-line',
    fill: 'ic-community-oppose-fill',
  },
  'attach-video': {
    line: 'ic-community-attach-video-line',
    fill: 'ic-community-attach-video-fill',
  },
  'attach-image': {
    line: 'ic-community-attach-image-line',
    fill: 'ic-community-attach-image-fill',
  },
  'attach-emoji': {
    line: 'ic-community-attach-emoji-line',
    fill: 'ic-community-attach-emoji-fill',
  },
  'attach-survey': {
    line: 'ic-community-attach-survey-line',
    fill: 'ic-community-attach-survey-fill',
  },
  'attach-music': {
    line: 'ic-community-attach-music-line',
    fill: 'ic-community-attach-music-fill',
  },
  'attach-quotation': {
    line: 'ic-community-attach-quotation-line',
    fill: 'ic-community-attach-quotation-fill',
  },
  'thumbnail-video': {
    line: 'ic-community-thumbnail-video-line',
  },
  'thumbnail-survey': {
    line: 'ic-community-thumbnail-survey-line',
  },
  'thumbnail-music': {
    line: 'ic-community-thumbnail-music-line',
  },
  'thumbnail-pin': {
    line: 'ic-community-thumbnail-pin-line',
  },
  'thumbnail-lock': {
    line: 'ic-community-thumbnail-lock-line',
  },
  'sort-ascending': {
    line: 'ic-community-sort-ascending-line',
  },
  'sort-descending': {
    line: 'ic-community-sort-descending-line',
  },
  'forum': {
    line: 'ic-community-forum-line',
    fill: 'ic-community-forum-fill',
  },
  'board': {
    line: 'ic-community-board-line',
    fill: 'ic-community-board-fill',
  },
  'board-all': {
    line: 'ic-community-board-all-line',
    fill: 'ic-community-board-all-fill',
  },
  'quotation': {
    fill: 'ic-community-quotation-fill',
  },
  'requotation': {
    line: 'ic-community-requotation-line',
    fill: 'ic-community-requotation-fill',
  },
  'public': {
    line: 'ic-community-public-line',
    fill: 'ic-community-public-fill',
  },
  'random': {
    line: 'ic-community-random-line',
  },
  'copy': {
    line: 'ic-community-copy-line',
    fill: 'ic-community-copy-fill',
  },
  'square-share': {
    line: 'ic-squarestyle-share-line',
    fill: 'ic-squarestyle-share-fill',
  },
  'square-like': {
    line: 'ic-squarestyle-like-line',
    fill: 'ic-squarestyle-like-fill',
  },
  'square-home': {
    line: 'ic-squarestyle-home-line',
    fill: 'ic-squarestyle-home-fill',
  },
  'square-fire': {
    line: 'ic-squarestyle-fire-line',
    fill: 'ic-squarestyle-fire-fill',
  },
  'square-bookmark': {
    line: 'ic-squarestyle-bookmark-line',
    fill: 'ic-squarestyle-bookmark-fill',
  },
  'square-setting': {
    line: 'ic-squarestyle-setting-line',
    fill: 'ic-squarestyle-setting-fill',
  },
  'square-game': {
    line: 'ic-squarestyle-game-line',
    fill: 'ic-squarestyle-game-fill',
  },
  'square-shopping': {
    line: 'ic-squarestyle-shopping-cart-line',
    fill: 'ic-squarestyle-shopping-cart-fill',
  },
  'square-pin': {
    line: 'ic-squarestyle-pin-line',
    fill: 'ic-squarestyle-pin-fill',
  },
  'square-calendar': {
    fill: 'ic-squarestyle-calendar-fill',
  },
  'square-pen-nib': {
    line: 'ic-squarestyle-pen-nib-line',
    fill: 'ic-squarestyle-pen-nib-fill',
  },
  'square-message': {
    line: 'ic-squarestyle-message-line',
    fill: 'ic-squarestyle-message-fill',
  },
  'square-pencil': {
    line: 'ic-squarestyle-pencil-line',
    fill: 'ic-squarestyle-pencil-fill',
  },
  'square-fullscreen': {
    fill: 'ic-squarestyle-fullscreen-fill',
  },
  'square-fullscreen-exit': {
    fill: 'ic-squarestyle-fullscreen-exit-fill',
  },
  'square-compass': {
    fill: 'ic-squarestyle-compass-fill',
  },
  'square-user': {
    line: 'ic-squarestyle-user-line',
    fill: 'ic-squarestyle-user-fill',
  },
  'square-search': {
    line: 'ic-squarestyle-search-line',
  },
  'square-emoji': {
    line: 'ic-squarestyle-emoji-line',
    fill: 'ic-squarestyle-emoji-fill',
  },
  'square-image': {
    line: 'ic-squarestyle-image-line',
    fill: 'ic-squarestyle-image-fill',
  },
  'square-video': {
    line: 'ic-squarestyle-video-line',
    fill: 'ic-squarestyle-video-fill',
  },
  'square-hashtag': {
    line: 'ic-squarestyle-hashtag-line',
  },
  'square-star': {
    line: 'ic-squarestyle-star-line',
    fill: 'ic-squarestyle-star-fill',
  },
  'square-reply': {
    line: 'ic-squarestyle-reply-line',
    fill: 'ic-squarestyle-reply-fill',
  },
  'square-update': {
    line: 'ic-squarestyle-update-line',
  },
  'square-add-circle': {
    fill: 'ic-squarestyle-add-circle-fill',
  },
  'square-close-circle': {
    fill: 'ic-squarestyle-close-circle-fill',
  },
  'square-thumbs-up': {
    line: 'ic-squarestyle-thumbs-up-line',
    fill: 'ic-squarestyle-thumbs-up-fill',
  },
  'square-thumbs-down': {
    line: 'ic-squarestyle-thumbs-down-line',
    fill: 'ic-squarestyle-thumbs-down-fill',
  },
  'square-board-timeline': {
    line: 'ic-squarestyle-board-timeline-line',
    fill: 'ic-squarestyle-board-timeline-fill',
  },
  'square-comment': {
    line: 'ic-squarestyle-comment-line',
    fill: 'ic-squarestyle-comment-fill',
  },
  'square-group': {
    line: 'ic-squarestyle-group-line',
    fill: 'ic-squarestyle-group-fill',
  },
  'square-friend-add': {
    line: 'ic-squarestyle-friend-add-line',
    fill: 'ic-squarestyle-friend-add-fill',
  },
  'square-group-add': {
    line: 'ic-squarestyle-group-add-line',
    fill: 'ic-squarestyle-group-add-fill',
  },
  'square-friend-now': {
    line: 'ic-squarestyle-friend-now-line',
    fill: 'ic-squarestyle-friend-now-fill',
  },
  'square-friend-cancel': {
    line: 'ic-squarestyle-friend-cancel-line',
    fill: 'ic-squarestyle-friend-cancel-fill',
  },
  'square-friend-acceptance': {
    line: 'ic-squarestyle-friend-acceptance-line',
    fill: 'ic-squarestyle-friend-acceptance-fill',
  },
  'square-av-video-add': {
    line: 'ic-squarestyle-av-video-add-line',
    fill: 'ic-squarestyle-av-video-add-fill',
  },
  'square-link': {
    line: 'ic-squarestyle-link-line',
  },
  'square-unlink': {
    line: 'ic-squarestyle-unlink-line',
  },
  'square-delete': {
    line: 'ic-squarestyle-delete-line',
    fill: 'ic-squarestyle-delete-fill',
  },
  'square-number-of-view': {
    line: 'ic-squarestyle-number-of-view-line',
    fill: 'ic-squarestyle-number-of-view-fill',
  },
  'square-info-circle': {
    line: 'ic-squarestyle-info-circle-line',
    fill: 'ic-squarestyle-info-circle-fill',
  },
  'square-warning-circle': {
    line: 'ic-squarestyle-warning-circle-line',
    fill: 'ic-squarestyle-warning-circle-fill',
  },
  'square-help-circle': {
    line: 'ic-squarestyle-help-circle-line',
    fill: 'ic-squarestyle-help-circle-fill',
  },
  'square-alarm': {
    line: 'ic-squarestyle-alarm-line',
    fill: 'ic-squarestyle-alarm-fill',
  },
  'square-alarm-disabled': {
    line: 'ic-squarestyle-alarm-disabled-line',
    fill: 'ic-squarestyle-alarm-disabled-fill',
  },
  'square-refresh': {
    line: 'ic-squarestyle-refresh-line',
  },
  'square-top': {
    line: 'ic-squarestyle-top-line',
  },
  'square-check': {
    line: 'ic-squarestyle-check-line',
  },
  'square-play': {
    line: 'ic-squarestyle-play-line',
    fill: 'ic-squarestyle-play-fill',
  },
  'square-thumbnail-video': {
    line: 'ic-squarestyle-thumbnail-video-line',
    fill: 'ic-squarestyle-thumbnail-video-fill',
  },
  'square-cart': {
    line: 'ic-squarestyle-cart-line',
    fill: 'ic-squarestyle-cart-fill',
  },
  'square-add': {
    line: 'ic-squarestyle-add-line',
  },
  'square-close': {
    line: 'ic-squarestyle-close-line',
  },
  'square-long-arrow-right': {
    line: 'ic-squarestyle-long-arrow-right-line',
  },
  'square-long-arrow-left': {
    line: 'ic-squarestyle-long-arrow-left-line',
  },
  'square-long-arrow-up': {
    line: 'ic-squarestyle-long-arrow-up-line',
  },
  'square-long-arrow-down': {
    line: 'ic-squarestyle-long-arrow-down-line',
  },
  'square-arrow-right': {
    line: 'ic-squarestyle-arrow-right-line',
  },
  'square-arrow-left': {
    line: 'ic-squarestyle-arrow-left-line',
  },
  'square-arrow-up': {
    line: 'ic-squarestyle-arrow-up-line',
  },
  'square-arrow-down': {
    line: 'ic-squarestyle-arrow-down-line',
  },
  'square-option-vertical': {
    line: 'ic-squarestyle-option-vertical-line',
  },
  'square-option-horizontal': {
    line: 'ic-squarestyle-option-horizontal-line',
  },
  'square-code': {
    line: 'ic-squarestyle-code-line',
  },
  'square-attach-file': {
    line: 'ic-squarestyle-attach-file-line',
  },
  'square-survey': {
    fill: 'ic-squarestyle-survey-fill',
  },
  'square-separator': {
    line: 'ic-squarestyle-separator-line',
  },
  'square-list-unordered': {
    line: 'ic-squarestyle-list-unordered-line',
  },
  'square-list-ordered': {
    line: 'ic-squarestyle-list-ordered-line',
  },
  'square-align': {
    line: 'ic-squarestyle-align-line',
  },
  'square-table': {
    line: 'ic-squarestyle-table-line',
  },
  'square-quotation': {
    line: 'ic-squarestyle-quotation-line',
  },
  'square-font-color': {
    line: 'ic-squarestyle-font-color-line',
  },
  'square-font-size': {
    line: 'ic-squarestyle-font-size-line',
  },
  'square-strikethrough': {
    line: 'ic-squarestyle-strikethrough-line',
  },
  'square-underline': {
    line: 'ic-squarestyle-underline-line',
  },
  'square-italic': {
    line: 'ic-squarestyle-italic-line',
  },
  'square-bold': {
    line: 'ic-squarestyle-bold-line',
  },
} as const;

export const COMMUNITY_ICON_NAMES = objectKeys(COMMUNITY_ICON_VARIANTS_BY_NAME);

export const OBJECT_ICON_VARIANTS_BY_NAME = {
  'cash-stove': {
    line: 'ic-object-cash-stove-line',
    fill: 'ic-object-cash-stove-fill',
  },
  'game': {
    line: 'ic-object-game-line',
    fill: 'ic-object-game-fill',
  },
  'download': {
    line: 'ic-object-download-line',
  },
  'payment': {
    line: 'ic-object-payment-line',
    fill: 'ic-object-payment-fill',
  },
  'delete': {
    line: 'ic-object-delete-line',
    fill: 'ic-object-delete-fill',
  },
  'trophy': {
    line: 'ic-object-trophy-line',
    fill: 'ic-object-trophy-fill',
  },
  'coin': {
    line: 'ic-object-coin-line',
    fill: 'ic-object-coin-fill',
  },
  'cash-circle': {
    line: 'ic-object-cash-circle-line',
    fill: 'ic-object-cash-circle-fill',
  },
  'notice': {
    line: 'ic-object-notice-line',
    fill: 'ic-object-notice-fill',
  },
  'lock': {
    line: 'ic-object-lock-line',
    fill: 'ic-object-lock-fill',
  },
  'unlock': {
    line: 'ic-object-unlock-line',
    fill: 'ic-object-unlock-fill',
  },
  'lock_check': {
    line: 'ic-object-lock-check-line',
    fill: 'ic-object-lock-check-fill',
  },
  'clock': {
    line: 'ic-object-clock-line',
    fill: 'ic-object-clock-fill',
  },
  'cabinet': {
    line: 'ic-object-cabinet-line',
    fill: 'ic-object-cabinet-fill',
  },
  'help-center': {
    line: 'ic-object-help-center-line',
    fill: 'ic-object-help-center-fill',
  },
  'report': {
    line: 'ic-object-report-line',
    fill: 'ic-object-report-fill',
  },
  'tag': {
    line: 'ic-object-tag-line',
    fill: 'ic-object-tag-fill',
  },
  'crown': {
    line: 'ic-object-crown-line',
    fill: 'ic-object-crown-fill',
  },
  'indi-game': {
    line: 'ic-object-indi-game-line',
    fill: 'ic-object-indi-game-fill',
  },
  'indi-collection': {
    line: 'ic-object-collection-line',
    fill: 'ic-object-collection-fill',
  },
  'indi-early': {
    line: 'ic-object-early-line',
  },
  'indi-vr': {
    line: 'ic-object-vr-line',
    fill: 'ic-object-vr-fill',
  },
  'widget': {
    line: 'ic-object-widget-line',
    fill: 'ic-object-widget-fill',
  },
  'fire': {
    line: 'ic-object-fire-line',
    fill: 'ic-object-fire-fill',
  },
  'pen': {
    line: 'ic-object-pen-line',
    fill: 'ic-object-pen-fill',
  },
} as const;

export const OBJECT_ICON_NAMES = objectKeys(OBJECT_ICON_VARIANTS_BY_NAME);

export const MEDIA_AV_ICON_VARIANTS_BY_NAME = {
  'fast-forward': {
    line: 'ic-media-av-fast-forward-line',
    fill: 'ic-media-av-fast-forward-fill',
  },
  'fast-rewind': {
    line: 'ic-media-av-fast-rewind-line',
    fill: 'ic-media-av-fast-rewind-fill',
  },
  '10-forward': {
    line: 'ic-media-av-10-forward-line',
  },
  '10-rewind': {
    line: 'ic-media-av-10-rewind-line',
  },
  '5-forward': {
    line: 'ic-media-av-5-forward-line',
  },
  '5-rewind': {
    line: 'ic-media-av-5-rewind-line',
  },
  'replay': {
    line: 'ic-media-av-replay-line',
  },
  'play': {
    line: 'ic-media-av-play-line',
    fill: 'ic-media-av-play-fill',
  },
  'pause': {
    line: 'ic-media-av-pause-line',
    fill: 'ic-media-av-pause-fill',
  },
  'sound': {
    line: 'ic-media-av-sound-line',
    fill: 'ic-media-av-sound-fill',
  },
  'sound-off': {
    line: 'ic-media-av-sound-off-line',
    fill: 'ic-media-av-sound-off-fill',
  },
  'mic': {
    line: 'ic-media-av-mic-line',
    fill: 'ic-media-av-mic-fill',
  },
  'mic-off': {
    line: 'ic-media-av-mic-off-line',
    fill: 'ic-media-av-mic-off-fill',
  },
  'volume': {
    line: 'ic-media-av-volume-line',
    fill: 'ic-media-av-volume-fill',
  },
  'volume-off': {
    line: 'ic-media-av-volume-off-line',
    fill: 'ic-media-av-volume-off-fill',
  },
  'volume-down': {
    line: 'ic-media-av-volume-down-line',
    fill: 'ic-media-av-volume-down-fill',
  },
  'volume-auto': {
    line: 'ic-media-av-volume-auto-line',
    fill: 'ic-media-av-volume-auto-fill',
  },
  'video': {
    line: 'ic-media-av-video-line',
    fill: 'ic-media-av-video-fill',
  },
  'video-off': {
    line: 'ic-media-av-video-off-line',
    fill: 'ic-media-av-video-off-fill',
  },
  'video-file': {
    line: 'ic-media-av-video-file-line',
    fill: 'ic-media-av-video-file-fill',
  },
  'video-add': {
    line: 'ic-media-av-video-add-line',
    fill: 'ic-media-av-video-add-fill',
  },
  'fullscreen': {
    line: 'ic-media-av-fullscreen-line',
  },
  'fullscreen-exit': {
    line: 'ic-media-av-fullscreen-exit-line',
  },
  'pip-on': {
    line: 'ic-media-av-pip-on-line',
    fill: 'ic-media-av-pip-on-fill',
  },
  'pip-off': {
    line: 'ic-media-av-pip-off-line',
    fill: 'ic-media-av-pip-off-fill',
  },
  'closed-caption': {
    line: 'ic-media-av-closed-caption-line',
    fill: 'ic-media-av-closed-caption-fill',
  },
} as const;

export const MEDIA_AV_ICON_NAMES = objectKeys(MEDIA_AV_ICON_VARIANTS_BY_NAME);

export const MEDIA_IMAGE_ICON_VARIANTS_BY_NAME = {
  'image': {
    line: 'ic-media-image-image-line',
    fill: 'ic-media-image-image-fill',
  },
  'image-miss': {
    line: 'ic-media-image-image-miss-line',
    fill: 'ic-media-image-image-miss-fill',
  },
  'image-library': {
    line: 'ic-media-image-image-library-line',
    fill: 'ic-media-image-image-library-fill',
  },
  'crop': {
    line: 'ic-media-image-crop-line',
  },
  'camera': {
    line: 'ic-media-image-camera-line',
    fill: 'ic-media-image-camera-fill',
  },
  'camera-switch': {
    line: 'ic-media-image-camera-switch-line',
    fill: 'ic-media-image-camera-switch-fill',
  },
  'gif': {
    line: 'ic-media-image-gif-line',
    fill: 'ic-media-image-gif-fill',
  },
  'jpg': {
    line: 'ic-media-image-jpg-line',
    fill: 'ic-media-image-jpg-fill',
  },
  'png': {
    line: 'ic-media-image-png-line',
    fill: 'ic-media-image-png-fill',
  },
  'pdf': {
    line: 'ic-media-image-pdf-line',
    fill: 'ic-media-image-pdf-fill',
  },
  'flash-on': {
    line: 'ic-media-image-flash-on-line',
    fill: 'ic-media-image-flash-on-fill',
  },
  'flash-off': {
    line: 'ic-media-image-flash-off-line',
    fill: 'ic-media-image-flash-off-fill',
  },
  'flash-auto': {
    line: 'ic-media-image-flash-auto-line',
    fill: 'ic-media-image-flash-auto-fill',
  },
} as const;

export const MEDIA_IMAGE_ICON_NAMES = objectKeys(
  MEDIA_IMAGE_ICON_VARIANTS_BY_NAME,
);

export const STATE_ICON_VARIANTS_BY_NAME = {
  'warning-circle': {
    line: 'ic-state-warning-circle-line',
    fill: 'ic-state-warning-circle-fill',
  },
  'help-circle': {
    line: 'ic-state-help-circle-line',
    fill: 'ic-state-help-circle-fill',
  },
  'block': {
    line: 'ic-state-block-line',
    fill: 'ic-state-block-fill',
  },
  'info-circle': {
    line: 'ic-state-info-circle-line',
    fill: 'ic-state-info-circle-fill',
  },
} as const;

export const STATE_ICON_NAMES = objectKeys(STATE_ICON_VARIANTS_BY_NAME);

export const HARDWARE_ICON_VARIANTS_BY_NAME = {
  'desktop': {
    line: 'ic-hardware-desktop-line',
    fill: 'ic-hardware-desktop-fill',
  },
  'smartphone': {
    line: 'ic-hardware-smartphone-line',
    fill: 'ic-hardware-smartphone-fill',
  },
  'desktop-smartphone': {
    line: 'ic-hardware-desktop-smartphone-line',
    fill: 'ic-hardware-desktop-smartphone-fill',
  },
  'Inspection': {
    line: 'ic-hardware-inspection-line',
    fill: 'ic-hardware-inspection-fill',
  },
  'qr-code': {
    line: 'ic-hardware-qr-code-line',
    fill: 'ic-hardware-qr-code-fill',
  },
  'print': {
    line: 'ic-hardware-print-line',
    fill: 'ic-hardware-print-fill',
  },
  'mouse': {
    line: 'ic-hardware-mouse-line',
    fill: 'ic-hardware-mouse-fill',
  },
  'power': {
    line: 'ic-hardware-power-line',
    fill: 'ic-hardware-power-fill',
  },
} as const;

export const HARDWARE_ICON_NAMES = objectKeys(HARDWARE_ICON_VARIANTS_BY_NAME);

export const LOGO_ICON_VARIANTS_BY_NAME = {
  'window': {
    line: 'ic-logo-window-line',
    fill: 'ic-logo-window-fill',
    color: 'ic-logo-window-color',
  },
  'Apple': {
    line: 'ic-logo-apple-line',
    fill: 'ic-logo-apple-fill',
    color: 'ic-logo-apple-color',
  },
  'facebook': {
    line: 'ic-logo-facebook-line',
    fill: 'ic-logo-facebook-fill',
    color: 'ic-logo-facebook-color',
  },
  'twitter': {
    line: 'ic-logo-twitter-line',
    fill: 'ic-logo-twitter-fill',
    color: 'ic-logo-twitter-color',
  },
  'google-playstore': {
    line: 'ic-logo-google-playstore-line',
    fill: 'ic-logo-google-playstore-fill',
    color: 'ic-logo-google-playstore-color',
  },
  'Google': {
    line: 'ic-logo-google-line',
    fill: 'ic-logo-google-fill',
    color: 'ic-logo-google-color',
  },
  'instagram': {
    line: 'ic-logo-instagram-line',
    fill: 'ic-logo-instagram-fill',
    color: 'ic-logo-instagram-color',
  },
  'youtube': {
    line: 'ic-logo-youtube-line',
    fill: 'ic-logo-youtube-fill',
    color: 'ic-logo-youtube-color',
  },
  'kakaotalk': {
    line: 'ic-logo-kakaotalk-line',
    fill: 'ic-logo-kakaotalk-fill',
    color: 'ic-logo-kakaotalk-color',
  },
  'stove-symbol': {
    line: 'ic-logo-stove-symbol-line',
    fill: 'ic-logo-stove-symbol-fill',
    color: 'ic-logo-stove-symbol-color',
  },
  'naver': {
    line: 'ic-logo-naver-line',
    fill: 'ic-logo-naver-fill',
    color: 'ic-logo-naver-color',
  },
  'discord': {
    line: 'ic-logo-discord-line',
    fill: 'ic-logo-discord-fill',
    color: 'ic-logo-discord-color',
  },
  'onestore': {
    line: 'ic-logo-onestore-line',
    fill: 'ic-logo-onestore-fill',
    color: 'ic-logo-onestore-color',
  },
  'stove': {
    fill: 'ic-logo-stove-fill',
    color: 'ic-logo-stove-color',
  },
} as const;

export const LOGO_ICON_NAMES = objectKeys(LOGO_ICON_VARIANTS_BY_NAME);

export const BADGE_ICON_VARIANTS_BY_NAME = {
  'stove-official': {
    line: 'ic-badge-stove-official-line',
    fill: 'ic-badge-stove-official-fill',
  },
  'gm': {
    line: 'ic-badge-gm-line',
    fill: 'ic-badge-gm-fill',
  },
  'cm': {
    line: 'ic-badge-cm-line',
    fill: 'ic-badge-cm-fill',
  },
} as const;

export const BADGE_ICON_NAMES = objectKeys(BADGE_ICON_VARIANTS_BY_NAME);

export const COMMUNICATION_ICON_VARIANTS_BY_NAME = {
  'emoji': {
    line: 'ic-communication-emoji-line',
    fill: 'ic-communication-emoji-fill',
  },
  'ar-effect': {
    line: 'ic-communication-ar-effect-line',
    fill: 'ic-communication-ar-effect-fill',
  },
  'hand-up': {
    line: 'ic-communication-hand-up-line',
    fill: 'ic-communication-hand-up-fill',
  },
  'phone': {
    line: 'ic-communication-phone-line',
    fill: 'ic-communication-phone-fill',
  },
  'phone-disabled': {
    line: 'ic-communication-phone-disabled-line',
    fill: 'ic-communication-phone-disabled-fill',
  },
  'phone-off': {
    line: 'ic-communication-phone-off-line',
    fill: 'ic-communication-phone-off-fill',
  },
  'stage-up': {
    line: 'ic-communication-stage-up-line',
    fill: 'ic-communication-stage-up-fill',
  },
  'stage-down': {
    line: 'ic-communication-stage-down-line',
    fill: 'ic-communication-stage-down-fill',
  },
  'stage': {
    line: 'ic-communication-stage-line',
    fill: 'ic-communication-stage-fill',
  },
  'lounge': {
    line: 'ic-communication-lounge-line',
    fill: 'ic-communication-lounge-fill',
  },
  'sound-sense': {
    line: 'ic-communication-sound-sense-line',
    fill: 'ic-communication-sound-sense-fill',
  },
  'profile-sense': {
    line: 'ic-communication-profile-sense-line',
    fill: 'ic-communication-profile-sense-fill',
  },
  'screen-share': {
    line: 'ic-communication-screen-share-line',
    fill: 'ic-communication-screen-share-fill',
  },
  'screen-share-stop': {
    line: 'ic-communication-screen-share-stop-line',
    fill: 'ic-communication-screen-share-stop-fill',
  },
  'translate': {
    line: 'ic-communication-translate-line',
    fill: 'ic-communication-translate-fill',
  },
} as const;

export const COMMUNICATION_ICON_NAMES = objectKeys(
  COMMUNICATION_ICON_VARIANTS_BY_NAME,
);

export const CONTENT_ICON_VARIANTS_BY_NAME = {
  'file': {
    line: 'ic-content-file-line',
    fill: 'ic-content-file-fill',
  },
  'storage': {
    line: 'ic-content-storage-line',
    fill: 'ic-content-storage-fill',
  },
  'inbox': {
    line: 'ic-content-inbox-line',
    fill: 'ic-content-inbox-fill',
  },
  'folder': {
    line: 'ic-content-folder-line',
    fill: 'ic-content-folder-fill',
  },
  'folder-add': {
    line: 'ic-content-folder-add-line',
    fill: 'ic-content-folder-add-fill',
  },
  'mail': {
    line: 'ic-content-mail-line',
    fill: 'ic-content-mail-fill',
  },
  'powerpoint': {
    line: 'ic-content-powerpoint-line',
    fill: 'ic-content-powerpoint-fill',
  },
  'word': {
    line: 'ic-content-word-line',
    fill: 'ic-content-word-fill',
  },
  'excel': {
    line: 'ic-content-excel-line',
    fill: 'ic-content-excel-fill',
  },
} as const;

export const CONTENT_ICON_NAMES = objectKeys(CONTENT_ICON_VARIANTS_BY_NAME);
