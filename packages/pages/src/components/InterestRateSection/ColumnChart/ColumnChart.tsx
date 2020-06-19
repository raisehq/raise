import React, { useEffect, useState } from 'react';
import { sortBy, reverse } from 'lodash';
import Column from './Column';
import { Wrapper, ColumnWrapper, Text, Container } from './styles';

const ColumnChart = ({
  data: {
    player_one_number,
    player_one_name,
    player_two_number,
    player_two_name,
    player_three_number,
    player_three_name,
    player_four_number,
    player_four_name,
    source_information
  }
}) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const playerArray = sortBy(
      [
        { name: player_two_name, number: player_two_number },
        { name: player_one_name, number: player_one_number },
        { name: player_three_name, number: player_three_number },
        { name: player_four_name, number: player_four_number }
      ],
      'number'
    ).reverse();
    console.log(playerArray);
    setPlayers(playerArray);
  }, []);

  return (
    <Wrapper>
      <ColumnWrapper>
        <Column height="438px" background="#00da9e" player={{ ...players[0] }} />
        <Column height="207px" background="#8A8E97" player={{ ...players[1] }} />
        <Column height="144px" background="#B1B3B9" player={{ ...players[2] }} />
        <Column height="107px" background="#D8D9DC" player={{ ...players[3] }} />
      </ColumnWrapper>
      <Container>
        <Text>{source_information}</Text>
      </Container>
    </Wrapper>
  );
};

export default ColumnChart;
