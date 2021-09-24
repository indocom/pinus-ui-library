import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Carousel from "./Carousel";

export default {
  title: "Carousel",
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => <Carousel {...args} />;

export const base = Template.bind({});
base.args = {
  imgList: [
    "https://s3-alpha-sig.figma.com/img/9716/e427/a43750318bef14359326ae315ac56db3?Expires=1633305600&Signature=TDUwaurJ5nP1Bh8VV~TqqLXR1rVMQ-F9lGHPDRm-UpTo7MEzoCy4NBBkmqPaMXVLZ7cfiiAJXiCGnu2~A1JHPdo6MOch54hHjbuSTxpyLA7FGnyzwcY-Y4SyMUmgGiMZsqzieiFRuxzBkoOpSx0NWXzhcvIIxCClZZ3TvytrpY9F0YsUQSfLT8aQLpvbbt9hDLYj12g40EF5fREGpNxC0Lsx0hXIOTOMNPQFORhYwOY4r4JbrtZgm~BX2yHfeynPrgOtL~2P15Z-Wene5EjeTSEA~xCQHZz65koxbBWp0ibdixPztxduPHVexfE7r9oJmxWoMHFS6QRX8iEntUsIaA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    "https://s3-alpha-sig.figma.com/img/9a2f/2a03/1e6746f8a477f1a0b9bd98cb9f414c7f?Expires=1633305600&Signature=eVj~kkdxUf85NUxVm5yE2mntBDWaqW18yMhE3WgJ9QVOjSHbn6Dn6LgNPXlcvY4QZlxCUpXZ~Imfm1cW0abCmiN4tHEv6qeM0mT~fSM5tiPxb0S~1yn54nSObIc-aTFbcfHEwEXKfjptA5txPP2BF1o1-hdOEt4Zk8T6Y2jenAb1RpA6aRuOAGq3ZpM3UZbTSe64~IDfkpFS5Cqmp3~RbgMykv-FalMVT33EvN54jZaIt~3b0lHp5xbSkrlO4-yA-o644J3LqhcomuDv44tm6yXJRQIR~ZIMgFU6xl2tJzOW3J42EUD2QnAVfpZU~6Uv4l~UL0tjQzWAr9cn31EL4g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
  ]
};