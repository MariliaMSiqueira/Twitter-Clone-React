import styled from 'styled-components';

import avatarImg from './rammstein-logo.jpg';

import Button from '../Button';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div{
    display: flex;
    align-items: center;
  }
`;

export const Avatar = styled.div`
  width: 49px;
  height: 49px;
  background: var(--gray);
  background-image: url(${avatarImg});
  background-size: cover;
  background-position: 100%;
  background-position: center;
  border-radius: 50%;
  margin-top: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;

  >strong{
    font-size: 14px;
  }

  >span{
    font-size: 14px;
    color: var(--gray);
  }
`;


// HERDANDO O OUTLINED
export const FollowButton = styled(Button)`
  padding: 6px 17px;
`;
