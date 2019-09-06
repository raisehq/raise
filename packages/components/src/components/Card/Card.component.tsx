import * as React from 'react';
import { Icon, Popup } from 'semantic-ui-react';
import {
  HeroCard,
  Grid,
  Row,
  Header,
  HeaderTitle,
  HeaderContent,
  RowTitle,
  RowContent,
  Graph,
  Badge,
  InfoIconCmp,
  InfoIcon,
  Separator,
  GraphContainer,
  GraphTitle
} from './Card.styles';
import useGraphWidth from '../../hooks/useGraphWidth';

interface RowComponentProps {
  title: string;
  content: string | number | null;
  contentColor?: string | null;
}
const Context = React.createContext({});

const BadgeComponent = ({ children, color }) => <Badge color={color}>{children}</Badge>;

const RowComponent: React.SFC<RowComponentProps> = ({ title, content, contentColor }) => (
  <Row>
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

const Card = ({ children }) => {
  const graph = React.useRef(null);
  const [values, setValues] = React.useState({ ref: null });

  React.useEffect(() => setValues({ ref: graph.current }), [graph.current]);

  return (
    <Context.Provider value={values}>
      <HeroCard ref={ref => (graph.current = ref)} className="heroCard">
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

Card.Badge = BadgeComponent;
Card.Row = RowComponent;
Card.Grid = Grid;
Card.Header = HeaderComponent;
Card.Graph = GraphComponent;
Card.Separator = Separator;
Card.Tooltip = TooltipComponent;

export default Card;
