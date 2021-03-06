/** @jsx jsx */
import { forwardRef } from 'react';
import styled from '@emotion/styled';
import SponsorPic from '../../assets/imgs/Sponsor.png';
import SponsorPic2 from '../../assets/imgs/壹伴logo.png'
import { jsx, css } from '@emotion/react';
import { ISponsorBlockProps, SponsorProps, useAbove } from './common';

const SponsorBlock = styled.div<ISponsorBlockProps>(({ above = false }) => ({
  position: 'relative',
  minHeight: '100vh',
  background: 'black',
  width: '100vw',
  zIndex: above ? 4 : 0,
}));

const SponsorTitle = styled.div({
  color: 'white',
  background: 'black',
  margin: '0 0 64px 3vw',
  paddingTop: '2vh',
});

const SponsorImg = styled.img({
  margin: '1rem 0',
  maxHeight: '2.4rem',
});

const SponsorName = styled.div({
  color: 'white',
  background: 'black',
});

const Text = styled.div({
  fontSize: '1rem',
  lineHeight: 'calc(100% + 20px)',
  // paddingTop: '15px',
  color: 'white',
  background: 'black',
});

export const Sponsor = forwardRef<HTMLDivElement | null, SponsorProps>(
  ({ id }, outerRef) => {
    const { ref, shouldAbove } = useAbove();
    return (
      <div ref={outerRef}>
        <SponsorBlock id={id} ref={ref} above={shouldAbove}>
          <SponsorTitle>赞助商 / Sponsor</SponsorTitle>
          <div css={css({ margin: '0 15%' })}>
            <SponsorName>武汉夜莺科技有限公司</SponsorName>
            <div css={css`position: relative`}>
            <a href="https://weibanzhushou.com/" target="_blank">
              <SponsorImg src={SponsorPic}></SponsorImg>
            </a>
            <a css={css`position:absolute; top:0; left: calc(4*2.4rem)`} href="https://yiban.io/" target="_blank">
              <SponsorImg src={SponsorPic2}></SponsorImg>
            </a>
            </div>

            <Text>
              坐落于武汉光谷核心繁华地带（K11写字楼）。核心创始人来自华中科技大学联创团队。
            </Text>
            <Text>是一家专注于智能营销领域的科技公司。</Text>
            <Text>
              于2016年获得知名投资机构真格基金投资、于2018年获得近千万元战略融资、于2021年获得新一轮融资。
            </Text>
            <Text>核心业务微伴助手、壹伴助手直接或间影响国内数亿C端用户。</Text>
            <Text>近3年公司估值上涨百倍，除此之外，目前仍在超高速上涨！</Text>
            <Text>“是一个不折不扣的潜力股”。</Text>
            <Text>这些Tag可以更好的给我们做一个概述：</Text>
            <Text>大厂薪资、酷炫工作氛围、优质办公环境、大牛多、扁平化、</Text>
            <Text>双休、涨薪快（半年固定涨）、弹性工作、零食下午茶、</Text>
            <Text>
              生日庆祝、周年礼物、节日礼包、学习报销……
              我们欢迎有理想的小伙伴加入！
            </Text>
          </div>
        </SponsorBlock>
      </div>
    );
  },
);
