import React from 'react';

import { 
  Container, 
  Retweeted, 
  RocketseatIcon,
  Body, 
  Avatar, 
  Content, 
  Header, 
  Dot,
  Description, 
  ImageContent, 
  Icons, 
  Status, 
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Rocketseat</strong>
            <span>@rocketseat</span>
            <Dot />
            <time> 15 de fev</time>
          </Header>

          <Description>
            Faaaala DEV, acompanhe o novo Curso de React JS 🚀
          </Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              142
            </Status>

            <Status>
              <RetweetIcon />
              83
            </Status>

            <Status>
              <LikeIcon />
              287
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;