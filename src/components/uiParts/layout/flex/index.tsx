import { FlexPresenter } from './presenter';

type DivBaseProps = React.HTMLAttributes<HTMLDivElement>;

export type JustifyContentType =
  | 'justifyStart'
  | 'justifyEnd'
  | 'justifyCenter'
  | 'justifyBetween'
  | 'justifyAround'
  | 'justifyEvenly';

export type AlignItemsType =
  | 'itemsStretch'
  | 'itemsStart'
  | 'itemsCenter'
  | 'itemsEnd'
  | 'itemsBaseline';

export type WrapType = 'noWrap' | 'wrap' | 'reverse';

export type FlexCssProps = {
  /**
   * x: flex-row
   * y: flex-col
   */
  direction: 'x' | 'y';

  /**
   * tailWindCss 'justify-content'の値として指定される。
   * default: 'justifyCenter'
   */
  justifyContent?: JustifyContentType;

  /**
   * tailWindCss 'flex-wrap'の値として指定される。
   * default: 'noWrap'
   */
  alignItems?: AlignItemsType;

  /**
   * tailWindCss 'align-items'の値として指定される。
   * default: 'itemsCenter'
   */
  wrap?: WrapType;

  /**
   * gap-1
   * gap-[4px]
   */
  gap?: string;
};

export type FlexLayoutProps = FlexCssProps & DivBaseProps;

const FlexLayout = (props: FlexLayoutProps) => {
  const {
    children,
    direction,
    justifyContent,
    alignItems,
    wrap,
    gap,
    ...otherProps
  } = props;
  return (
    <FlexPresenter
      direction={direction}
      justifyContent={justifyContent}
      wrap={wrap}
      gap={gap}
      {...otherProps}
    >
      {children}
    </FlexPresenter>
  );
};

export type ShortFlexLayoutProps = Omit<FlexLayoutProps, 'direction'>;

/** 水平方向のFlexLayout */
export const FlexLayoutX = (props: ShortFlexLayoutProps) => (
  <FlexLayout direction="x" {...props} />
);

/** 垂直方向のFlexLayout */
export const FlexLayoutY = (props: ShortFlexLayoutProps) => (
  <FlexLayout direction="y" {...props} />
);
