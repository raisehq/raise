import * as React from 'react';
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
  Separator
} from './Card.styles';
import useGraphWidth from '../../hooks/useGraphWidth';

const Context = React.createContext({});

const BadgeComponent = ({ children, color }) => <Badge color={color}>{children}</Badge>;

const RowComponent = ({ title, content }) => (
  <Row>
    <RowContent>{content}</RowContent>
    <RowTitle>{title}</RowTitle>
  </Row>
);

const HeaderComponent = ({ title, amount }) => (
  <Header>
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

const GraphComponent = ({ currentAmount, totalAmount }) => {
  const { ref }: any = React.useContext(Context);
  const config = useGraphWidth(ref, currentAmount, totalAmount);

  return <Graph width={config.width} />;
};

Card.Badge = BadgeComponent;
Card.Row = RowComponent;
Card.Grid = Grid;
Card.Header = HeaderComponent;
Card.Graph = GraphComponent;
Card.Separator = Separator;

export default Card;
