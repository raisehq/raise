import React, { ReactChild, FunctionComponent } from 'react';
// import { Popup } from 'semantic-ui-react';
import {
  HeroCard,
  Grid,
  Row,
  Header,
  CardImageCrop,
  HeaderTitle,
  HeaderContent,
  RowTitle,
  RowContent,
  CardLogo,
  Graph,
  Badge,
  Separator,
  GraphContainer,
  GraphTitle,
  CardContent,
  TimeLeft,
  ProgressBar,
  ProgressPercent,
  SubHeader,
  SubHeaderContent,
  SubHeaderTitle,
  CardDescription,
  CardBorrowerTitle,
  Vertical,
  RoiHeader,
  RoiContent,
  CardHref
} from './Card.styles';
import useGraphWidth from '../../hooks/useGraphWidth';

interface RowComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  content: string | number | null;
  contentColor?: string | null;
  small?: boolean | null;
  big?: boolean | null;
  notop?: boolean | null;
}

interface BadgeProps {
  children?: ReactChild;
  color: string;
}

const Context = React.createContext({});

const BadgeComponent = ({ children, color, ...rest }: BadgeProps) => (
  <Badge color={color} {...rest}>
    {children}
  </Badge>
);

const RowComponent: React.SFC<RowComponentProps> = ({
  title = null,
  content,
  contentColor,
  small,
  big,
  notop
}: any) => (
  <Row small={small} big={big} notop={notop}>
    <RowContent contentColor={contentColor}>{content}</RowContent>
    {title && <RowTitle big={big}>{title}</RowTitle>}
  </Row>
);

const HeaderComponent = ({
  title,
  amount,
  fontSize,
  ...rest
}: {
  title: any;
  amount: any;
  fontSize?: any;
  right;
  rest?: any;
}) => (
  <Header {...rest}>
    <HeaderTitle {...rest}>{title}</HeaderTitle>
    <HeaderContent fontSize={fontSize} {...rest}>
      {amount}
    </HeaderContent>
  </Header>
);
const SubHeaderComponent: FunctionComponent<{
  title: string;
  amount: string;
}> = ({ title, amount, ...rest }: any) => (
  <SubHeader {...rest}>
    <SubHeaderTitle>{title}</SubHeaderTitle>
    <SubHeaderContent>{amount}</SubHeaderContent>
  </SubHeader>
);

const RoiHeaderComponent: FunctionComponent<{ roi: string }> = ({ roi }: any) => (
  <RoiHeader>
    <RoiContent>{`${roi}ROI`}</RoiContent>
  </RoiHeader>
);

const CardWrapper = ({ children, size, width, ...props }: any) => {
  const graph = React.useRef(null);
  const [values, setValues] = React.useState({ ref: null });

  React.useEffect(() => setValues({ ref: graph.current }), []);

  return (
    <Context.Provider value={values}>
      <HeroCard
        className="heroCard"
        ref={(ref: any) => {
          graph.current = ref;
          return true;
        }}
        {...props}
        size={size}
        width={width}
      >
        {children}
      </HeroCard>
    </Context.Provider>
  );
};

const Card: any = CardWrapper;

const GraphComponent: FunctionComponent<{
  color: string;
  currentAmount: number;
  totalAmount: number;
}> = ({ color, currentAmount, totalAmount }: any) => {
  const { ref }: any = React.useContext(Context);
  const config = useGraphWidth(ref, currentAmount, totalAmount);

  return (
    <GraphContainer>
      <Graph color={color} width={config.width} />
      <GraphTitle>{`${Math.floor(config.width)}%`}</GraphTitle>
    </GraphContainer>
  );
};

const ProgressComponent: FunctionComponent<{
  color: string;
  currentAmount: number;
  totalAmount: number;
}> = ({ color, currentAmount, totalAmount }: any) => {
  const { ref }: any = React.useContext(Context);
  const config = useGraphWidth(ref, currentAmount, totalAmount);

  return (
    <GraphContainer>
      <ProgressBar color={color} width={config.width} />
      <ProgressPercent>{`${Math.floor(config.width)}%`}</ProgressPercent>
    </GraphContainer>
  );
};

const ContentWithLogo = ({
  children,
  logo,
  size,
  to,
  className,
  style
}: {
  children?: any;
  logo?: any;
  to?: any;
  topRight?: any;
  size?: any;
  className?: any;
  style?: any;
}) => {
  const aProps = { href: undefined };
  if (to) {
    aProps.href = to;
  }
  return (
    <CardContent logo={logo} size={size} className={className} style={style}>
      {logo && (
        <a className="logoWrap" {...aProps}>
          <CardLogo src={logo} />
        </a>
      )}
      {children}
    </CardContent>
  );
};

const CardImage = ({ src, to }: { src?: any; to?: any }) => {
  if (to) {
    return (
      <CardHref href={to}>
        <CardImageCrop src={src} />
      </CardHref>
    );
  }
  return <CardImageCrop src={src} />;
};

Card.BorrowerTitle = CardBorrowerTitle;
Card.Description = CardDescription;
Card.Image = CardImage;
Card.Logo = CardLogo;
Card.Content = ContentWithLogo;
Card.Badge = BadgeComponent;
Card.Row = RowComponent;
Card.Grid = Grid;
Card.Header = HeaderComponent;
Card.SubHeader = SubHeaderComponent;
Card.Graph = GraphComponent;
Card.Progress = ProgressComponent;
Card.Separator = Separator;
Card.Vertical = Vertical;
Card.RoiHeader = RoiHeaderComponent;
Card.TimeLeft = TimeLeft;

export default Card;

export { CardWrapper };
