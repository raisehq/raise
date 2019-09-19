import * as React from 'react';
import { Icon, Popup } from 'semantic-ui-react';
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
  RoiContent
} from './Card.styles';
import useGraphWidth from '../../hooks/useGraphWidth';

interface RowComponentProps {
  title: string;
  content: string | number | null;
  contentColor?: string | null;
  small?: boolean | null;
}

const Context = React.createContext({});

const BadgeComponent = ({ children, color }) => <Badge color={color}>{children}</Badge>;

const RowComponent: React.SFC<RowComponentProps> = ({ title, content, contentColor, small }) => (
  <Row small={small}>
    <RowContent contentColor={contentColor}>{content}</RowContent>
    <RowTitle>{title}</RowTitle>
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

const SubHeaderComponent = ({ title, amount, ...rest }) => (
  <SubHeader {...rest}>
    <SubHeaderTitle>{title}</SubHeaderTitle>
    <SubHeaderContent>{amount}</SubHeaderContent>
  </SubHeader>
);

const RoiHeaderComponent = ({ roi }) => (
  <RoiHeader>
    <RoiContent>{`${roi}ROI`}</RoiContent>
  </RoiHeader>
);

const Card = ({ children, size, width }: { children: any; size?: any; width?: any }) => {
  const graph = React.useRef(null);
  const [values, setValues] = React.useState({ ref: null });

  React.useEffect(() => setValues({ ref: graph.current }), [graph.current]);

  return (
    <Context.Provider value={values}>
      <HeroCard ref={ref => (graph.current = ref)} className="heroCard" size={size} width={width}>
        {children}
      </HeroCard>
    </Context.Provider>
  );
};

const GraphComponent = ({ color, currentAmount, totalAmount }) => {
  const { ref }: any = React.useContext(Context);
  const config = useGraphWidth(ref, currentAmount, totalAmount);

  return (
    <GraphContainer>
      <Graph color={color} width={config.width} />
      <GraphTitle>{Math.floor(config.width)}%</GraphTitle>
    </GraphContainer>
  );
};

const ProgressComponent = ({ color, currentAmount, totalAmount }) => {
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
  size
}: {
  children?: any;
  logo?: any;
  topRight?: any;
  size?: any;
}) => (
  <CardContent logo={logo} size={size}>
    {logo && <CardLogo src={logo} />}
    {topRight && <TimeLeft>{topRight}</TimeLeft>}
    {children}
  </CardContent>
);

Card.BorrowerTitle = CardBorrowerTitle;
Card.Description = CardDescription;
Card.Image = CardImageCrop;
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
