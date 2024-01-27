import type { AlignItemsType, JustifyContentType, WrapType } from '.';

export const justifyContentStyle = (justifyContent: JustifyContentType) => {
  switch (justifyContent) {
    case 'justifyStart':
      return 'justify-start';
    case 'justifyEnd':
      return 'justify-end';
    case 'justifyCenter':
      return 'justify-center';
    case 'justifyBetween':
      return 'justify-between';
    case 'justifyAround':
      return 'justify-around';
    case 'justifyEvenly':
      return 'justify-evenly';
  }
};

export const alignItemsStyle = (alignItems: AlignItemsType) => {
  switch (alignItems) {
    case 'itemsStretch':
      return 'items-stretch';
    case 'itemsStart':
      return 'items-start';
    case 'itemsCenter':
      return 'items-center';
    case 'itemsEnd':
      return 'items-end';
    case 'itemsBaseline':
      return 'items-baseline';
  }
};

export const wrapStyle = (wrap: WrapType) => {
  switch (wrap) {
    case 'noWrap':
      return 'flex-nowrap';
    case 'wrap':
      return 'flex-wrap';
    case 'reverse':
      return 'flex-wrap-reverse';
  }
};
