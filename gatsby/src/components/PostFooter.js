import React from 'react'
import styled from 'styled-components'

import SocialMediaLinks from 'components/SocialMediaLinks'
import { screen } from 'styles/screen'
import profile from 'images/profile.jpg'

const Footer = styled.div`
  margin: 75px 0 25px 0;

  img {
    display: block;
    margin: 0;

    ${screen.md} {
      display: inline-block;
      vertical-align: middle;
    }
  }

  img {
    margin: 0 0 25px 0;

    ${screen.md} {
      margin: 0 25px 0 0;
    }
  }
`

const WrapperImg = styled.div`
  width: 100px;
  display: block;

  ${screen.md} {
    margin-right: 25px;
    display: inline-block;
    vertical-align: middle;
  }
`

const WrapperSocialMediaLinks = styled.div`
  display: block;
  margin: 0;

  ${screen.md} {
    width: calc(100% - 125px);
    display: inline-block;
    vertical-align: middle;
  }
`

const PostFooter = () => (
  <Footer>
    <WrapperImg>
      <img src={profile} alt="profile" width={100} height={100} />
    </WrapperImg>
    <WrapperSocialMediaLinks>
      <SocialMediaLinks />
    </WrapperSocialMediaLinks>
  </Footer>
)

export default PostFooter
