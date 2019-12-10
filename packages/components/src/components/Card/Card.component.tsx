import React, { ReactChild, FunctionComponent } from 'react';
import { Popup } from 'semantic-ui-react';
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
  InfoIconCmp,
  InfoIcon,
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
  CardHref,
} from './Card.styles';
import useGraphWidth from '../../hooks/useGraphWidth';

interface RowComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
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

const BadgeComponent = ({ children, color }: BadgeProps) => (
  <Badge color={color}>{children}</Badge>
);

const RowComponent: React.SFC<RowComponentProps> = ({
  title,
  content,
  contentColor,
  small,
  big,
  notop,
}) => (
  <Row small={small} big={big} notop={notop}>
    <RowContent contentColor={contentColor}>{content}</RowContent>
    <RowTitle big={big}>{title}</RowTitle>
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
  rest?: any;
}) => (
  <Header {...rest}>
    <HeaderTitle>{title}</HeaderTitle>
    <HeaderContent fontSize={fontSize}>{amount}</HeaderContent>
  </Header>
);
const SubHeaderComponent: FunctionComponent<{
  title: string;
  amount: string;
}> = ({ title, amount, ...rest }) => (
  <SubHeader {...rest}>
    <SubHeaderTitle>{title}</SubHeaderTitle>
    <SubHeaderContent>{amount}</SubHeaderContent>
  </SubHeader>
);

const RoiHeaderComponent: FunctionComponent<{ roi: string }> = ({ roi }) => (
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
        ref={(ref: any) => (graph.current = ref)}
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
}> = ({ color, currentAmount, totalAmount }) => {
  const { ref }: any = React.useContext(Context);
  const config = useGraphWidth(ref, currentAmount, totalAmount);

  return (
    <GraphContainer>
      <Graph color={color} width={config.width} />
      <GraphTitle>{Math.floor(config.width)}%</GraphTitle>
    </GraphContainer>
  );
};

const ProgressComponent: FunctionComponent<{
  color: string;
  currentAmount: number;
  totalAmount: number;
}> = ({ color, currentAmount, totalAmount }) => {
  const { ref }: any = React.useContext(Context);
  const config = useGraphWidth(ref, currentAmount, totalAmount);

  return (
    <GraphContainer>
      <ProgressBar color={color} width={config.width} />
      <ProgressPercent>{Math.floor(config.width)}%</ProgressPercent>
    </GraphContainer>
  );
};

const TooltipComponent = () => (
  <Popup
    content="blablabablalbabalabl"
    key={2434324}
    trigger={
      <InfoIcon>
        <InfoIconCmp name="info" />
      </InfoIcon>
    }
  />
);

const ContentWithLogo = ({
  children,
  logo,
  topRight,
  size,
  to,
  className,
  style,
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
      {topRight && <TimeLeft>{topRight}</TimeLeft>}
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
Card.Tooltip = TooltipComponent;
Card.RoiHeader = RoiHeaderComponent;
Card.TimeLeft = TimeLeft;

export default Card;

export { CardWrapper };
