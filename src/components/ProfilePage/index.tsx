import React from 'react';

import Feed from '../Feed';

import { 
  Container, 
  Banner,
  Avatar, 
  ProfileData, 
  LocationIcon, 
  CakeIcon, 
  Followage, 
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined> Editar perfil</EditButton>

        <h1>MaríliaMS DEV</h1>
        <h2>@mariliams_dev</h2>

        <p>
          Front-End WEB Developer <a href="https://mariliamsiqueira.github.io/marilia-m-siqueira/" target="_blank" rel="external">@MMS</a>
        </p>
        <p>
          <a href="https://github.com/MariliaMSiqueira" target="_blank" rel="external">GitHub</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Belo Horizonte, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 15 de fevereiro de 2000
          </li>

        </ul>
        <Followage>
          <span>
            Seguindo <strong>268 </strong>
          </span>
          <span>
            <strong>127 </strong> Seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;