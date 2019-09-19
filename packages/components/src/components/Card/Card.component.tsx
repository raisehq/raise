import * as React from 'react';
import { Icon, Popup } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
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
  SmallCardContent
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

const HeaderComponent = ({ title, amount, ...rest }) => (
  <Header {...rest}>
    <HeaderTitle>{title}</HeaderTitle>
    <HeaderContent>{amount}</HeaderContent>
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

const Card = ({ children, type }: { children: any; type?: string; }) => {
  const graph = React.useRef(null);
  const [values, setValues] = React.useState({ ref: null });

  React.useEffect(() => setValues({ ref: graph.current }), [graph.current]);

  return (
    <Context.Provider value={values}>
      <HeroCard type={type} ref={ref => (graph.current = ref)} className="heroCard">
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
  to
}: {
  children?: any;
  logo?: any;
  to?: any;
  topRight?: any;
}) => (
    <CardContent logo={logo}>
      {logo && (<Link className="logoWrap" to={to}><CardLogo src={logo} /></Link>)}
      {topRight && <TimeLeft>{topRight}</TimeLeft>}
      {children}
    </CardContent>
  );

const SmallContentWithLogo = ({
  children,
  logo,
  topRight,
  to
}: {
  children?: any;
  to?: any;
  logo?: any;
  topRight?: any;
}) => (
    <SmallCardContent logo={logo}>
      {logo && (<Link className="logoWrap" to={to}><CardLogo src={logo} /></Link>)}
      {topRight && <TimeLeft>{topRight}</TimeLeft>}
      {children}
    </SmallCardContent>
  );

const CardImage = ({ src, to }: { src?: any; to?: any; }) => (
  <Link to={to}>
    <CardImageCrop src={src} />
  </Link>
)

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
Card.SmallContent = SmallContentWithLogo;

export default Card;
