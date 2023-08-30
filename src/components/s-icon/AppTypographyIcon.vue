<template>
  <section>
    <h2>Regular Icons</h2>
    <p class="info">
      All found on <a href="https://icomoon.io/" target="_blank">Icomoon</a>,
      using the Vicons set
    </p>
    <p>
      <!--you can pass in a smaller width and height as props-->
      <icon-base width="12" height="12" icon-name="write"
        ><icon-write
      /></icon-base>
      <!--or you can use the default, which is 18-->
      <icon-base icon-name="write"><icon-write /></icon-base>
      <!--or make it a little bigger too :) -->
      <icon-base width="30" height="30" icon-name="write"
        ><icon-write
      /></icon-base>
      <br />
      You can make inline icons of any size by passing props.
    </p>
    <p style="color: red">
      <!--you can change the color of the text, and the icons will automatically change color as well-->
      <icon-base icon-name="moon"><icon-moon /></icon-base>
      These red inline icons are automatically styled according to the text
      color.
    </p>
    <p>
      <!--because the base is consistent, you can use multiple icons on the same line and they're all in order-->
      <icon-base icon-name="moon"><icon-moon /></icon-base>
      <icon-base icon-name="write"><icon-write /></icon-base>
      <icon-base icon-name="image"><icon-image /></icon-base>
      <icon-base icon-name="garbage"><icon-garbage /></icon-base>
      <icon-base icon-name="calendar"><icon-calendar /></icon-base>
      <icon-base icon-name="envelope"><icon-envelope /></icon-base>
      <br />
      <icon-base><icon-box /></icon-base>
      You can use whatever icon you want and keep the base consistent with slots
    </p>
    <h2>SIcon</h2>
    <SButton>Click me</SButton>
    <SButton variant="secondary" size="small" :disabled="true">
      Disabled button
    </SButton>
    <SIcon icon-name="moon" iconLabel="달"><IconMoon /></SIcon>
    <SIcons />
  </section>
</template>

<script>
import SIcon from './s-icon.vue';
import IconBase from './IconBase.vue';
import IconEnvelope from './icon/IconEnvelope.vue';
import IconCalendar from './icon/IconCalendar.vue';
import IconGarbage from './icon/IconGarbage.vue';
import IconImage from './icon/IconImage.vue';
import IconWrite from './icon/IconWrite.vue';
import IconMoon from './icon/IconMoon.vue';
import IconBox from './icon/IconBox.vue';
import SButton from '../s-button/s-button.vue';
import SIcons from '../s-icon2/s-icons.vue';

export default {
  components: {
    SIcon,
    IconBase,
    IconEnvelope,
    IconCalendar,
    IconGarbage,
    IconImage,
    IconWrite,
    IconMoon,
    IconBox,
    SButton,
    SIcons,
  },
};
</script>
