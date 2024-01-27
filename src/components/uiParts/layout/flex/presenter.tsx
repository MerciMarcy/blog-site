import { alignItemsStyle, justifyContentStyle, wrapStyle } from './flex.hooks';
import type { FlexLayoutProps } from './index';

type PresenterProps = FlexLayoutProps;

export const FlexPresenter = (props: PresenterProps) => {
  const {
    children,
    direction,
    justifyContent = 'justifyCenter',
    alignItems = 'itemsCenter',
    wrap = 'noWrap',
    gap,
    ...otherProps
  } = props;
  return (
    <div
      className={`flex ${
        direction === 'x' ? 'flex-row' : 'flex-col'
      } ${justifyContentStyle(justifyContent)}
        ${alignItemsStyle(alignItems)}
        ${wrapStyle(wrap)}
        ${gap}
         `}
      {...otherProps}
    >
      {children}
    </div>
  );
};
