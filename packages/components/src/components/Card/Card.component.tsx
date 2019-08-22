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
  Graph
} from './Card.styles';
import useGraphWidth from '../../hooks/useGraphWidth';

const Context = React.createContext({});

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

Card.Row = RowComponent;
Card.Grid = Grid;
Card.Header = HeaderComponent;
Card.Graph = GraphComponent;

export default Card;
