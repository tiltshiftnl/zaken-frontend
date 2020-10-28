import styled, { css } from "styled-components"
import { Button } from "@datapunt/asc-ui"
import { IconStyle } from "@datapunt/asc-ui/es/components/Icon"
import { themeColor, themeSpacing, breakpoint, Icon } from "@datapunt/asc-ui"

export type Props = {
  isOpen?: boolean
  done?: boolean
  largeCircle?: boolean
  nested?: boolean
} & React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.HTMLAttributes<HTMLDivElement>;


export type ButtonContentProps = { 
  noMultiline?: boolean 
  isOpen?: boolean
}

const circleSize = {
  desktop: {
    large: "30px",
    small: "20px"
  },
  mobile: {
    large: "24px",
    small: "18px"
  }
}

const CircleWrapperStyle = styled.div<Props>`
  position: relative;
  width: ${ circleSize.mobile.large };
  margin-right: ${ themeSpacing(2) };
  justify-content: center;
  z-index: 1;
  padding: ${ themeSpacing(2) } 0; 
  background-color: transparent;
  @media ${ breakpoint("min-width", "tabletM") } {
    width: 60px;
    margin-right: 0;
    flex: 0 0 60px;
  }
  /* Force print the background colors on webkit browsers */
  @media print {
    -webkit-print-color-adjust: exact;
  }
  &:after {
    content: "";
    position: absolute;
    display: block;
    width: 2px;
    height: calc(100% + ${ themeSpacing(10) });
    //top: ${ themeSpacing(3) };
    top: ${ ({ nested }) => nested ? themeSpacing(-5.5) : themeSpacing(3) };
    left: calc(50% - 1px);
    background-color: ${ themeColor("tint", "level4") };
  }
`
const CircleStyle = styled(Icon)<Props>`
  position: relative;
  width: ${ circleSize.mobile.large };
  height: ${ circleSize.mobile.large };
  align-items: center;
  margin: 0 auto;
  background-color: ${ themeColor("tint", "level4") };
  border-radius: 50%;
  justify-content: center;
  transition: background-color 0.2s ease-in-out;
  z-index: 1;
  @media ${ breakpoint("min-width", "tabletM") } {
    width: ${ circleSize.desktop.large };
    height: ${ circleSize.desktop.large };
  }
  ${ ({ largeCircle }) =>
    !largeCircle &&
    css`
      width: ${ circleSize.mobile.small };
      height: ${ circleSize.mobile.small };
      margin-top: 4px;
      @media ${ breakpoint("min-width", "tabletM") } {
        width: ${ circleSize.desktop.small };
        height: ${ circleSize.desktop.small };
      }
    ` }
  ${ ({ done }) =>
    (!done) &&
    css`
      background-color: ${ themeColor("primary", "main") };
    ` }
  ${ ({ done }) =>
    done &&
    css`
      color: ${ themeColor("tint", "level1") };
      fill: ${ themeColor("tint", "level1") };
      transform: rotate(0deg) !important;
    ` }
`

const TimelineItem = styled.div<Props>`
  flex: 1;
`

const NestedContainer = styled.div<Props>`
  display: flex;
  margin-left: ${ ({ nested }) => nested && "-32px" };
  @media ${ breakpoint("min-width", "tabletM") } {
    margin-left: ${ ({ nested }) => nested && "-60px" };
  }

  &:last-child{
    >div:first-child{
      &:after{
        display: ${ ({ nested }) => nested && "none" };
      }
    }
  }
  
`

const TimelineContent = styled.div<Props>`
  transition: border-color 0.1s ease-in-out;
  border: none;
  padding: ${ themeSpacing(4) } 0;
  position: relative;
  display: ${ ({ isOpen }) => !isOpen && "none" };
`

const TimelineButtonContent = styled.span<ButtonContentProps>`
  text-align: left;
  position: relative;
  font-weight: 500;

  ${ ({ noMultiline }) =>
    noMultiline
      ? css`
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-right: 20px;
        `
      : css`
          white-space: normal;
        ` }
`

const TimelineButton = styled(Button)<Props>`
  position: relative;
  width: 100%;
  height: initial;
  background-color: transparent;
  padding: ${ themeSpacing(3) } 0;

  &:hover,
  &:focus {
    background-color: transparent;

    & + ${ TimelineContent } {
      border: 0;
    }
  }

  ${ IconStyle } {
    align-self: flex-start;
    transform: rotate(${ ({ isOpen }) => (isOpen ? "180deg" : "0deg") });
    transition: transform 0.3s ease;
    width: 14px;
  }
`

const Background = styled.div<Props>`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0;
  // right: 0;
  background-color: ${ ({ isOpen }) => isOpen ?  themeColor("tint","level2") : "transparent" };
  pointer-events: none;
  z-index: -1;
  `

export { TimelineItem, TimelineButton, TimelineContent, TimelineButtonContent, CircleWrapperStyle, CircleStyle, Background, NestedContainer }
