/* eslint-disable react/jsx-wrap-multilines */
import React, { ReactNode, SFC, useState, useEffect } from 'react';
import { useSpring } from 'react-spring';
import useMeasure from '../../../hooks/useMeasure';
import {
  TableCollapse,
  AnimatedDiv,
  Chevron,
  TableItemContainer,
  TitleWithTooltip,
  InvestmentTooltip,
  InvestIcon,
  TooltipIconWrapper
} from './styles';

interface TableItemObj {
  title: string;
  content: string | ReactNode;
  tooltip?: string;
}

interface CollapsedTableProps {
  items?: TableItemObj[];
}

interface TableItemProps extends TableItemObj {
  latest?: boolean;
}

export const TableItem: SFC<TableItemProps> = ({ title, content, latest, tooltip }: any) => (
  <TableItemContainer latest={latest}>
    <TitleWithTooltip>
      {title}
      {tooltip && (
        <InvestmentTooltip
          content={tooltip}
          inverted
          position="top center"
          trigger={
            <TooltipIconWrapper>
              <InvestIcon color="teal" name="info circle" />
            </TooltipIconWrapper>
          }
        />
      )}
    </TitleWithTooltip>
    <div>{content}</div>
  </TableItemContainer>
);

const mapTable = (latest) => (props, index) => (
  <TableItem key={props.title} latest={latest === index} {...props} />
);

const CollapsedTable: SFC<CollapsedTableProps> = ({ items = [] }: any) => {
  const [ref, { height }] = useMeasure();
  const defaultHeight = '0px';
  const [active, setActive] = useState<boolean>(false);
  const [contentHeight, setContentHeight] = useState(defaultHeight);

  // Animations
  const expand = useSpring({
    config: { friction: 20 },
    height: active ? `${contentHeight}px` : defaultHeight
  });

  const spin = useSpring({
    config: { friction: 30 },
    transform: active ? 'rotate(180deg)' : 'rotate(0deg)'
  });

  // Calculate height
  useEffect(() => {
    setContentHeight(`${height}px`);
    window.addEventListener('resize', () => setContentHeight(`${height}px`));
    return () => {
      window.removeEventListener('resize', () => setContentHeight(`${height}px`));
    };
  }, [height]);

  // Toggler
  const toggleActive = () => {
    setActive(!active);
  };

  const [head, tail] = [items.slice(0, 3), items.slice(3, items.length)];
  const headLatest = !active ? head.length - 1 : null;
  const tailLatest = active ? tail.length - 1 : null;
  const previewItems = head.map(mapTable(headLatest));
  const collapsedItems = tail.map(mapTable(tailLatest));

  return (
    <>
      {previewItems}
      <TableCollapse style={expand}>
        <div ref={ref}>{collapsedItems}</div>
      </TableCollapse>
      <AnimatedDiv onClick={() => toggleActive()}>
        <Chevron name="chevron down" style={spin} />
      </AnimatedDiv>
    </>
  );
};

export default CollapsedTable;
