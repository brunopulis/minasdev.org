import React from "react"
import { MinasDevLogo, Svg } from "../"
import {
  Wrapper,
  Content,
  Navigation,
  NavigationItem,
  NavigationLink,
  Socials,
  Social,
  SocialLink,
} from "./ui"

const Header = ({ mainNav }) => {
  return (
    <Wrapper>
      <Content>
        <MinasDevLogo />
        <nav>
          <Navigation>
            {mainNav && (
              <NavigationItem>
                <NavigationLink href={mainNav.url}>
                  {mainNav.label}
                </NavigationLink>
              </NavigationItem>
            )}
            <NavigationItem>
              <NavigationLink href="/slack">Slack</NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink
                href="https://github.com/minasdev/manifesto"
                target="_blank"
                rel="noopener"
              >
                Manifesto
              </NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink
                href="https://github.com/minasdev/codigo-de-conduta"
                target="_blank"
                rel="noopener"
              >
                Código de Conduta
              </NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <Socials>
                <Social>
                  <SocialLink
                    href="https://github.com/minasdev"
                    target="_blank"
                    rel="noopener"
                  >
                    <Svg
                      vector="icon-github"
                      aria-hidden="true"
                      viewBox="0 0 416 448"
                    />
                    GitHub do Minas Dev
                  </SocialLink>
                </Social>

                <Social>
                  <SocialLink
                    href="https://twitter.com/minasdev"
                    target="_blank"
                    rel="noopener"
                  >
                    <Svg
                      vector="icon-twitter"
                      aria-hidden="true"
                      viewBox="0 0 512 512"
                    />
                    Twitter do Minas Dev
                  </SocialLink>
                </Social>

                <Social>
                  <SocialLink
                    href="https://facebook.com/minasdev"
                    target="_blank"
                    rel="noopener"
                  >
                    <Svg
                      vector="icon-facebook"
                      aria-hidden="true"
                      viewBox="0 0 512 512"
                    />
                    Facebook do Minas Dev
                  </SocialLink>
                </Social>
              </Socials>
            </NavigationItem>
          </Navigation>
        </nav>
      </Content>
    </Wrapper>
  )
}

export default Header
